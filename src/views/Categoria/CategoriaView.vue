<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Categoria</p>
                <v-divider></v-divider>
            </v-row>

            <div class="px-4 mb-5">
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

                    <v-col cols="auto" class="d-flex align-center justify-end">
                        <v-btn icon @click="toggleView">
                            <v-icon>{{ isListView ? 'mdi-view-grid' : 'mdi-view-list' }}</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </div>

            <v-card class="border-sm mt-1" elevation="0" v-if="isListView">
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
                            <v-col cols="12" class="d-flex justify-center">
                                <Pagination
                                    v-model:currentPage="currentPage"
                                    :totalItems="totalItems"
                                    v-model:itemsPerPage="itemsPerPage"
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
                    <template v-slot:item.Ativo="{ item }">
                        <v-chip :color="item.Ativo ? 'success' : 'error'" class="font-weight-bold" rounded="lg" size="small">{{
                            item.Ativo ? 'Ativo' : 'Inativo'
                        }}</v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip bottom>
                            <template v-slot:activator="{ props }">
                                <v-icon small v-bind="props" @click="openEditDialog(item)" class="v-btn-icon">mdi-pencil</v-icon>
                            </template>
                            <span>Editar</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ props }">
                                <v-icon small v-bind="props" @click="confirmDelete(item)" class="v-btn-icon"> mdi-delete </v-icon>
                            </template>
                            <span>Excluir</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card>

            <v-container fluid v-else class="pa-0">
                <v-row>
                    <v-col cols="12">
                        <v-row class="d-flex">
                            <v-col cols="12" md="4" v-for="item in items" :key="item.ID" class="mb-1">
                                <v-card class="border-sm border-opacity-50 pa-0 mt-1" flat elevation="2">
                                    <v-card-title class="font-weight-bold bg-lightprimary rounded-t-sm">{{ item.Categoria }}</v-card-title>
                                    <v-card-subtitle class="mt-5 text-h6">{{ item.Codigo }}</v-card-subtitle>
                                    <v-card-text class="pl-4">
                                        <v-chip
                                            :color="item.Ativo ? 'success' : 'error'"
                                            class="font-weight-bold"
                                            rounded="lg"
                                            size="small"
                                            >{{ item.Ativo ? 'Ativo' : 'Inativo' }}</v-chip
                                        >
                                    </v-card-text>
                                    <v-card-actions class="pl-4">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ props }">
                                                <v-icon small v-bind="props" @click="openEditDialog(item)" class="v-btn-icon"
                                                    >mdi-pencil</v-icon
                                                >
                                            </template>
                                            <span>Editar</span>
                                        </v-tooltip>

                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ props }">
                                                <v-icon small v-bind="props" @click="confirmDelete(item)" class="v-btn-icon">
                                                    mdi-delete
                                                </v-icon>
                                            </template>
                                            <span>Excluir</span>
                                        </v-tooltip>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-block-inline align-center">
                    <v-col cols="12" class="d-flex justify-center">
                        <Pagination v-model:currentPage="currentPage" :totalItems="totalItems" v-model:itemsPerPage="itemsPerPage" />
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-container>

    <v-dialog v-model="dialog" max-width="400">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Categoria</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="12">
                            <cs_InputTexto
                                v-model="var_BB029_Codigo"
                                Prm_etiqueta="Código"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />

                            <cs_InputTexto
                                v-model="var_BB029_Categoria"
                                Prm_etiqueta="Categoria"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateCategoria" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta categoria?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteCategoriaConfirmed" />
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
import {
    GetCategoriaCompleto,
    GetCategoriaById,
    CreateCategoria,
    UpdateCategoria,
    DeleteCategoria
} from '../../services/contas/bb029_Categoria/bb029_categoria';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { CategoriaCompleta, CategoriaById, CategoriaCreate, List } from '../../types/crm/categoria/bb029_categoria';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';

interface Item {
    ID: string;
    Codigo: number;
    Categoria: string;
    Ativo: boolean;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Código',
        value: 'Codigo',
        sortable: true,
        width: '20%',
        align: 'start'
    },
    {
        title: 'Categoria',
        value: 'Categoria',
        width: '60%',
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

//Variáveis de edição para csicp_bb011
const var_ID = ref<string>('');
const var_BB029_Codigo = ref<number>(0);
const var_BB029_Categoria = ref<string>('');
const var_BB029_Is_Active = ref<boolean>(false);

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);

//variaveis da paginação
const currentPage = ref(1);
const itemsPerPage = ref(15);
const totalItems = ref(0);
const totalPages = ref(0);

//Variavel para controlar o modo de exibição da tela
const isListView = ref(true);

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

const toggleView = () => {
    isListView.value = !isListView.value;
};

const fetchData = async () => {
    loading.value = true;
    try {
        const response: AxiosResponse<CategoriaCompleta> = await GetCategoriaCompleto(
            tenant,
            active.value,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const res = response.data;
        const data = res.Data;
        items.value = data.List.map((item: List) => ({
            ID: item.Id,
            Codigo: item.Bb029Codgcategoria,
            Categoria: item.Bb029Categoria,
            Ativo: item.Bb029IsActive
        }));

        totalItems.value = data.TotalCount;
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

    // Zerar variáveis para csicp_bb029
    var_ID.value = '';
    var_BB029_Codigo.value = 0;
    var_BB029_Categoria.value = '';
    var_BB029_Is_Active.value = true;
};

const openEditDialog = async (item: Item) => {
    dialog.value = true;
    itemToEdit.value = item;

    try {
        const res: CategoriaById = await GetCategoriaById(tenant, item.ID);
        const data = res.Data;
        // Atribuindo os valores da resposta aos campos da BB029
        var_ID.value = data.Id;
        var_BB029_Codigo.value = data.Bb029Codgcategoria;
        var_BB029_Categoria.value = data.Bb029Categoria;
        var_BB029_Is_Active.value = data.Bb029IsActive;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da categoria', 'error');
    }
};

async function CreateOrUpdateCategoria() {
    if (formRef.value.validate()) {
        try {
            const data: CategoriaCreate = {
                Bb029Codgcategoria: var_BB029_Codigo.value,
                Bb029Categoria: var_BB029_Categoria.value
            };

            if (itemToEdit.value === null) {
                // Create
                const response = await CreateCategoria(tenant, data);

                if (response.data.Out_IsSuccess) {
                    showSnackbar('Categoria salva com sucesso', 'success');
                    fetchData();
                    dialog.value = false;
                } else {
                    showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar categoria. Verifique os dados.', 'error');
                }
            } else {
                // Update
                const response = await UpdateCategoria(tenant, var_ID.value, data);

                if (response.statusText === 'OK') {
                    showSnackbar('Categoria atualizada com sucesso', 'success');
                } else {
                    showSnackbar(response.data.Out_Message || 'Falha ao atualizar a categoria. Verifique os dados.', 'error');
                }
            }
        } catch (error) {
            showSnackbar('Erro ao atualizar a categoria. Verifique sua conexão ou tente novamente.', 'error');
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

const deleteCategoriaConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteCategoria(tenant, itemToDelete.value.ID);
        showSnackbar('Categoria excluída com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a categoria', 'error');
    }
};

const updateItemsPerPage = (itemsPerPageValue: number) => {
    if (itemsPerPage.value !== itemsPerPageValue) {
        itemsPerPage.value = itemsPerPageValue;
        currentPage.value = 1;
        fetchData();
    }
};

watch([currentPage, itemsPerPage, search], fetchData);

onMounted(() => {
    fetchData();
});
</script>
