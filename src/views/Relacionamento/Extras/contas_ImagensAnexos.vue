<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex my-2">
            <v-col cols="8">
                <v-btn color="primary" @click="">Editar</v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-end">
                <v-btn color="primary" @click="">Salvar</v-btn>

                <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
            </v-col>
        </v-row>

        <v-card class="border mb-10" elevation="0">
            <v-row>
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Imagens Anexos</p>
                </v-col>
            </v-row>
        </v-card>
    </v-card>
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
import { useRouter } from 'vue-router';
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
// Import de API's
// Import de types
//Import de componentes
import InputTexto from '../../components/campos/cs_InputTexto.vue';

const props = defineProps<{
    id: string;
}>();

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
</script>
