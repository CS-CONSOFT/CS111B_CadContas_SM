<template>
    <v-form ref="formRef">
        <v-card class="border-sm border-opacity-50 mt-1 pa-4" elevation="0">
            <v-tabs v-model="tab" align-tabs="start" color="primary" class="rounded">
                <v-tab value="one">Tipo de Conta</v-tab>
                <v-tab value="two">Dados</v-tab>
                <v-tab value="three">Crédito</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-row class="d-flex flex-row-reverse my-2">
                            <v-col cols="auto">
                                <v-btn color="primary" @click="">Salvar</v-btn>
                                <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                            </v-col>
                        </v-row>

                        <v-row class="d-flex mt-5 px-4">
                            <v-col cols="6">
                                <InputTexto v-model="BB01202.BB012_RG" Prm_etiqueta="RG" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                                <InputTexto
                                    v-model="BB01202.BB012_ComplementoRG"
                                    Prm_etiqueta="Complemento RG"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <InputTexto
                                    v-model="BB01202.BB012_EmissaoRG"
                                    Prm_etiqueta="Emissão RG"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <InputTexto
                                    v-model="BB01202.BB012_PIS"
                                    Prm_etiqueta="PIS"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <div class="d-flex">
                                    <v-col cols="6" class="pa-0">
                                        <InputTexto
                                            v-model="BB01202.BB012_Sexo_ID"
                                            Prm_etiqueta="Sexo"
                                            :Prm_limpavel="false"
                                            :Prm_isObrigatorio="false"
                                        />
                                    </v-col>
                                    <v-col cols="6" class="pa-0 pl-4">
                                        <InputTexto
                                            v-model="BB01202.BB012_EstadoCivil_ID"
                                            Prm_etiqueta="Estado Civi"
                                            :Prm_limpavel="false"
                                            :Prm_isObrigatorio="false"
                                        />
                                    </v-col>
                                </div>

                                <InputTexto
                                    v-model="BB01202.BB012_NaturalDe_ID"
                                    Prm_etiqueta="Naturalidade"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <InputTexto
                                    v-model="BB01202.BB012_GEscolaridade_ID"
                                    Prm_etiqueta="Escolaridade"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <InputTexto
                                    v-model="BB01202.BB012_ResideDesde"
                                    Prm_etiqueta="Reside Desde"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                            <v-col cols="6">
                                <InputTexto
                                    v-model="BB01202.BB012_TipoDomicilio_ID"
                                    Prm_etiqueta="Tipo Domicilio"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <v-col cols="12" class="py-5">
                                    <p class="text-h5 rounded">Trabalho</p>
                                </v-col>

                                <InputTexto
                                    v-model="BB01202.BB012_Empresa"
                                    Prm_etiqueta="Empresa"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <InputTexto
                                    v-model="BB01202.BB012_Emp_Endereco"
                                    Prm_etiqueta="Endereço Empresa"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                            </v-col>
                        </v-row>
                    </v-window-item>
                    <v-window-item value="two"></v-window-item>
                    <v-window-item value="three"></v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </v-form>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
// Import de API's
import { GetContaById } from '../../services/contas/bb012_conta';
// Import de types
import type { ContaById } from '../../types/crm/bb012_GetContaById';
import type { BB01206, BB012, BB01202 } from '../../views/Relacionamento/bb012_Types';
//Import de componentes
import InputTexto from '../../components/campos/cs_InputTexto.vue';
import { User } from '@/types/login/Login';

const props = defineProps<{
    id: string;
}>();

const router = useRouter();
const tab = ref(null);

