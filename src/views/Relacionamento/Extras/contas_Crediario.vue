<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-card class="border mb-10" elevation="0">
            <v-row class="pa-0">
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Crediário</p>
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
                <template v-slot:item.Crediario="{ item }">
                    <p>
                        <a :href="item.parsedJson.orgaosprotecaocredito.link" target="_blank" rel="noopener noreferrer">
                            {{ item.parsedJson.orgaosprotecaocredito.link }}
                        </a>
                    </p>
                </template>
            </v-data-table>
        </v-card>
    </v-card>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
// Import de API's
import { GetContaById } from '../../../services/contas/bb012_conta';
// Import de types
import type { ContaById, Csicp_bb01203, MeuCrediario } from '../../../types/crm/bb012_GetContaById';
//Import de componentes
import cs_InputTexto from '../../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';

interface Item {
    ID: number;
    BB012_ID: string;
    parsedJson?: Record<string, any>;
}
//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Crediário',
        value: 'Crediario',
        sortable: true,
        width: '100%',
        align: 'start'
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
const search = ref('');
const dialog = ref(false);
const confirmDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);

//Variáveis de edição/adição
const var_Id = ref('');
const var_bb012_Id = ref('');
const var_Nota = ref('');

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

const fetchData = async (id: string) => {
    loading.value = true;

    try {
        const data: ContaById = await GetContaById(tenant, id);

        items.value = data.MeuCrediario.map((item: MeuCrediario) => ({
            ID: item.Id,
            BB012_ID: item.bb012_ContaId,
            parsedJson: item.bb01209_json ? JSON.parse(item.bb01209_json) : undefined
        }));

        // Solução temporária para sempre ter o ID da BB012 preenchido para usar nas APIs.
        var_bb012_Id.value = data.csicp_bb012.csicp_bb012.ID;
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchData(props.id);
});
</script>
