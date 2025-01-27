<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex justify-end align-center my-2">
            <v-col cols="4" class="d-flex justify-end">
                <cs_SelectContas v-model="var_SelectedConta" Prm_etiqueta="Conta" :modRelacao="1" :Prm_isObrigatorio="false" />
            </v-col>
            <v-col cols="auto" class="d-flex justify-end">
                <cs_BtnAdicionar @click="CreateOrUpdateAvalistas" />
            </v-col>
        </v-row>

        <v-card class="border mb-10" elevation="0">
            <v-row class="pa-0">
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Avalistas</p>
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
                <template v-slot:item.actions="{ item }">
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-card>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir este avalista?</v-card-text>
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
import { CreateMembroConvAvalista, DeleteMembroConvAvalista } from '../../../services/contas/bb01207_MembroConvenio/bb1207_membroconvenio';
// Import de types
import type { ContaById, NavAvalistaList } from '../../../types/crm/contas/bb012_contabyid';
import type { AvalistaCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb01207_avalistas';
//Import de componentes
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_SelectContas from '../../../submodules/cs_components/src/components/selects/cs_SelectContas.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    Avalista: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Conta Convênio',
        value: 'Avalista',
        sortable: true,
        width: '80%',
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

const loading = ref(false);
const search = ref<string>('');
const confirmDialog = ref<boolean>(false);
const itemToDelete = ref<Item | null>(null);

//Variáveis de edição/adição
const var_Id = ref<string>('');
const var_bb012_Id = ref<string>('');
const var_SelectedConta = ref<string>('');
const var_TipRegistro = ref<number>(3);

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
        items.value = res.Data.NavMembrosCompleto.NavAvalistaList.map((item: NavAvalistaList) => ({
            ID: item.Id,
            BB012_ID: item.Bb012Id,
            Avalista: item.Bb012Membroid
        }));

        var_bb012_Id.value = res.Data.Id;
    } catch (error) {
        showSnackbar('Erro ao buscar avalista.', 'error');
    } finally {
        loading.value = false;
    }
};

const CreateOrUpdateAvalistas = async () => {
    if (var_SelectedConta.value != '') {
        try {
            const data: AvalistaCreate = {
                Bb012TipoRegMembroconveni: var_TipRegistro.value,
                Bb012Id: var_bb012_Id.value,
                Bb012Membroid: var_SelectedConta.value
            };

            const response = await CreateMembroConvAvalista(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Avalista salva com sucesso', 'success');
                fetchData(props.id);
                var_SelectedConta.value = '';
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar o avalista. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o avalista', 'error');
        }
    } else {
        showSnackbar('Selecione uma conta antes de adicionar/atualizar.', 'error');
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
        await DeleteMembroConvAvalista(tenant, itemToDelete.value.ID);
        showSnackbar('Avalista excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o avalista', 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
