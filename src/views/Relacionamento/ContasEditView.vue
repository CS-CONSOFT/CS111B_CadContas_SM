<template>
    <v-container fluid>
        <v-toolbar title="Editar Conta" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef">
            <v-card class="px-4 py-2 border ma-1" elevation="0">
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto">
                        <v-btn color="primary" @click="">Salvar</v-btn>
                    </v-col>
                </v-row>

                <v-card class="pa-2 border ma-1 mb-10" elevation="0">
                    <template v-slot:title>Conta</template>

                    <template v-slot:text class="pa-0">
                        <v-row class="d-flex">
                            <v-col cols="2"> Select </v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                        </v-row>

                        <v-row class="d-flex mt-5">
                            <v-col cols="12">
                                <p class="text-h6">Sobre</p>
                            </v-col>
                            <v-col col="6">
                                <InputTexto
                                    v-model="var_BB012_Codigo"
                                    Prm_etiqueta="Código"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="true"
                                    :rules="rules.codigo"
                                />

                                <InputTexto
                                    v-model="var_BB012_Nome_Cliente"
                                    Prm_etiqueta="Nome da Conta"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="true"
                                    :rules="rules.nome"
                                />

                                <InputTexto
                                    v-model="var_BB012_Nome_Fantasia"
                                    Prm_etiqueta="Nome Fantasia"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                            <v-col col="6">
                                <InputTexto
                                    v-model="var_BB012_Data_Aniversario"
                                    Prm_etiqueta="Data Aniversario"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                    type="date"
                                />

                                <InputTexto
                                    v-model="var_BB012_Data_Cadastro"
                                    Prm_etiqueta="Data Cadastro"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                        </v-row>
                    </template>
                </v-card>
            </v-card>
        </v-form>
    </v-container>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
// Import de API's
import { GetContaById } from '../../services/contas/bb012_conta';
// Import de types
import type { ContaById } from '../../types/crm/bb012_GetContaById';
import type { Csicp_bb012 } from '../../types/crm/bb012_conta';
//Import de componentes
import InputTexto from '../../components/campos/cs_InputTexto.vue';
import InputValor from '../../components/campos/cs_InputValor.vue';
import { User } from '@/types/login/Login';

const props = defineProps<{
    id: string;
}>();

const router = useRouter();

//Variáveis de modelo
const var_BB012_ID = ref<string>('');
const var_BB012_Codigo = ref<number>(0);
const var_BB012_Nome_Cliente = ref<string>('');
const var_BB012_Nome_Fantasia = ref<string>('');
const var_BB012_Data_Aniversario = ref<string>('');
const var_BB012_Data_Cadastro = ref<string>('');
const var_BB012_Telefone = ref<string>('');
const var_BB012_FaxCelular = ref<string>('');
const var_BB012_Home_Page = ref<string>('');
const var_BB012_Email = ref<string>('');
const var_BB012_Data_Entrada_Sit = ref<string>('');
const var_BB012_Data_Saida_Sit = ref<string>('');
const var_BB012_Descricao = ref<string>('');
const var_BB012_Is_Active = ref<boolean>(false);
const var_BB012_Tipo_Conta_ID = ref<number>(0);
const var_BB012_Grupoconta_ID = ref<number>(0);
const var_BB012_ClasseConta_ID = ref<number>(0);
const var_BB012_StatusConta_ID = ref<number>(0);
const var_BB012_Sit_Conta_ID = ref<number>(0);
const var_BB012_ModRelacao_ID = ref<number>(0);
const var_BB012_Sequence = ref<number>(0);
const var_bb012_dUltAlteracao = ref<string>('');
const var_bb012_EstabCadID = ref<string>('');
const var_bb012_KeyAcess = ref<string>('');
const var_bb012_ID_Indicador = ref<string>('');
const var_bb012_CountAppMCon = ref<number>(0);
const var_bb012_OriCadastroID = ref<number>(0);

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

const formRef = ref<any>(null);
const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

//Funções
function getUserFromLocalStorage(): User | null {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        try {
            return JSON.parse(storedUser) as User;
        } catch (e) {
            console.error('Erro ao parsear o usuário do localStorage', e);
            return null;
        }
    }

    return null;
}

const user = getUserFromLocalStorage();

const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchContaById = async (id: string) => {
    try {
        const data: ContaById = await GetContaById(user?.TenantId, id);

        var_BB012_ID.value = data.csicp_bb012.csicp_bb012.ID;
        var_BB012_Codigo.value = data.csicp_bb012.csicp_bb012.BB012_Codigo;
        var_BB012_Nome_Cliente.value = data.csicp_bb012.csicp_bb012.BB012_Nome_Cliente;
        var_BB012_Nome_Fantasia.value = data.csicp_bb012.csicp_bb012.BB012_Nome_Fantasia;
        var_BB012_Data_Aniversario.value = data.csicp_bb012.csicp_bb012.BB012_Data_Aniversario;
        var_BB012_Data_Cadastro.value = data.csicp_bb012.csicp_bb012.BB012_Data_Cadastro;
        var_BB012_Telefone.value = data.csicp_bb012.csicp_bb012.BB012_Telefone;
        var_BB012_FaxCelular.value = data.csicp_bb012.csicp_bb012.BB012_FaxCelular;
        var_BB012_Home_Page.value = data.csicp_bb012.csicp_bb012.BB012_Home_Page;
        var_BB012_Email.value = data.csicp_bb012.csicp_bb012.BB012_Email;
        var_BB012_Data_Entrada_Sit.value = data.csicp_bb012.csicp_bb012.BB012_Data_Entrada_Sit;
        var_BB012_Data_Saida_Sit.value = data.csicp_bb012.csicp_bb012.BB012_Data_Saida_Sit;
        var_BB012_Descricao.value = data.csicp_bb012.csicp_bb012.BB012_Descricao;
        var_BB012_Is_Active.value = data.csicp_bb012.csicp_bb012.BB012_Is_Active;
        var_BB012_Tipo_Conta_ID.value = data.csicp_bb012.csicp_bb012.BB012_Tipo_Conta_ID;
        var_BB012_Grupoconta_ID.value = data.csicp_bb012.csicp_bb012.BB012_Grupoconta_ID;
        var_BB012_ClasseConta_ID.value = data.csicp_bb012.csicp_bb012.BB012_ClasseConta_ID;
        var_BB012_StatusConta_ID.value = data.csicp_bb012.csicp_bb012.BB012_StatusConta_ID;
        var_BB012_Sit_Conta_ID.value = data.csicp_bb012.csicp_bb012.BB012_Sit_Conta_ID;
        var_BB012_ModRelacao_ID.value = data.csicp_bb012.csicp_bb012.BB012_ModRelacao_ID;
        var_BB012_Sequence.value = data.csicp_bb012.csicp_bb012.BB012_Sequence;
        var_bb012_dUltAlteracao.value = data.csicp_bb012.csicp_bb012.bb012_dUltAlteracao;
        var_bb012_EstabCadID.value = data.csicp_bb012.csicp_bb012.bb012_EstabCadID;
        var_bb012_KeyAcess.value = data.csicp_bb012.csicp_bb012.bb012_KeyAcess;
        var_bb012_ID_Indicador.value = data.csicp_bb012.csicp_bb012.bb012_ID_Indicador;
        var_bb012_CountAppMCon.value = data.csicp_bb012.csicp_bb012.bb012_CountAppMCon;
        var_bb012_OriCadastroID.value = data.csicp_bb012.csicp_bb012.bb012_OriCadastroID;

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    }
};

onMounted(() => {
    fetchContaById(props.id);
    getUserFromLocalStorage();
});
</script>
