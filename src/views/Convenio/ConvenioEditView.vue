<template>
    <v-container fluid>
        <v-toolbar title="Editar Convênio" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Convenio">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef">
            <v-row class="d-flex mt-5 px-4">
                <v-col cols="6">
                    <cs_InputTexto
                        v-model="BB060.bb060_Codigo"
                        Prm_etiqueta="Código"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />

                    <cs_InputTexto
                        v-model="BB060.bb060_Descricao"
                        Prm_etiqueta="Descrição"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />

                    <cs_InputTexto v-model="BB060.bb060_vBase" Prm_etiqueta="Valor" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                    <cs_SelectCentroDeCusto class="mb-6" v-model="BB060.bb060_CCustoID" :Prm_isObrigatorio="false" />

                    <cs_SelectAgCobrador class="mb-5" v-model="BB060.bb060_AgCobradorID" :Prm_isObrigatorio="false" />

                    <cs_SelectConvenioMaster class="mb-5" v-model="BB060.bb060_ConvMasterID" :Prm_isObrigatorio="false" />
                </v-col>
                <v-col cols="6">
                    <cs_SelectEspecie class="mb-5" v-model="BB060.bb060_EspecieID" :Prm_isObrigatorio="false" />

                    <cs_SelectTpCobranca class="mb-5" v-model="BB060.bb060_TipoCobrancaID" :Prm_isObrigatorio="false" />

                    <cs_SelectFormaPagto class="mb-6" v-model="BB060.bb060_FPagto_ID" :Prm_isObrigatorio="false" />

                    <cs_SelectCondicaoPagto class="mb-6" v-model="BB060.bb060_CondicaoID" :Prm_isObrigatorio="false" />

                    <cs_SelectResponsaveis class="mb-6" v-model="BB060.bb060_ResponsavelID" :Prm_isObrigatorio="false" />

                    <v-checkbox v-model="BB060.bb060_IsActive" label="Ativo?"></v-checkbox>
                </v-col>
            </v-row>
            <v-row class="d-flex flex-row-reverse my-2">
                <v-col cols="auto">
                    <cs_BtnSalvar @click="CreateOrUpdateConvenio()" />
                    <cs_BtnCancelar class="ml-4" to="/Convenio" />
                </v-col>
            </v-row>
        </v-form>
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
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetConvenioById, SaveConvenio } from '../../services/convenio/bb060_convenio';
// Import de types
import type { ConvenioById, Csicp_bb060 } from '../../types/convenio/bb060_GetConvenioById';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_InputValor from '../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_SelectCentroDeCusto from '../../submodules/cs_components/src/components/selects/cs_SelectCentroDeCusto.vue';
import cs_SelectEspecie from '../../submodules/cs_components/src/components/selects/cs_SelectEspecie.vue';
import cs_SelectFormaPagto from '../../submodules/cs_components/src/components/selects/cs_SelectFormaPagto.vue';
import cs_SelectCondicaoPagto from '../../submodules/cs_components/src/components/selects/cs_SelectCondicaoPagto.vue';
import cs_SelectResponsaveis from '../../submodules/cs_components/src/components/selects/cs_SelectResponsaveis.vue';
import cs_SelectAgCobrador from '../../submodules/cs_components/src/components/selects/cs_SelectAgCobrador.vue';
import cs_SelectConvenioMaster from '../../submodules/cs_components/src/components/selects/cs_SelectConvenioMaster.vue';
import cs_SelectTpCobranca from '../../submodules/cs_components/src/components/selects/cs_SelectTpCobranca.vue';

const props = defineProps<{
    id: string;
}>();

//Variáveis de modelo
const BB060 = ref<any>({
    bb060_ConvenioId: 0,
    bb060_Codigo: '',
    bb060_Descricao: '',
    bb060_vBase: '',
    bb060_CCustoID: '',
    bb060_UsuarioProprieID: '',
    bb060_AgCobradorID: '',
    bb060_ResponsavelID: '',
    bb060_CondicaoID: '',
    bb060_TipoCobrancaID: '',
    bb060_UsuarioInc: '',
    bb060_UsuarioAlt: '',
    bb060_dthrInc: '',
    bb060_dthrAlt: '',
    bb060_EspecieID: '',
    bb060_FPagto_ID: '',
    bb060_IsActive: false,
    bb060_ConvMasterID: 0
});

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();
const formRef = ref<any>(null);

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

