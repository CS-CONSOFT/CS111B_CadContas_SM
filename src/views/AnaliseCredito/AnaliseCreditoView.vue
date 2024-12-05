<template>
    <v-container fluid>
        <v-toolbar title="Análise de Crédito" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
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
                    <v-row class="d-flex">
                        <v-col cols="12">
                            <span><strong> Resultado da Consulta </strong></span>
                        </v-col>

                        <v-col cols="6">
                            <span>
                                CPF Consultado: <strong>{{ formatCPF(bb01202?.BB012_CPF) }}</strong>
                            </span>
                        </v-col>

                        <v-col cols="6">
                            <span
                                >Data Consulta: <strong> {{ formattedDate }} </strong></span
                            >
                        </v-col>

                        <v-col cols="12">
                            <p class="py-3 ma-0 rounded-t">
                                <strong>Credit Score 3.0</strong>
                            </p>
                        </v-col>
                    </v-row>

                    <div class="text-center mt-4">
                        <v-progress-circular :model-value="scorePercentage" :color="scoreData.color" :rotate="90" :size="250" :width="20">
                            <template v-slot:default>
                                <div style="color: white">
                                    <span>O nível do score é:</span>
                                    <div class="text-h4">{{ scoreData.label }}</div>
                                    <div class="text-h1">{{ score }}</div>
                                </div>
                            </template>
                        </v-progress-circular>
                    </div>
                    <!-- Legenda -->
                    <v-row class="mt-6 align-end mr-6">
                        <!-- Primeira coluna -->
                        <v-col cols="6">
                            <v-row>
                                <v-col
                                    v-for="(range, index) in scoreRanges"
                                    :key="index"
                                    cols="12"
                                    md="12"
                                    class="d-flex align-center mb-2"
                                >
                                    <v-icon small :color="range.color" class="mr-2">mdi-checkbox-blank</v-icon>
                                    <span>{{ range.label }} ({{ range.range }})</span>
                                </v-col>
                            </v-row>
                        </v-col>

                        <!-- Segunda coluna -->
                        <v-col cols="6" class="d-flex justify-end align-end">
                            <v-icon color="primary" class="mr-1">mdi-open-in-new</v-icon>
                            <a href="#" class="text-primary ml-2">Entenda o score</a>
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
                                <v-sheet class="d-flex justify-center align-center" color="lightprimary" rounded="lg" height="80">
                                    <v-row class="d-flex justify-center align-center" no-gutters>
                                        <!-- Ícones da barra de níveis -->
                                        <v-col
                                            v-for="index in maxLevels"
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
                                            Possui relacionamento bancário com média utilização de produtos de crédito no digital
                                        </span>
                                    </v-row>

                                    <v-row justify="end" class="mt-6">
                                        <v-icon color="primary">mdi-open-in-new</v-icon>
                                        <a href="#" class="text-primary ml-2"> Entenda os níveis </a>
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
                                <v-sheet class="d-flex justify-center align-center" color="lightprimary" rounded="lg" height="80">
                                    <v-row class="d-flex justify-center align-center" no-gutters>
                                        <!-- Ícones da barra de níveis -->
                                        <v-col
                                            v-for="index in maxLevels"
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
                                        <span class="text-caption"> Nível alto de consumo digital </span>
                                    </v-row>

                                    <v-row justify="end" class="mt-6">
                                        <v-icon color="primary">mdi-open-in-new</v-icon>
                                        <a href="#" class="text-primary ml-2"> Entenda os níveis </a>
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
                                <v-sheet
                                    class="d-flex flex-column justify-center align-center mx-6"
                                    color="lightprimary"
                                    rounded="lg"
                                    height="240"
                                >
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
                                <v-sheet
                                    class="d-flex flex-column justify-center align-center mx-6"
                                    color="lightprimary"
                                    rounded="lg"
                                    height="240"
                                >
                                    <v-icon size="x-large">mdi-credit-card</v-icon>
                                    <span class="text-h4 mt-2"> {{ nameCategoriaCartao }}</span>
                                </v-sheet>
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
                        <a href="#" class="text-primary ml-2"> Entenda o potencial de consumo </a>
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
                            <v-progress-linear :model-value="maiorConsumo?.value" color="primary" bg-color="lightprimary" height="20" rounded>
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

    <v-snackbar v-model="snackbar" :timeout="3000" top v-bind:color="snackbarColor" multi-line>
        {{ snackbarMessage }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="snackbar = false"></v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted, watch, computed } from 'vue';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { GetAnaliseCredito } from '../../services/analiseCredito/bb01210_analiseCredito';
// Import de Types
import type { AxiosResponse } from 'axios';
import type {
    AnaliseCreditoCompleta,
    Csicp_bb01210,
    Csicp_bb012,
    Csicp_bb01202,
    CreditProData,
    Score
} from '../../types/analiseCredito/bb01210_analiseCredito';
//Import de componentes

const props = defineProps<{
    id: string;
}>();

//Declaração de variaveis
const loading = ref(false);
const bb01210 = ref<Csicp_bb01210>();
const bb012 = ref<Csicp_bb012>();
const bb01202 = ref<Csicp_bb01202>();
const creditProData = ref<CreditProData | null>(null);
const maxLevels = 6;
const score = ref<any>();
const levelPersonaPagamento = ref<any>();
const levelPresencaDigital = ref<any>();
const namePersonaBanco = ref<any>();
const nameCategoriaCartao = ref<any>();
const consumoGeral = ref<string>('');
const maiorConsumo = ref<Score>();

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

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

const getScoreData = (value: number): { color: string; label: string } => {
    if (value >= 0 && value <= 199) return { color: '#ff0000', label: 'Muito baixo' };
    if (value >= 200 && value <= 399) return { color: '#7CFC00', label: 'Baixo' };
    if (value >= 400 && value <= 599) return { color: '#FFFF00', label: 'Médio' };
    if (value >= 600 && value <= 799) return { color: '#556B2F', label: 'Alto' };
    if (value >= 800 && value <= 1000) return { color: '#5353ec', label: 'Muito alto' };
    return { color: '#000000', label: 'Fora do intervalo' };
};

// Faixas de score para a legenda
const scoreRanges = [
    { range: '0-199', color: '#ff0000', label: 'Muito baixo' },
    { range: '200-399', color: '#7CFC00', label: 'Baixo' },
    { range: '400-599', color: '#FFFF00', label: 'Médio' },
    { range: '600-799', color: '#556B2F', label: 'Alto' },
    { range: '800-1000', color: '#5353ec', label: 'Muito alto' }
];

//Funções
const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

function formatCPF(cpf: any): string {
    if (!cpf) return '';
    const cpfString = cpf.toString();
    return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

const fetchData = async () => {
    loading.value = true;

    try {
        const response: AxiosResponse<AnaliseCreditoCompleta> = await GetAnaliseCredito(tenant, props.id);
        const data = response.data;

        bb01210.value = data.AnaliseCredito.csicp_bb01210;
        bb012.value = data.AnaliseCredito.csicp_bb012;
        bb01202.value = data.AnaliseCredito.csicp_bb01202;

        // Converte o campo JSON_CreditPro em um objeto JSON acessível
        if (bb01210.value && bb01210.value.JSON_CreditPro) {
            const parsedCreditPro = JSON.parse(bb01210.value.JSON_CreditPro);

            // Salva o JSON convertido em uma variável reativa
            creditProData.value = parsedCreditPro;
            console.log(creditProData.value);

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
            nameCategoriaCartao.value = categoriaCartao?.value;
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
    }
};

onMounted(() => {
    fetchData();
});
</script>
