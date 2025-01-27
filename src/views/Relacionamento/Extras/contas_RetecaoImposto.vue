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
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Retenções de Imposto</p>
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
                <template v-slot:item.Retem="{ item }">
                    <div v-if="(item.Retem = 1)">
                        <p>Sim</p>
                    </div>
                    <div v-else>
                        <p>Não</p>
                    </div>
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
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Retenção de Imposto</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <cs_SelectTpImposto
                        class="mb-6"
                        v-model="var_Imposto"
                        Prm_etiqueta="Imposto"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />

                    <Cs_selectEstaticas
                        :Tipo="1"
                        v-model="var_Retem"
                        Prm_etiqueta="Retém"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />

                    <cs_InputPercentual
                        v-model="var_Percentual"
                        Prm_etiqueta="Percentual (%)"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateImposto" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta retenção de imposto?</v-card-text>
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
import { CreateRetencao, DeleteRetencao } from '../../../services/contas/bb012o_RetencaoImposto/bb012o_retencaoimposto';
// Import de types
import type { ContaById, NavRetencaoImpostosList } from '../../../types/crm/contas/bb012_contabyid';
import type { RetencaoImpostoCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012o_retencao';
//Import de componentes
import cs_InputPercentual from '../../../submodules/cs_components/src/components/campos/cs_InputPercentual.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import Cs_selectEstaticas from '../../../submodules/cs_components/src/components/selects/cs_SelectEstaticas.vue';
import cs_SelectTpImposto from '../../../submodules/cs_components/src/components/selects/cs_SelectTpImposto.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    Imposto: string;
    Retem: number;
    Percentual: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Imposto',
        value: 'Imposto',
        sortable: true,
        width: '50%',
        align: 'start'
    },
    {
        title: 'Retém',
        value: 'Retem',
        sortable: false,
        width: '20%',
        align: 'center'
    },
    {
        title: 'Percentual',
        value: 'Percentual',
        sortable: false,
        width: '20%',
        align: 'center'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '10%'
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
const var_Imposto = ref<number>(0);
const var_Retem = ref<number>(0);
const var_Percentual = ref<number>(0);

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
        items.value = res.Data.NavRetencaoImpostosList.map((item: NavRetencaoImpostosList) => ({
            ID: item.Id,
            BB012_ID: item.Bb012Id,
            //CAMPO ERRADO, NECESSARIO ADICIONAR A AA037 NA LISTA DE RETENCAO DE IMPOSTOS
            Imposto: item.Bb012oCodigo.toString(),
            Retem: item.Bb012oRetem,
            Percentual: `${item.Bb012oPercentual.toFixed(2)}%`
        }));

        var_bb012_Id.value = res.Data.Id;
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
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
    var_Imposto.value = 0;
    var_Retem.value = 0;
    var_Percentual.value = 0;
};

const openEditDialog = async (item: Item, index: number) => {
    dialog.value = true;
    itemToEdit.value = item;
    try {
        const res: ContaById = await GetContaById(tenant, props.id);
        const data = res.Data;

        var_Id.value = data.NavRetencaoImpostosList[index].Id;
        var_bb012_Id.value = data.NavRetencaoImpostosList[index].Bb012Id;
        var_Imposto.value = data.NavRetencaoImpostosList[index].Bb012oImpostoId;
        var_Retem.value = data.NavRetencaoImpostosList[index].Bb012oRetem;
        var_Percentual.value = data.NavRetencaoImpostosList[index].Bb012oPercentual;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da retenção de imposto', 'error');
    }
};

const CreateOrUpdateImposto = async () => {
    if (formRef.value.validate()) {
        try {
            const data: RetencaoImpostoCreate = {
                Bb012Id: var_bb012_Id.value,
                Bb012oCodigo: 0,
                Bb012oRetem: var_Retem.value,
                Bb012oPercentual: var_Percentual.value,
                Bb012oImpostoId: var_Imposto.value
            };

            const response = await CreateRetencao(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Retenção de imposto salva com sucesso', 'success');
                fetchData(props.id);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar a retenção de imposto. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar a retenção de imposto', 'error');
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
        await DeleteRetencao(tenant, itemToDelete.value.ID);
        showSnackbar('Retenção de imposto excluída com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a retenção de imposto', 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