//Variáveis de modelo
const BB01202 = ref<BB01202>({
    Id: '',
    BB012_CNPJ: 0,
    BB012_InscEstadual: 0,
    BB012_SUFRAMA: '',
    BB012_RegSUFRAMAValido: 0,
    BB012_RegJuntaComercial: '',
    BB012_DataRegJunta: '',
    BB012_Patrimonio: 0,
    BB012_Capital_Social: 0,
    BB012_CPF: 0,
    BB012_RG: 0,
    BB012_ComplementoRG: '',
    BB012_EmissaoRG: '',
    BB012_PIS: 0,
    BB012_ResideDesde: '',
    BB012_NroDependentes: 0,
    BB012_EmpAdmissao: '',
    BB012_Emp_Profissao: '',
    BB012_ValorRemuneracao: 0,
    BB012_OutrosRendimentos: 0,
    BB012_OrigemOutrosRend: '',
    BB012_Insc_Est_SNI_ID: 0,
    BB012_Sexo_ID: 0,
    BB012_EstadoCivil_ID: 0,
    BB012_TipoDomicilio_ID: 0,
    BB012_CompResid01_ID: 0,
    BB012_CompResid02_ID: 0,
    BB012_GEscolaridade_ID: 0,
    BB012_Ocupacao_Id: 0,
    BB012_NaturalDe_ID: '',
    BB012_TpTributacao_ID: 0,
    BB012_Ident_Estrangeiro: '',
    BB012_Empresa: '',
    BB012_Emp_Endereco: '',
    BB012_Emp_Grupo_ID: 0,
    BB012_MotDesoneracaoID: 0
});

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

        BB01202.value.Id = data.BB01202.csicp_bb01202.Id;
        BB01202.value.BB012_CNPJ = data.BB01202.csicp_bb01202.BB012_CNPJ;
        BB01202.value.BB012_InscEstadual = data.BB01202.csicp_bb01202.BB012_InscEstadual;
        BB01202.value.BB012_SUFRAMA = data.BB01202.csicp_bb01202.BB012_SUFRAMA;
        BB01202.value.BB012_RegSUFRAMAValido = data.BB01202.csicp_bb01202.BB012_RegSUFRAMAValido;
        BB01202.value.BB012_RegJuntaComercial = data.BB01202.csicp_bb01202.BB012_RegJuntaComercial;
        BB01202.value.BB012_DataRegJunta = data.BB01202.csicp_bb01202.BB012_DataRegJunta;
        BB01202.value.BB012_Patrimonio = data.BB01202.csicp_bb01202.BB012_Patrimonio;
        BB01202.value.BB012_Capital_Social = data.BB01202.csicp_bb01202.BB012_Capital_Social;
        BB01202.value.BB012_CPF = data.BB01202.csicp_bb01202.BB012_CPF;
        BB01202.value.BB012_RG = data.BB01202.csicp_bb01202.BB012_RG;
        BB01202.value.BB012_ComplementoRG = data.BB01202.csicp_bb01202.BB012_ComplementoRG;
        BB01202.value.BB012_EmissaoRG = data.BB01202.csicp_bb01202.BB012_EmissaoRG;
        BB01202.value.BB012_PIS = data.BB01202.csicp_bb01202.BB012_PIS;
        BB01202.value.BB012_ResideDesde = data.BB01202.csicp_bb01202.BB012_ResideDesde;
        BB01202.value.BB012_NroDependentes = data.BB01202.csicp_bb01202.BB012_NroDependentes;
        BB01202.value.BB012_EmpAdmissao = data.BB01202.csicp_bb01202.BB012_EmpAdmissao;
        BB01202.value.BB012_Emp_Profissao = data.BB01202.csicp_bb01202.BB012_Emp_Profissao;
        BB01202.value.BB012_ValorRemuneracao = data.BB01202.csicp_bb01202.BB012_ValorRemuneracao;
        BB01202.value.BB012_OutrosRendimentos = data.BB01202.csicp_bb01202.BB012_OutrosRendimentos;
        BB01202.value.BB012_OrigemOutrosRend = data.BB01202.csicp_bb01202.BB012_OrigemOutrosRend;
        BB01202.value.BB012_Insc_Est_SNI_ID = data.BB01202.csicp_bb01202.BB012_Insc_Est_SNI_ID;
        BB01202.value.BB012_Sexo_ID = data.BB01202.csicp_bb01202.BB012_Sexo_ID;
        BB01202.value.BB012_EstadoCivil_ID = data.BB01202.csicp_bb01202.BB012_EstadoCivil_ID;
        BB01202.value.BB012_TipoDomicilio_ID = data.BB01202.csicp_bb01202.BB012_TipoDomicilio_ID;
        BB01202.value.BB012_CompResid01_ID = data.BB01202.csicp_bb01202.BB012_CompResid01_ID;
        BB01202.value.BB012_CompResid02_ID = data.BB01202.csicp_bb01202.BB012_CompResid02_ID;
        BB01202.value.BB012_GEscolaridade_ID = data.BB01202.csicp_bb01202.BB012_GEscolaridade_ID;
        BB01202.value.BB012_Ocupacao_Id = data.BB01202.csicp_bb01202.BB012_Ocupacao_Id;
        BB01202.value.BB012_NaturalDe_ID = data.BB01202.csicp_bb01202.BB012_NaturalDe_ID;
        BB01202.value.BB012_TpTributacao_ID = data.BB01202.csicp_bb01202.BB012_TpTributacao_ID;
        BB01202.value.BB012_Ident_Estrangeiro = data.BB01202.csicp_bb01202.BB012_Ident_Estrangeiro;
        BB01202.value.BB012_Empresa = data.BB01202.csicp_bb01202.BB012_Empresa;
        BB01202.value.BB012_Emp_Endereco = data.BB01202.csicp_bb01202.BB012_Emp_Endereco;
        BB01202.value.BB012_Emp_Grupo_ID = data.BB01202.csicp_bb01202.BB012_Emp_Grupo_ID;
        BB01202.value.BB012_MotDesoneracaoID = data.BB01202.csicp_bb01202.BB012_MotDesoneracaoID;

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar os dados.', 'error');
    }
};

onMounted(() => {
    fetchContaById(props.id);
    getUserFromLocalStorage();
});
</script>
