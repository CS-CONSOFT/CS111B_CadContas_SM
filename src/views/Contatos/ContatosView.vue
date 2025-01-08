<template>
    <v-container fluid class="border-sm rounded bg- ma-0">
        <div>
            <v-row class="pa-4 pt-7">
                <p class="text-h2 mb-5">Contatos</p>
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
                                    <v-card-title class="font-weight-bold bg-lightprimary rounded-t-sm"
                                        >{{ item.Nome }} {{ item.Sobrenome }}</v-card-title
                                    >
                                    <v-card-text class="pl-4 pt-2">
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

    <v-dialog v-model="dialog" max-width="900">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Contato</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <div class="d-flex">
                        <v-col cols="6">
                            <cs_SelectTratamento
                                v-model="var_BB035_Tratamento_ID"
                                Prm_etiqueta="Tratamento"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                style="margin-bottom: 22px"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_PrimeiroNome"
                                        Prm_etiqueta="Primeiro Nome"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="true"
                                        :rules="rules.nome"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_Sobrenome"
                                        Prm_etiqueta="Sobrenome"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_EMail"
                                        Prm_etiqueta="Email"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_EMailSecundario"
                                        Prm_etiqueta="Email Secundário"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_Titulo"
                                        Prm_etiqueta="Título"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_Departamento"
                                        Prm_etiqueta="Departamento"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="var_BB035_Data_Aniversario"
                                Prm_etiqueta="Aniversário"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                type="date"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTelefone
                                        v-model="var_BB035_Telefone"
                                        Prm_etiqueta="Telefone"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTelefone
                                        v-model="var_BB035_OutroTelefone"
                                        Prm_etiqueta="Outro Telefone"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputCelular
                                v-model="var_BB035_Celular"
                                Prm_etiqueta="Celular"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto v-model="var_BB035_Fax" Prm_etiqueta="Fax" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <cs_InputTelefone
                                v-model="var_BB035_TelefoneResidencia"
                                Prm_etiqueta="Telefone Residencial"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>

                        <v-col cols="6">
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_Assistente"
                                        Prm_etiqueta="Assistente"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_TelefoneAssist"
                                        Prm_etiqueta="Telefone Assistente"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputCPF
                                v-model="var_BB035_CPF"
                                Prm_etiqueta="CPF"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                @cpf-limpo="capturarCpfLimpo"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_RG"
                                        Prm_etiqueta="RG"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_Orgao_Exped_RG"
                                        Prm_etiqueta="Complemento RG"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputCep
                                        :initialCep="var_BB035_CEP"
                                        :readonly="false"
                                        :Prm_isObrigatorio="false"
                                        @cep-info="handleCepInfo"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_Logradouro"
                                        Prm_etiqueta="Logradouro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="4" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_BB035_Numero"
                                        Prm_etiqueta="Número"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="8" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_BB035_Complemento"
                                        Prm_etiqueta="Complemento"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_SelectPaises
                                v-model="var_BB035_Codigo_Pais"
                                @update:modelValue="onPaisSelecionado"
                                class="mb-5"
                                :Prm_isObrigatorio="false"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_SelectUF :selectedPais="var_BB035_Codigo_Pais" v-model="var_BB035_UF" class="mb-6" />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_SelectCidades :selectedUF="var_BB035_UF" v-model="var_BB035_Codigo_Cidade" class="mb-5" />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="var_BB035_Bairro"
                                Prm_etiqueta="Bairro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="var_BB035_Descricao"
                                Prm_etiqueta="Descrição"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateContato" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir este contato?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteContatoConfirmed" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmSoftDeleteDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error"> Confirmar {{ active ? 'Inativação' : 'Ativação' }} </v-card-title>
            <v-card-text> Tem certeza de que deseja {{ active ? 'inativar' : 'ativar' }} este contato? </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="" />
                <cs_BtnIsActive :IsActive="active" @click="" />
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
import { GetContatosList, GetContatoById, SaveContatoBB035, DeleteContatoBB035 } from '../../services/contas/bb035_Contato/bb035_contato';
// Import de Types
import type { AxiosResponse } from 'axios';
import type { ContatosCompleto, ApiResponse, Lista_bb035_List } from '../../types/crm/contatos/bb035_contatos';
import type { ContatoById, Csicp_bb035, Csicp_bb035_end } from '../../types/crm/contatos/bb035_GetContatoById';
import type { ContatosTypes } from '../../services/contas/bb035_Contato/bb035_contatoTypes';
import type { CEP } from '../../submodules/cs_components/src/types/enderecamento/CepTypes';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import Pagination from '../../submodules/cs_components/src/components/navigation/Pagination.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnAdicionar from '../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnIsActive from '../../submodules/cs_components/src/components/botoes/cs_BtnIsActive.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_InputCep from '../../submodules/cs_components/src/components/campos/cs_InputCep.vue';
import cs_SelectPaises from '../../submodules/cs_components/src/components/selects/cs_SelectPaises.vue';
import cs_SelectUF from '../../submodules/cs_components/src/components/selects/cs_SelectUF.vue';
import cs_SelectCidades from '../../submodules/cs_components/src/components/selects/cs_SelectCidades.vue';
import cs_InputTelefone from '../../submodules/cs_components/src/components/campos/cs_InputTelefone.vue';
import cs_InputCelular from '../../submodules/cs_components/src/components/campos/cs_InputCelular.vue';
import cs_SelectTratamento from '../../submodules/cs_components/src/components/selects/cs_SelectTratamento.vue';
import cs_InputCPF from '../../submodules/cs_components/src/components/campos/cs_InputCPF.vue';

