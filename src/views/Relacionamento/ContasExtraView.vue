<template>
    <v-container fluid>
        <v-toolbar title="Extras" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>
    </v-container>

    <v-card class="border-sm border-opacity-50 mt-1 pa-4" elevation="0">
        <v-tabs v-model="tab" align-tabs="start" color="primary" class="rounded">
            <v-tab value="one">
                <v-icon icon="mdi-note-outline"></v-icon>
                Notas
            </v-tab>
            <v-tab value="two">
                <v-icon icon="mdi-currency-usd-off"></v-icon>
                Retenções Imposto
            </v-tab>
            <v-tab value="three">
                <v-icon icon="mdi-phone"></v-icon>
                Contatos
            </v-tab>
            <v-tab value="four">
                <v-icon icon="mdi-domain"></v-icon>
                Convênio
            </v-tab>
            <v-tab value="five">
                <v-icon icon="mdi-account-multiple"></v-icon>
                Membros
            </v-tab>
            <v-tab value="six">
                <v-icon icon="mdi-magnify"></v-icon>
                Avalistas
            </v-tab>
            <v-tab value="seven">
                <v-icon icon="mdi-tab"></v-icon>
                Bens
            </v-tab>
            <v-tab value="eight">
                <v-icon icon="mdi-map-marker"></v-icon>
                Endereços
            </v-tab>
            <v-tab value="nine">
                <v-icon icon="mdi-bank"></v-icon>
                Referência Bancaria
            </v-tab>
            <v-tab value="ten">
                <v-icon icon="mdi-paperclip"></v-icon>
                Imagens Anexos
            </v-tab>
            <v-tab value="eleven">
                <v-icon icon="mdi-credit-card"></v-icon>
                Crediario
            </v-tab>
            <v-tab value="twelve">
                <v-icon icon="mdi-link-variant"></v-icon>
                Associado
            </v-tab>
        </v-tabs>
        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <contas_Notas :id="id" />
                </v-window-item>
                <v-window-item value="two">
                    <contas_RetecaoImposto :id="id" />
                </v-window-item>
                <v-window-item value="three">
                    <contas_Contatos :id="id" />
                </v-window-item>
                <v-window-item value="four">
                    <contas_Convenio :id="id" />
                </v-window-item>
                <v-window-item value="five">
                    <contas_Membros :id="id" />
                </v-window-item>
                <v-window-item value="six">
                    <contas_Avalistas :id="id" />
                </v-window-item>
                <v-window-item value="seven">
                    <contas_Bens :id="id" />
                </v-window-item>
                <v-window-item value="eight">
                    <contas_Enderecos :id="id" />
                </v-window-item>
                <v-window-item value="nine">
                    <contas_ReferenciasBancarias :id="id" />
                </v-window-item>
                <v-window-item value="ten">
                    <contas_ImagensAnexos :id="id" />
                </v-window-item>
                <v-window-item value="eleven">
                    <contas_Crediario :id="id" />
                </v-window-item>
                <v-window-item value="twelve">
                    <contas_VincularConvenio :id="id" />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
//Import de componentes
import contas_ImagensAnexos from './Extras/contas_ImagensAnexos.vue';
import contas_Notas from './Extras/contas_Notas.vue';
import contas_RetecaoImposto from './Extras/contas_RetecaoImposto.vue';
import contas_Contatos from './Extras/contas_Contatos.vue';
import contas_Convenio from './Extras/contas_Convenio.vue';
import contas_Membros from './Extras/contas_Membros.vue';
import contas_Bens from './Extras/contas_Bens.vue';
import contas_Enderecos from './Extras/contas_Enderecos.vue';
import contas_Avalistas from './Extras/contas_Avalistas.vue';
import contas_ReferenciasBancarias from './Extras/contas_ReferenciasBancarias.vue';
import contas_Crediario from './Extras/contas_Crediario.vue';
import contas_VincularConvenio from './Extras/contas_VincularConvenio.vue';

const props = defineProps<{
    id: string;
}>();

const tab = ref<string>('one');
</script>
