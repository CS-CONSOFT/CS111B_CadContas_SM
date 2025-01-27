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
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Referências bancárias</p>
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

    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Referências bancárias</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="6" class="pa-0">
                            <InputTexto
                                v-model="var_Agencia"
                                Prm_etiqueta="Agência"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                        <v-col cols="6" class="pa-0 pl-4">
                            <InputTexto
                                v-model="var_Conta"
                                Prm_etiqueta="Conta"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                    </div>

                    <cs_InputValor
                        v-model="var_ValorFinanciamento"
                        Prm_etiqueta="Valor Financiamento"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />

                    <InputTexto v-model="var_NomeGerente" Prm_etiqueta="Nome Gerente" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <div class="d-flex">
                        <v-col cols="6" class="pa-0">
                            <InputTexto v-model="var_Telefone" Prm_etiqueta="Telefone" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col cols="6" class="pa-0 pl-4">
                            <InputTexto v-model="var_Celular" Prm_etiqueta="Celular" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                        </v-col>
                    </div>
                    <div class="d-flex">
                        <v-col cols="6" class="pa-0">
                            <InputTexto v-model="var_Email" Prm_etiqueta="Email" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col cols="6" class="pa-0 pl-4">
                            <InputTexto v-model="var_HomePage" Prm_etiqueta="Home Page" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateDadosBancarios" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta referência bancária?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteDadosBancariosConfirmed" />
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
import { CreateDadosBancarios, DeleteDadosBancarios } from '../../../services/contas/bb012q_ReferenciaBancarias/bb012q_dadosbancarios';
// Import de types
import type { ContaById, NavDadosBancariosList } from '../../../types/crm/contas/bb012_contabyid';
import type { ReferenciasBancariasCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012q_referenciasbancarias';
//Import de componentes
import InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_InputValor from '../../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    Agencia: string;
    Conta: string;
    Valor: string;
    Telefone: string;
    Email: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Agência',
        value: 'Agencia',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Conta',
        value: 'Conta',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Valor',
        value: 'Valor',
        sortable: true,
        width: '30%',
        align: 'start'
    },
    {
        title: 'Telefone',
        value: 'Telefone',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Email',
        value: 'Email',
        sortable: true,
        width: '15%',
        align: 'start'
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
const var_Agencia = ref<string>('');
const var_Conta = ref<string>('');
const var_ValorFinanciamento = ref<number>(0);
const var_NomeGerente = ref<string>('');
const var_Telefone = ref<string>('');
const var_Celular = ref<string>('');
const var_HomePage = ref<string>('');
const var_Email = ref<string>('');

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
        items.value = res.Data.NavDadosBancariosList.map((item: NavDadosBancariosList) => ({
            ID: item.Id,
            BB012_ID: item.Bb012Id,
            Agencia: item.Bb012Agencia,
            Conta: item.Bb012Conta,
            Valor: `R$ ${item.Bb012Valorfinanciamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            Telefone: item.Bb012Telefone,
            Email: item.Bb012Email
        }));

        var_bb012_Id.value = res.Data.Id;
    } catch (error) {
        showSnackbar('Erro ao buscar referências bancárias.', 'error');
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
    var_Agencia.value = '';
    var_Conta.value = '';
    var_ValorFinanciamento.value = 0;
    var_NomeGerente.value = '';
    var_Telefone.value = '';
    var_Celular.value = '';
    var_HomePage.value = '';
    var_Email.value = '';
};

const openEditDialog = async (item: Item, index: number) => {
    dialog.value = true;
    itemToEdit.value = item;
    try {
        const res: ContaById = await GetContaById(tenant, props.id);
        const data = res.Data;

        var_Id.value = data.NavDadosBancariosList[index].Id;
        var_bb012_Id.value = data.NavDadosBancariosList[index].Bb012Id;
        var_Agencia.value = data.NavDadosBancariosList[index].Bb012Agencia;
        var_Conta.value = data.NavDadosBancariosList[index].Bb012Conta;
        var_ValorFinanciamento.value = data.NavDadosBancariosList[index].Bb012Valorfinanciamento;
        var_NomeGerente.value = data.NavDadosBancariosList[index].Bb012Nomegerente;
        var_Telefone.value = data.NavDadosBancariosList[index].Bb012Telefone;
        var_Celular.value = data.NavDadosBancariosList[index].Bb012Faxcelular;
        var_HomePage.value = data.NavDadosBancariosList[index].Bb012Homepage;
        var_Email.value = data.NavDadosBancariosList[index].Bb012Email;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da referência bancária', 'error');
    }
};

const CreateOrUpdateDadosBancarios = async () => {
    if (formRef.value.validate()) {
        try {
            const data: ReferenciasBancariasCreate = {
                Bb012Id: var_bb012_Id.value,
                Bb012Agencia: var_Agencia.value,
                Bb012Conta: var_Conta.value,
                Bb012Valorfinanciamento: var_ValorFinanciamento.value,
                Bb012Nomegerente: var_NomeGerente.value,
                Bb012Telefone: var_Telefone.value,
                Bb012Faxcelular: var_Celular.value,
                Bb012Homepage: var_HomePage.value,
                Bb012Email: var_Email.value
            };

            const response = await CreateDadosBancarios(tenant, data);
            if (response.data.Out_IsSuccess) {
                showSnackbar('Referência bancária salva com sucesso', 'success');
                fetchData(props.id);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar a referência bancária. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar a referência bancária', 'error');
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

const deleteDadosBancariosConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteDadosBancarios(tenant, itemToDelete.value.ID);
        showSnackbar('Referência bancária excluída com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a referência bancária', 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
