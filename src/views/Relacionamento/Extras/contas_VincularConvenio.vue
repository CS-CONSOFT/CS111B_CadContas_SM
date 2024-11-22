<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex justify-end align-center my-2">
            <v-col cols="auto" class="d-flex justify-end">
                <cs_BtnAdicionar @click="openDialog" />
            </v-col>
        </v-row>

        <v-card class="mb-10" elevation="0">
            <v-row>
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded bg-primary">Associados</p>
                </v-col>
            </v-row>

            <!-- Lista de associados -->
            <v-row class="d-flex">
                <v-col cols="12" v-for="item in associados" :key="item.ID" class="mb-1">
                    <v-card class="border-sm border-opacity-50 mt-1 rounded-t" flat>
                        <!-- Cabeçalho -->
                        <div class="d-flex justify-between font-weight-bold bg-lightprimary pa-3 ma-0 rounded-t">
                            <v-col cols="6" class="pa-0 d-flex align-center">
                                <div>{{ item.Codigo }}{{ item.Convenio ? ' - ' + item.Convenio : '' }}</div>
                            </v-col>
                            <v-col cols="6" class="pa-0 d-flex justify-end align-center">
                                <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                                <v-icon small @click="confirmSoftDelete(item)" class="v-btn-icon">{{
                                    active ? 'mdi-cancel' : 'mdi-check'
                                }}</v-icon>
                            </v-col>
                        </div>

                        <!-- Conteúdo -->
                        <div class="d-flex justify-between">
                            <v-col cols="3">
                                <p><strong>Conta:</strong></p>
                                <p>{{ item.CodigoConta }}</p>
                            </v-col>
                            <v-col cols="3">
                                <p><strong>Associado:</strong></p>
                                <p>{{ item.Associado }}</p>
                                <p>{{ item.TipoAssociado }}</p>
                            </v-col>
                            <v-col cols="3">
                                <p><strong>Ativo:</strong></p>
                                {{ item.Ativo ? 'Sim' : 'Não' }}
                            </v-col>
                            <v-col cols="3">
                                <p><strong>Valor:</strong></p>
                                <p>R$ {{ item.Valor }}</p>
                            </v-col>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-card>

    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Associado</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <cs_SelectConvenios
                        class="mb-6"
                        v-model="var_bb060_ConvenioID"
                        Prm_etiqueta="Convênio"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />
                    <cs_SelectContatos
                        v-model="var_bb061_DependenteID"
                        Prm_etiqueta="Associado"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateAssociado" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta associação?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteContatoConfirmed" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmSoftDeleteDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-secondary"> Confirmar {{ active ? 'Inativação' : 'Ativação' }} </v-card-title>
            <v-card-text> Tem certeza de que deseja {{ active ? 'inativar' : 'ativar' }} este associado? </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelSoftDelete" />
                <cs_BtnIsActive :IsActive="active" @click="softDeleteAssociadoConfirmed" />
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
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
// Import de API's
import { GetContaById } from '../../../services/contas/bb012_conta';
import { GetAssociadosList, SaveAssociado, DeleteAssociado, SoftDeleteAssociado } from '../../../services/associados/bb061_associados';
// Import de types
import type { AssociadosCompleto, Csicp_bb061 } from '../../../types/crm/associados/bb061_associados';
import type { ContaById } from '../../../types/crm/bb012_GetContaById';
//Import de componentes
import cs_InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnIsActive from '../../../submodules/cs_components/src/components/botoes/cs_BtnIsActive.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_SelectConvenios from '../../../submodules/cs_components/src/components/selects/cs_SelectConvenios.vue';
import cs_SelectContatos from '../../../submodules/cs_components/src/components/selects/cs_SelectContatos.vue';

interface Item {
    ID: string;
    Codigo: string;
    Convenio: string;
    CodigoConta: string;
    Conta: string;
    Associado: string;
    TipoAssociado: string;
    Ativo: boolean;
    Valor: string;
}

