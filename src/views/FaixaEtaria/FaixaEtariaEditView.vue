<template>
    <v-container fluid>
        <v-toolbar title="Faixa Etária Convênio" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" class="bg-primary mr-4" to="/FaixaEtaria">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-card class="border-sm border-opacity-50 mt-1 pa-4" elevation="0">
            <v-tabs v-model="tab" align-tabs="start" color="primary" class="rounded">
                <v-tab value="one">Editar</v-tab>
                <v-tab value="two">Faixa Etária</v-tab>
                <v-tab value="three">Vincular Convênios</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-form ref="formRef">
                            <v-card class="pa-4 border" elevation="0">
                                <v-row class="d-flex">
                                    <v-col cols="12" class="align-center">
                                        <cs_InputTexto
                                            v-model="var_bb064_Descricao"
                                            Prm_etiqueta="Descrição"
                                            :Prm_limpavel="false"
                                            :Prm_isObrigatorio="true"
                                            :rules="rules.nome"
                                        />
                                        <v-checkbox v-model="var_bb064_IsActive" label="Ativo?"></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row class="d-flex pa-4 justify-end">
                                    <cs_BtnSalvar @click="CreateOrUpdateFaixaEtaria" />
                                </v-row>
                            </v-card>
                        </v-form>
                    </v-window-item>

                    <v-window-item value="two">
                        <v-row class="pa-4">
                            <p class="text-h5">Inserir Faixa Etária da {{ var_bb064_Descricao }}</p>
                        </v-row>
                        <v-row class="d-flex align-start">
                            <v-col cols="3">
                                <cs_InputTexto
                                    v-model="var_bb066_FaixaDe"
                                    Prm_etiqueta="De"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                            <v-col cols="3">
                                <cs_InputTexto
                                    v-model="var_bb066_FaixaAte"
                                    Prm_etiqueta="Até"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                            <v-col cols="3">
                                <cs_InputTexto
                                    v-model="var_bb066_Valor"
                                    Prm_etiqueta="Valor"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                            <v-col cols="3" class="d-flex justify-end">
                                <v-btn color="primary" @click="saveDetalhes()"> Adicionar</v-btn>
                            </v-col>
                        </v-row>

                        <v-card class="border-sm mt-1" elevation="0">
                            <v-card-text class="pa-0 rounded-md">
                                <v-data-table
                                    :headers="headers"
                                    :items="itemsBB066"
                                    hide-default-header
                                    :items-per-page="itemsPerPage"
                                    @update:items-per-page="updateItemsPerPage"
                                    hide-default-footer
                                    loading-text="Carregando dados..."
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
                                                    @update:currentPage="updatePage"
                                                />
                                            </v-col>
                                        </v-row>
                                    </template>
                                    <template v-slot:no-data>
                                        <p>Nenhum dado encontrado.</p>
                                    </template>
                                    <template v-slot:item.actions="{ item }">
                                        <div>
                                            <v-icon small @click="deleteDetalhes(item.ID)">mdi-delete</v-icon>
                                        </div>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-window-item>

                    <v-window-item value="three">
                        <v-row class="pa-4">
                            <p class="text-h5">Vincular Convênios</p>
                        </v-row>
                        <v-row class="pb-4">
                            <v-col cols="5" class="d-inline-flex align-center">
                                <v-btn class="ml-4" color="primary" @click=""> Adicionar</v-btn>
                            </v-col>
                        </v-row>

                        <v-card class="border-sm mt-1" elevation="0">
                            <v-card-text class="pa-0 rounded-md">
                                <v-data-table
                                    :headers="headersConvenio"
                                    :items="itemsBB065"
                                    hide-default-header
                                    :items-per-page="itemsPerPage"
                                    @update:items-per-page="updateItemsPerPage"
                                    hide-default-footer
                                    loading-text="Carregando dados..."
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
                                                    @update:currentPage="updatePage"
                                                />
                                            </v-col>
                                        </v-row>
                                    </template>
                                    <template v-slot:no-data>
                                        <p>Nenhum dado encontrado.</p>
                                    </template>
                                    <template v-slot:item.actions="{ item }">
                                        <div>
                                            <v-icon small @click="deleteVinculoConvenio(item.ID)">mdi-delete</v-icon>
                                        </div>
                                    </template>
                                </v-data-table>
                            </v-card-text>
                        </v-card>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-container>

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
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import {
    GetFaixaEtariaById,
    SaveFaixaEtaria,
    SaveDetalhesFaixaEtaria,
    DeleteDetalhesFaixaEtaria,
    SaveVinculoConvenioFaixaEtaria,
    DeleteVinculoConvenioFaixaEtaria
} from '../../services/faixa_etaria/bb064_faixaEtaria';
// Import de Types
import type { Csicp_bb064 } from '../../types/faixa_etaria/bb064_faixaEtaria';
import type {
    FaixaEtariaById,
    Csicp_bb066_List,
    Vinculo_FxEtaria_Convenio,
    Csicp_bb065
} from '../../types/faixa_etaria/bb064_GetFaixaEtariaById';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_InputValor from '../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';

