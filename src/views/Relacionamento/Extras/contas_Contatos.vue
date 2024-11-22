<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex my-2">
            <v-col cols="12" class="d-flex justify-end">
                <cs_BtnAdicionar @click="openDialog" />
            </v-col>
        </v-row>

        <v-card class="border mb-10" elevation="0">
            <v-row class="pa-0">
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Contatos</p>
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
                <template v-slot:item.Grau="{ item, index }">
                    <div class="d-flex align-center pa-1" v-if="editingIndex === index">
                        <v-col cols="9" class="py-0">
                            <cs_SelectGrauParentesco
                                v-model="editableGrauParentesco"
                                Prm_etiqueta="Grau de Parentesco"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                dense
                            />
                        </v-col>
                        <v-col cols="3" class="d-flex justify-end align-center py-0">
                            <v-icon small class="mr-1" @click="UpdateGrauParentesco(index)">mdi-content-save</v-icon>
                            <v-icon small @click="cancelEditGrauParentesco">mdi-close</v-icon>
                        </v-col>
                    </div>
                    <div class="d-flex align-center" v-else>
                        <v-col cols="12" class="py-0">
                            {{ item.Grau }}
                            <v-icon class="ml-3" small @click="startEditGrauParentesco(index, item.Grau_ID)">mdi-pencil</v-icon>
                        </v-col>
                    </div>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small @click="openEditDialog(item)" class="v-btn-icon">mdi-pencil</v-icon>
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-card>

    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Contato</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <cs_SelectContatos
                        class="mb-6"
                        v-model="var_SelectedContato"
                        Prm_etiqueta="Contato"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />

                    <cs_SelectGrauParentesco
                        v-model="var_SelectedGrauParentesco"
                        Prm_etiqueta="Grau de Parentesco"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="adicionarContato" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEdit" max-width="900">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">Editar Contato</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRefContato">
                    <div class="d-flex">
                        <v-col cols="6">
                            <cs_InputTexto
                                v-model="var_Tratamento"
                                Prm_etiqueta="Tratamento"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Nome"
                                        Prm_etiqueta="Primeiro Nome"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="true"
                                        :rules="rules.nome"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_Sobrenome"
                                        Prm_etiqueta="Sobrenome"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Email"
                                        Prm_etiqueta="Email"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_EmailSecundario"
                                        Prm_etiqueta="Email Secundário"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Titulo"
                                        Prm_etiqueta="Título"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_Departamento"
                                        Prm_etiqueta="Departamento"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="var_Aniversario"
                                Prm_etiqueta="Aniversário"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                type="date"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Telefone"
                                        Prm_etiqueta="Telefone"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_OutroTelefone"
                                        Prm_etiqueta="Outro Telefone"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto v-model="var_Celular" Prm_etiqueta="Celular" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <cs_InputTexto v-model="var_Fax" Prm_etiqueta="Fax" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <cs_InputTexto
                                v-model="var_TelefoneResidencia"
                                Prm_etiqueta="Telefone Residêncial"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col cols="6">
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Assistente"
                                        Prm_etiqueta="Assistente"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_TelefoneAssistente"
                                        Prm_etiqueta="Telefone Assistente"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto v-model="var_CPF" Prm_etiqueta="CPF" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto v-model="var_RG" Prm_etiqueta="RG" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_ComplementoRG"
                                        Prm_etiqueta="Complemento RG"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="4" class="pa-0">
                                    <cs_InputCep
                                        :initialCep="var_CEP"
                                        :readonly="false"
                                        :Prm_isObrigatorio="false"
                                        @cep-info="handleCepInfo"
                                    />
                                </v-col>
                                <v-col cols="8" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_Logradouro"
                                        Prm_etiqueta="Logradouro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="4" class="pa-0">
                                    <cs_InputTexto
                                        v-model="var_Numero"
                                        Prm_etiqueta="Número"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="8" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="var_Complemento"
                                        Prm_etiqueta="Complemento"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_SelectPaises
                                v-model="var_SelectedPais"
                                @update:modelValue="onPaisSelecionado"
                                class="mb-5"
                                :Prm_isObrigatorio="false"
                            />

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_SelectUF :selectedPais="var_SelectedPais" v-model="var_SelectedUF" class="mb-6" />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_SelectCidades :selectedUF="var_SelectedUF" v-model="var_SelectedCidade" class="mb-5" />
                                </v-col>
                            </div>

                            <cs_InputTexto v-model="var_Bairro" Prm_etiqueta="Bairro" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <cs_InputTexto
                                v-model="var_Descricao"
                                Prm_etiqueta="Descrição"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeEditDialog" />
                <cs_BtnSalvar @click="saveContato" />
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
import { GetContaById } from '../../../services/contas/bb012_conta';
import { SaveContato, DeleteContato } from '../../../services/contas/bb01208_Contato/bb01208_contato';
import { GetContatoById, SaveContatoBB035 } from '../../../services/contas/bb035_Contato/bb035_contato';
// Import de types
import type { ContaById, Contatos, Csicp_bb01208 } from '../../../types/crm/bb012_GetContaById';
import type { ContatoById, Csicp_bb035, Csicp_bb035_end } from '../../../types/crm/contatos/bb035_GetContatoById';
import type { CEP } from '../../../submodules/cs_components/src/types/enderecamento/CepTypes';
import type { ContatosTypes } from '../../../services/contas/bb035_Contato/bb035_contatoTypes';
//Import de componentes
import cs_InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_SelectContatos from '../../../submodules/cs_components/src/components/selects/cs_SelectContatos.vue';
import cs_SelectGrauParentesco from '../../../submodules/cs_components/src/components/selects/cs_SelectGrauParentesco.vue';
import cs_InputCep from '../../../submodules/cs_components/src/components/campos/cs_InputCep.vue';
import cs_SelectPaises from '../../../submodules/cs_components/src/components/selects/cs_SelectPaises.vue';
import cs_SelectUF from '../../../submodules/cs_components/src/components/selects/cs_SelectUF.vue';
import cs_SelectCidades from '../../../submodules/cs_components/src/components/selects/cs_SelectCidades.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    BB035_ID: string;
    Contato: string;
    Grau: string;
    Grau_ID: number;
    Telefone: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Contato',
        value: 'Contato',
        sortable: true,
        width: '40%',
        align: 'start'
    },
    {
        title: 'Grau de Parentesco',
        value: 'Grau',
        sortable: false,
        width: '30%',
        align: 'center'
    },
    {
        title: 'Telefone',
        value: 'Telefone',
        sortable: false,
        width: '20%',
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

const props = defineProps<{
    id: string;
}>();

const items = ref<Item[]>([]);
const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);
const formRefContato = ref<any>(null);