interface Item {
    ID: string;
    Nome: string;
    Sobrenome: string;
    Email: string;
    Telefone: string;
    Ativo: boolean;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Nome',
        value: 'Nome',
        sortable: true,
        width: '30%',
        align: 'start'
    },
    {
        title: 'Sobrenome',
        value: 'Sobrenome',
        width: '30%',
        align: 'start'
    },
    {
        title: 'Email',
        value: 'Email',
        width: '15%',
        align: 'start'
    },
    {
        title: 'Telefone',
        value: 'Telefone',
        width: '15%',
        align: 'center'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '10%'
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

//Variáveis de edição para csicp_bb035
const var_Id = ref<string>('');
const var_BB035_PrimeiroNome = ref<string>('');
const var_BB035_Sobrenome = ref<string>('');
const var_BB035_EMail = ref<string>('');
const var_BB035_Titulo = ref<string>('');
const var_BB035_Departamento = ref<string>('');
const var_BB035_Data_Aniversario = ref<string>('');
const var_BB035_Telefone = ref<string>('');
const var_BB035_OutroTelefone = ref<string>('');
const var_BB035_Celular = ref<string>('');
const var_BB035_Fax = ref<string>('');
const var_BB035_TelefoneResidencia = ref<string>('');
const var_BB035_Descricao = ref<string>('');
const var_BB035_Assistente = ref<string>('');
const var_BB035_TelefoneAssist = ref<string>('');
const var_BB035_EMailSecundario = ref<string>('');
const var_BB035_CPF = ref<string>('');
const var_BB035_RG = ref<number>(0.1);
const var_BB035_Orgao_Exped_RG = ref<string>('');
const var_BB035_Data_Emissao_RG = ref<string>('');
const var_BB035_Is_Active = ref<boolean>(false);
const var_BB035_Tratamento_ID = ref<number>(0);
const var_BB035_OrigemContato_ID = ref<number>(0);
// Variáveis para csicp_bb035_end
const var_bb035_Id = ref<string>('');
const var_BB035_ContatoID = ref<string>('');
const var_BB035_Logradouro = ref<string>('');
const var_BB035_Numero = ref<string>('');
const var_BB035_Complemento = ref<string>('');
const var_BB035_Bairro = ref<string>('');
const var_BB035_Codigo_Cidade = ref<string>('');
const var_BB035_UF = ref<string>('');
const var_BB035_CEP = ref<string>('');
const var_BB035_Codigo_Pais = ref<string>('');

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);
const cpfClear = ref<number>(0);

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

const handleCepInfo = (info: CEP) => {
    var_BB035_Logradouro.value = info.logradouro;
    var_BB035_Bairro.value = info.bairro;
    var_BB035_Complemento.value = info.complemento;
    var_BB035_CEP.value = limparCep(info.cep);
};

function capturarCpfLimpo(cpf: any) {
    cpfClear.value = cpf;
}

function limparCep(cepComMascara: string): string {
    return cepComMascara.replace(/\D/g, '');
}

