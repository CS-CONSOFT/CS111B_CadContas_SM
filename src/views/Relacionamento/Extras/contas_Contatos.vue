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
                            <v-icon small @click="cancelEdit">mdi-close</v-icon>
                        </v-col>
                    </div>
                    <div class="d-flex align-center" v-else>
                        <v-col cols="12" class="py-0">
                            {{ item.Grau }}
                            <v-icon class="ml-3" small @click="startEdit(index, item.Grau_ID)">mdi-pencil</v-icon>
                        </v-col>
                    </div>
                </template>
                <template v-slot:item.actions="{ item, index }">
                    <v-icon small @click="openEditDialog(item, index)" class="v-btn-icon">mdi-pencil</v-icon>
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
                        v-model="var_GrauParentesco"
                        Prm_etiqueta="Grau de Parentesco"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateContato" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="dialogEdit" max-width="700">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">Editar Contato</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef"> </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeEditDialog" />
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
import { GetContatoById, SaveContatoBB035, DeleteContatoBB035 } from '@/services/contas/bb035_Contato/bb035_contato';
// Import de types
import type { ContaById, Contatos, Csicp_bb01208 } from '../../../types/crm/bb012_GetContaById';
import type { ContatoById, Csicp_bb035 } from '../../../types/crm/bb035_GetContatoById';
//Import de componentes
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_SelectContatos from '../../../submodules/cs_components/src/components/selects/cs_SelectContatos.vue';
import cs_SelectGrauParentesco from '@/components/select/cs_SelectGrauParentesco.vue';

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
const var_Id = ref('');
const var_bb012_Id = ref('');
const var_SelectedContato = ref<string>('');
const var_GrauParentesco = ref<number>(0);

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

function startEdit(index: number, grau: number) {
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

function cancelEdit() {
    editingIndex.value = null;
    editableTelefone.value = '';
}

async function saveTelefone(index: number) {
    if (editingIndex.value !== null) {
        try {
            const data: Csicp_bb035 = {
                Id: '',
                BB035_PrimeiroNome: '',
                BB035_Sobrenome: '',
                BB035_EMail: '',
                BB035_Titulo: '',
                BB035_Departamento: '',
                BB035_Data_Aniversario: '',
                BB035_Telefone: editableTelefone.value,
                BB035_OutroTelefone: '',
                BB035_Celular: '',
                BB035_Fax: '',
                BB035_TelefoneResidencia: '',
                BB035_Descricao: '',
                BB035_Assistente: '',
                BB035_TelefoneAssist: '',
                BB035_EMailSecundario: '',
                BB035_CPF: '',
                BB035_RG: 0,
                BB035_Orgao_Exped_RG: '',
                BB035_Data_Emissao_RG: '',
                BB035_Is_Active: false,
                BB035_Tratamento_ID: 0,
                BB035_OrigemContato_ID: 0
            };

            const response = await SaveContatoBB035(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Contato atualizado com sucesso', 'success');
                fetchData(props.id);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar ao atualizar contato. Verifique os dados.', 'error');
            }
        } catch (error) {
            console.error(error);
            snackbarMessage.value = 'Erro ao atualizar o contato. Verifique sua conexão ou tente novamente.';
        }
    }
}

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

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar contato.', 'error');
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
    var_SelectedContato.value = '';
    var_GrauParentesco.value = 0;
};

const closeEditDialog = () => {
    dialogEdit.value = false;
};

const openEditDialog = async (item: Item, index: number) => {
    dialogEdit.value = true;
    itemToEdit.value = item;
    try {
        const data: ContatoById = await GetContatoById(tenant, itemToEdit.value.BB035_ID);
        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar dados do contato', 'error');
    }
};

const CreateOrUpdateContato = async () => {
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
                BB01208_GrauParent_ID: var_GrauParentesco.value
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
        showSnackbar('Contato excluída com sucesso', 'success');
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
