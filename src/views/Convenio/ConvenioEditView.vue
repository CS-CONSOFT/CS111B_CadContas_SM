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
import { GetConvenioById, UpdateConvenio } from '../../services/convenio/bb060_convenio';
// Import de types
import type { ConvenioById, ConvenioCreate } from '../../types/convenio/bb060_convenio';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
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
        const res: ConvenioById = await GetConvenioById(tenant, id);
        const data = res.Data;

        BB060.value.bb060_ConvenioId = data.Bb060Convenioid;
        BB060.value.bb060_Codigo = data.Bb060Codigo;
        BB060.value.bb060_Descricao = data.Bb060Descricao;
        BB060.value.bb060_vBase = `${data.Bb060Vbase.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        BB060.value.bb060_CCustoID = data.Bb060Ccustoid;
        BB060.value.bb060_UsuarioProprieID = data.Bb060Usuarioproprieid;
        BB060.value.bb060_AgCobradorID = data.Bb060Agcobradorid;
        BB060.value.bb060_ResponsavelID = data.Bb060Responsavelid;
        BB060.value.bb060_CondicaoID = data.Bb060Condicaoid;
        BB060.value.bb060_TipoCobrancaID = data.Bb060Tipocobrancaid;
        BB060.value.bb060_UsuarioInc = data.Bb060Usuarioinc;
        BB060.value.bb060_UsuarioAlt = data.Bb060Usuarioalt;
        BB060.value.bb060_dthrInc = data.Bb060Dthrinc;
        BB060.value.bb060_dthrAlt = data.Bb060Dthralt;
        BB060.value.bb060_EspecieID = data.Bb060Especieid;
        BB060.value.bb060_FPagto_ID = data.Bb060FpagtoId;
        BB060.value.bb060_IsActive = data.Bb060Isactive;
        BB060.value.bb060_ConvMasterID = data.Bb060Convmasterid;
    } catch (error) {
        console.error('Erro ao buscar convênio:', error);
    }
};

async function CreateOrUpdateConvenio() {
    if (formRef.value && formRef.value.validate()) {
        const data: ConvenioCreate = {
            Bb060Codigo: BB060.value.bb060_Codigo,
            Bb060Descricao: BB060.value.bb060_Descricao,
            Bb060Vbase: parseFloat(BB060.value.bb060_vBase),
            Bb060Ccustoid: BB060.value.bb060_CCustoID,
            Bb060Usuarioproprieid: BB060.value.bb060_UsuarioProprieID,
            Bb060Agcobradorid: BB060.value.bb060_AgCobradorID,
            Bb060Responsavelid: BB060.value.bb060_ResponsavelID,
            Bb060Condicaoid: BB060.value.bb060_CondicaoID,
            Bb060Tipocobrancaid: BB060.value.bb060_TipoCobrancaID,
            Bb060Usuarioinc: BB060.value.bb060_UsuarioInc,
            Bb060Usuarioalt: BB060.value.bb060_UsuarioAlt,
            Bb060Dthrinc: BB060.value.bb060_dthrInc,
            Bb060Dthralt: BB060.value.bb060_dthrAlt,
            Bb060Especieid: BB060.value.bb060_EspecieID,
            Bb060FpagtoId: BB060.value.bb060_FPagto_ID,
            Bb060Convmasterid: BB060.value.bb060_ConvMasterID
        };

        try {
            const response = await UpdateConvenio(tenant, BB060.value.bb060_ConvenioId, data);
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
