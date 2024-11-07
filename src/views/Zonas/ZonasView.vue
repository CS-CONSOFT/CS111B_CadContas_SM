<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Zonas</p>
                <v-divider></v-divider>
            </v-row>

            <div class="px-4 mb-5">
                <v-row class="align-center">
                    <v-col cols="3">
                        <cs_InputTexto
                            v-model="search"
                            append-inner-icon="mdi-magnify"
                            Prm_etiqueta="Pesquisar"
                            :Prm_limpavel="false"
                            :Prm_isObrigatorio="false"
                        />
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col cols="auto" class="d-flex align-center">
                        <v-btn v-if="active" prepend-icon="mdi-cancel" flat class="mr-2 bg-error" @click="fetchInactive">Inativos</v-btn>
                        <v-btn v-else prepend-icon="mdi-delete-empty" flat class="bg-secondary mr-2" @click="fetchActive">Ativos</v-btn>
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
                    <template v-slot:item.Ativo="{ item }">
                        <v-chip :color="item.Ativo ? 'success' : 'error'" class="font-weight-bold" rounded="lg" size="small">{{
                            item.Ativo ? 'Ativo' : 'Inativo'
                        }}</v-chip>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <v-icon small @click="openEditDialog(item)" class="v-btn-icon">mdi-pencil</v-icon>
                        <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                        <v-icon small @click="confirmSoftDelete(item)" class="v-btn-icon">{{ active ? 'mdi-cancel' : 'mdi-check' }}</v-icon>
                    </template>
                </v-data-table>
            </v-card>

            <v-container fluid v-else class="pa-0">
                <v-row>
                    <v-col cols="12">
                        <v-row class="d-flex">
                            <v-col cols="12" md="4" v-for="item in items" :key="item.ID" class="mb-1">
                                <v-card class="border-sm border-opacity-50 pa-0 mt-1" flat elevation="2">
                                    <v-card-title class="font-weight-bold bg-lightprimary rounded-t-sm">{{ item.Zona }}</v-card-title>
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
                                        <v-icon small @click="openEditDialog(item)" class="v-btn-icon">mdi-pencil</v-icon>
                                        <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                                        <v-icon small @click="confirmSoftDelete(item)" class="v-btn-icon">{{
                                            active ? 'mdi-cancel' : 'mdi-check'
                                        }}</v-icon>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="d-block-inline align-center">
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
            </v-container>
        </div>
    </v-container>

    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Zona</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="6">
                            <cs_InputTexto
                                v-model="var_BB010_Codigo"
                                Prm_etiqueta="Código"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />

                            <cs_InputTexto
                                v-model="var_BB010_Zona"
                                Prm_etiqueta="Zona"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />

                            <cs_SelectResponsaveis
                                class="mb-6"
                                v-model="var_BB010_VendedorID"
                                Prm_etiqueta="Vendedor"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_SelectBancos
                                class="mb-6"
                                v-model="var_BB010_Banco01_ID"
                                Prm_etiqueta="Banco 01"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_SelectBancos
                                class="mb-6"
                                v-model="var_BB010_Banco02_ID"
                                Prm_etiqueta="Banco 02"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_SelectBancos
                                class="mb-6"
                                v-model="var_BB010_Banco03_ID"
                                Prm_etiqueta="Banco 03"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_SelectCentroDeCusto
                                v-model="var_BB010_CCusto_ID"
                                Prm_etiqueta="Centro de Custo"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>

                        <v-col cols="6">
                            <cs_InputTexto v-model="var_BB010_Km" Prm_etiqueta="Km" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <cs_InputCelular
                                v-model="var_BB010_Fone_Contato"
                                Prm_etiqueta="Fone Contato"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_BB010_Promotor"
                                Prm_etiqueta="Promotor"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_BB010_Observacao"
                                Prm_etiqueta="Observação"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_BB010_Periodo_Rota"
                                Prm_etiqueta="Período Rota"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_BB010_Periodo_Visita"
                                Prm_etiqueta="Período Visita"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateZona" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta zona?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteZonaConfirmed" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmSoftDeleteDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error"> Confirmar {{ active ? 'Inativação' : 'Ativação' }} </v-card-title>
            <v-card-text> Tem certeza de que deseja {{ active ? 'inativar' : 'ativar' }} esta zona? </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="cancelSoftDelete" />
                <cs_BtnIsActive :IsActive="active" @click="softDeleteZonaConfirmed" />
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
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetZonaCompleto, GetZonaById, SaveZona, DeleteZona, SoftDeleteZona } from '../../services/contas/bb010_Zona/bb010_zona';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { ZonaCompleto, Csicp_bb0102, Lista_bb010_Completo, ApiResponse } from '../../types/crm/zona/bb010_zona';
import type { ZonaById } from '../../types/crm/zona/bb010_GetZonaById';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnIsActive from '../../submodules/cs_components/src/components/botoes/cs_BtnIsActive.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_SelectCentroDeCusto from '../../submodules/cs_components/src/components/selects/cs_SelectCentroDeCusto.vue';
import cs_SelectResponsaveis from '../../submodules/cs_components/src/components/selects/cs_SelectResponsaveis.vue';
import cs_SelectBancos from '../../submodules/cs_components/src/components/selects/cs_SelectBancos.vue';
import cs_InputCelular from '../../submodules/cs_components/src/components/campos/cs_InputCelular.vue';