interface ItemBB066 {
    ID: number;
    FaixaEtariaId: number;
    FaixaDe: number;
    FaixaAte: number;
    Valor: string;
}

interface ItemBB065 {
    ID: number;
    FaixaEtariaId: number;
    Convenio: string;
}

const headers = ref([
    {
        title: 'Faixa De',
        value: 'FaixaDe',
        sortable: false
    },
    {
        title: 'Faixa Até',
        value: 'FaixaAte',
        sortable: false
    },
    {
        title: 'Valor',
        value: 'Valor',
        sortable: false
    },
    {
        title: 'Ações',
        value: 'actions',
        align: 'center',
        sortable: false
    }
]);

const headersConvenio = ref([
    {
        title: 'Convênio',
        value: 'Convenio',
        sortable: false
    },
    {
        title: 'Ações',
        value: 'actions',
        align: 'center',
        sortable: false
    }
]);

const props = defineProps<{
    id: string;
}>();

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();
const formRef = ref<any>(null);

const tab = ref(null);
const itemsBB066 = ref<ItemBB066[]>([]);
const itemsBB065 = ref<ItemBB065[]>([]);

//Variáveis de modelo bb064
const var_ID = ref<number>(0);
const var_bb064_Descricao = ref<string>('');
const var_bb064_IsActive = ref<boolean>(false);

//Variáveis de modelo bb066
const var_bb066_ID = ref<number>(0);
const var_bb066_FxEtariaID = ref<number>(0);
const var_bb066_FaixaDe = ref<number>(0);
const var_bb066_FaixaAte = ref<number>(0);
const var_bb066_Valor = ref<number>(0);

const faixaEtaria = ref<Csicp_bb066_List[]>([]);
const convenioVinculados = ref<Vinculo_FxEtaria_Convenio[]>([]);

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

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

const fetchFaixaEtariaById = async (id: string) => {
    try {
        const data: FaixaEtariaById = await GetFaixaEtariaById(tenant, id);

        var_ID.value = data.csicp_bb064.bb064_FxEtariaId;
        var_bb064_Descricao.value = data.csicp_bb064.bb064_Descricao;
        var_bb064_IsActive.value = data.csicp_bb064.bb064_IsActive;

        faixaEtaria.value = data.csicp_bb066_List;
        convenioVinculados.value = data.Vinculo_FxEtaria_Convenio;

        itemsBB066.value = mapFaixaEtariaToItems(data.csicp_bb066_List);
        itemsBB065.value = mapConvenioVinculadosToItems(data.Vinculo_FxEtaria_Convenio);
    } catch (error) {
        showSnackbar('Erro ao buscar dados da faixa etária', 'error');
    }
};

