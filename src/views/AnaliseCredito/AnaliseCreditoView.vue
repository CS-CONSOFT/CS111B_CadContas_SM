<template>
    <v-container fluid>
        <v-toolbar title="Análise de Crédito" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex">
                <v-col cols="12" class="d-flex justify-end">
                    <v-btn prepend-icon="mdi-reload" flat class="bg-success mr-4" @click="reloadConsulta">Atualizar Consulta</v-btn>

                    <v-btn prepend-icon="mdi-chart-line" flat class="bg-greensuccess mr-4" @click="showPopupHistorico = true"
                        >Histórico</v-btn
                    >

                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-row v-if="loading" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-row>

        <v-card v-else="!loading" class="border pa-4 mb-10" elevation="0">
            <v-row class="d-flex justify-space-between">
                <v-col cols="5">
                    <div>
                        <v-col cols="12">
                            <span><strong> Resultado da Consulta </strong></span>
                        </v-col>
                        <div class="d-flex justify-space-between align-center">
                            <v-col cols="auto">
                                <span>
                                    CPF Consultado: <strong>{{ formatCPF(bb01202?.BB012_CPF) }}</strong>
                                </span>
                            </v-col>
                            <v-col cols="auto">
                                <span>
                                    Data Consulta: <strong>{{ formattedDate }}</strong>
                                </span>
                            </v-col>
                        </div>

                        <v-row class="d-flex align-center justify-space-between border rounded mx-3 my-2">
                            <v-col cols="7">
                                <span> Limite de Crédito: {{ formatCurrency(var_BB012_LimiteCredito) }} </span>
                            </v-col>
                            <v-col cols="5">
                                <span> Crédito Com Score: {{ formatCurrency(var_bb01210_vCredComScore) }}</span>
                            </v-col>
                            <v-col cols="7">
                                <span> Crédito Médio: {{ formatCurrency(var_bb01210_vCredMedia) }}</span>
                            </v-col>
                            <v-col cols="5">
                                <span> Crédito Sem Score: {{ formatCurrency(var_bb01210_vCredSemScore) }}</span>
                            </v-col>
                        </v-row>

                        <v-col cols="12">
                            <p class="py-2 ma-0 rounded-t">
                                <strong>Credit Score 3.0</strong>
                            </p>
                        </v-col>
                    </div>

                    <div class="text-center">
                        <v-progress-circular :model-value="scorePercentage" :color="scoreData.color" :rotate="90" :size="250" :width="20">
                            <template v-slot:default>
                                <div class="text-grey-darken-3">
                                    <span>O nível do score é:</span>
                                    <div class="text-h4">{{ scoreData.label }}</div>
                                    <div class="text-h1">{{ score }}</div>
                                </div>
                            </template>
                        </v-progress-circular>
                    </div>
                    <v-row class="mt-6 px-6" dense>
                        <!-- Legenda -->
                        <v-col cols="12" style="height: 140px">
                            <v-row justify="space-between" class="flex-wrap">
                                <v-col v-for="(range, index) in scoreRanges" :key="index" cols="auto" class="d-flex align-center mb-2">
                                    <v-icon small :color="range.color" class="mr-2">mdi-checkbox-blank</v-icon>
                                    <span>{{ range.label }} ({{ range.range }})</span>
                                </v-col>
                            </v-row>
                        </v-col>

                        <!-- Link -->
                        <v-col cols="12" class="d-flex justify-end">
                            <v-icon color="primary" class="mr-1">mdi-open-in-new</v-icon>
                            <span class="text-primary ml-2 cursor-pointer" @click="helpCreditScore()" style="text-decoration: underline">
                                Entenda o score
                            </span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="7">
                    <v-row class="d-flex mb-10">
                        <v-col cols="6">
                            <div style="height: 50px">
                                <span>
                                    <strong> Persona Pagamento </strong>
                                </span>
                                <br />
                                <span> Níveis de relacionamento com bancos </span>
                            </div>

                            <div class="text-center mb-6 px-4">
                                <v-row justify="center" class="mb-6 mt-10">
                                    <span class="text-h6 font-weight-bold">Nível {{ levelPersonaPagamento }}</span>
                                </v-row>

                                <!-- Barra de Níveis -->
                                <v-sheet class="d-flex justify-center align-center mx-6" color="lightprimary" rounded="lg" height="80">
                                    <v-row class="d-flex justify-center align-center" no-gutters>
                                        <!-- Ícones da barra de níveis -->
                                        <v-col
                                            v-for="index in maxLevelsPersonaPagamento"
                                            :key="index"
                                            cols="auto"
                                            class="d-flex justify-center"
                                            style="padding: 0"
                                        >
                                            <v-icon
                                                :color="index <= levelPersonaPagamento ? 'primary' : 'white'"
                                                style="font-size: 48px; width: 40px; padding: 0"
                                            >
                                                mdi-minus-thick
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </v-sheet>

                                <div class="px-6">
                                    <v-row class="mt-6" style="height: 60px">
                                        <span class="text-caption">
                                            {{ getExplanationForLevelPersona(levelPersonaPagamento) }}
                                        </span>
                                    </v-row>

                                    <v-row justify="end" class="mt-6">
                                        <v-icon color="primary">mdi-open-in-new</v-icon>
                                        <span
                                            class="text-primary ml-2 cursor-pointer"
                                            @click="helpPersonaPagamento()"
                                            style="text-decoration: underline"
                                        >
                                            Entenda os níveis
                                        </span>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div style="height: 50px">
                                <span>
                                    <strong> Presença Digital </strong>
                                </span>
                                <br />
                                <span> Níveis de consumo digital </span>
                            </div>

                            <div class="text-center mb-6 px-4">
                                <v-row justify="center" class="mb-6 mt-10">
                                    <span class="text-h6 font-weight-bold">Nível {{ levelPresencaDigital }}</span>
                                </v-row>

                                <!-- Barra de Níveis -->
                                <v-sheet class="d-flex justify-center align-center mx-6" color="lightprimary" rounded="lg" height="80">
                                    <v-row class="d-flex justify-center align-center" no-gutters>
                                        <!-- Ícones da barra de níveis -->
                                        <v-col
                                            v-for="index in maxLevelsPresencaDigital"
                                            :key="index"
                                            cols="auto"
                                            class="d-flex justify-center"
                                            style="padding: 0"
                                        >
                                            <v-icon
                                                :color="index <= levelPresencaDigital ? 'primary' : 'white'"
                                                style="font-size: 48px; width: 40px; padding: 0"
                                            >
                                                mdi-minus-thick
                                            </v-icon>
                                        </v-col>
                                    </v-row>
                                </v-sheet>

                                <div class="px-6">
                                    <v-row class="mt-6" style="height: 60px">
                                        <span class="text-caption">
                                            {{ getExplanationForLevelPresenca(levelPresencaDigital) }}
                                        </span>
                                    </v-row>

                                    <v-row justify="end" class="mt-6">
                                        <v-icon color="primary">mdi-open-in-new</v-icon>
                                        <span
                                            class="text-primary ml-2 cursor-pointer"
                                            @click="helpPresencaDigital()"
                                            style="text-decoration: underline"
                                        >
                                            Entenda os níveis
                                        </span>
                                    </v-row>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex mt-10">
                        <!-- PRINCIPALIDADE BANCARIA-->
                        <v-col cols="6">
                            <div>
                                <span>
                                    <strong> Principalidade Bancária </strong>
                                </span>
                                <br />
                                <span> O banco principal é do segmento </span>
                            </div>

                            <div class="text-center my-6">
                                <v-sheet class="d-flex flex-column justify-center align-center mx-10 border" rounded="lg" height="240">
                                    <v-icon size="x-large">mdi-bank</v-icon>
                                    <span class="text-h4 mt-2"> {{ namePersonaBanco }} </span>
                                </v-sheet>
                            </div>
                        </v-col>
                        <v-col cols="6">
                            <div>
                                <span>
                                    <strong> Cartão </strong>
                                </span>
                                <br />
                                <span> Categoria do cartão mais utilizado </span>
                            </div>
                            <div class="text-center my-6">
                                <div :class="['credit-card', colorClass]" class="mx-10">
                                    <div class="card-header">
                                        <v-icon class="icon-nfc">mdi-contactless-payment</v-icon>
                                        <span class="card-type">CARTÃO {{ nameCategoriaCartao }}</span>
                                    </div>
                                    <div class="d-flex align-center justify-between">
                                        <div class="card-number">0000 0000 0000 0000</div>
                                        <div class="chip"></div>
                                    </div>
                                    <div class="card-footer">
                                        <span class="card-name">Nome</span>
                                        <span class="card-expiration">00/00</span>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="d-flex mt-10">
                <v-col cols="12" class="d-flex align-center justify-space-between">
                    <div>
                        <span>
                            <strong> Insights Potencial de Consumo </strong>
                        </span>
                        <br />
                        <span> Consumo observado dos últimos 12 meses em relação à base Brasil</span>
                    </div>
                    <v-spacer></v-spacer>
                    <div>
                        <v-icon color="primary">mdi-open-in-new</v-icon>
                        <span class="text-primary ml-2 cursor-pointer" @click="helpPotencialConsumo()" style="text-decoration: underline">
                            Entenda o potencial de consumo
                        </span>
                    </div>
                </v-col>
                <v-col cols="6" class="mt-6">
                    <div>
                        <span>
                            <strong> Potencial de consumo geral </strong>
                        </span>
                        <br />
                        <span> Geral: {{ consumoGeral }}%</span>

                        <div>
                            <v-progress-linear :model-value="consumoGeral" color="primary" bg-color="lightprimary" height="20" rounded>
                                <template v-slot:default="{ value }">
                                    <strong>{{ Math.ceil(value) }}%</strong>
                                </template>
                            </v-progress-linear>
                            <div class="d-flex">
                                <span class="text-subtitle-2" style="color: gray">Baixo Consumo</span>
                                <v-spacer></v-spacer>
                                <span class="text-subtitle-2" style="color: gray"> Alto Consumo </span>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="mt-6">
                    <div>
                        <span>
                            <strong> Segmentos com maior consumo </strong>
                        </span>
                        <br />
                        <span> {{ maiorConsumo?.name }}: {{ maiorConsumo?.value }}%</span>

                        <div>
                            <v-progress-linear
                                :model-value="maiorConsumo?.value"
                                color="primary"
                                bg-color="lightprimary"
                                height="20"
                                rounded
                            >
                                <template v-slot:default="{ value }">
                                    <strong>{{ Math.ceil(value) }}%</strong>
                                </template>
                            </v-progress-linear>
                            <div class="d-flex">
                                <span class="text-subtitle-2" style="color: gray">Baixo Consumo</span>
                                <v-spacer></v-spacer>
                                <span class="text-subtitle-2" style="color: gray"> Alto Consumo </span>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </v-container>

    <!-- Dialog historico -->
    <v-dialog v-model="showPopupHistorico" style="width: 80%">
        <v-card>
            <div class="d-flex justify-between align-end px-4 py-2">
                <span class="text-h4">Histórico de Crédito</span>
                <v-spacer></v-spacer>
                <v-btn small icon @click="showPopupHistorico = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>

            <v-card class="m-2 pa-4" elevation="0">
                <v-data-table class="border" :headers="headers" :items="items" :loading="loading"></v-data-table>
            </v-card>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="showPopupHistorico = false"> Fechar </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

    <!-- CREDIT SCORE -->

    <v-navigation-drawer
        v-model="drawerCreditScore"
        location="right"
        width="700"
        temporary
        @click.stop="drawerCreditScore = !drawerCreditScore"
    >
        <template v-slot:prepend>
            <div class="d-flex flex-column px-4 py-6">
                <span class="text-h4"> <strong> Credit Score 3.0 </strong> </span>
                <span class="text-subtitle-1 mt-3"> O Credit Score 3.0 é composto por: </span>
            </div>
        </template>

        <v-divider></v-divider>

        <div class="d-flex align-center pa-4">
            <!-- Primeira Linha-->
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-calendar</v-icon>
                <span style="height: 40px"> Hístorico de Consumo Digital</span>
            </v-col>
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-shopping-outline</v-icon>
                <span style="height: 40px">Hábitos de Consumo</span>
            </v-col>
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-chart-arc</v-icon>
                <span style="height: 40px">Segmentos de Compra</span>
            </v-col>
        </div>

        <div class="d-flex align-center pa-4">
            <!-- Segunda Linha-->
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-chart-bar</v-icon>
                <span style="height: 40px"> Análise de Ticket Médio</span>
            </v-col>
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-magnify</v-icon>
                <span style="height: 40px">Consultas do CPF no Mercado</span>
            </v-col>
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large"> mdi-wallet-bifold-outline</v-icon>
                <span style="height: 40px">Meios de Pagamento Utilizados</span>
            </v-col>
        </div>

        <div class="d-flex align-center pa-4">
            <!-- Terceira Linha-->
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-credit-card</v-icon>
                <span style="height: 40px"> Análise de Uso dos Cartões</span>
            </v-col>
            <v-col cols="4" class="d-flex flex-column align-center justify-center text-center">
                <v-icon color="primary" size="x-large">mdi-account</v-icon>
                <span style="height: 40px">Dados Cadastrais</span>
            </v-col>
        </div>
    </v-navigation-drawer>
    <!-- POTÊNCIAL DE CONSUMO -->
    <v-navigation-drawer
        v-model="drawerPotencialConsumo"
        location="right"
        width="700"
        temporary
        @click.stop="drawerPotencialConsumo = !drawerPotencialConsumo"
    >
        <template v-slot:prepend>
            <div class="d-flex flex-column px-4 py-6">
                <span class="text-h4"> <strong> Insight Potencial de Consumo </strong> </span>
                <span class="text-subtitle-1 mt-3">
                    Dimensiona o potencial de consumo do CPF. Para cada consulta é devolvida uma classificação de 1 a 100 baseada nos gastos
                    históricos, comparado à base Brasil. O resultado é detalhado no comportamento de compra Geral + 11 classes de consumo
                    abaixo.
                </span>
            </div>
        </template>

        <v-divider></v-divider>

        <div class="d-flex flex-column align-center px-4 py-4">
            <!-- Verificar se os dados estão carregados -->
            <div v-if="potentialConsumptionScores.length">
                <!-- Container para organizar as barras em linhas -->
                <div class="d-flex flex-wrap">
                    <div
                        v-for="(score, index) in potentialConsumptionScores"
                        :key="index"
                        class="d-flex flex-column justify-center mr-4 mb-4"
                        style="width: calc(50% - 16px)"
                    >
                        <div class="d-flex align-start">
                            <span class="justify-start">{{ score.name }}</span>
                            <v-spacer></v-spacer>
                            <span class="justify-end ml-2">{{ score.value }}%</span>
                        </div>
                        <v-progress-linear
                            :model-value="parseInt(score.value)"
                            class="my-2"
                            color="primary"
                            bg-color="lightprimary"
                            height="12"
                            rounded
                        ></v-progress-linear>
                        <div class="d-flex">
                            <span class="text-subtitle-2" style="color: gray">Baixo</span>
                            <v-spacer></v-spacer>
                            <span class="text-subtitle-2" style="color: gray"> Alto </span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Nenhum dado encontrado para "Potencial de consumo".</p>
            </div>
        </div>

        <template v-slot:append>
            <div class="d-flex flex-column px-4 py-6">
                <span class="text-subtitle-1 mt-3">
                    <strong>Importante</strong>: o Geral não é a soma dos percentuais das demais classes; ele é calculado e comparado à base
                    Brasil de forma isolada.</span
                >
            </div>
        </template>
    </v-navigation-drawer>

    <!-- PERSONA PAGAMENTO -->

    <v-navigation-drawer
        v-model="drawerPersonaPagamento"
        location="right"
        width="500"
        temporary
        @click.stop="drawerPersonaPagamento = !drawerPersonaPagamento"
    >
        <template v-slot:prepend>
            <div class="d-flex flex-column px-4 py-6">
                <span class="text-h4"> <strong> Níveis Persona Pagamento </strong> </span>
                <span class="text-subtitle-1 mt-3">
                    A persona dimensiona o grau de relacionamento do CPF com as instituições financeiras e indica o nível de bancarização do
                    usuário e da usabilidade de produtos de crédito.
                </span>
            </div>
        </template>

        <v-divider></v-divider>

        <div class="d-flex flex-column align-center px-4 py-2">
            <!-- Loop para criar as 6 linhas fixas -->
            <div v-for="line in 6" :key="line" class="d-flex flex-column align-center mb-4">
                <!-- Nível centralizado acima dos ícones -->
                <div class="text-h6 text-center mb-1">Nível {{ line - 1 }}</div>

                <!-- Linha de ícones -->
                <div class="d-flex justify-center">
                    <v-col v-for="index in 5" :key="`${line}-${index}`" cols="auto" class="d-flex justify-center" style="padding: 0">
                        <v-icon :color="index <= line - 1 ? 'primary' : 'white'" style="font-size: 48px; width: 40px; padding: 0">
                            mdi-minus-thick
                        </v-icon>
                    </v-col>
                </div>

                <!-- Descrição abaixo da linha de ícones -->
                <div class="text-subtitle-1">Nível {{ line - 1 }}: {{ getExplanationForLevelPersona(line - 1) }}</div>
            </div>
        </div>
    </v-navigation-drawer>

    <v-navigation-drawer
        v-model="drawerPresencaDigital"
        location="right"
        width="500"
        temporary
        @click.stop="drawerPresencaDigital = !drawerPresencaDigital"
    >
        <template v-slot:prepend>
            <div class="d-flex flex-column px-4 py-6">
                <span class="text-h4"> <strong> Presença Digital </strong> </span>
                <span class="text-subtitle-1 mt-3">
                    Dimensiona o grau de digitalização levando em conta a frequência e a diversidade de suas atividades online.
                </span>
            </div>
        </template>

        <v-divider></v-divider>

        <div class="d-flex flex-column align-center px-4 py-2">
            <!-- Loop para criar as 6 linhas fixas -->
            <div v-for="line in 6" :key="line" class="d-flex flex-column align-center mb-4">
                <!-- Nível centralizado acima dos ícones -->
                <div class="text-h6 text-center mb-1">Nível {{ line }}</div>

                <!-- Linha de ícones -->
                <div class="d-flex justify-center">
                    <v-col v-for="index in 6" :key="`${line}-${index}`" cols="auto" class="d-flex justify-center" style="padding: 0">
                        <v-icon :color="index <= line ? 'primary' : 'white'" style="font-size: 48px; width: 40px; padding: 0">
                            mdi-minus-thick
                        </v-icon>
                    </v-col>
                </div>

                <!-- Descrição abaixo da linha de ícones -->
                <div class="text-subtitle-1">Nível {{ line }}: {{ getExplanationForLevelPresenca(line) }}</div>
            </div>
        </div>
    </v-navigation-drawer>

    <v-snackbar v-model="snackbar" :timeout="3000" top v-bind:color="snackbarColor" multi-line>
        {{ snackbarMessage }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="snackbar = false"></v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetAnaliseCredito } from '../../services/analiseCredito/bb01210_analiseCredito';