const onPaisSelecionado = (value: any) => {
    var_BB035_Codigo_Pais.value = value;
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
        const response: AxiosResponse<ApiResponse<ContatosCompleto>> = await GetContatosList(
            tenant,
            active.value,
            count,
            search.value,
            currentPage.value,
            itemsPerPage.value
        );
        const data = response.data;
        items.value = data.Lista_bb035_List.map((item: Lista_bb035_List) => ({
            ID: item.csicp_bb035.Id,
            Nome: item.csicp_bb035.BB035_PrimeiroNome,
            Sobrenome: item.csicp_bb035.BB035_Sobrenome,
            Email: item.csicp_bb035.BB035_EMail,
            Telefone: item.csicp_bb035.BB035_Telefone,
            Ativo: item.csicp_bb035.BB035_Is_Active
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

    var_Id.value = '';
    var_BB035_PrimeiroNome.value = '';
    var_BB035_Sobrenome.value = '';
    var_BB035_EMail.value = '';
    var_BB035_Titulo.value = '';
    var_BB035_Departamento.value = '';
    var_BB035_Data_Aniversario.value = '';
    var_BB035_Telefone.value = '';
    var_BB035_OutroTelefone.value = '';
    var_BB035_Celular.value = '';
    var_BB035_Fax.value = '';
    var_BB035_TelefoneResidencia.value = '';
    var_BB035_Descricao.value = '';
    var_BB035_Assistente.value = '';
    var_BB035_TelefoneAssist.value = '';
    var_BB035_EMailSecundario.value = '';
    var_BB035_CPF.value = '';
    var_BB035_RG.value = 0;
    var_BB035_Orgao_Exped_RG.value = '';
    var_BB035_Data_Emissao_RG.value = '';
    var_BB035_Is_Active.value = false;
    var_BB035_Tratamento_ID.value = 0;
    var_BB035_OrigemContato_ID.value = 0;

    var_bb035_Id.value = '';
    var_BB035_ContatoID.value = '';
    var_BB035_Logradouro.value = '';
    var_BB035_Numero.value = '';
    var_BB035_Complemento.value = '';
    var_BB035_Bairro.value = '';
    var_BB035_Codigo_Cidade.value = '';
    var_BB035_UF.value = '';
    var_BB035_CEP.value = '';
    var_BB035_Codigo_Pais.value = '';
};

const openEditDialog = async (item: Item) => {
    dialog.value = true;
    itemToEdit.value = item;

    try {
        const data: ContatoById = await GetContatoById(tenant, item.ID);

        // Atribuindo os dados da estrutura "csicp_bb035"
        var_Id.value = data.csicp_bb035.Id;
        var_BB035_PrimeiroNome.value = data.csicp_bb035.BB035_PrimeiroNome;
        var_BB035_Sobrenome.value = data.csicp_bb035.BB035_Sobrenome;
        var_BB035_EMail.value = data.csicp_bb035.BB035_EMail;
        var_BB035_Titulo.value = data.csicp_bb035.BB035_Titulo;
        var_BB035_Departamento.value = data.csicp_bb035.BB035_Departamento;
        var_BB035_Data_Aniversario.value = data.csicp_bb035.BB035_Data_Aniversario;
        var_BB035_Telefone.value = data.csicp_bb035.BB035_Telefone;
        var_BB035_OutroTelefone.value = data.csicp_bb035.BB035_OutroTelefone;
        var_BB035_Celular.value = data.csicp_bb035.BB035_Celular;
        var_BB035_Fax.value = data.csicp_bb035.BB035_Fax;
        var_BB035_TelefoneResidencia.value = data.csicp_bb035.BB035_TelefoneResidencia;
        var_BB035_Descricao.value = data.csicp_bb035.BB035_Descricao;
        var_BB035_Assistente.value = data.csicp_bb035.BB035_Assistente;
        var_BB035_TelefoneAssist.value = data.csicp_bb035.BB035_TelefoneAssist;
        var_BB035_EMailSecundario.value = data.csicp_bb035.BB035_EMailSecundario;
        var_BB035_CPF.value = data.csicp_bb035.BB035_CPF;
        var_BB035_RG.value = data.csicp_bb035.BB035_RG;
        var_BB035_Orgao_Exped_RG.value = data.csicp_bb035.BB035_Orgao_Exped_RG;
        var_BB035_Data_Emissao_RG.value = data.csicp_bb035.BB035_Data_Emissao_RG;
        var_BB035_Is_Active.value = data.csicp_bb035.BB035_Is_Active;
        var_BB035_Tratamento_ID.value = data.csicp_bb035.BB035_Tratamento_ID;
        var_BB035_OrigemContato_ID.value = data.csicp_bb035.BB035_OrigemContato_ID;

        // Atribuindo os dados da estrutura "csicp_bb035_end"
        var_bb035_Id.value = data.csicp_bb035_end.bb035_Id;
        var_BB035_ContatoID.value = data.csicp_bb035_end.BB035_ContatoID;
        var_BB035_Logradouro.value = data.csicp_bb035_end.BB035_Logradouro;
        var_BB035_Numero.value = data.csicp_bb035_end.BB035_Numero;
        var_BB035_Complemento.value = data.csicp_bb035_end.BB035_Complemento;
        var_BB035_Bairro.value = data.csicp_bb035_end.BB035_Bairro;
        var_BB035_Codigo_Cidade.value = data.csicp_bb035_end.BB035_Codigo_Cidade;
        var_BB035_UF.value = data.csicp_bb035_end.BB035_UF;
        var_BB035_CEP.value = data.csicp_bb035_end.BB035_CEP;
        var_BB035_Codigo_Pais.value = data.csicp_bb035_end.BB035_Codigo_Pais;
    } catch (error) {
        showSnackbar('Erro ao buscar dados do contato', 'error');
    }
};

async function CreateOrUpdateContato() {
    if (formRef.value.validate()) {
        try {
            const csicp_bb035: Csicp_bb035 = {
                Id: var_Id.value ? var_Id.value : '',
                BB035_PrimeiroNome: var_BB035_PrimeiroNome.value,
                BB035_Sobrenome: var_BB035_Sobrenome.value,
                BB035_EMail: var_BB035_EMail.value,
                BB035_Titulo: var_BB035_Titulo.value,
                BB035_Departamento: var_BB035_Departamento.value,
                BB035_Data_Aniversario: var_BB035_Data_Aniversario.value,
                BB035_Telefone: var_BB035_Telefone.value,
                BB035_OutroTelefone: var_BB035_OutroTelefone.value,
                BB035_Celular: var_BB035_Celular.value,
                BB035_Fax: var_BB035_Fax.value,
                BB035_TelefoneResidencia: var_BB035_TelefoneResidencia.value,
                BB035_Descricao: var_BB035_Descricao.value,
                BB035_Assistente: var_BB035_Assistente.value,
                BB035_TelefoneAssist: var_BB035_TelefoneAssist.value,
                BB035_EMailSecundario: var_BB035_EMailSecundario.value,
                BB035_CPF: cpfClear.value.toString(),
                BB035_RG: var_BB035_RG.value,
                BB035_Orgao_Exped_RG: var_BB035_Orgao_Exped_RG.value,
                BB035_Data_Emissao_RG: var_BB035_Data_Emissao_RG.value,
                BB035_Is_Active: true,
                BB035_Tratamento_ID: var_BB035_Tratamento_ID.value,
                BB035_OrigemContato_ID: var_BB035_OrigemContato_ID.value
            };

            const csicp_bb035_end: Csicp_bb035_end = {
                bb035_Id: var_bb035_Id.value,
                BB035_ContatoID: var_Id.value ? var_Id.value : '',
                BB035_Logradouro: var_BB035_Logradouro.value,
                BB035_Numero: var_BB035_Numero.value,
                BB035_Complemento: var_BB035_Complemento.value,
                BB035_Bairro: var_BB035_Bairro.value,
                BB035_Codigo_Cidade: var_BB035_Codigo_Cidade.value,
                BB035_UF: var_BB035_UF.value,
                BB035_CEP: var_BB035_CEP.value,
                BB035_Codigo_Pais: var_BB035_Codigo_Pais.value
            };

            const data: ContatosTypes = {
                csicp_bb035: csicp_bb035,
                csicp_bb035_end: csicp_bb035_end
            };

            const response = await SaveContatoBB035(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Contato atualizado com sucesso', 'success');
                fetchData();
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar contato. Verifique os dados.', 'error');
            }
        } catch (error) {
            console.error(error);
            snackbarMessage.value = 'Erro ao atualizar o contato. Verifique sua conexão ou tente novamente.';
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

const deleteContatoConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteContatoBB035(tenant, itemToDelete.value.ID);
        showSnackbar('Contato excluído com sucesso', 'success');
        fetchData();
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o contato', 'error');
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
