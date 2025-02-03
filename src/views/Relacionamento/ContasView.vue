<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Contas</p>

                <v-spacer></v-spacer>

                <v-col cols="4" class="d-flex justify-end">
                    <v-btn v-if="active" prepend-icon="mdi-cancel" flat class="mr-2 bg-error" @click="fetchInactive">Inativos</v-btn>
                    <v-btn v-else prepend-icon="mdi-delete-empty" flat class="bg-secondary mr-2" @click="fetchActive">Ativos</v-btn>
                    <BtnAdicionar @click="redirectToCreate" />
                </v-col>
                <v-divider></v-divider>
            </v-row>

            <div class="px-4 mb-2">
                <v-row class="align-start">
                    <v-col cols="9" class="d-flex gap-4">
                        <cs_InputTexto v-model="search" Prm_etiqueta="Nome Cliente" :Prm_limpavel="true" :Prm_isObrigatorio="false" />

                        <cs_InputTexto v-model="searchCodigo" Prm_etiqueta="Código" :Prm_limpavel="true" :Prm_isObrigatorio="false" />

                        <cs_InputTexto v-model="filterCPF" Prm_etiqueta="CPF/CNPJ" :Prm_limpavel="true" :Prm_isObrigatorio="false" />
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col cols="3" class="d-flex align-center justify-end">
                        <v-btn class="mr-2" color="primary" prepend-icon="mdi-magnify" variant="flat" @click="fetchData()">
                            Pesquisar
                        </v-btn>

                        <v-btn class="bg-lightprimary" prepend-icon="mdi-broom" variant="flat" @click="clearFilters()"> Limpar </v-btn>
                    </v-col>
                </v-row>
            </div>

            <div class="px-4 mb-5">
                <v-row class="align-center">
                    <v-expansion-panels variant="accordion">
                        <v-expansion-panel>
                            <v-expansion-panel-title> Mais Filtros </v-expansion-panel-title>

                            <v-expansion-panel-text>
                                <v-row class="d-flex align-start">
                                    <v-col cols="12" class="d-flex gap-4 justify-between" style="height: 75px">
                                        <cs_SelectMRelacionamento
                                            v-model="filterMrel"
                                            Prm_etiqueta="Modelo de Relação"
                                            :Prm_isObrigatorio="false"
                                            :Prm_limpavel="true"
                                        />
                                        <cs_SelectGrupo
                                            v-model="filterGrupo"
                                            Prm_etiqueta="Grupo"
                                            :Prm_isObrigatorio="false"
                                            :Prm_limpavel="true"
                                        />
                                        <cs_SelectClasse
                                            v-model="filterClasse"
                                            Prm_etiqueta="Classe"
                                            :Prm_isObrigatorio="false"
                                            :Prm_limpavel="true"
                                        />
                                        <cs_SelectStatus
                                            v-model="filterStatus"
                                            Prm_etiqueta="Status"
                                            :Prm_isObrigatorio="false"
                                            :Prm_limpavel="true"
                                        />
                                        <cs_SelectSituacao
                                            v-model="filterSituacao"
                                            Prm_etiqueta="Situação"
                                            :Prm_isObrigatorio="false"
                                            :Prm_limpavel="true"
                                        />
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
            </div>

            <v-container v-if="loading" class="d-flex justify-center align-center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-container>

            <v-card class="border-sm mt-1" elevation="0" v-else>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :items-per-page="itemsPerPage"
                    :loading="loading"
                    @update:items-per-page="updateItemsPerPage"
                    hide-default-footer
                    loading-text="Carregando dados..."
                    class="month-table"
                >
                    <template v-slot:column.header.GrupoClasse>
                        <div>Grupo<br />Classe</div>
                    </template>

                    <template v-slot:column.header.StatusSituacao>
                        <div>Status<br />Situação</div>
                    </template>

                    <template v-slot:item.EnderecoContato="{ item }">
                        <div>
                            <div>{{ item.Endereco }}</div>
                            <div>{{ item.Contato }}</div>
                        </div>
                    </template>

                    <template v-slot:item.GrupoClasse="{ item }">
                        <div>
                            <div>{{ item.Grupo }}</div>
                            <div>{{ item.Classe }}</div>
                        </div>
                    </template>
                    <template v-slot:item.StatusSituacao="{ item }">
                        <div>
                            <div>{{ item.Status }}</div>
                            <div>{{ item.Situacao }}</div>
                        </div>
                    </template>
                    <template v-slot:bottom>
                        <v-row class="d-flex align-center">
                            <v-col cols="12" class="d-flex justify-center">
                                <cs_Pagination
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
                        <v-menu v-model="item.menu" :close-on-content-click="false" offset-y>
                            <template v-slot:activator="{ props }">
                                <v-icon small v-bind="props" class="v-btn-icon">mdi-dots-vertical</v-icon>
                            </template>

                            <v-list style="width: 250px">
                                <v-list-item v-for="(opcao, index) in opcoesMenu" :key="index" @click="opcao.acao(item)">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ props }">
                                            <div v-bind="props" class="d-flex align-center" style="cursor: pointer">
                                                <v-col cols="3">
                                                    <v-icon>{{ opcao.icone(item) }}</v-icon>
                                                </v-col>
                                                <v-col cols="9">
                                                    <v-list-item-title>{{ opcao.nome(item) }}</v-list-item-title>
                                                </v-col>
                                            </div>
                                        </template>
                                        <span>{{ opcao.nome(item) }}</span>
                                    </v-tooltip>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                </v-data-table>
            </v-card>
        </div>
    </v-container>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta conta?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <BtnCancelar @click="cancelDelete" />
                <BtnExcluir @click="deleteContaConfirmed" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmSoftDeleteDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-secondary"> Confirmar {{ active ? 'Inativação' : 'Ativação' }} </v-card-title>
            <v-card-text> Tem certeza de que deseja {{ active ? 'inativar' : 'ativar' }} esta conta? </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <BtnCancelar @click="cancelSoftDelete" />
                <BtnIsActive :IsActive="active" @click="softDeleteContaConfirmed" />
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
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetContasCompleta, DeleteConta, SoftDeleteConta } from '../../services/contas/bb012_Contas/bb012_conta';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { ContaCompleta, List } from '@/types/crm/contas/bb012_conta';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import BtnIsActive from '../../submodules/cs_components/src/components/botoes/cs_BtnIsActive.vue';
import BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_SelectGrupo from '../../submodules/cs_components/src/components/selects/cs_SelectGrupo.vue';
import cs_SelectClasse from '../../submodules/cs_components/src/components/selects/cs_SelectClasse.vue';
import cs_SelectStatus from '../../submodules/cs_components/src/components/selects/cs_SelectStatus.vue';
import cs_SelectSituacao from '../../submodules/cs_components/src/components/selects/cs_SelectSituacao.vue';
import cs_SelectMRelacionamento from '../../submodules/cs_components/src/components/selects/cs_SelectMRelacionamento.vue';

