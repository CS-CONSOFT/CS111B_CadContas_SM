<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Lista de Convênios</p>
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
                    <BtnAdicionar @click="redirectToCreate" />
                </v-col>
            </v-row>
        </div>

        <v-container v-if="loading" class="d-flex justify-center align-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-container>

        <v-container fluid class="pa-0" v-else>
            <v-row>
                <v-col cols="12">
                    <v-row class="d-flex">
                        <v-col cols="12" v-for="item in items" :key="item.ID" class="mb-1" @update:items-per-page="updateItemsPerPage">
                            <v-card class="border-sm border-opacity-50 mt-1 rounded-t" flat>
                                <div class="d-flex justify-between font-weight-bold bg-lightprimary pa-3 ma-0 rounded-t">
                                    <v-col cols="6" class="pa-0 d-flex align-center">
                                        <div>{{ item.Codigo }}{{ item.Convenio ? ' - ' + item.Convenio : '' }}</div>
                                    </v-col>

                                    <v-col cols="6" class="pa-0 d-flex justify-end align-center">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ props }">
                                                <v-icon small v-bind="props" @click="redirectToEdit(item)" class="v-btn-icon"
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
                                    </v-col>
                                </div>

                                <div class="d-flex justify-between">
                                    <v-col cols="3">
                                        <p><strong>Convênio</strong></p>
                                        <p>{{ item.Convenio }}</p>
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Forma de Pagamento</strong></p>
                                        {{ item.FormaPagamento }}
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Responsável</strong></p>
                                        {{ item.Responsavel }}
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Convênio Master</strong></p>
                                        <p>{{ item.ConvenioMaster }}</p>
                                    </v-col>
                                </div>
                                <div class="d-flex justify-between">
                                    <v-col cols="3">
                                        <p><strong>Centro de Custo</strong></p>
                                        <p>{{ item.CentroDeCusto }}</p>
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Cond. Pagamento</strong></p>
                                        {{ item.CondPagamento }}
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Proprietario</strong></p>
                                        {{ item.Proprietario }}
                                    </v-col>
                                    <v-col cols="3"> </v-col>
                                </div>
                                <div class="d-flex justify-between">
                                    <v-col cols="3">
                                        <p><strong>Valor</strong></p>
                                        <p>{{ item.Valor }}</p>
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Agente Cobrador</strong></p>
                                        {{ item.AgenteCobrador }}
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Data Inclusão</strong></p>
                                        {{ item.DtInclusao }}
                                    </v-col>
                                    <v-col cols="3">
                                        <p><strong>Data Alteração</strong></p>
                                        {{ item.DtAlteracao }}
                                    </v-col>
                                </div>
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
    </v-container>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir este convênio?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <BtnCancelar @click="cancelDelete" />
                <BtnExcluir @click="deleteConvenioConfirmed" />
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
import { GetConvenioCompleto, DeleteConvenio } from '../../services/convenio/bb060_convenio';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { ConvenioCompleto, List, NavBb060Convmaster, NavBb060Responsavel } from '../../types/convenio/bb060_convenio';
//Import de componentes
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';

interface Item {
    ID: number;
    Codigo: string;
    Convenio: string;
    FormaPagamento: string;
    Responsavel: string;
    ConvenioMaster: string;
    CentroDeCusto: string;
    CondPagamento: string;
    Proprietario: string;
    Valor: string;
    AgenteCobrador: string;
    DtInclusao: string;
    DtAlteracao: string;
}

const items = ref<Item[]>([]);
const confirmDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const loading = ref(false);
const active = ref(true);
const search = ref('');
const convMaster = ref<NavBb060Convmaster | null>(null);
const responsavel = ref<NavBb060Responsavel | null>(null);

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();

//variaveis da paginação
const currentPage = ref(1);
const itemsPerPage = ref(10);
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

const fetchData = async () => {
    loading.value = true;
    try {
        const response: AxiosResponse<ConvenioCompleto> = await GetConvenioCompleto(
            tenant,
            active.value,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const data = response.data;

        items.value = data.List.map((item: List) => ({
            ID: item.Bb060Convenioid,
            Codigo: item.Bb060Codigo,
            Convenio: item.Bb060Descricao,
            FormaPagamento: item.NavFormaPagamento?.Bb026Formapagamento || '---',
            Responsavel: item.NavBb060Responsavel?.Bb007Responsavel || '---',
            ConvenioMaster: item.NavBb060Convmaster?.Bb067Descricao || '---',
            CentroDeCusto: item.NavBb060Ccusto?.Bb005Nomeccusto || '---',
            CondPagamento: item.NavBb060Condicao?.Bb008CondicaoPagto || '---',
            Proprietario: item.NavUsuarioProprietario?.Sy001Nome || '---',
            Valor: `R$ ${item.Bb060Vbase.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`,
            AgenteCobrador: item.NavBb060Agcobrador?.Bb006Banco || '---',
            DtInclusao: item.Bb060Dthrinc
                ? new Date(item.Bb060Dthrinc).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                  }) +
                  ' ' +
                  new Date(item.Bb060Dthrinc).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  })
                : '---',
            DtAlteracao: item.Bb060Dthralt
                ? new Date(item.Bb060Dthralt).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                  }) +
                  ' ' +
                  new Date(item.Bb060Dthralt).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                  })
                : '---'
        }));

        totalItems.value = data.TotalCount;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        console.error('Erro capturado:', error);
        showSnackbar('Erro ao buscar dados.', 'error');
    } finally {
        loading.value = false;
    }
};

const redirectToCreate = async () => {
    await router.push({
        name: 'ConvenioCreate'
    });
};

const redirectToEdit = async (item: { ID: any }) => {
    if (item && item.ID) {
        await router.push({
            name: 'ConvenioEdit',
            params: {
                id: item.ID
            }
        });
    } else {
        console.error('Item indefinido');
    }
};

const confirmDelete = (item: Item) => {
    confirmDialog.value = true;
    itemToDelete.value = item;
};

const cancelDelete = () => {
    confirmDialog.value = false;
};

const deleteConvenioConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteConvenio(tenant, itemToDelete.value.ID.toString());
        showSnackbar('Convênio excluído com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o convênio', 'error');
        confirmDialog.value = false;
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