const fetchConvenioById = async (id: string) => {
    try {
        const data: ConvenioById = await GetConvenioById(tenant, id);

        BB060.value.bb060_ConvenioId = data.csicp_bb060.bb060_ConvenioId;
        BB060.value.bb060_Codigo = data.csicp_bb060.bb060_Codigo;
        BB060.value.bb060_Descricao = data.csicp_bb060.bb060_Descricao;
        BB060.value.bb060_vBase = `${data.csicp_bb060.bb060_vBase.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        BB060.value.bb060_CCustoID = data.csicp_bb060.bb060_CCustoID;
        BB060.value.bb060_UsuarioProprieID = data.csicp_bb060.bb060_UsuarioProprieID;
        BB060.value.bb060_AgCobradorID = data.csicp_bb060.bb060_AgCobradorID;
        BB060.value.bb060_ResponsavelID = data.csicp_bb060.bb060_ResponsavelID;
        BB060.value.bb060_CondicaoID = data.csicp_bb060.bb060_CondicaoID;
        BB060.value.bb060_TipoCobrancaID = data.csicp_bb060.bb060_TipoCobrancaID;
        BB060.value.bb060_UsuarioInc = data.csicp_bb060.bb060_UsuarioInc;
        BB060.value.bb060_UsuarioAlt = data.csicp_bb060.bb060_UsuarioAlt;
        BB060.value.bb060_dthrInc = data.csicp_bb060.bb060_dthrInc;
        BB060.value.bb060_dthrAlt = data.csicp_bb060.bb060_dthrAlt;
        BB060.value.bb060_EspecieID = data.csicp_bb060.bb060_EspecieID;
        BB060.value.bb060_FPagto_ID = data.csicp_bb060.bb060_FPagto_ID;
        BB060.value.bb060_IsActive = data.csicp_bb060.bb060_IsActive;
        BB060.value.bb060_ConvMasterID = data.csicp_bb060.bb060_ConvMasterID;
    } catch (error) {
        console.error('Erro ao buscar convênio:', error);
    }
};

async function CreateOrUpdateConvenio() {
    if (formRef.value && formRef.value.validate()) {
        const data: Csicp_bb060 = {
            bb060_ConvenioId: BB060.value.bb060_ConvenioId,
            bb060_Codigo: BB060.value.bb060_Codigo,
            bb060_Descricao: BB060.value.bb060_Descricao,
            bb060_vBase: BB060.value.bb060_vBase,
            bb060_CCustoID: BB060.value.bb060_CCustoID,
            bb060_UsuarioProprieID: BB060.value.bb060_UsuarioProprieID,
            bb060_AgCobradorID: BB060.value.bb060_AgCobradorID,
            bb060_ResponsavelID: BB060.value.bb060_ResponsavelID,
            bb060_CondicaoID: BB060.value.bb060_CondicaoID,
            bb060_TipoCobrancaID: BB060.value.bb060_TipoCobrancaID,
            bb060_UsuarioInc: BB060.value.bb060_UsuarioInc,
            bb060_UsuarioAlt: BB060.value.bb060_UsuarioAlt,
            bb060_dthrInc: BB060.value.bb060_dthrInc,
            bb060_dthrAlt: BB060.value.bb060_dthrAlt,
            bb060_EspecieID: BB060.value.bb060_EspecieID,
            bb060_FPagto_ID: BB060.value.bb060_FPagto_ID,
            bb060_IsActive: BB060.value.bb060_IsActive,
            bb060_ConvMasterID: BB060.value.bb060_ConvMasterID
        };

        try {
            const response = await SaveConvenio(tenant, data);
            if (response.data.Out_IsSuccess) {
                showSnackbar('Convênio editado com sucesso', 'success');
                setTimeout(() => {
                    router.push({
                        name: 'Convenio'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Out_Message || 'Erro ao editar convênio', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao editar o convênio', 'error');
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
}

onMounted(() => {
    fetchConvenioById(props.id);
});
</script>