interface Item {
    ID: string;
    Nome: string;
    Endereco: string;
    Contato: string;
    Modalidade: string;
    Grupo: string;
    Classe: string;
    Status: string;
    Situacao: string;
    CPF: string;
    MrelId: number;
    GrupoId: number;
    ClasseId: number;
    StatusId: number;
    SituacaoId: number;
    IsActive: boolean;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Nome',
        value: 'Nome',
        sortable: true,
        width: '20%',
        align: 'start',
        cellClass: 'text-wrap'
    },
    {
        title: 'Endereço / Contato',
        value: 'EnderecoContato',
        width: '20%',
        align: 'start'
    },
    {
        title: 'CPF / IE / CNPJ',
        value: 'CPF',
        width: '10%',
        align: 'center'
    },
    {
        title: 'Modalidade',
        value: 'Modalidade',
        width: '10%',
        align: 'center'
    },
    {
        title: 'Grupo / Classe',
        value: 'GrupoClasse',
        width: '10%',
        align: 'start'
    },
    {
        title: 'Status / Situação',
        value: 'StatusSituacao',
        width: '10%',
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

const items = ref<Item[]>([]);
const confirmDialog = ref(false);
const confirmSoftDeleteDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToSoftDelete = ref<Item | null>(null);
const loading = ref(false);
const active = ref(true);
const search = ref('');
const searchCodigo = ref<string>('');

// Definindo os valores para os filtros
const filterCPF = ref<string>('');
const filterMrel = ref<number | undefined>();
const filterGrupo = ref<number | undefined>();
const filterClasse = ref<number | undefined>();
const filterStatus = ref<number | undefined>();
const filterSituacao = ref<number | undefined>();

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();

//variaveis da paginação
const currentPage = ref(1);
const itemsPerPage = ref(50);
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

const fetchActive = () => {
    active.value = true;
    fetchData();
};

const fetchInactive = () => {
    active.value = false;
    fetchData();
};

const formatCPFOrCNPJ = (value: string | null | undefined): string => {
    if (!value) return 'N/A'; // Valor inválido ou ausente
    const onlyDigits = value.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (onlyDigits.length === 11) {
        // Formata como CPF
        return onlyDigits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (onlyDigits.length === 14) {
        // Formata como CNPJ
        return onlyDigits.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }

    return value;
};

// Função para remover formatações
const normalizeCPF = (cpf: unknown): string => {
    return typeof cpf === 'string' ? cpf.replace(/\D/g, '') : '';
};

const fetchData = async () => {
    loading.value = true;

    try {
        const response: AxiosResponse<ContaCompleta> = await GetContasCompleta(
            tenant,
            active.value,
            currentPage.value,
            itemsPerPage.value,
            filterCPF.value,
            filterMrel.value,
            filterGrupo.value,
            filterClasse.value,
            filterStatus.value,
            filterSituacao.value,
            searchCodigo.value,
            search.value
        );

        const res = response.data;

        items.value = res.Data.List.map((item: List) => ({
            ID: item.Id || '',
            Nome: item.Bb012Codigo && item.Bb012NomeCliente ? `${item.Bb012Codigo} - ${item.Bb012NomeCliente}` : '',
            Endereco: item.NavGetBB1206?.Bb012Logradouro || '',
            Contato: item.Bb012Faxcelular || '',
            CPF:
                item.NavGetBB1202?.Bb012Cpf || item.NavGetBB1202?.Bb012Cnpj
                    ? formatCPFOrCNPJ(String(item.NavGetBB1202.Bb012Cpf || item.NavGetBB1202.Bb012Cnpj))
                    : '',
            Modalidade: item.NavBB012_ModeloRelacao?.Label || '',
            Grupo: item.NavBB012_GrupoConta?.Label || '',
            Classe: item.NavBB012_ClasseConta?.Label || '',
            Status: item.NavBB012_StatusConta?.Label || '',
            Situacao: item.NavBB012_SitConta?.Label || '',
            MrelId: Number(item.Bb012ModrelacaoId) || 0,
            GrupoId: Number(item.Bb012GrupocontaId) || 0,
            ClasseId: Number(item.Bb012ClassecontaId) || 0,
            StatusId: Number(item.Bb012StatuscontaId) || 0,
            SituacaoId: Number(item.Bb012SitContaId) || 0,
            IsActive: item.Bb012IsActive ?? false
        }));

        totalItems.value = res.Data.TotalCount;
        totalPages.value = Math.ceil(totalItems.value / itemsPerPage.value);
    } catch (error) {
        showSnackbar('Erro ao buscar dados.', 'error');
    } finally {
        loading.value = false;
    }
};

const clearFilters = () => {
    search.value = '';
    searchCodigo.value = '';
    filterCPF.value = '';
    filterMrel.value = undefined;
    filterGrupo.value = undefined;
    filterClasse.value = undefined;
    filterStatus.value = undefined;
    filterSituacao.value = undefined;

    fetchData();
};

// Array de opções do menu de ações
const opcoesMenu = [
    {
        nome: () => 'Extras',
        icone: () => 'mdi-plus-circle-outline',
        acao: async (item: { ID: any }) => {
            if (item && item.ID) {
                await router.push({
                    name: 'ContasExtras',
                    params: {
                        id: item.ID
                    }
                });
            } else {
                console.error('Item indefinido');
            }
        }
    },
    {
        nome: () => 'Editar Registro',
        icone: () => 'mdi-clipboard-edit-outline',
        acao: async (item: { ID: any }) => {
            if (item && item.ID) {
                await router.push({
                    name: 'ContasEdit',
                    params: {
                        id: item.ID
                    }
                });
            } else {
                console.error('Item indefinido');
            }
        }
    },
    {
        nome: () => 'Analise de Crédito',
        icone: () => 'mdi-credit-card-search-outline',
        acao: async (item: { ID: any }) => {
            if (item && item.ID) {
                await router.push({
                    name: 'AnaliseCredito',
                    params: {
                        id: item.ID
                    }
                });
            } else {
                console.error('Item indefinido');
            }
        }
    },
    {
        nome: (item: Item) => (item.IsActive ? 'Inativar' : 'Ativar'),
        icone: (item: Item) => (item.IsActive ? 'mdi-cancel' : 'mdi-check'),
        acao: (item: Item) => {
            confirmSoftDeleteDialog.value = true;
            itemToSoftDelete.value = item;
        }
    },
    {
        nome: () => 'Excluir',
        icone: () => 'mdi-delete',
        acao: (item: Item) => {
            confirmDialog.value = true;
            itemToDelete.value = item;
        }
    },
    {
        nome: () => 'Ficha',
        icone: () => 'mdi-clipboard-outline',
        acao: (item: Item) => {
            console.log('Visualizando ficha para', item);
        }
    },
    {
        nome: () => 'SMS',
        icone: () => 'mdi-cellphone',
        acao: (item: Item) => {
            console.log('Enviando SMS para', item);
        }
    }
];

const redirectToCreate = async () => {
    await router.push({
        name: 'ContasCreate'
    });
};

const cancelDelete = () => {
    confirmDialog.value = false;
};

const deleteContaConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteConta(tenant, itemToDelete.value.ID);
        showSnackbar('Conta excluído com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o conta', 'error');
        confirmDialog.value = false;
    }
};

const cancelSoftDelete = () => {
    confirmSoftDeleteDialog.value = false;
};

const softDeleteContaConfirmed = async () => {
    if (!itemToSoftDelete.value) return;
    try {
        await SoftDeleteConta(tenant, itemToSoftDelete.value.ID);
        showSnackbar(`Conta ${active.value ? 'inativado' : 'ativado'} com sucesso`, 'success');
        fetchData();
        confirmSoftDeleteDialog.value = false;
    } catch (error) {
        showSnackbar(`Erro ao ${active.value ? 'inativar' : 'ativar'} a conta`, 'error');
    }
};

const updateItemsPerPage = (itemsPerPageValue: number) => {
    if (itemsPerPage.value !== itemsPerPageValue) {
        itemsPerPage.value = itemsPerPageValue;
        currentPage.value = 1;
        fetchData();
    }
};

watch([currentPage, itemsPerPage], fetchData);

onMounted(() => {
    fetchData();
});
</script>
<style scoped>
.text-wrap {
    white-space: normal !important;
    word-break: break-word;
}
</style>
