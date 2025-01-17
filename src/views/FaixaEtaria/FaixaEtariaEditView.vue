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
                                <cs_InputValor
                                    v-model="var_bb066_Valor"
                                    Prm_etiqueta="Valor"
                                    :Prm_isObrigatorio="false"
                                    :Prm_Precision="2"
                                    @clean-value="handleCleanValue"
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
                            <v-col cols="5" class="d-inline-flex align-start">
                                <cs_SelectConvenios class="mb-6" v-model="selectedConvenio" :Prm_isObrigatorio="false" />
                                <v-btn class="ml-4" color="primary" @click="saveConvenio()"> Adicionar</v-btn>
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
    UpdateFaixaEtaria,
    CreateDetalhesFaixaEtaria,
    DeleteDetalhesFaixaEtaria,
    CreateVinculoConvenioFaixaEtaria,
    DeleteVinculoConvenioFaixaEtaria
} from '../../services/faixa_etaria/bb064_faixaEtaria';
// Import de Types
import type {
    FaixaEtariaById,
    NavCSICP_BB066List,
    NavCSICP_BB065List,
    FaixaEtariaCreate,
    FaixaEtariaDetalhesCreate,
    FaixaEtariaConvenioCreate
} from '../../types/faixa_etaria/bb064_faixaEtaria';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_InputValor from '../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_SelectConvenios from '../../submodules/cs_components/src/components/selects/cs_SelectConvenios.vue';

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
const var_bb066_FaixaDe = ref<any>('');
const var_bb066_FaixaAte = ref<any>('');
const var_bb066_Valor = ref<any>('');

//Variável para armazenar o var_bb066_Valor limpo
const cleanValue = ref<number | null>(null);

const selectedConvenio = ref<string>('');

const faixaEtaria = ref<NavCSICP_BB066List[]>([]);
const convenioVinculados = ref<NavCSICP_BB065List[]>([]);

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

// Função para capturar o valor limpo emitido pelo filho
function handleCleanValue(value: number | null) {
    cleanValue.value = value;
}

const fetchFaixaEtariaById = async (id: string) => {
    try {
        const response: FaixaEtariaById = await GetFaixaEtariaById(tenant, id);
        const data = response.Data;

        console.log(data);
        // Preencher as variáveis principais com dados retornados
        var_ID.value = data.Bb064Fxetariaid;
        var_bb064_Descricao.value = data.Bb064Descricao;
        var_bb064_IsActive.value = data.Bb064Isactive;

        faixaEtaria.value = data.NavCSICP_BB066List || [];
        convenioVinculados.value = data.NavCSICP_BB065List || [];

        itemsBB066.value = mapFaixaEtariaToItems(data.NavCSICP_BB066List || []);
        itemsBB065.value = mapConvenioVinculadosToItems(data.NavCSICP_BB065List || []);
    } catch (error) {
        console.error('Erro capturado:', error);
        showSnackbar('Erro ao buscar dados da faixa etária', 'error');
    }
};

const mapFaixaEtariaToItems = (faixaEtaria: NavCSICP_BB066List[]): ItemBB066[] => {
    return faixaEtaria.map((item) => ({
        ID: item.Bb066Id,
        FaixaEtariaId: item.Bb066Fxetariaid,
        FaixaDe: item.Bb066Faixade,
        FaixaAte: item.Bb066Faixaate,
        Valor: `R$ ${item.Bb066Valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }));
};

const mapConvenioVinculadosToItems = (convenioVinculados: NavCSICP_BB065List[]): ItemBB065[] => {
    return convenioVinculados.map((item) => ({
        ID: item.Bb065Id,
        FaixaEtariaId: item.Bb064Fxetariaid,
        Convenio: item.NavBb062Convenio.Bb060Descricao
    }));
};

async function CreateOrUpdateFaixaEtaria() {
    if (formRef.value.validate()) {
        try {
            const data: FaixaEtariaCreate = {
                Bb064Descricao: var_bb064_Descricao.value
            };

            const response = await UpdateFaixaEtaria(tenant, var_ID.value.toString(), data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Faixa etária master atualizada com sucesso', 'success');
                setTimeout(() => {
                    router.push({
                        name: 'FaixaEtaria'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao atualizar faixa etária. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro ao atualizar a faixa etária. Verifique sua conexão ou tente novamente.', 'error');
        }
    }
}

const saveDetalhes = async () => {
    // Monta o objeto de dados para enviar à API
    const data: FaixaEtariaDetalhesCreate = {
        Bb066Fxetariaid: var_ID.value,
        Bb066Faixade: Number(var_bb066_FaixaDe.value) || 0,
        Bb066Faixaate: Number(var_bb066_FaixaAte.value) || 0,
        Bb066Valor: cleanValue.value!
    };

    try {
        // Envia os dados para a API
        await CreateDetalhesFaixaEtaria(tenant, data);

        showSnackbar('Detalhes da faixa etária adicionados com sucesso', 'success');

        // Atualiza a lista após a operação
        const updatedData = await GetFaixaEtariaById(tenant, props.id);
        faixaEtaria.value = updatedData.NavCSICP_BB066List;
        itemsBB066.value = mapFaixaEtariaToItems(updatedData.NavCSICP_BB066List);

        // Limpa os campos após a operação
        var_bb066_FaixaDe.value = '';
        var_bb066_FaixaAte.value = '';
        var_bb066_Valor.value = '';
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
    const data: FaixaEtariaConvenioCreate = {
        Bb064Fxetariaid: var_ID.value,
        Bb062Convenioid: Number(selectedConvenio.value)
    };

    try {
        await CreateVinculoConvenioFaixaEtaria(tenant, data);

        showSnackbar('Vínculo adicionado com sucesso', 'success');

        const updatedData = await GetFaixaEtariaById(tenant, props.id);
        convenioVinculados.value = updatedData.NavCSICP_BB065List;
        itemsBB065.value = mapConvenioVinculadosToItems(updatedData.NavCSICP_BB065List);

        selectedConvenio.value = '';
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

const updateItemsPerPage = (itemsPerPageValue: number) => {
    if (itemsPerPage.value !== itemsPerPageValue) {
        itemsPerPage.value = itemsPerPageValue;
        currentPage.value = 1;
        mapFaixaEtariaToItems(faixaEtaria.value);
    }
};

onMounted(() => {
    fetchFaixaEtariaById(props.id);
});
</script>