// Import de Types
import type { AxiosResponse } from 'axios';
import type {
    AnaliseCreditoCompleta,
    Csicp_bb01210,
    Csicp_bb012,
    Csicp_bb01201,
    Csicp_bb01202,
    CreditProData,
    CreditoGradual_List,
    Score
} from '../../types/analiseCredito/bb01210_analiseCredito';
//Import de componentes

const props = defineProps<{
    id: string;
}>();

interface Item {
    ID: number;
    Data: string;
    CreditoUsado: string;
    CreditoPago: string;
    CreditoAberto: string;
    MaxDiasPagtoAtraso: string;
    MaxDiasTitAtraso: string;
    Vlr_CreditoAntigo: string;
    Vlr_NovoCredito: string;
}

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Mês / Ano',
        value: 'Data',
        sortable: false,
        width: '10%',
        align: 'start'
    },
    {
        title: 'Crédito',
        align: 'center',
        width: '30%',
        children: [
            { title: 'Usado', value: 'CreditoUsado', align: 'center' },
            { title: 'Pago', value: 'CreditoPago', align: 'center' },
            { title: 'Em Aberto', value: 'CreditoAberto', align: 'center' }
        ]
    },
    {
        title: 'Máx. Dias Pagto. Atraso',
        value: 'MaxDiasPagtoAtraso',
        width: '15%',
        align: 'center'
    },
    {
        title: 'Máx. Dias Tit. Atraso',
        value: 'MaxDiasTitAtraso',
        width: '15%',
        align: 'center'
    },
    {
        title: 'Crédito Antigo',
        value: 'Vlr_CreditoAntigo',
        width: '15%',
        align: 'center'
    },
    {
        title: 'Novo Crédito',
        value: 'Vlr_NovoCredito',
        width: '15%',
        align: 'center'
    }
]);