const loading = ref(false);
const search = ref<string>('');
const dialog = ref<boolean>(false);
const dialogEdit = ref<boolean>(false);
const confirmDialog = ref<boolean>(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);
const editingIndex = ref<number | null>(null);
const editableTelefone = ref<string>('');
const editableGrauParentesco = ref<number>(0);

//Variáveis de edição/adição
const var_Id = ref<string>('');
const var_bb012_Id = ref<string>('');
const var_SelectedContato = ref<string>('');
const var_SelectedGrauParentesco = ref<number>(0);

//Variáveis de edição de contato (BB035)
const var_bb035_id = ref<string>('');
const var_Tratamento = ref<number>(0);
const var_Nome = ref<string>('');
const var_Sobrenome = ref<string>('');
const var_GrauParentesco = ref<number>(0);
const var_Email = ref<string>('');
const var_EmailSecundario = ref<string>('');
const var_Titulo = ref<string>('');
const var_Departamento = ref<string>('');
const var_Aniversario = ref<string>('');
const var_Telefone = ref<string>('');
const var_OutroTelefone = ref<string>('');
const var_Celular = ref<string>('');
const var_Fax = ref<string>('');
const var_TelefoneResidencia = ref<string>('');
const var_Assistente = ref<string>('');
const var_TelefoneAssistente = ref<string>('');
const var_CPF = ref<string>('');
const var_RG = ref<string>('');
const var_ComplementoRG = ref<string>('');
const var_Logradouro = ref<string>('');
const var_Numero = ref<string>('');
const var_Complemento = ref<string>('');
const var_SelectedPais = ref<string>('');
const var_SelectedUF = ref<string>('');
const var_SelectedCidade = ref<string>('');
const var_Bairro = ref<string>('');
const var_CEP = ref<string>('');
const var_Descricao = ref<string>('');

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

const handleCepInfo = (info: CEP) => {
    var_Logradouro.value = info.logradouro || '';
    var_Bairro.value = info.bairro || '';
    var_Complemento.value = info.complemento || '';
};

const onPaisSelecionado = (value: any) => {
    var_SelectedPais.value = value;
};

