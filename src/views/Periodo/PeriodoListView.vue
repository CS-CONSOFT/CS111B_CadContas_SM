<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Período</p>
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

                        <v-tooltip bottom>
                            <template v-slot:activator="{ props }">
                                <v-icon small v-bind="props" @click="confirmAtualizarStatus(item)" class="v-btn-icon">
                                    mdi-calendar
                                </v-icon>
                            </template>
                            <span>Atualizar Status</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ props }">
                                <v-icon small v-bind="props" @click="confirmTitulo(item)" class="v-btn-icon"> mdi-cash-check </v-icon>
                            </template>
                            <span>Confirmar Titulo</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card>
        </div>
    </v-container>

    <v-dialog v-model="dialog" max-width="600">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Calendário de Referência</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="12">
                            <cs_InputTexto v-model="var_bb062_Ano" Prm_etiqueta="Ano" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <v-select
                                v-model="var_bb062_Mes"
                                :items="meses"
                                item-title="label"
                                item-value="value"
                                dense
                                variant="solo-filled"
                                :required="false"
                            >
                                <template v-slot:label>
                                    <span
                                        class="d-flex align-center"
                                        style="font-size: 12px; font-weight: 500; padding-bottom: 0.2em; color: #808080"
                                    >
                                        Mês
                                    </span>
                                </template>
                            </v-select>

                            <cs_InputTexto
                                v-model="var_bb062_DtEmissao"
                                Prm_etiqueta="Emissão"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                type="date"
                            />

                            <cs_SelectVencimento
                                v-model="var_bb062_DiaVenctoID"
                                class="mb-5"
                                Prm_etiqueta="Dia Vencimento"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_bb062_Descritivo"
                                Prm_etiqueta="Descritivo"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                :PrmTextArea="true"
                                :Prm_QuantiCaracteres="250"
                            />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdatePeriodo" />
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
                <cs_BtnExcluir @click="deletePeriodoConfirmed" />
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
    GetPeriodoCompleto,
    DeletePeriodo,
    GetPeriodoById,
    CreatePeriodo,
    UpdatePeriodo,
    GerarTitulo
} from '../../services/periodo/bb062_periodo';
import { GetEstaticasBB } from '../../services/estaticas/estaticas_BB';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { PeriodoCompleto, PeridoById, PeriodoCreate, List } from '../../types/crm/periodo/bb062_periodo';
//Import de componentes
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_SelectVencimento from '../../submodules/cs_components/src/components/selects/cs_SelectVencimento.vue';

interface Item {
    ID: string;
    Ano: string;
    Mes: string;
    EstabelecimentoId: string;
    Emissao: string;
    Vencimento: string;
    Descritivo: string;
    Status: String;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Ano',
        value: 'Ano',
        sortable: false,
        width: '10%'
    },
    {
        title: 'Mês',
        value: 'Mes',
        sortable: false,
        width: '10%'
    },
    {
        title: 'Emissão',
        value: 'Emissao',
        sortable: false,
        width: '15%'
    },
    {
        title: 'Descritivo',
        value: 'Descritivo',
        sortable: false,
        width: '30%'
    },
    {
        title: 'Status',
        value: 'Status',
        width: '15%',
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
const itemToGerarTitulo = ref<Item | null>(null);
const itemToAtualizarStatus = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);
const active = ref(true);
const search = ref('');

// Lista de meses
const meses = [
    { label: 'Janeiro', value: 1 },
    { label: 'Fevereiro', value: 2 },
    { label: 'Março', value: 3 },
    { label: 'Abril', value: 4 },
    { label: 'Maio', value: 5 },
    { label: 'Junho', value: 6 },
    { label: 'Julho', value: 7 },
    { label: 'Agosto', value: 8 },
    { label: 'Setembro', value: 9 },
    { label: 'Outubro', value: 10 },
    { label: 'Novembro', value: 11 },
    { label: 'Dezembro', value: 12 }
];

//Variáveis de edição para csicp_bb062
const var_bb062_Id = ref<number>(0);
const var_bb062_EstabID = ref<string>('');
const var_bb062_Ano = ref<any>('');
const var_bb062_Mes = ref<any>('');
const var_bb062_Descritivo = ref<string>('');
const var_bb062_DtEmissao = ref<string>('');
const var_bb062_DiaVenctoID = ref<string>('');
const var_bb062_StatusID = ref<number>(0);

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
        const response: AxiosResponse<PeriodoCompleto> = await GetPeriodoCompleto(
            tenant,
            active.value,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const res = response.data;
        const data = res.Data;
        items.value = data.List.map((item: List) => {
            // Buscar o rótulo do mês baseado no valor do mês (número)
            const mesLabel = meses.find((mes) => mes.value === item.Bb062Mes)?.label || '';

            return {
                ID: item.Bb062Id.toString(),
                Ano: item.Bb062Ano.toString(),
                Mes: mesLabel,
                EstabelecimentoId: item.Bb062Estabid,
                Emissao: item.Bb062Dtemissao
                    ? new Date(item.Bb062Dtemissao).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                      })
                    : '',
                Vencimento: item.NavBb062Diavencto.Id,
                Descritivo: item.Bb062Descritivo,
                Status: item.NavBb062Status.Label
            };
        });

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

    // Zerar variáveis para csicp_bb062
    var_bb062_Id.value = 0;
    var_bb062_EstabID.value = '';
    var_bb062_Ano.value = '';
    var_bb062_Mes.value = '';
    var_bb062_Descritivo.value = '';
    var_bb062_DtEmissao.value = '';
    var_bb062_DiaVenctoID.value = '';
    var_bb062_StatusID.value = 0;
};