//Declaração de variaveis
const loading = ref(false);
const atualizarConsulta = ref<boolean>(false);
const items = ref<Item[]>([]);

const showPopupHistorico = ref(false);
const drawerCreditScore = ref<boolean>(false);
const drawerPersonaPagamento = ref<boolean>(false);
const drawerPresencaDigital = ref<boolean>(false);
const drawerPotencialConsumo = ref<boolean>(false);

const bb01210 = ref<Csicp_bb01210>();
const bb012 = ref<Csicp_bb012>();
const bb01201 = ref<Csicp_bb01201>();
const bb01202 = ref<Csicp_bb01202>();

const var_bb01210_vCredComScore = ref<number>(0);
const var_bb01210_vCredMedia = ref<number>(0);
const var_bb01210_vCredSemScore = ref<number>(0);
const var_BB012_LimiteCredito = ref<number>(0);
const creditProData = ref<CreditProData | null>(null);
const maxLevelsPersonaPagamento = 5;
const maxLevelsPresencaDigital = 6;
const score = ref<any>();
const levelPersonaPagamento = ref<any>();
const levelPresencaDigital = ref<any>();
const namePersonaBanco = ref<any>();
const nameCategoriaCartao = ref<string | null>(null);
const consumoGeral = ref<string>('');
const maiorConsumo = ref<Score>();

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