const mapFaixaEtariaToItems = (faixaEtaria: Csicp_bb066_List[]): ItemBB066[] => {
    return faixaEtaria.map((item) => ({
        ID: item.bb066_ID,
        FaixaEtariaId: item.bb066_FxEtariaID,
        FaixaDe: item.bb066_FaixaDe,
        FaixaAte: item.bb066_FaixaAte,
        Valor: `R$ ${item.bb066_Valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }));
};

const mapConvenioVinculadosToItems = (convenioVinculados: Vinculo_FxEtaria_Convenio[]): ItemBB065[] => {
    return convenioVinculados.map((item) => ({
        ID: item.csicp_bb065.bb065_ID,
        FaixaEtariaId: item.csicp_bb065.bb064_FxEtariaID,
        Convenio: item.csicp_bb060.bb060_Descricao
    }));
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
                setTimeout(() => {
                    router.push({
                        name: 'FaixaEtaria'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar faixa etária. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro ao atualizar a faixa etária. Verifique sua conexão ou tente novamente.', 'error');
        }
    }
}

const saveDetalhes = async () => {
    // Transformar os dados antes de enviar
    const data: Csicp_bb066_List = {
        bb066_ID: 0,
        bb066_FxEtariaID: var_ID.value,
        bb066_FaixaDe: Number(var_bb066_FaixaDe.value) || 0,
        bb066_FaixaAte: Number(var_bb066_FaixaAte.value) || 0,
        bb066_Valor: var_bb066_Valor.value
    };

    try {
        // Envia os dados para a API
        await SaveDetalhesFaixaEtaria(tenant, data);

        // Exibe mensagem de sucesso
        showSnackbar('Detalhes da faixa etária adicionados com sucesso', 'success');

        // Atualiza os dados locais
        const updatedData = await GetFaixaEtariaById(tenant, var_ID.value.toString());
        faixaEtaria.value = updatedData.csicp_bb066_List;
        itemsBB066.value = mapFaixaEtariaToItems(updatedData.csicp_bb066_List);

        // Reseta os campos do formulário
        var_bb066_FaixaDe.value = 0;
        var_bb066_FaixaAte.value = 0;
        var_bb066_Valor.value = 0;
    } catch (error) {
        showSnackbar('Erro ao salvar detalhes da faixa etária', 'error');
    }
};

const deleteDetalhes = async (id: string) => {
    try {
        await DeleteDetalhesFaixaEtaria(tenant, id);
        showSnackbar('Detalhes da faixa etária deletado com sucesso', 'success');
        fetchFaixaEtariaById(props.id);
    } catch (error) {
        showSnackbar('Erro ao deletar detalhes da faixa etária', 'error');
    }
};

const saveConvenio = async () => {
    // Transformar os dados antes de enviar
    const data: Csicp_bb065 = {
        bb065_ID: 0,
        bb064_FxEtariaID: 0,
        bb062_ConvenioID: 0
    };

    try {
        // Envia os dados para a API
        await SaveVinculoConvenioFaixaEtaria(tenant, data);

        // Exibe mensagem de sucesso
        showSnackbar('Vínculo adicionado com sucesso', 'success');

        // Atualiza os dados locais
        const updatedData = await GetFaixaEtariaById(tenant, var_ID.value.toString());
        convenioVinculados.value = updatedData.Vinculo_FxEtaria_Convenio;
        itemsBB065.value = mapConvenioVinculadosToItems(updatedData.Vinculo_FxEtaria_Convenio);
    } catch (error) {
        showSnackbar('Erro ao salvar vínculo', 'error');
    }
};

const deleteVinculoConvenio = async (id: string) => {
    try {
        await DeleteVinculoConvenioFaixaEtaria(tenant, id);
        showSnackbar('Vínculo do convênio com a faixa etária deletado com sucesso', 'success');
        fetchFaixaEtariaById(props.id);
    } catch (error) {
        showSnackbar('Erro ao deletar o vínculo', 'error');
    }
};

const updatePage = (page: number) => {
    currentPage.value = page;
    mapFaixaEtariaToItems(faixaEtaria.value);
};

const updateItemsPerPage = (itemsPerPageValue: number) => {
    itemsPerPage.value = itemsPerPageValue;
    currentPage.value = 1;
    mapFaixaEtariaToItems(faixaEtaria.value);
};

onMounted(() => {
    fetchFaixaEtariaById(props.id);
});
</script>
