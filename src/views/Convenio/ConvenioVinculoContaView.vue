<template></template>
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
</script>