const getScoreData = (value: number): { color: string; label: string } => {
    if (value >= 0 && value <= 199) return { color: '#ff0000', label: 'Muito baixo' };
    if (value >= 200 && value <= 399) return { color: '#7CFC00', label: 'Baixo' };
    if (value >= 400 && value <= 599) return { color: '#FFFF00', label: 'Médio' };
    if (value >= 600 && value <= 799) return { color: '#556B2F', label: 'Alto' };
    if (value >= 800 && value <= 999) return { color: '#5353ec', label: 'Muito alto' };
    return { color: '#000000', label: 'Fora do intervalo' };
};

// Faixas de score para a legenda
const scoreRanges = [
    { range: '0-199', color: '#ff0000', label: 'Muito baixo' },
    { range: '200-399', color: '#7CFC00', label: 'Baixo' },
    { range: '400-599', color: '#FFFF00', label: 'Médio' },
    { range: '600-799', color: '#556B2F', label: 'Alto' },
    { range: '800-999', color: '#5353ec', label: 'Muito alto' }
];

//Funções e variáveis computadas
const scorePercentage = computed(() => (score.value / 1000) * 100);
const scoreData = computed(() => getScoreData(score.value));

const formattedDate = computed(() => {
    return creditProData.value?.creationDateUtc
        ? new Intl.DateTimeFormat('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
          }).format(new Date(creditProData.value.creationDateUtc))
        : '';
});

