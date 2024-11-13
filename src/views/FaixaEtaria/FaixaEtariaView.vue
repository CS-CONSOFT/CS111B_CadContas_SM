<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Lista de Faixa Etária</p>
                <v-divider></v-divider>
            </v-row>
        </div>

        <div>
            <v-row class="align-center">
                <v-col cols="3">
                    <v-text-field
                        v-model="search"
                        append-inner-icon="mdi-magnify"
                        label="Pesquisar"
                        variant="solo-filled"
                        single-line
                        hide-details
                        clearable
                    />
                </v-col>
                <v-spacer></v-spacer>

                <v-col cols="auto" class="d-flex align-center">
                    <cs_BtnAdicionar @click="openDialog" />
                </v-col>
            </v-row>
        </div>

        <v-card class="border-sm mt-1" elevation="0">
            <v-data-table
                :headers="headers"
                :items="items"
                :items-per-page="itemsPerPage"
                :loading="loading"
                @update:items-per-page="updateItemsPerPage"
                hide-default-footer
                loading-text="Carregando dados..."
                class="month-table"
                :search="search"
            >
                <template v-slot:bottom>
                    <v-row class="d-flex align-center">
                        <v-col cols="2">
                            <v-select
                                v-model="itemsPerPage"
                                class="pa-2 mr-4"
                                label="Itens por página"
                                :items="[5, 10, 15, 25, 50]"
                                hide-details
                            ></v-select>
                        </v-col>
                        <v-col cols="8" class="d-flex justify-center">
                            <Pagination
                                :currentPage="currentPage"
                                :totalPages="totalPages"
                                :itemsPerPage="itemsPerPage"
                                :totalItems="totalItems"
                                @update:currentPage="updatePage"
                            />
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:no-data>
                    <p>Nenhum dado encontrado.</p>
                </template>
                <template v-slot:progress>
                    <v-progress-linear v-if="loading" color="blue" height="10" indeterminate></v-progress-linear>
                </template>
                <template v-slot:item.Status="{ item }">
                    <v-chip :color="item.Status ? 'success' : 'error'" class="font-weight-bold" rounded="lg" size="small">{{
                        item.Status ? 'Ativo' : 'Inativo'
                    }}</v-chip>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small @click="openEditDialog(item)" class="v-btn-icon">mdi-pencil</v-icon>
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-container>

    <v-dialog v-model="dialog" max-width="400">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Faixa Etária</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="12">
                            <cs_InputTexto
                                v-model="var_bb064_Descricao"
                                Prm_etiqueta="Descrição"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                :rules="rules.nome"
                            />
                            <v-checkbox v-model="var_bb064_IsActive" label="Ativo?"></v-checkbox>
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateFaixaEtaria" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta faixa etária?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteFaixaEtariaConfirmed" />
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
import { ref, onMounted, watch } from 'vue';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetFaixaEtariaList, GetFaixaEtariaById, SaveFaixaEtaria, DeleteFaixaEtaria } from '../../services/faixa_etaria/bb064_faixaEtaria';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { FaixaEtariaCompleto, ApiResponse, Csicp_bb064, TabelaFaixaEtaria } from '../../types/faixa_etaria/bb064_faixaEtaria';
import type { FaixaEtariaById } from '../../types/faixa_etaria/bb064_GetFaixaEtariaById';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';

interface Item {
    ID: string;
    Descricao: string;
    Status: boolean;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Descrição',
        value: 'Descricao',
        sortable: true,
        width: '60%',
        align: 'start'
    },
    {
        title: 'Status',
        value: 'Status',
        width: '20%',
        align: 'center'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '20%'
    }
]);

//Declaração de variaveis
const items = ref<Item[]>([]);
const loading = ref(false);
const dialog = ref(false);
const confirmDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);
const active = ref(true);
const count = false;
const search = ref('');

//Variáveis de edição para csicp_bb067
const var_ID = ref<number>(0);
const var_bb064_Descricao = ref<string>('');
const var_bb064_IsActive = ref<boolean>(false);

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);

//variaveis da paginação
const currentPage = ref(1);
const itemsPerPage = ref(10);
const totalItems = ref(0);
const totalPages = ref(0);

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

const fetchData = async () => {
    loading.value = true;
    try {
        const response: AxiosResponse<ApiResponse<FaixaEtariaCompleto>> = await GetFaixaEtariaList(
            tenant,
            active.value,
            count,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const data = response.data;
        items.value = data.TabelaFaixaEtaria.map((item: TabelaFaixaEtaria) => ({
            ID: item.csicp_bb064.bb064_FxEtariaId,
            Descricao: item.csicp_bb064.bb064_Descricao,
            Status: item.csicp_bb064.bb064_IsActive
        }));

        totalItems.value = data.PageSize.cs_list_total_itens;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        showSnackbar('Erro ao buscar dados.', 'error');
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

    // Zerar variáveis para csicp_bb067
    var_ID.value = 0;
    var_bb064_Descricao.value = '';
    var_bb064_IsActive.value = false;
};

const openEditDialog = async (item: Item) => {
    dialog.value = true;
    itemToEdit.value = item;

    try {
        const data: FaixaEtariaById = await GetFaixaEtariaById(tenant, item.ID);
        // Atribuindo os valores da resposta aos campos da BB067
        var_ID.value = data.bb064_FxEtariaId;
        var_bb064_Descricao.value = data.bb064_Descricao;
        var_bb064_IsActive.value = data.bb064_IsActive;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da faixa etária', 'error');
    }
};

async function CreateOrUpdateFaixaEtaria() {
    if (formRef.value.validate()) {
        try {
            const data: Csicp_bb064 = {
                bb064_FxEtariaId: var_ID.value ? var_ID.value : 0,
                bb064_Descricao: var_bb064_Descricao.value,
                bb064_IsActive: var_bb064_IsActive.value
            };

            const response = await SaveFaixaEtaria(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Faixa etária master salva com sucesso', 'success');
                fetchData();
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar faixa etária. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro ao atualizar a faixa etária. Verifique sua conexão ou tente novamente.', 'error');
        }
    }
}

const confirmDelete = (item: Item) => {
    confirmDialog.value = true;
    itemToDelete.value = item;
};

const cancelDelete = () => {
    confirmDialog.value = false;
};

const deleteFaixaEtariaConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteFaixaEtaria(tenant, itemToDelete.value.ID);
        showSnackbar('Faixa etária excluída com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a faixa etária', 'error');
    }
};

const updatePage = (page: number) => {
    currentPage.value = page;
    fetchData();
};

const updateItemsPerPage = (itemsPerPageValue: number) => {
    itemsPerPage.value = itemsPerPageValue;
    currentPage.value = 1;
    fetchData();
};

watch([itemsPerPage, search], fetchData);

onMounted(() => {
    fetchData();
});
</script>
