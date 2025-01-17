<template>
    <v-container fluid>
        <v-toolbar title="Criar Faixa Etária" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/FaixaEtaria">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef" class="border rounded">
            <v-row class="d-flex mt-5 px-4">
                <v-col cols="12" class="align-center">
                    <cs_InputTexto
                        v-model="var_bb064_Descricao"
                        Prm_etiqueta="Descrição"
                        :Prm_limpavel="false"
                        :Prm_isObrigatorio="true"
                        :rules="rules.nome"
                    />
                </v-col>
            </v-row>
            <v-row class="d-flex flex-row-reverse my-2">
                <v-col cols="auto">
                    <cs_BtnSalvar @click="CreateOrUpdateFaixaEtaria()" />
                    <cs_BtnCancelar class="mx-4" to="/FaixaEtaria" />
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { CreateFaixaEtaria } from '../../services/faixa_etaria/bb064_faixaEtaria';
// Import de Types
import type { FaixaEtariaCreate } from '../../types/faixa_etaria/bb064_faixaEtaria';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();
const formRef = ref<any>(null);

//Variáveis de modelo bb064
const var_ID = ref<number>(0);
const var_bb064_Descricao = ref<string>('');
const var_bb064_IsActive = ref<boolean>(false);

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

async function CreateOrUpdateFaixaEtaria() {
    if (formRef.value.validate()) {
        try {
            const data: FaixaEtariaCreate = {
                Bb064Descricao: var_bb064_Descricao.value
            };

            const response = await CreateFaixaEtaria(tenant, data);

            if (response.data.Out_IsSuccess) {
                showSnackbar('Faixa etária master salva com sucesso', 'success');
                setTimeout(() => {
                    router.push({
                        name: 'FaixaEtaria'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Out_Message || 'Falha ao salvar faixa etária. Verifique os dados.', 'error');
            }
        } catch (error) {
            showSnackbar('Erro ao salvar a faixa etária. Verifique sua conexão ou tente novamente.', 'error');
        }
    }
}
</script>