// Computed para determinar a classe baseada no nome do cartão
const colorClass = computed(() => {
    const categoria = nameCategoriaCartao.value?.toLowerCase() || '';
    switch (categoria) {
        case 'platinum':
            return 'card-platinum';
        case 'beneficios':
            return 'card-gold';
        case 'intermediario':
            return 'card-silver';
        default:
            return 'card-default'; // Classe padrão (black)
    }
});

// Computed property para filtrar os itens com "Potencial de consumo"
const potentialConsumptionScores = computed(() => {
    if (!creditProData.value?.scores) return [];
    return creditProData.value.scores.filter((score) => score.name.includes('Potencial de consumo'));
});

//Funções
const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

// Função para retornar explicação com base no nível da persona de pagamento
const explanationsPersona = [
    'Ausência de histórico bancário e produtos de crédito no digital',
    'Possui relação bancária, mas sem uso de produtos de crédito digital',
    'Possui algum relacionamento bancário com pouca utilização de produtos de crédito no digital',
    'Possui relacionamento bancário com média utilização de produtos de crédito no digital',
    'Possui relacionamento bancário e de crédito e opta por pagamento à vista no digital',
    'Possui relacionamento bancário e de crédito e opta por pagamento parcelado no digital'
];

const getExplanationForLevelPersona = (level: number): string => {
    return explanationsPersona[level] ?? 'Sem descrição';
};