interface Item {
    ID: string;
    Codigo: string;
    Zona: string;
    Ativo: boolean;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Código',
        value: 'Codigo',
        sortable: true,
        width: '10%',
        align: 'start'
    },
    {
        title: 'Zona',
        value: 'Zona',
        width: '50%',
        align: 'start'
    },
    {
        title: 'Ativo',
        value: 'Ativo',
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
const confirmSoftDeleteDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);
const itemToSoftDelete = ref<Item | null>(null);
const active = ref(true);
const count = false;
const search = ref('');

//Variáveis de edição para csicp_bb010
const var_ID = ref<string>('');
const var_BB010_Codigo = ref<number>(0);
const var_BB010_Zona = ref<string>('');
const var_BB010_Cod_Vendedor = ref<number>(0);
const var_BB010_Col_Preco_Tabela = ref<number>(0);
const var_BB010_Banco01_ID = ref<string>('');
const var_BB010_Banco02_ID = ref<string>('');
const var_BB010_Banco03_ID = ref<string>('');
const var_BB010_CCusto_ID = ref<string>('');
const var_BB010_Km = ref<number>(0);
const var_BB010_Fone_Contato = ref<string>('');
const var_BB010_Promotor = ref<number>(0);
const var_BB010_Observacao = ref<string>('');
const var_BB010_Periodo_Rota = ref<number>(0);
const var_BB010_Periodo_Visita = ref<number>(0);
const var_BB010_Tabela_Preco = ref<string>('');
const var_BB010_VendedorID = ref<string>('');
const var_BB010_IsActive = ref<boolean>(false);
const var_BB010_TipoRotaID = ref<number>(0);
const var_bb010_CidadeID = ref<string>('');

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();
const formRef = ref<any>(null);

//variaveis da paginação
const currentPage = ref(1);
const itemsPerPage = ref(50);
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

const fetchActive = () => {
    active.value = true;
    fetchData();
};

const fetchInactive = () => {
    active.value = false;
    fetchData();
};