const props = defineProps<{
    id: string;
}>();

const associados = ref<Item[]>([]);
const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);

const dialog = ref(false);
const confirmDialog = ref(false);
const confirmSoftDeleteDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);
const itemToSoftDelete = ref<Item | null>(null);
const loading = ref(false);
const active = ref(true);
const count = false;
const search = ref('');

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

//Variáveis de edição/adição
const var_bb061_Id = ref<number>(0);
const var_bb060_ConvenioID = ref<number>(0);
const var_bb061_tipoAssID = ref<number>(0);
const var_bb012_ContaId = ref<string>('');
const var_bb061_DependenteID = ref<string>('');
const var_bb061_Valor = ref<number>(0);
const var_bb061_IsActive = ref<boolean>(false);
const var_bb012_Id = ref<string>('');

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

const fetchData = async (id: string) => {
    try {
        const data: ContaById = await GetContaById(tenant, id);

        var_bb012_Id.value = data.csicp_bb012.csicp_bb012.ID;

        fetchAssociados(var_bb012_Id.value);
    } catch (error) {
        showSnackbar('Erro ao recuperar dados da conta', 'error');
    }
};

const fetchAssociados = async (id: string) => {
    loading.value = true;

    try {
        const response: AssociadosCompleto[] = await GetAssociadosList(tenant, id);

        associados.value = response.map((associados) => ({
            ID: associados.csicp_bb061.bb061_Id.toString(),
            Codigo: associados.csicp_bb060.bb060_Codigo || '',
            Convenio: associados.csicp_bb060.bb060_Descricao || '',
            CodigoConta: '',
            Conta: associados.csicp_bb061.bb012_ContaId || '',
            Associado: `${associados.csicp_bb035.BB035_PrimeiroNome} ${associados.csicp_bb035.BB035_Sobrenome}` || '',
            TipoAssociado: associados.csicp_bb061_tp.Label || '',
            Ativo: associados.csicp_bb061.bb061_IsActive,
            Valor: associados.csicp_bb061.bb061_Valor.toFixed(2)
        }));
    } catch (error) {
        console.error('Erro ao buscar associados:', error);
        return [];
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
    var_bb061_Id.value = 0;
};

const CreateOrUpdateAssociado = async () => {
    if (formRef.value.validate()) {
        try {
            const data: Csicp_bb061 = {
                bb061_Id: var_bb061_Id.value,
                bb060_ConvenioID: var_bb060_ConvenioID.value,
                bb061_tipoAssID: var_bb061_tipoAssID.value,
                bb012_ContaId: var_bb012_ContaId.value,
                bb061_DependenteID: var_bb061_DependenteID.value,
                bb061_Valor: var_bb061_Valor.value,
                bb061_IsActive: true
            };

            const response = await SaveAssociado(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Associado salvo com sucesso', 'success');
                fetchData(var_bb012_Id.value);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar o associado. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o associado', 'error');
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
        await DeleteAssociado(tenant, itemToDelete.value.ID);
        showSnackbar('Vínculo excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o vínculo', 'error');
    }
};

const confirmSoftDelete = (item: Item) => {
    confirmSoftDeleteDialog.value = true;
    itemToSoftDelete.value = item;
};

const cancelSoftDelete = () => {
    confirmSoftDeleteDialog.value = false;
};

const softDeleteAssociadoConfirmed = async () => {
    if (!itemToSoftDelete.value) return;
    try {
        await SoftDeleteAssociado(tenant, itemToSoftDelete.value.ID);
        showSnackbar(`Associado ${active.value ? 'inativado' : 'ativado'} com sucesso`, 'success');
        fetchAssociados(var_bb012_Id.value);
        confirmSoftDeleteDialog.value = false;
    } catch (error) {
        showSnackbar(`Erro ao ${active.value ? 'inativar' : 'ativar'} o associado`, 'error');
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
