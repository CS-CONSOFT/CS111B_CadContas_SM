<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex my-2">
            <v-col cols="12" class="d-flex justify-end">
                <cs_BtnAdicionar @click="openDialog" />
            </v-col>
        </v-row>

        <v-card class="border mb-10" elevation="0">
            <v-row class="pa-0">
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Bens</p>
                </v-col>
            </v-row>

            <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                hide-default-footer
                loading-text="Carregando dados..."
                :search="search"
            >
                <template v-slot:no-data>
                    <p>Nenhum dado encontrado.</p>
                </template>
                <template v-slot:progress>
                    <v-progress-linear v-if="loading" color="blue" height="10" indeterminate></v-progress-linear>
                </template>
                <template v-slot:item.actions="{ item, index }">
                    <v-icon small @click="openEditDialog(item, index)" class="v-btn-icon">mdi-pencil</v-icon>
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-card>

    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Bens</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <cs_InputTexto
                        v-model="var_Descricao"
                        Prm_etiqueta="Descrição"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />

                    <cs_InputTexto
                        v-model="var_Proprietario"
                        Prm_etiqueta="Proprietário"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />

                    <cs_InputValor v-model="var_ValorMedio" Prm_etiqueta="Valor Médio" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <cs_InputTexto v-model="var_Telefone" Prm_etiqueta="Telefone" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateBens" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir este bem?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteImpostoConfirmed" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" top v-bind:color="snackbarColor" multi-line>
        {{ snackbarMessage }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="snackbar = false"></v-btn>
        </template>
    </v-snackbar>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
// Import de API's
import { GetContaById } from '../../../services/contas/bb012_Contas/bb012_conta';
import { CreateBens, DeleteBens } from '../../../services/contas/bb012c_Bens/bb012c_bens';
// Import de types
import type { ContaById, NavBensList } from '../../../types/crm/contas/bb012_contabyid';
import type { BensCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012c_bens';
//Import de componentes
import cs_InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_InputValor from '../../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    Descricao: string;
    Proprietario: string;
    Valor: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Descrição',
        value: 'Descricao',
        sortable: true,
        width: '50%',
        align: 'start'
    },
    {
        title: 'Proprietário',
        value: 'Proprietario',
        sortable: true,
        width: '20%',
        align: 'start'
    },
    {
        title: 'Valor Média',
        value: 'Valor',
        sortable: true,
        width: '20%',
        align: 'start'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '20%'
    }
]);

const props = defineProps<{
    id: string;
}>();

const items = ref<Item[]>([]);
const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);

const loading = ref(false);
const search = ref<string>('');
const dialog = ref<boolean>(false);
const confirmDialog = ref<boolean>(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);

//Variáveis de edição/adição
const var_Id = ref('');
const var_bb012_Id = ref('');
const var_Descricao = ref<string>('');
const var_Proprietario = ref<string>('');
const var_ValorMedio = ref<number>(0);
const var_Telefone = ref<string>('');

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

//Funções
const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchData = async (id: string) => {
    loading.value = true;
    try {
        const res: ContaById = await GetContaById(tenant, id);
        items.value = res.Data.NavBensList.map((item: NavBensList) => ({
            ID: item.Id,
            BB012_ID: item.Bb012Id,
            Descricao: item.Bb012cDescempresa,
            Proprietario: item.Bb012cProprietramo,
            Valor: `R$ ${item.Bb012cValorMedia.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        }));

        var_bb012_Id.value = res.Data.Id;
    } catch (error) {
        showSnackbar('Erro ao buscar bem.', 'error');
    } finally {
        loading.value = false;
    }
};

const closeDialog = () => {
    dialog.value = false;
};

const openDialog = () => {
    dialog.value = true;
    itemToEdit.value = null;
    var_Id.value = '';
    var_Descricao.value = '';
    var_Proprietario.value = '';
    var_ValorMedio.value = 0;
    var_Telefone.value = '';
};

const openEditDialog = async (item: Item, index: number) => {
    dialog.value = true;
    itemToEdit.value = item;
    try {
        const res: ContaById = await GetContaById(tenant, props.id);

        var_Id.value = res.Data.NavBensList[index].Id;
        var_bb012_Id.value = res.Data.NavBensList[index].Bb012Id;
        var_Descricao.value = res.Data.NavBensList[index].Bb012cDescempresa;
        var_Proprietario.value = res.Data.NavBensList[index].Bb012cProprietramo;
        var_ValorMedio.value = res.Data.NavBensList[index].Bb012cValorMedia;
        var_Telefone.value = res.Data.NavBensList[index].Bb012cFone;
    } catch (error) {
        showSnackbar('Erro ao buscar dados do bem', 'error');
    }
};

const CreateOrUpdateBens = async () => {
    if (formRef.value.validate()) {
        try {
            const data: BensCreate = {
                Bb012Id: var_bb012_Id.value,
                Bb012cDescempresa: var_Descricao.value,
                Bb012cProprietramo: var_Proprietario.value,
                Bb012cValorMedia: var_ValorMedio.value,
                Bb012cFone: var_Telefone.value
            };

            const response = await CreateBens(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Bem salvo com sucesso', 'success');
                fetchData(props.id);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar o bem.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o bem', 'error');
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
};

const confirmDelete = (item: Item) => {
    confirmDialog.value = true;
    itemToDelete.value = item;
};

const cancelDelete = () => {
    confirmDialog.value = false;
};

const deleteImpostoConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteBens(tenant, itemToDelete.value.ID);
        showSnackbar('Bem excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o bem', 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