const fetchData = async () => {
    loading.value = true;
    try {
        const response: AxiosResponse<ApiResponse<ZonaCompleto>> = await GetZonaCompleto(
            tenant,
            active.value,
            count,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const data = response.data;
        items.value = data.Lista_bb010_Completo.map((item: Lista_bb010_Completo) => ({
            ID: item.csicp_bb010.csicp_bb010.ID,
            Codigo: item.csicp_bb010.csicp_bb010.BB010_Codigo,
            Zona: item.csicp_bb010.csicp_bb010.BB010_Zona,
            Ativo: item.csicp_bb010.csicp_bb010.BB010_IsActive
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

    // Variáveis para csicp_bb010
    var_ID.value = '';
    var_BB010_Codigo.value = 0;
    var_BB010_Zona.value = '';
    var_BB010_Cod_Vendedor.value = 0;
    var_BB010_Col_Preco_Tabela.value = 0;
    var_BB010_Banco01_ID.value = '';
    var_BB010_Banco02_ID.value = '';
    var_BB010_Banco03_ID.value = '';
    var_BB010_CCusto_ID.value = '';
    var_BB010_Km.value = 0;
    var_BB010_Fone_Contato.value = '';
    var_BB010_Promotor.value = 0;
    var_BB010_Observacao.value = '';
    var_BB010_Periodo_Rota.value = 0;
    var_BB010_Periodo_Visita.value = 0;
    var_BB010_Tabela_Preco.value = '';
    var_BB010_VendedorID.value = '';
    var_BB010_IsActive.value = false;
    var_BB010_TipoRotaID.value = 0;
    var_bb010_CidadeID.value = '';
};

const openEditDialog = async (item: Item) => {
    dialog.value = true;
    itemToEdit.value = item;

    try {
        const data: ZonaById = await GetZonaById(tenant, item.ID);

        // Atribuindo os valores da resposta aos campos da BB010
        var_ID.value = data.csicp_bb010.csicp_bb010.ID;
        var_BB010_Codigo.value = data.csicp_bb010.csicp_bb010.BB010_Codigo;
        var_BB010_Zona.value = data.csicp_bb010.csicp_bb010.BB010_Zona;
        var_BB010_Cod_Vendedor.value = data.csicp_bb010.csicp_bb010.BB010_Cod_Vendedor;
        var_BB010_Col_Preco_Tabela.value = data.csicp_bb010.csicp_bb010.BB010_Col_Preco_Tabela;
        var_BB010_Banco01_ID.value = data.csicp_bb010.csicp_bb010.BB010_Banco01_ID;
        var_BB010_Banco02_ID.value = data.csicp_bb010.csicp_bb010.BB010_Banco02_ID;
        var_BB010_Banco03_ID.value = data.csicp_bb010.csicp_bb010.BB010_Banco03_ID;
        var_BB010_CCusto_ID.value = data.csicp_bb010.csicp_bb010.BB010_CCusto_ID;
        var_BB010_Km.value = data.csicp_bb010.csicp_bb010.BB010_Km;
        var_BB010_Fone_Contato.value = data.csicp_bb010.csicp_bb010.BB010_Fone_Contato;
        var_BB010_Promotor.value = data.csicp_bb010.csicp_bb010.BB010_Promotor;
        var_BB010_Observacao.value = data.csicp_bb010.csicp_bb010.BB010_Observacao;
        var_BB010_Periodo_Rota.value = data.csicp_bb010.csicp_bb010.BB010_Periodo_Rota;
        var_BB010_Periodo_Visita.value = data.csicp_bb010.csicp_bb010.BB010_Periodo_Visita;
        var_BB010_Tabela_Preco.value = data.csicp_bb010.csicp_bb010.BB010_Tabela_Preco;
        var_BB010_VendedorID.value = data.csicp_bb010.csicp_bb010.BB010_VendedorID;
        var_BB010_IsActive.value = data.csicp_bb010.csicp_bb010.BB010_IsActive;
        var_BB010_TipoRotaID.value = data.csicp_bb010.csicp_bb010.BB010_TipoRotaID;
        var_bb010_CidadeID.value = data.csicp_bb010.csicp_bb010.bb010_CidadeID;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da zona', 'error');
    }
};

async function CreateOrUpdateZona() {
    if (formRef.value.validate()) {
        try {
            const data: Csicp_bb0102 = {
                ID: var_ID.value ? var_ID.value : '',
                BB010_Codigo: var_BB010_Codigo.value,
                BB010_Zona: var_BB010_Zona.value,
                BB010_Cod_Vendedor: var_BB010_Cod_Vendedor.value,
                BB010_Col_Preco_Tabela: var_BB010_Col_Preco_Tabela.value,
                BB010_Banco01_ID: var_BB010_Banco01_ID.value,
                BB010_Banco02_ID: var_BB010_Banco02_ID.value,
                BB010_Banco03_ID: var_BB010_Banco03_ID.value,
                BB010_CCusto_ID: var_BB010_CCusto_ID.value,
                BB010_Km: var_BB010_Km.value,
                BB010_Fone_Contato: var_BB010_Fone_Contato.value,
                BB010_Promotor: var_BB010_Promotor.value,
                BB010_Observacao: var_BB010_Observacao.value,
                BB010_Periodo_Rota: var_BB010_Periodo_Rota.value,
                BB010_Periodo_Visita: var_BB010_Periodo_Visita.value,
                BB010_Tabela_Preco: var_BB010_Tabela_Preco.value,
                BB010_VendedorID: var_BB010_VendedorID.value,
                BB010_IsActive: true,
                BB010_TipoRotaID: var_BB010_TipoRotaID.value,
                bb010_CidadeID: var_bb010_CidadeID.value
            };

            const response = await SaveZona(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Zona salva com sucesso', 'success');
                fetchData();
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar zona. Verifique os dados.', 'error');
            }
        } catch (error) {
            console.error(error);
            snackbarMessage.value = 'Erro ao atualizar a zona. Verifique sua conexão ou tente novamente.';
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

const deleteZonaConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteZona(tenant, itemToDelete.value.ID);
        showSnackbar('Zona excluída com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a zona', 'error');
    }
};

const confirmSoftDelete = (item: Item) => {
    confirmSoftDeleteDialog.value = true;
    itemToSoftDelete.value = item;
};

const cancelSoftDelete = () => {
    confirmSoftDeleteDialog.value = false;
};

const softDeleteZonaConfirmed = async () => {
    if (!itemToSoftDelete.value) return;
    try {
        await SoftDeleteZona(tenant, itemToSoftDelete.value.ID);
        showSnackbar(`Zona ${active.value ? 'inativado' : 'ativado'} com sucesso`, 'success');
        fetchData();
        confirmSoftDeleteDialog.value = false;
    } catch (error) {
        showSnackbar(`Erro ao ${active.value ? 'inativar' : 'ativar'} a zona`, 'error');
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
