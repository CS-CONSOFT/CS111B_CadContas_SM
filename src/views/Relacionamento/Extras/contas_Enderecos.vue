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
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Endereços</p>
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
                <template v-slot:item.actions="{ item, index }">
                    <v-icon small @click="openEditDialog(item, index)" class="v-btn-icon">mdi-pencil</v-icon>
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-card>

    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <v-card-title class="pa-4 bg-lightprimary">
                <span class="text-h5">{{ itemToEdit ? 'Editar' : 'Adicionar' }} Endereços</span>
            </v-card-title>
            <v-card-text>
                <v-form ref="formRef">
                    <cs_SelectTpEndereco
                        v-model="var_TipoEndereco"
                        class="mb-6"
                        Prm_etiqueta="Tipo"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="false"
                    />

                    <div class="d-flex">
                        <v-col cols="8" class="pa-0">
                            <cs_InputTexto
                                v-model="var_Logradouro"
                                Prm_etiqueta="Logradouro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                        <v-col cols="4" class="pa-0 pl-4">
                            <cs_InputTexto
                                v-model="var_Numero"
                                Prm_etiqueta="Número"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                    </div>

                    <cs_InputTexto v-model="var_Complemento" Prm_etiqueta="Complemento" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <cs_InputTexto v-model="var_Perimetro" Prm_etiqueta="Perimetro" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <cs_SelectPaises
                        v-model="var_SelectedPais"
                        @update:modelValue="onPaisSelecionado"
                        class="mb-6"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />

                    <div class="d-flex">
                        <v-col cols="6" class="pa-0">
                            <cs_SelectUF
                                :selectedPais="var_SelectedPais"
                                v-model="var_SelectedUF"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                                class="mb-6"
                            />
                        </v-col>
                        <v-col cols="6" class="pa-0 pl-4">
                            <cs_SelectCidades
                                :selectedUF="var_SelectedUF"
                                v-model="var_SelectedCidade"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                                class="mb-5"
                            />
                        </v-col>
                    </div>

                    <div class="d-flex">
                        <v-col cols="6" class="pa-0">
                            <cs_InputTexto
                                v-model="var_Bairro"
                                Prm_etiqueta="Bairro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />
                        </v-col>
                        <v-col cols="6" class="pa-0 pl-4">
                            <cs_InputCep
                                :initialCep="var_CEP"
                                :readonly="false"
                                :Prm_isObrigatorio="true"
                                @cep-info="handleCepInfo"
                                :rules="rules.nome"
                            />
                        </v-col>
                    </div>

                    <cs_InputTexto v-model="var_Email" Prm_etiqueta="Email" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <div class="d-flex">
                        <v-col cols="8" class="pa-0">
                            <cs_InputTexto
                                v-model="var_Telefone"
                                Prm_etiqueta="Telefone"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col cols="4" class="pa-0 pl-4">
                            <cs_InputTexto v-model="var_Fax" Prm_etiqueta="Celular" :Prm_limpavel="false" :Prm_isObrigatorio="false" />
                        </v-col>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <cs_BtnCancelar @click="closeDialog" />
                <cs_BtnSalvar @click="CreateOrUpdateOutrosEnderecos" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir este endereço?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteOutrosEnderecosConfirmed" />
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
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
// Import de API's
import { GetContaById } from '../../../services/contas/bb012_conta';
import { SaveOutrosEnderecos, DeleteOutrosEnderecos } from '../../../services/contas/bb012j_OutrosEnderecos/bb012j_enderecos';
// Import de types
import type { ContaById, Csicp_bb012062, Csicp_bb012j, Outros_Endereco } from '../../../types/crm/bb012_GetContaById';
import type { CEP } from '../../../submodules/cs_components/src/types/enderecamento/CepTypes';
import type { OutrosEnderecosType } from '../../../services/contas/bb012j_OutrosEnderecos/bb012j_enderecoTypes';
//Import de componentes
import cs_InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_SelectPaises from '../../../submodules/cs_components/src/components/selects/cs_SelectPaises.vue';
import cs_SelectUF from '../../../submodules/cs_components/src/components/selects/cs_SelectUF.vue';
import cs_SelectCidades from '../../../submodules/cs_components/src/components/selects/cs_SelectCidades.vue';
import cs_InputCep from '../../../submodules/cs_components/src/components/campos/cs_InputCep.vue';
import cs_SelectTpEndereco from '../../../submodules/cs_components/src/components/selects/cs_SelectTpEndereco.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    Tipo: string;
    Cidade: string;
    Logradouro: string;
    Email: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Tipo Endereço',
        value: 'Tipo',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Cidade',
        value: 'Cidade',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Logradouro',
        value: 'Logradouro',
        sortable: true,
        width: '40%',
        align: 'start'
    },
    {
        title: 'Email',
        value: 'Email',
        sortable: true,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '15%'
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
const confirmDialog = ref<boolean>(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);

//Variáveis de edição/adição
const var_bb012j = ref('');
const var_bb01206_Id = ref('');
const var_bb012_Id = ref('');
const var_TipoEndereco = ref<number>();
const var_Logradouro = ref<string>('');
const var_Numero = ref<string>('');
const var_Complemento = ref<string>('');
const var_Perimetro = ref<string>('');
const var_SelectedPais = ref<string>('');
const var_SelectedUF = ref<string>('');
const var_SelectedCidade = ref<string>('');
const var_Bairro = ref<string>('');
const var_CEP = ref<string>('');
const var_Email = ref<string>('');
const var_Telefone = ref<string>('');
const var_Fax = ref<string>('');

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

const onPaisSelecionado = (value: any) => {
    var_SelectedPais.value = value;
};

const handleCepInfo = (info: CEP) => {
    var_Logradouro.value = info.logradouro || '';
    var_Bairro.value = info.bairro || '';
    var_Complemento.value = info.complemento || '';
};

const fetchData = async (id: string) => {
    loading.value = true;
    try {
        const data: ContaById = await GetContaById(tenant, id);
        items.value = data.Outros_Endereco.map((item: Outros_Endereco) => ({
            ID: item.csicp_bb012j.ID,
            BB012_ID: item.csicp_bb012j.BB012_ID,
            Tipo: item.csicp_bb012j_TpEnd.Label,
            Cidade: item.Endereco.csicp_aa028.AA028_Cidade,
            Logradouro: `${item.Endereco.csicp_bb01206.BB012_Logradouro} - ${item.Endereco.csicp_bb01206.BB012_CEP}`,
            Email: item.csicp_bb012j.BB012j_Email
        }));

        //Solução temporaria para sempre ter o ID da BB012 preenchido para usar nas APIs.
        var_bb012_Id.value = data.csicp_bb012.csicp_bb012.ID;
    } catch (error) {
        showSnackbar('Erro ao buscar bem.', 'error');
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
    var_bb012j.value = '';
    var_bb01206_Id.value = '';
    var_TipoEndereco.value = 0;
    var_Logradouro.value = '';
    var_Numero.value = '';
    var_Complemento.value = '';
    var_Perimetro.value = '';
    var_SelectedPais.value = '';
    var_SelectedUF.value = '';
    var_SelectedCidade.value = '';
    var_Bairro.value = '';
    var_CEP.value = '';
    var_Email.value = '';
    var_Telefone.value = '';
    var_Fax.value = '';
};

const openEditDialog = async (item: Item, index: number) => {
    dialog.value = true;
    itemToEdit.value = item;
    try {
        const data: ContaById = await GetContaById(tenant, props.id);

        var_bb012j.value = data.Outros_Endereco[index].csicp_bb012j.ID;
        var_bb01206_Id.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.Id;
        var_bb012_Id.value = data.Outros_Endereco[index].csicp_bb012j.BB012_ID;
        var_TipoEndereco.value = data.Outros_Endereco[index].csicp_bb012j.BB012j_TipoEndereco;
        var_Logradouro.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Logradouro;
        var_Numero.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Numero;
        var_Complemento.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Complemento;
        var_Perimetro.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Perimetro;
        var_SelectedPais.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Codigo_Pais;
        var_SelectedUF.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_UF;
        var_SelectedCidade.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Codigo_Cidade;
        var_Bairro.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_Bairro;
        var_CEP.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.BB012_CEP.toString();
        var_Email.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.bb012_email;
        var_Telefone.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.bb012_Telefone;
        var_Fax.value = data.Outros_Endereco[index].Endereco.csicp_bb01206.bb012_Celular;
    } catch (error) {
        showSnackbar('Erro ao buscar dados do endereço', 'error');
    }
};

const CreateOrUpdateOutrosEnderecos = async () => {
    if (formRef.value.validate()) {
        try {
            const BB012j: Csicp_bb012j = {
                ID: var_bb012j.value ? var_bb012j.value : '',
                BB012_ID: var_bb012_Id.value,
                BB012j_Telefone: var_Telefone.value,
                BB012j_Fax: var_Fax.value,
                BB012j_Email: var_Email.value,
                BB012j_TipoEndereco: var_TipoEndereco.value!
            };

            const BB01206: Csicp_bb012062 = {
                Id: var_bb01206_Id.value ? var_bb01206_Id.value : '',
                BB012_ID: '',
                BB012J_EnderecoID: var_bb012j.value ? var_bb012j.value : '',
                BB012_Logradouro: var_Logradouro.value,
                BB012_Numero: var_Numero.value,
                BB012_Complemento: var_Complemento.value,
                BB012_Perimetro: var_Perimetro.value,
                BB012_CodgBairro: '',
                BB012_Bairro: var_Bairro.value,
                BB012_Codigo_Cidade: var_SelectedCidade.value,
                BB012_UF: var_SelectedUF.value,
                BB012_CEP: Number(var_CEP.value),
                BB012_Codigo_Pais: var_SelectedPais.value,
                BB012_Entrega_Logradouro: '',
                BB012_Entrega_Numero: '',
                BB012_Entrega_Complement: '',
                BB012_Entrega_CodgBairro: '',
                BB012_Entrega_Bairro: '',
                BB012_Entrega_Cod_Cidade: '',
                BB012_Entrega_Uf: '',
                BB012_Entrega_CEP: 0,
                BB012_Entrega_Pais: '',
                BB012_Entrega_Perimetro: '',
                bb012_Telefone: var_Telefone.value,
                bb012_Celular: var_Fax.value,
                bb012_email: var_Email.value
            };

            const in_bb012j_OutrosEnd: OutrosEnderecosType = {
                csicp_bb012j: BB012j,
                csicp_bb01206: BB01206
            };
            const response = await SaveOutrosEnderecos(tenant, in_bb012j_OutrosEnd);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Endereço salvo com sucesso', 'success');
                fetchData(props.id);
                dialog.value = false;
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar o endereço.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao salvar o endereço', 'error');
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

const deleteOutrosEnderecosConfirmed = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteOutrosEnderecos(tenant, itemToDelete.value.ID);
        showSnackbar('Endereço excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o endereço', 'error');
    }
};

watch(var_SelectedUF, (newValue) => {
    var_SelectedCidade.value = '';
});

onMounted(() => {
    fetchData(props.id);
});
</script>