const openEditDialog = async (item: Item) => {
    dialog.value = true;
    itemToEdit.value = item;

    try {
        const res: PeridoById = await GetPeriodoById(tenant, item.ID);
        const data = res.Data;
        // Atribuindo os valores da resposta aos campos da BB062
        var_bb062_Id.value = data.Bb062Id;
        var_bb062_EstabID.value = data.Bb062Estabid;
        var_bb062_Ano.value = data.Bb062Ano;
        var_bb062_Mes.value = data.Bb062Mes;
        var_bb062_Descritivo.value = data.Bb062Descritivo;
        // Converter a data para o formato "yyyy-MM-dd"
        var_bb062_DtEmissao.value = data.Bb062Dtemissao ? new Date(data.Bb062Dtemissao).toISOString().split('T')[0] : '';
        var_bb062_DiaVenctoID.value = data.Bb062Diavenctoid;
        var_bb062_StatusID.value = data.Bb062Statusid;
    } catch (error) {
        showSnackbar('Erro ao buscar dados da categoria', 'error');
    }
};

async function CreateOrUpdatePeriodo() {
    if (formRef.value.validate()) {
        try {
            const data: PeriodoCreate = {
                Bb062Estabid: var_bb062_EstabID.value,
                Bb062Ano: Number(var_bb062_Ano.value),
                Bb062Mes: Number(var_bb062_Mes.value),
                Bb062Descritivo: var_bb062_Descritivo.value,
                Bb062Dtemissao: var_bb062_DtEmissao.value,
                Bb062Diavenctoid: var_bb062_DiaVenctoID.value,
                Bb062Statusid: var_bb062_StatusID.value
            };

            if (itemToEdit === null) {
                // Create
                const response = await CreatePeriodo(tenant, data);

                if (response.data.Out_IsSuccess) {
                    showSnackbar('Período salvo com sucesso', 'success');
                    fetchData();
                    dialog.value = false;
                } else {
                    showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar período. Verifique os dados.', 'error');
                }
            } else {
                // Update
                const response = await UpdatePeriodo(tenant, var_bb062_Id.value.toString(), data);

                if (response.statusText === 'OK') {
                    showSnackbar('Período atualizado com sucesso', 'success');
                } else {
                    showSnackbar(response.data.Out_Message || 'Falha ao atualizar período. Verifique os dados.', 'error');
                }
            }
        } catch (error) {
            showSnackbar('Erro ao atualizar o período. Verifique sua conexão ou tente novamente.', 'error');
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

const deletePeriodoConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeletePeriodo(tenant, itemToDelete.value.ID);
        showSnackbar('Período excluída com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir a período', 'error');
    }
};

const confirmTitulo = (item: Item) => {
    itemToGerarTitulo.value = item;
    gerarTituloConfirmed();
};

const gerarTituloConfirmed = async () => {
    if (!itemToGerarTitulo.value) return;
    try {
        const response = await GerarTitulo(tenant, itemToGerarTitulo.value.ID);

        if (response.data.Out_IsSuccess) {
            showSnackbar('Título gerado com sucesso', 'success');
            fetchData();
        } else {
            showSnackbar(response.data.Out_Message, 'error');
            fetchData();
        }
    } catch (error) {
        showSnackbar('Erro ao gerar título', 'error');
    }
};

const confirmAtualizarStatus = (item: Item) => {
    itemToAtualizarStatus.value = item;
    atualizarStatusConfirmed();
};

async function atualizarStatusConfirmed() {
    if (!itemToAtualizarStatus.value) return;
    try {
        const responseStatus = await GetEstaticasBB();

        const estatica = responseStatus.data.csicp_bb062_sta.find((item: any) => item.Label === 'Programado');

        if (estatica?.Id === undefined) {
            showSnackbar('Não foi possível recuperar o status.', 'error');
            return;
        }

        const data: PeriodoCreate = {
            Bb062Estabid: itemToAtualizarStatus.value.EstabelecimentoId,
            Bb062Ano: Number(itemToAtualizarStatus.value.Ano),
            Bb062Mes: Number(itemToAtualizarStatus.value.Mes),
            Bb062Descritivo: itemToAtualizarStatus.value.Descritivo,
            Bb062Dtemissao: itemToAtualizarStatus.value.Emissao,
            Bb062Diavenctoid: itemToAtualizarStatus.value.Vencimento,
            Bb062Statusid: estatica.Id
        };

        const response = await CreatePeriodo(tenant, data);

        if (response.data.Out_IsSuccess) {
            showSnackbar('Status atualizado com sucesso', 'success');
            fetchData();
        } else {
            showSnackbar(response.data.Out_Message || 'Falha ao atualizar status. Verifique os dados.', 'error');
        }
    } catch (error) {
        showSnackbar('Erro ao atualizar o status. Verifique sua conexão ou tente novamente.', 'error');
    }
}

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