// Função para retornar explicação com base no nível da persona de pagamento
const explanationsPresenca = [
    'Sem presença digital',
    'Baixa presença digital sem consumo',
    'Baixa presença digital com baixo consumo',
    'Média presença digital com baixo consumo',
    'Média presença digital com médio consumo',
    'Alta presença digital com médio consumo',
    'Alta presença digital com alto consumo'
];

const getExplanationForLevelPresenca = (level: number): string => {
    return explanationsPresenca[level] ?? 'Sem descrição';
};

const reloadConsulta = () => {
    atualizarConsulta.value = true;
    fetchData();
};

function formatCPF(cpf: any): string {
    if (!cpf) return '';
    const cpfString = cpf.toString();
    return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

const fetchData = async () => {
    loading.value = true;

    try {
        const response: AxiosResponse<AnaliseCreditoCompleta> = await GetAnaliseCredito(tenant, props.id, atualizarConsulta.value);
        const data = response.data;

        bb01210.value = data.AnaliseCredito.csicp_bb01210;
        bb012.value = data.AnaliseCredito.csicp_bb012;
        bb01201.value = data.AnaliseCredito.csicp_bb01201;
        bb01202.value = data.AnaliseCredito.csicp_bb01202;

        var_BB012_LimiteCredito.value = data.AnaliseCredito.csicp_bb01201.BB012_LimiteCredito;
        var_bb01210_vCredComScore.value = data.AnaliseCredito.csicp_bb01210.bb01210_vCredComScore;
        var_bb01210_vCredMedia.value = data.AnaliseCredito.csicp_bb01210.bb01210_vCredMedia;
        var_bb01210_vCredSemScore.value = data.AnaliseCredito.csicp_bb01210.bb01210_vCredSemScore;

        items.value = data.AnaliseCredito.CreditoGradual_List.map((item: CreditoGradual_List) => ({
            ID: item.Id,
            Data: `${item.bb01210_Mes} / ${item.bb01210_Ano}`,
            CreditoUsado: formatCurrency(item.CTE_CGrad_Credito_Usado),
            CreditoPago: formatCurrency(item.CTE_CGrad_Credito_Pago),
            CreditoAberto: formatCurrency(item.CTE_CGrad_Credito_EmAberto),
            MaxDiasPagtoAtraso: `${item.CTE_CGrad_Max_Dias_PagtoAtra} Dias`,
            MaxDiasTitAtraso: `${item.CTE_CGrad_Max_Dias_TitAtraso} Dias`,
            Vlr_CreditoAntigo: formatCurrency(item.CTE_CGrad_ValorCredito),
            Vlr_NovoCredito: formatCurrency(item.Vlr_NovoCredito)
        }));

        console.log(data);

        // Converte o campo JSON_CreditPro em um objeto JSON acessível
        if (bb01210.value && bb01210.value.JSON_CreditPro) {
            const parsedCreditPro = JSON.parse(bb01210.value.JSON_CreditPro);

            // Salva o JSON convertido em uma variável reativa
            creditProData.value = parsedCreditPro;

            // Buscar o valor do score
            const scoreV3 = creditProData.value?.scores.find((score) => score.name === 'Score v3');
            score.value = scoreV3?.value;
            // Buscar o valor da persona pagamento
            const personaPagto = creditProData.value?.scores.find((personaPagto) => personaPagto.name === 'Persona Bancarizada');
            levelPersonaPagamento.value = personaPagto?.value;
            // Buscar o valor da presença digital
            const presencaDigital = creditProData.value?.scores.find(
                (presencaDigital) => presencaDigital.name === 'Persona Presenca Digital'
            );
            levelPresencaDigital.value = presencaDigital?.value;
            // Buscar o segmento do banco
            const personaBanco = creditProData.value?.scores.find((personaBanco) => personaBanco.name === 'Persona Banco');
            namePersonaBanco.value = personaBanco?.value;
            // Buscar a categoria do cartão mais utilizado
            const categoriaCartao = creditProData.value?.scores.find(
                (categoriaCartao) => categoriaCartao.name === 'Persona Categoria cartao'
            );
            nameCategoriaCartao.value = categoriaCartao?.value ?? null;
            // Buscar o potencial de consumo geral
            const potencialConsumoGeral = creditProData.value?.scores.find(
                (consumoGeral) => consumoGeral.name === 'Potencial de consumo - Geral'
            );
            consumoGeral.value = potencialConsumoGeral?.value!;

            // Filtrar os objetos cujo campo "name" contém "Potencial de consumo"
            const potenciaisConsumo = creditProData.value?.scores.filter((score) => score.name.includes('Potencial de consumo'));
            // Encontrar o objeto com o maior valor no campo "value"
            const maiorPotencial = potenciaisConsumo?.reduce((maior, atual) => (Number(atual.value) > Number(maior.value) ? atual : maior));
            maiorConsumo.value = maiorPotencial;
        }
    } catch (err) {
        showSnackbar('Erro ao buscar dados.', 'error');
    } finally {
        loading.value = false;
        atualizarConsulta.value = false;
    }
};

const helpCreditScore = async () => {
    drawerCreditScore.value = true;
};

const helpPersonaPagamento = async () => {
    drawerPersonaPagamento.value = true;
};

const helpPresencaDigital = async () => {
    drawerPresencaDigital.value = true;
};

const helpPotencialConsumo = async () => {
    drawerPotencialConsumo.value = true;
};

onMounted(() => {
    fetchData();
});
</script>
<style scoped>
.credit-card {
    height: 240px;
    border-radius: 15px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    position: relative;
}

/* Padrão */
.card-default {
    background: linear-gradient(145deg, #2c2c2c, #1e1e1e);
}

/* Platinum */
.card-platinum {
    background: linear-gradient(145deg, #e5e5e5, #b3b3b3);
}

/* Gold */
.card-gold {
    background: linear-gradient(145deg, #ffd700, #daa520);
}

/* Silver */
.card-silver {
    background: linear-gradient(145deg, #c0c0c0, #a9a9a9);
}

/* Resto do CSS permanece o mesmo */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
}

.icon-nfc {
    font-size: 24px;
}

.card-type {
    text-transform: uppercase;
}

.card-number {
    font-size: 20px;
    letter-spacing: 2px;
    margin-top: 20px;
    text-align: center;
}

.chip {
    width: 40px;
    height: 30px;
    background: linear-gradient(145deg, #bbbbbb, #999999);
    border-radius: 5px;
    position: absolute;
    top: 70px;
    right: 20px;
    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.card-footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    align-items: center;
    margin-top: 20px;
}

.card-name {
    font-size: 14px;
    text-transform: uppercase;
}

.card-expiration {
    font-size: 14px;
    font-weight: bold;
}
</style>