const fetchData = async (id: string) => {
    loading.value = true;
    try {
        const data: ContaById = await GetContaById(tenant, id);
        items.value = data.Contatos.map((item: Contatos) => ({
            ID: item.csicp_bb01208.Id,
            BB012_ID: item.csicp_bb01208.BB012_ID,
            BB035_ID: item.csicp_bb035.Id,
            Contato: `${item.csicp_bb035.BB035_PrimeiroNome} ${item.csicp_bb035.BB035_Sobrenome}`,
            Grau: item.csicp_bb035_gpa.Label,
            Telefone: item.csicp_bb035.BB035_Telefone,
            Grau_ID: item.csicp_bb01208.BB01208_GrauParent_ID
        }));

        //Solução temporaria para sempre ter o ID da BB012 preenchido para usar nas APIs.
        var_bb012_Id.value = data.csicp_bb012.csicp_bb012.ID;
    } catch (error) {
        showSnackbar('Erro ao buscar contato.', 'error');
    } finally {
        loading.value = false;
    }
};

function cancelEditGrauParentesco() {
    editingIndex.value = null;
    editableTelefone.value = '';
}

function startEditGrauParentesco(index: number, grau: number) {
    editingIndex.value = index;
    editableGrauParentesco.value = grau;
}

const UpdateGrauParentesco = async (index: number) => {
    if (editingIndex.value !== null) {
        try {
            const data: Csicp_bb01208 = {
                Id: items.value[index].ID,
                BB012_ID: items.value[index].BB012_ID,
                BB012_ContatoID: items.value[index].BB035_ID,
                BB036_CandidatoID: '',
                BB043_CampanhaId: '',
                BB042_PotencialID: '',
                BB040_AtividadeID: '',
                BB041_CasoID: '',
                BB01208_Is_Active: true,
                ConcorrenteID: '',
                BB01208_GrauParent_ID: editableGrauParentesco.value
            };

            const response = await SaveContato(tenant, data);
            if (response.data.Out_IsSuccess) {
                showSnackbar('Grau de parentesco atualizado com sucesso', 'success');
                fetchData(props.id);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar o grau de parentesco. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o contato', 'error');
        } finally {
            // Encerra o modo de edição
            editingIndex.value = null;
            editableGrauParentesco.value = 0;
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
};

const closeDialog = () => {
    dialog.value = false;
};

const openDialog = () => {
    dialog.value = true;
    itemToEdit.value = null;
    var_Id.value = '';
    var_SelectedContato.value = '';
    var_SelectedGrauParentesco.value = 0;
};

const adicionarContato = async () => {
    if (formRef.value.validate()) {
        try {
            const data: Csicp_bb01208 = {
                Id: var_Id.value ? var_Id.value : '',
                BB012_ID: var_bb012_Id.value,
                BB012_ContatoID: var_SelectedContato.value,
                BB036_CandidatoID: '',
                BB043_CampanhaId: '',
                BB042_PotencialID: '',
                BB040_AtividadeID: '',
                BB041_CasoID: '',
                BB01208_Is_Active: true,
                ConcorrenteID: '',
                BB01208_GrauParent_ID: var_SelectedGrauParentesco.value
            };

            const response = await SaveContato(tenant, data);
            if (response.data.Out_IsSuccess) {
                showSnackbar('Contato salva com sucesso', 'success');
                fetchData(props.id);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar a contato. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o contato', 'error');
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
};

const closeEditDialog = () => {
    dialogEdit.value = false;
};

const openEditDialog = async (item: Item) => {
    dialogEdit.value = true;
    itemToEdit.value = item;
    try {
        const data: ContatoById = await GetContatoById(tenant, itemToEdit.value.BB035_ID);

        // Mapear dados do contato (csicp_bb035)
        var_bb035_id.value = data.csicp_bb035.Id;
        var_Tratamento.value = data.csicp_bb035?.BB035_Tratamento_ID ?? 0;
        var_Nome.value = data.csicp_bb035?.BB035_PrimeiroNome ?? '';
        var_Sobrenome.value = data.csicp_bb035?.BB035_Sobrenome ?? '';
        var_Email.value = data.csicp_bb035?.BB035_EMail ?? '';
        var_EmailSecundario.value = data.csicp_bb035?.BB035_EMailSecundario ?? '';
        var_Titulo.value = data.csicp_bb035?.BB035_Titulo ?? '';
        var_Departamento.value = data.csicp_bb035?.BB035_Departamento ?? '';
        var_Aniversario.value = data.csicp_bb035?.BB035_Data_Aniversario ?? '';
        var_Telefone.value = data.csicp_bb035?.BB035_Telefone ?? '';
        var_OutroTelefone.value = data.csicp_bb035?.BB035_OutroTelefone ?? '';
        var_Celular.value = data.csicp_bb035?.BB035_Celular ?? '';
        var_Fax.value = data.csicp_bb035?.BB035_Fax ?? '';
        var_TelefoneResidencia.value = data.csicp_bb035?.BB035_TelefoneResidencia ?? '';
        var_Assistente.value = data.csicp_bb035?.BB035_Assistente ?? '';
        var_TelefoneAssistente.value = data.csicp_bb035?.BB035_TelefoneAssist ?? '';
        var_CPF.value = data.csicp_bb035?.BB035_CPF ?? '';
        var_RG.value = data.csicp_bb035?.BB035_RG?.toString() ?? '';
        var_ComplementoRG.value = data.csicp_bb035?.BB035_Orgao_Exped_RG ?? '';
        var_Descricao.value = data.csicp_bb035?.BB035_Descricao ?? '';

        // Mapear dados de endereço (csicp_bb035_end)
        var_Logradouro.value = data.csicp_bb035_end?.BB035_Logradouro ?? '';
        var_Numero.value = data.csicp_bb035_end?.BB035_Numero ?? '';
        var_Complemento.value = data.csicp_bb035_end?.BB035_Complemento ?? '';
        var_Bairro.value = data.csicp_bb035_end?.BB035_Bairro ?? '';
        var_SelectedCidade.value = data.csicp_bb035_end?.BB035_Codigo_Cidade ?? '';
        var_SelectedUF.value = data.csicp_bb035_end?.BB035_UF ?? '';
        var_CEP.value = data.csicp_bb035_end?.BB035_CEP ?? '';
        var_SelectedPais.value = data.csicp_bb035_end?.BB035_Codigo_Pais ?? '';

        // Mapear dados de origem de contato e grau de parentesco
        var_GrauParentesco.value = data.csicp_bb035_Origem?.Id ?? 0;
    } catch (error) {
        showSnackbar('Erro ao buscar dados do contato', 'error');
    }
};

async function saveContato() {
    if (formRefContato.value.validate()) {
        try {
            const csicp_bb035: Csicp_bb035 = {
                Id: var_bb035_id.value,
                BB035_PrimeiroNome: var_Nome.value,
                BB035_Sobrenome: var_Sobrenome.value,
                BB035_EMail: var_Email.value,
                BB035_Titulo: var_Titulo.value,
                BB035_Departamento: var_Departamento.value,
                BB035_Data_Aniversario: var_Aniversario.value,
                BB035_Telefone: var_Telefone.value,
                BB035_OutroTelefone: var_OutroTelefone.value,
                BB035_Celular: var_Celular.value,
                BB035_Fax: var_Fax.value,
                BB035_TelefoneResidencia: var_TelefoneResidencia.value,
                BB035_Descricao: var_Descricao.value,
                BB035_Assistente: var_Assistente.value,
                BB035_TelefoneAssist: var_TelefoneAssistente.value,
                BB035_EMailSecundario: var_EmailSecundario.value,
                BB035_CPF: var_CPF.value,
                BB035_RG: parseInt(var_RG.value) || 0,
                BB035_Orgao_Exped_RG: var_ComplementoRG.value,
                BB035_Data_Emissao_RG: '',
                BB035_Is_Active: true,
                BB035_Tratamento_ID: var_Tratamento.value,
                BB035_OrigemContato_ID: var_GrauParentesco.value
            };

            const csicp_bb035_end: Csicp_bb035_end = {
                bb035_Id: var_bb035_id.value,
                BB035_ContatoID: '',
                BB035_Logradouro: var_Logradouro.value,
                BB035_Numero: var_Numero.value,
                BB035_Complemento: var_Complemento.value,
                BB035_Bairro: var_Bairro.value,
                BB035_Codigo_Cidade: var_SelectedCidade.value,
                BB035_UF: var_SelectedUF.value,
                BB035_CEP: var_CEP.value,
                BB035_Codigo_Pais: var_SelectedPais.value
            };

            const data: ContatosTypes = {
                csicp_bb035: csicp_bb035,
                csicp_bb035_end: csicp_bb035_end
            };
            const response = await SaveContatoBB035(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Contato atualizado com sucesso', 'success');
                fetchData(props.id);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ou atualizar contato. Verifique os dados.', 'error');
            }
        } catch (error) {
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
        await DeleteContato(tenant, itemToDelete.value.ID);
        showSnackbar('Contato excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o contato', 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
