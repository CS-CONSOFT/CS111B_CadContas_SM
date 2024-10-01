<template></template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../../stores/auth';
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

const props = defineProps<{
    id: string;
}>();

const authStore = useAuthStore();
const tenant = authStore.user?.TenantId;
const router = useRouter();

//Variáveis de modelo

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
const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchContaById = async (id: string) => {
    try {
        const data: ContaById = await GetContaById(tenant, id);

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    }
};

onMounted(() => {
    fetchContaById(props.id);
});
</script>
