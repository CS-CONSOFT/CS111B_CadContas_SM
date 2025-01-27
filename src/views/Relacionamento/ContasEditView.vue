<template>
    <v-container fluid>
        <v-toolbar title="Editar Conta" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-container v-if="loading" class="d-flex justify-center align-center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </v-container>

        <v-form ref="formRef" v-else>
            <v-card class="px-4 py-2 border" elevation="0">
                <v-row class="d-flex my-2">
                    <v-col cols="auto">
                        <v-btn color="success" @click="abrirPopup">Consultar CNPJ</v-btn>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col cols="auto" class="d-flex justify-end">
                        <cs_BtnSalvar @click="salvarConta()" />
                        <cs_BtnCancelar class="ml-4" @click="redirectToContas" />
                    </v-col>
                </v-row>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Conta</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-space-between pa-2">
                        <v-col cols="2">
                            <cs_SelectMRelacionamento
                                v-model="BB012.BB012_ModRelacao_ID"
                                Prm_etiqueta="Modalidade"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col cols="2">
                            <cs_SelectGrupo v-model="BB012.BB012_Grupoconta_ID" Prm_etiqueta="Grupo" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col cols="2">
                            <cs_SelectClasse v-model="BB012.BB012_ClasseConta_ID" Prm_etiqueta="Classe" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col cols="2">
                            <cs_SelectStatus v-model="BB012.BB012_StatusConta_ID" Prm_etiqueta="Status" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col cols="2">
                            <cs_SelectSituacao v-model="BB012.BB012_Sit_Conta_ID" Prm_etiqueta="Situação" :Prm_isObrigatorio="false" />
                        </v-col>
                    </v-row>

                    <v-divider></v-divider>

                    <v-row class="d-flex mt-5 px-4">
                        <v-col col="6">
                            <v-col cols="12" class="pa-0 pb-4">
                                <p class="text-h5">Sobre</p>
                            </v-col>
                            <div class="d-flex">
                                <v-col cols="3" class="pa-0">
                                    <cs_InputTexto
                                        v-model="BB012.BB012_Codigo"
                                        Prm_etiqueta="Código"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="true"
                                        :rules="rules.codigo"
                                    />
                                </v-col>
                                <v-col cols="4" class="pa-0 pl-4">
                                    <cs_InputCPF
                                        v-model="BB01202.BB012_CPF"
                                        Prm_etiqueta="CPF"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                        :disabled="disableCPF"
                                        @cpf-limpo="capturarCpfLimpo"
                                    />
                                </v-col>
                                <v-col cols="5" class="pa-0 pl-4">
                                    <cs_InputCnpj
                                        v-model="BB01202.BB012_CNPJ"
                                        Prm_etiqueta="CNPJ"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                        :disabled="disableCNPJ"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="BB012.BB012_Nome_Cliente"
                                Prm_etiqueta="Nome da Conta"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />

                            <cs_InputTexto
                                v-model="BB012.BB012_Nome_Fantasia"
                                Prm_etiqueta="Nome Fantasia"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <v-col cols="12" class="pa-0 pb-4">
                                <p class="text-h5">Cadastro</p>
                            </v-col>

                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="BB012.BB012_Data_Aniversario"
                                        Prm_etiqueta="Nascimento"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                        type="date"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="BB012.BB012_Data_Cadastro"
                                        Prm_etiqueta="Data Cadastro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                        type="date"
                                        readonly
                                    />
                                </v-col>
                            </div>
                        </v-col>
                        <v-col col="6">
                            <v-col cols="12" class="pa-0 pb-4">
                                <p class="text-h5">Contatos</p>
                            </v-col>
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTelefone
                                        v-model="BB012.BB012_Telefone"
                                        Prm_etiqueta="Telefone"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_InputCelular
                                        v-model="BB012.BB012_FaxCelular"
                                        Prm_etiqueta="Celular"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="BB012.BB012_Home_Page"
                                Prm_etiqueta="Home Page"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="BB012.BB012_Email"
                                Prm_etiqueta="Email"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <cs_InputTexto
                                v-model="BB012.BB012_Descricao"
                                Prm_etiqueta="Descrição"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                :PrmTextArea="true"
                            />
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Endereço</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex mt-5 px-4">
                        <v-col col="6">
                            <v-col cols="12" class="d-flex px-0 py-0">
                                <cs_InputCep
                                    :initialCep="BB01206.BB012_CEP"
                                    :readonly="false"
                                    :Prm_isObrigatorio="false"
                                    @cep-info="handleCepInfo"
                                />
                            </v-col>

                            <div class="d-flex">
                                <v-col cols="9" class="pa-0">
                                    <cs_InputTexto
                                        v-model="BB01206.BB012_Logradouro"
                                        Prm_etiqueta="Logradouro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="3" class="pa-0 pl-4">
                                    <cs_InputTexto
                                        v-model="BB01206.BB012_Numero"
                                        Prm_etiqueta="Número"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <cs_InputTexto
                                v-model="BB01206.BB012_Complemento"
                                Prm_etiqueta="Complemento"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col col="6">
                            <cs_InputTexto
                                v-model="BB01206.BB012_Perimetro"
                                Prm_etiqueta="Perímetro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_InputTexto
                                        v-model="BB01206.BB012_Bairro"
                                        Prm_etiqueta="Bairro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_SelectPaises
                                        v-model="BB01206.BB012_Codigo_Pais"
                                        @update:modelValue="onPaisSelecionado"
                                        class="mb-6"
                                        :Prm_isObrigatorio="true"
                                        :rules="rules.nome"
                                    />
                                </v-col>
                            </div>
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <cs_SelectUF :selectedPais="BB01206.BB012_Codigo_Pais" v-model="BB01206.BB012_UF" class="mb-6" />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <cs_SelectCidades :selectedUF="BB01206.BB012_UF" v-model="BB01206.BB012_Codigo_Cidade" class="mb-5" />
                                </v-col>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Outros Dados</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex mt-5 px-4">
                        <v-col cols="6">
                            <v-col cols="12" class="d-flex px-0 py-0">
                                <cs_SelectZona
                                    class="mb-5"
                                    v-model="BB01201.BB012_ZonaID"
                                    Prm_etiqueta="Zona"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />

                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                            </v-col>
                            <v-col cols="12" class="d-flex px-0 py-0">
                                <cs_SelectZona
                                    class="mb-5"
                                    v-model="BB01201.BB012_EntMtgRotaID"
                                    Prm_etiqueta="Entrega Montagem Rota"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                            </v-col>

                            <v-col cols="12" class="d-flex px-0 py-0">
                                <cs_SelectZona
                                    class="mb-5"
                                    v-model="BB01201.BB012_VendaRotaID"
                                    Prm_etiqueta="Venda Rota"
                                    :Prm_limpavel="false"
                                    :Prm_isObrigatorio="false"
                                />
                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                            </v-col>
                        </v-col>
                        <v-col cols="6">
                            <cs_InputValor
                                v-model="BB01201.BB012_LimiteCredito"
                                Prm_etiqueta="Limite de Crédito"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                :Prm_Precision="2"
                            />
                        </v-col>
                    </v-row>
                </v-card>
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto" class="d-flex align-center">
                        <v-btn text class="text-h6 pa-2" @click="redirectToEditCompleto(BB012.ID)">
                            <span class="underline">Mais Informações</span>
                            <v-icon class="ml-1">mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto">
                        <cs_BtnSalvar @click="salvarConta()" />
                        <cs_BtnCancelar class="ml-4" @click="redirectToContas" />
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-container>

    <!-- Componente de Popup de Consulta CNPJ -->
    <cs_PopUpConsultarCnpj :Prm_isVisivel="isPopupOpen" @close="isPopupOpen = false" @cnpjData="handleCnpjData" />

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
import { GetContaById, UpdateConta } from '../../services/contas/bb012_Contas/bb012_conta';
// Import de types
import type { ContaById } from '../../types/crm/contas/bb012_contabyid';
import type { Bb012, Bb01201, Bb01202, Bb01206, ContaCreate } from '@/types/crm/contas/bb012_contacreate';
import type { CEP } from '../../submodules/cs_components/src/types/enderecamento/CepTypes';
//Import de componentes
import cs_InputTexto from '../../submodules/cs_components/src/components/campos/cs_InputTexto.vue';
import cs_SelectMRelacionamento from '../../submodules/cs_components/src/components/selects/cs_SelectMRelacionamento.vue';
import cs_SelectGrupo from '../../submodules/cs_components/src/components/selects/cs_SelectGrupo.vue';
import cs_SelectClasse from '../../submodules/cs_components/src/components/selects/cs_SelectClasse.vue';
import cs_SelectStatus from '../../submodules/cs_components/src/components/selects/cs_SelectStatus.vue';
import cs_SelectSituacao from '../../submodules/cs_components/src/components/selects/cs_SelectSituacao.vue';
import cs_SelectZona from '../../submodules/cs_components/src/components/selects/cs_SelectZona.vue';
import cs_SelectPaises from '../../submodules/cs_components/src/components/selects/cs_SelectPaises.vue';
import cs_SelectUF from '../../submodules/cs_components/src/components/selects/cs_SelectUF.vue';
import cs_SelectCidades from '../../submodules/cs_components/src/components/selects/cs_SelectCidades.vue';
import cs_InputValor from '../../submodules/cs_components/src/components/campos/cs_InputValor.vue';
import cs_InputCep from '../../submodules/cs_components/src/components/campos/cs_InputCep.vue';
import cs_InputTelefone from '../../submodules/cs_components/src/components/campos/cs_InputTelefone.vue';
import cs_InputCelular from '../../submodules/cs_components/src/components/campos/cs_InputCelular.vue';
import cs_InputCPF from '../../submodules/cs_components/src/components/campos/cs_InputCPF.vue';
import cs_InputCnpj from '../../submodules/cs_components/src/components/campos/cs_InputCnpj.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_PopUpConsultarCnpj from './Componentes/cs_PopUpConsultarCnpj.vue';

const props = defineProps<{
    id: string;
}>();

//Variáveis de modelo
const BB012 = ref<any>({
    ID: '',
    BB012_Codigo: 0,
    BB012_Nome_Cliente: '',
    BB012_Nome_Fantasia: '',
    BB012_Data_Aniversario: '',
    BB012_Data_Cadastro: '',
    BB012_Telefone: '',
    BB012_FaxCelular: '',
    BB012_Home_Page: '',
    BB012_Email: '',
    BB012_Data_Entrada_Sit: '',
    BB012_Data_Saida_Sit: '',
    BB012_Descricao: '',
    BB012_Is_Active: false,
    BB012_Tipo_Conta_ID: 0,
    BB012_Grupoconta_ID: 0,
    BB012_ClasseConta_ID: 0,
    BB012_StatusConta_ID: 0,
    BB012_Sit_Conta_ID: 0,
    BB012_ModRelacao_ID: 0,
    BB012_Sequence: 0,
    bb012_dUltAlteracao: '',
    bb012_EstabCadID: '',
    bb012_KeyAcess: '',
    bb012_ID_Indicador: '',
    bb012_CountAppMCon: 0,
    bb012_OriCadastroID: 0
});

const BB01201 = ref<any>({
    Id: '',
    BB012_ZonaID: '',
    BB012_AtividadeID: '',
    BB012_LimiteCredito: 0,
    BB012_LimCreditoSecun: 0,
    BB012_LimiteCCredito: 0,
    BB012_DiaVenctoCartao: 0,
    BB012_ContaConvenio: '',
    BB012_DiasPagtoConv: 0,
    BB012_PadraoBancoID: '',
    BB012_BcoAgenciaConta: '',
    BB012_Revenda: 0,
    BB012_Taxa_Administracao_Con: 0,
    BB012_Requisicao: 0,
    BB012_ContaContabil: '',
    BB012_HistoricoContabilID: '',
    BB012_ContratoCartao: 0,
    BB012_DataContratoCartao: '',
    BB012_DtValidadeCartao: '',
    BB012_ModalidadeCredCartao: '',
    BB012_PercLimCredito: 0,
    BB012_PrazoEntregaFornec: 0,
    BB012_CondPagtoFornec: '',
    BB012_NatOperacaoID: '',
    BB012_CondPagtoID: '',
    BB012_TextoNotaId: '',
    BB012_Grau_Risco: '',
    BB012_Classe_Credito: '',
    BB012_DtValidCadastro: '',
    BB012_Perc_ICMS: 0,
    BB012_CodgCategoria: '',
    BB012_CategoriaID: '',
    BB012_LimiteCredParcela: 0,
    BB012_Num_Ult_Fatura: 0,
    BB012_TotCompraCarnet: 0,
    BB012_Valor_Entrada: 0,
    BB012_Maior_Compra: 0,
    BB012_Menor_Compra: 0,
    BB012_TotDiasAtraso: 0,
    BB012_Maior_Atraso: 0,
    BB012_Menor_Atraso: 0,
    BB012_MediaDeAtraso: 0,
    BB012_MaiorSaldo: 0,
    BB012_NumCompras: 0,
    BB012_DtPrimCompra: '',
    BB012_DtUltCompra: '',
    BB012_VlrMaiorPagto: 0,
    BB012_NumPagtoDia: 0,
    BB012_NumPagtoAtraso: 0,
    BB012_SaldoDevedor: 0,
    BB012_SaldoPedido: 0,
    BB012_QtdTitProtestado: 0,
    BB012_UltProtesto: '',
    BB012_QtdChqDevolvido: 0,
    BB012_UltChqDevolvido: '',
    BB012_Convenio_ID: 0,
    BB012_TipoGeracao_ID: 0,
    BB012_SitEspecial_ID: 0,
    BB012_EntMtgRotaID: '',
    BB012_VendaRotaID: '',
    bb012_DiaVenctoID: '',
    bb012_CodgBcoDebConta: ''
});

const BB01202 = ref<any>({
    Id: '',
    BB012_CNPJ: 0,
    BB012_InscEstadual: 0,
    BB012_SUFRAMA: '',
    BB012_RegSUFRAMAValido: 0,
    BB012_RegJuntaComercial: '',
    BB012_DataRegJunta: '',
    BB012_Patrimonio: 0,
    BB012_Capital_Social: 0,
    BB012_CPF: 0,
    BB012_RG: 0,
    BB012_ComplementoRG: '',
    BB012_EmissaoRG: '',
    BB012_PIS: 0,
    BB012_ResideDesde: '',
    BB012_NroDependentes: 0,
    BB012_EmpAdmissao: '',
    BB012_Emp_Profissao: '',
    BB012_ValorRemuneracao: 0,
    BB012_OutrosRendimentos: 0,
    BB012_OrigemOutrosRend: '',
    BB012_Insc_Est_SNI_ID: 0,
    BB012_Sexo_ID: 0,
    BB012_EstadoCivil_ID: 0,
    BB012_TipoDomicilio_ID: 0,
    BB012_CompResid01_ID: 0,
    BB012_CompResid02_ID: 0,
    BB012_GEscolaridade_ID: 0,
    BB012_Ocupacao_Id: 0,
    BB012_NaturalDe_ID: '',
    BB012_TpTributacao_ID: 0,
    BB012_Ident_Estrangeiro: '',
    BB012_Empresa: '',
    BB012_Emp_Endereco: '',
    BB012_Emp_Grupo_ID: 0,
    BB012_MotDesoneracaoID: 0
});

const BB01206 = ref<any>({
    Id: '',
    BB012_ID: '',
    BB012J_EnderecoID: '',
    BB012_Logradouro: '',
    BB012_Numero: '',
    BB012_Complemento: '',
    BB012_Perimetro: '',
    BB012_CodgBairro: '',
    BB012_Bairro: '',
    BB012_Codigo_Cidade: '',
    BB012_UF: '',
    BB012_CEP: 0,
    BB012_Codigo_Pais: '',
    BB012_Entrega_Logradouro: '',
    BB012_Entrega_Numero: '',
    BB012_Entrega_Complement: '',
    BB012_Entrega_CodgBairro: '',
    BB012_Entrega_Bairro: '',
    BB012_Entrega_Cod_Cidade: '',
    BB012_Entrega_Uf: '',
    BB012_Entrega_CEP: 0,
    BB012_Entrega_Pais: '',
    BB012_Entrega_Perimetro: '',
    bb012_Telefone: '',
    bb012_Celular: '',
    bb012_email: ''
});

const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const router = useRouter();
const formRef = ref<any>(null);
const isPopupOpen = ref(false);
const cpfClear = ref<number>(0);
const disableCPF = ref(false);
const disableCNPJ = ref(false);
const loading = ref(false);

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

function capturarCpfLimpo(cpf: any) {
    cpfClear.value = cpf;
}

function limparCep(cepComMascara: string): string {
    return cepComMascara.replace(/\D/g, '');
}

// Abre o popup
function abrirPopup() {
    isPopupOpen.value = true;
}

// Função para lidar com o recebimento dos dados
function handleCnpjData(dados: any) {
    BB012.value.BB012_Nome_Cliente = dados.razao_social;
    BB012.value.BB012_Nome_Fantasia;
    BB012.value.BB012_Data_Aniversario;
    BB012.value.BB012_Data_Cadastro;
    BB012.value.BB012_Telefone = dados.ddd_telefone_1;
    BB012.value.BB012_FaxCelular = dados.ddd_fax;
    BB012.value.BB012_Home_Page;
    BB012.value.BB012_Email = dados.email;
    BB012.value.BB012_Nome_Fantasia = dados.nome_fantasia;
    BB012.value.BB012_Data_Cadastro = dados.data_inicio_atividade;

    BB01206.value.BB012_Logradouro = dados.logradouro;
    BB01206.value.BB012_Numero = dados.numero;
    BB01206.value.BB012_Complemento = dados.complemento;
    BB01206.value.BB012_Bairro = dados.bairro;
    BB01206.value.BB012_UF = dados.uf;
    BB01206.value.BB012_CEP = dados.cep;

    BB01202.value.BB012_CNPJ = dados.cnpj;
}

const handleCepInfo = (info: CEP) => {
    BB01206.value.BB012_Logradouro = info.logradouro;
    BB01206.value.BB012_Bairro = info.bairro;
    BB01206.value.BB012_Complemento = info.complemento;
    BB01206.value.BB012_CEP = Number(limparCep(info.cep));
};

const onPaisSelecionado = (value: any) => {
    BB01206.value.BB012_Codigo_Pais = value;
};

const fetchContaById = async (id: string) => {
    loading.value = true;

    try {
        const res: ContaById = await GetContaById(tenant, id);
        const data = res.Data;

        // Acessa os campos BB012
        BB012.value.ID = data.Id;
        BB012.value.BB012_Codigo = data.Bb012Codigo || '';
        BB012.value.BB012_Nome_Cliente = data.Bb012NomeCliente || '';
        BB012.value.BB012_Nome_Fantasia = data.Bb012NomeFantasia || '';
        BB012.value.BB012_Data_Aniversario = data.Bb012DataAniversario
            ? new Date(data.Bb012DataAniversario).toISOString().split('T')[0]
            : '';
        BB012.value.BB012_Data_Cadastro = data.Bb012DataCadastro ? new Date(data.Bb012DataCadastro).toISOString().split('T')[0] : '';
        BB012.value.BB012_Telefone = data.Bb012Telefone || '';
        BB012.value.BB012_FaxCelular = data.Bb012Faxcelular || '';
        BB012.value.BB012_Home_Page = data.Bb012HomePage || '';
        BB012.value.BB012_Email = data.Bb012Email || '';
        BB012.value.BB012_Data_Entrada_Sit = data.Bb012DataEntradaSit || '';
        BB012.value.BB012_Data_Saida_Sit = data.Bb012DataSaidaSit || '';
        BB012.value.BB012_Descricao = data.Bb012Descricao || '';
        BB012.value.BB012_Is_Active = data.Bb012IsActive || '';
        BB012.value.BB012_Tipo_Conta_ID = data.Bb012TipoContaId || '';
        BB012.value.BB012_Grupoconta_ID = data.Bb012GrupocontaId || '';
        BB012.value.BB012_ClasseConta_ID = data.Bb012ClassecontaId || '';
        BB012.value.BB012_StatusConta_ID = data.Bb012StatuscontaId || '';
        BB012.value.BB012_Sit_Conta_ID = data.Bb012SitContaId || '';
        BB012.value.BB012_ModRelacao_ID = data.Bb012ModrelacaoId || '';
        BB012.value.BB012_Sequence = data.Bb012Sequence || '';
        BB012.value.bb012_dUltAlteracao = data.Bb012Dultalteracao || '';
        BB012.value.bb012_EstabCadID = data.Bb012Estabcadid || '';
        BB012.value.bb012_KeyAcess = data.Bb012Keyacess || '';
        BB012.value.bb012_ID_Indicador = data.Bb012IdIndicador || '';
        BB012.value.bb012_CountAppMCon = data.Bb012Countappmcon || 0;
        BB012.value.bb012_OriCadastroID = data.Bb012Oricadastroid || '';

        // Variáveis do modelo BB01201
        BB01201.value.Id = data.NavGetBB1201?.Id || '';
        BB01201.value.Bb012Zonaid = data.NavGetBB1201?.Bb012Zonaid || '';
        BB01201.value.Bb012Atividadeid = data.NavGetBB1201?.Bb012Atividadeid || '';
        BB01201.value.Bb012Limitecredito = data.NavGetBB1201?.Bb012Limitecredito || '';
        BB01201.value.Bb012Limcreditosecun = data.NavGetBB1201?.Bb012Limcreditosecun || '';
        BB01201.value.Bb012Limiteccredito = data.NavGetBB1201?.Bb012Limiteccredito || '';
        BB01201.value.NavBB010_Zona = data.NavGetBB1201?.NavBB010_Zona || '';
        BB01201.value.NavBB011_Atividade = data.NavGetBB1201?.NavBB011_Atividade || '';
        BB01201.value.NavBB006_BancoPadrao = data.NavGetBB1201?.NavBB006_BancoPadrao || '';
        BB01201.value.NavRevenda = data.NavGetBB1201?.NavRevenda || '';
        BB01201.value.NavRequisicao = data.NavGetBB1201?.NavRequisicao || '';
        BB01201.value.NavBB025_NatOperacao = data.NavGetBB1201?.NavBB025_NatOperacao || '';
        BB01201.value.NavBB008_CondPagamento = data.NavGetBB1201?.NavBB008_CondPagamento || '';
        BB01201.value.NavBB029_Categoria = data.NavGetBB1201?.NavBB029_Categoria || '';
        BB01201.value.NavBB01201_Convenio = data.NavGetBB1201?.NavBB01201_Convenio || '';
        BB01201.value.NavBB01201_TpGeracao = data.NavGetBB1201?.NavBB01201_TpGeracao || '';
        BB01201.value.NavBB01201_SitEspecial = data.NavGetBB1201?.NavBB01201_SitEspecial || '';
        BB01201.value.NavBB010_EntregaMontagem = data.NavGetBB1201?.NavBB010_EntregaMontagem || '';
        BB01201.value.NavBB010_VendaRota = data.NavGetBB1201?.NavBB010_VendaRota?.Id || '';
        BB01201.value.bb012_DiaVenctoID = data.NavGetBB1201?.NavBB037_DiaVencimento?.Id || '';

        // Variáveis de modelo BB01202
        BB01202.value.Id = data.NavGetBB1202?.Id ?? '';
        BB01202.value.BB012_CNPJ = data.NavGetBB1202?.Bb012Cnpj ?? '';
        BB01202.value.BB012_InscEstadual = data.NavGetBB1202?.Bb012Inscestadual ?? '';
        BB01202.value.BB012_SUFRAMA = data.NavGetBB1202?.Bb012Suframa ?? '';
        BB01202.value.BB012_RegSUFRAMAValido = data.NavGetBB1202?.NavBB012_RegSUFRAMAValido ?? '';
        BB01202.value.BB012_DataRegJunta = data.NavGetBB1202?.Bb012Dataregjunta ?? null;
        BB01202.value.BB012_Patrimonio = data.NavGetBB1202?.Bb012Patrimonio ?? '';
        BB01202.value.BB012_Capital_Social = data.NavGetBB1202?.Bb012CapitalSocial ?? '';
        BB01202.value.BB012_CPF = data.NavGetBB1202?.Bb012Cpf ?? '';
        BB01202.value.BB012_RG = data.NavGetBB1202?.Bb012Rg ?? '';
        BB01202.value.BB012_ComplementoRG = data.NavGetBB1202?.Bb012Complementorg ?? '';
        BB01202.value.BB012_EmissaoRG = data.NavGetBB1202?.Bb012Emissaorg ?? null;
        BB01202.value.BB012_PIS = data.NavGetBB1202?.Bb012Pis ?? '';
        BB01202.value.BB012_ResideDesde = data.NavGetBB1202?.Bb012Residedesde ?? null;
        BB01202.value.BB012_NroDependentes = data.NavGetBB1202?.Bb012Nrodependentes ?? '';
        BB01202.value.BB012_EmpAdmissao = data.NavGetBB1202?.Bb012Empadmissao ?? null;
        BB01202.value.BB012_Emp_Profissao = data.NavGetBB1202?.Bb012EmpProfissao ?? '';
        BB01202.value.BB012_ValorRemuneracao = data.NavGetBB1202?.Bb012Valorremuneracao ?? '';
        BB01202.value.BB012_OutrosRendimentos = data.NavGetBB1202?.Bb012Outrosrendimentos ?? '';
        BB01202.value.BB012_OrigemOutrosRend = data.NavGetBB1202?.Bb012Origemoutrosrend ?? '';
        BB01202.value.BB012_Insc_Est_SNI_ID = data.NavGetBB1202?.Bb012InscEstSniId ?? '';
        BB01202.value.BB012_Sexo_ID = data.NavGetBB1202?.Bb012SexoId ?? '';
        BB01202.value.BB012_EstadoCivil_ID = data.NavGetBB1202?.Bb012EstadocivilId ?? '';
        BB01202.value.BB012_TipoDomicilio_ID = data.NavGetBB1202?.Bb012TipodomicilioId ?? '';
        BB01202.value.BB012_CompResid01_ID = data.NavGetBB1202?.Bb012Compresid01Id ?? '';
        BB01202.value.BB012_CompResid02_ID = data.NavGetBB1202?.Bb012Compresid02Id ?? '';
        BB01202.value.BB012_GEscolaridade_ID = data.NavGetBB1202?.Bb012GescolaridadeId ?? '';
        BB01202.value.BB012_Ocupacao_Id = data.NavGetBB1202?.Bb012OcupacaoId ?? '';
        BB01202.value.BB012_NaturalDe_ID = data.NavGetBB1202?.Bb012NaturaldeId ?? '';
        BB01202.value.BB012_TpTributacao_ID = data.NavGetBB1202?.Bb012TptributacaoId ?? '';
        BB01202.value.BB012_Ident_Estrangeiro = data.NavGetBB1202?.Bb012IdentEstrangeiro ?? '';
        BB01202.value.BB012_Empresa = data.NavGetBB1202?.Bb012Empresa ?? '';
        BB01202.value.BB012_Emp_Endereco = data.NavGetBB1202?.Bb012EmpEndereco ?? '';
        BB01202.value.BB012_Emp_Grupo_ID = data.NavGetBB1202?.Bb012EmpGrupoId ?? '';
        BB01202.value.BB012_MotDesoneracaoID = data.NavGetBB1202?.Bb012Motdesoneracaoid ?? '';
        BB01202.value.NavBB012_RegSUFRAMAValido = data.NavGetBB1202?.NavBB012_RegSUFRAMAValido?.Label ?? '';
        BB01202.value.NavBB012_Insc_Est_SNI = data.NavGetBB1202?.NavBB012_Insc_Est_SNI?.Label ?? '';
        BB01202.value.NavBB012_Sexo = data.NavGetBB1202?.NavBB012_Sexo?.Id ?? '';
        BB01202.value.NavBB012_EstadoCivil = data.NavGetBB1202?.NavBB012_EstadoCivil?.Id ?? '';
        BB01202.value.NavBB012_Domicilio = data.NavGetBB1202?.NavBB012_Domicilio?.Id ?? '';
        BB01202.value.NavBB012_ComprovanteResidencia1 = data.NavGetBB1202?.NavBB012_ComprovanteResidencia1?.Label ?? '';
        BB01202.value.NavBB012_ComprovanteResidencia2 = data.NavGetBB1202?.NavBB012_ComprovanteResidencia2?.Label ?? '';
        BB01202.value.NavBB012_Escolaridade = data.NavGetBB1202?.NavBB012_Escolaridade?.Id ?? '';
        BB01202.value.NavBB012_Ocupacao = data.NavGetBB1202?.NavBB012_Ocupacao?.Id ?? '';
        BB01202.value.NavAA028_NatualDe = data.NavGetBB1202?.NavAA028_NatualDe?.Id ?? '';
        BB01202.value.NavBB001_Tributacao = data.NavGetBB1202?.NavBB001_Tributacao?.Id ?? '';
        BB01202.value.NavBB012_TipoDaEmpresaTrabalho = data.NavGetBB1202?.NavBB012_TipoDaEmpresaTrabalho?.Id ?? '';
        BB01202.value.NavBB027_MotivoDesoneracao = data.NavGetBB1202?.NavBB027_MotivoDesoneracao?.Id ?? '';

        //Acessa os campos da BB01206
        BB01206.value.Id = data.NavGetBB1206.Id;
        BB01206.value.BB012_ID = data.NavGetBB1206.Bb012Id;
        BB01206.value.BB012J_EnderecoID = data.NavGetBB1206.Bb012jEnderecoid;
        BB01206.value.BB012_Logradouro = data.NavGetBB1206.Bb012Logradouro;
        BB01206.value.BB012_Numero = data.NavGetBB1206.Bb012Numero;
        BB01206.value.BB012_Complemento = data.NavGetBB1206.Bb012Complemento;
        BB01206.value.BB012_Perimetro = data.NavGetBB1206.Bb012Perimetro;
        BB01206.value.BB012_CodgBairro = data.NavGetBB1206.Bb012Bairro;
        BB01206.value.BB012_Bairro = data.NavGetBB1206.Bb012Bairro;
        BB01206.value.BB012_Codigo_Cidade = data.NavGetBB1206.Bb012CodigoCidade;
        BB01206.value.BB012_UF = data.NavGetBB1206.Bb012Uf;
        BB01206.value.BB012_CEP = data.NavGetBB1206.Bb012Cep;
        BB01206.value.BB012_Codigo_Pais = data.NavGetBB1206.Bb012CodigoPais;
        BB01206.value.bb012_Telefone = data.NavGetBB1206.Bb012Telefone;
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    } finally {
        loading.value = false;
    }
};

async function salvarConta() {
    if (formRef.value && formRef.value.validate()) {
        const bb012: Bb012 = {
            Bb012Codigo: BB012.value.BB012_Codigo,
            Bb012NomeCliente: BB012.value.BB012_Nome_Cliente,
            Bb012NomeFantasia: BB012.value.BB012_Nome_Fantasia,
            Bb012DataAniversario: BB012.value.BB012_Data_Aniversario,
            Bb012DataCadastro: BB012.value.BB012_Data_Cadastro,
            Bb012Telefone: BB012.value.BB012_Telefone,
            Bb012Faxcelular: BB012.value.BB012_FaxCelular,
            Bb012HomePage: BB012.value.BB012_Home_Page,
            Bb012Email: BB012.value.BB012_Email,
            Bb012DataEntradaSit: BB012.value.BB012_Data_Entrada_Sit,
            Bb012DataSaidaSit: BB012.value.BB012_Data_Saida_Sit,
            Bb012Descricao: BB012.value.BB012_Descricao,
            Bb012IsActive: BB012.value.BB012_Is_Active,
            Bb012TipoContaId: BB012.value.BB012_Tipo_Conta_ID,
            Bb012GrupocontaId: BB012.value.BB012_Grupoconta_ID,
            Bb012ClassecontaId: BB012.value.BB012_ClasseConta_ID,
            Bb012StatuscontaId: BB012.value.BB012_StatusConta_ID,
            Bb012SitContaId: BB012.value.BB012_Sit_Conta_ID,
            Bb012ModrelacaoId: BB012.value.BB012_ModRelacao_ID,
            Bb012Sequence: BB012.value.BB012_Sequence,
            Bb012Dultalteracao: BB012.value.bb012_dUltAlteracao,
            Bb012Estabcadid: BB012.value.bb012_EstabCadID,
            Bb012Keyacess: BB012.value.bb012_KeyAcess,
            Bb012IdIndicador: BB012.value.bb012_ID_Indicador,
            Bb012Countappmcon: BB012.value.bb012_CountAppMCon,
            Bb012Oricadastroid: BB012.value.bb012_OriCadastroID
        };

        const bb01201: Bb01201 = {
            Bb012Zonaid: BB01201.value.BB012_ZonaID,
            Bb012Atividadeid: BB01201.value.BB012_AtividadeID,
            Bb012Limitecredito: BB01201.value.BB012_LimiteCredito,
            Bb012Limcreditosecun: BB01201.value.BB012_LimCreditoSecun,
            Bb012Limiteccredito: BB01201.value.BB012_LimiteCCredito,
            Bb012Diavenctocartao: BB01201.value.BB012_DiaVenctoCartao,
            Bb012Contaconvenio: BB01201.value.BB012_ContaConvenio,
            Bb012Diaspagtoconv: BB01201.value.BB012_DiasPagtoConv,
            Bb012Padraobancoid: BB01201.value.BB012_PadraoBancoID,
            Bb012Bcoagenciaconta: BB01201.value.BB012_BcoAgenciaConta,
            Bb012Revenda: BB01201.value.BB012_Revenda,
            Bb012TaxaAdministracaoCon: BB01201.value.BB012_Taxa_Administracao_Con,
            Bb012Requisicao: BB01201.value.BB012_Requisicao,
            Bb012Contacontabil: BB01201.value.BB012_ContaContabil,
            Bb012Historicocontabilid: BB01201.value.BB012_HistoricoContabilID,
            Bb012Contratocartao: BB01201.value.BB012_ContratoCartao,
            Bb012Datacontratocartao: BB01201.value.BB012_DataContratoCartao,
            Bb012Dtvalidadecartao: BB01201.value.BB012_DtValidadeCartao,
            Bb012Modalidadecredcartao: BB01201.value.BB012_ModalidadeCredCartao,
            Bb012Perclimcredito: BB01201.value.BB012_PercLimCredito,
            Bb012Prazoentregafornec: BB01201.value.BB012_PrazoEntregaFornec,
            Bb012Condpagtofornec: BB01201.value.BB012_CondPagtoFornec,
            Bb012Natoperacaoid: BB01201.value.BB012_NatOperacaoID,
            Bb012Condpagtoid: BB01201.value.BB012_CondPagtoID,
            Bb012Textonotaid: BB01201.value.BB012_TextoNotaId,
            Bb012GrauRisco: BB01201.value.BB012_Grau_Risco,
            Bb012ClasseCredito: BB01201.value.BB012_Classe_Credito,
            Bb012Dtvalidcadastro: BB01201.value.BB012_DtValidCadastro,
            Bb012PercIcms: BB01201.value.BB012_Perc_ICMS,
            Bb012Codgcategoria: BB01201.value.BB012_CodgCategoria,
            Bb012Categoriaid: BB01201.value.BB012_CategoriaID,
            Bb012Limitecredparcela: BB01201.value.BB012_LimiteCredParcela,
            Bb012NumUltFatura: BB01201.value.BB012_Num_Ult_Fatura,
            Bb012Totcompracarnet: BB01201.value.BB012_TotCompraCarnet,
            Bb012ValorEntrada: BB01201.value.BB012_Valor_Entrada,
            Bb012MaiorCompra: BB01201.value.BB012_Maior_Compra,
            Bb012MenorCompra: BB01201.value.BB012_Menor_Compra,
            Bb012Totdiasatraso: BB01201.value.BB012_TotDiasAtraso,
            Bb012MaiorAtraso: BB01201.value.BB012_Maior_Atraso,
            Bb012MenorAtraso: BB01201.value.BB012_Menor_Atraso,
            Bb012Mediadeatraso: BB01201.value.BB012_MediaDeAtraso,
            Bb012Maiorsaldo: BB01201.value.BB012_MaiorSaldo,
            Bb012Numcompras: BB01201.value.BB012_NumCompras,
            Bb012Dtprimcompra: BB01201.value.BB012_DtPrimCompra,
            Bb012Dtultcompra: BB01201.value.BB012_DtUltCompra,
            Bb012Vlrmaiorpagto: BB01201.value.BB012_VlrMaiorPagto,
            Bb012Numpagtodia: BB01201.value.BB012_NumPagtoDia,
            Bb012Numpagtoatraso: BB01201.value.BB012_NumPagtoAtraso,
            Bb012Saldodevedor: BB01201.value.BB012_SaldoDevedor,
            Bb012Saldopedido: BB01201.value.BB012_SaldoPedido,
            Bb012Qtdtitprotestado: BB01201.value.BB012_QtdTitProtestado,
            Bb012Ultprotesto: BB01201.value.BB012_UltProtesto,
            Bb012Qtdchqdevolvido: BB01201.value.BB012_QtdChqDevolvido,
            Bb012Ultchqdevolvido: BB01201.value.BB012_UltChqDevolvido,
            Bb012ConvenioId: BB01201.value.BB012_Convenio_ID,
            Bb012TipogeracaoId: BB01201.value.BB012_TipoGeracao_ID,
            Bb012SitespecialId: BB01201.value.BB012_SitEspecial_ID,
            Bb012Entmtgrotaid: BB01201.value.BB012_EntMtgRotaID,
            Bb012Vendarotaid: BB01201.value.BB012_VendaRotaID,
            Bb012Diavenctoid: BB01201.value.bb012_DiaVenctoID,
            Bb012Codgbcodebconta: BB01201.value.bb012_CodgBcoDebConta
        };

        const bb01202: Bb01202 = {
            Bb012Cnpj: BB01202.value.BB012_CNPJ,
            Bb012Inscestadual: BB01202.value.BB012_InscEstadual,
            Bb012Suframa: BB01202.value.BB012_SUFRAMA,
            Bb012Regsuframavalido: BB01202.value.BB012_RegSUFRAMAValido,
            Bb012Regjuntacomercial: BB01202.value.BB012_RegJuntaComercial,
            Bb012Dataregjunta: BB01202.value.BB012_DataRegJunta,
            Bb012Patrimonio: BB01202.value.BB012_Patrimonio,
            Bb012CapitalSocial: BB01202.value.BB012_Capital_Social,
            Bb012Cpf: cpfClear.value,
            Bb012Rg: BB01202.value.BB012_RG,
            Bb012Complementorg: BB01202.value.BB012_ComplementoRG,
            Bb012Emissaorg: BB01202.value.BB012_EmissaoRG,
            Bb012Pis: BB01202.value.BB012_PIS,
            Bb012Residedesde: BB01202.value.BB012_ResideDesde,
            Bb012Nrodependentes: BB01202.value.BB012_NroDependentes,
            Bb012Empadmissao: BB01202.value.BB012_EmpAdmissao,
            Bb012EmpProfissao: BB01202.value.BB012_Emp_Profissao,
            Bb012Valorremuneracao: BB01202.value.BB012_ValorRemuneracao,
            Bb012Outrosrendimentos: BB01202.value.BB012_OutrosRendimentos,
            Bb012Origemoutrosrend: BB01202.value.BB012_OrigemOutrosRend,
            Bb012InscEstSniId: BB01202.value.BB012_Insc_Est_SNI_ID,
            Bb012SexoId: BB01202.value.BB012_Sexo_ID,
            Bb012EstadocivilId: BB01202.value.BB012_EstadoCivil_ID,
            Bb012TipodomicilioId: BB01202.value.BB012_TipoDomicilio_ID,
            Bb012Compresid01Id: BB01202.value.BB012_CompResid01_ID,
            Bb012Compresid02Id: BB01202.value.BB012_CompResid02_ID,
            Bb012GescolaridadeId: BB01202.value.BB012_GEscolaridade_ID,
            Bb012OcupacaoId: BB01202.value.BB012_Ocupacao_Id,
            Bb012NaturaldeId: BB01202.value.BB012_NaturalDe_ID,
            Bb012TptributacaoId: BB01202.value.BB012_TpTributacao_ID,
            Bb012IdentEstrangeiro: BB01202.value.BB012_Ident_Estrangeiro,
            Bb012Empresa: BB01202.value.BB012_Empresa,
            Bb012EmpEndereco: BB01202.value.BB012_Emp_Endereco,
            Bb012EmpGrupoId: BB01202.value.BB012_Emp_Grupo_ID,
            Bb012Motdesoneracaoid: BB01202.value.BB012_MotDesoneracaoID
        };

        const bb01206: Bb01206 = {
            Bb012jEnderecoid: BB01206.value.BB012J_EnderecoID,
            Bb012Logradouro: BB01206.value.BB012_Logradouro,
            Bb012Numero: BB01206.value.BB012_Numero,
            Bb012Complemento: BB01206.value.BB012_Complemento,
            Bb012Codgbairro: BB01206.value.BB012_CodgBairro,
            Bb012Bairro: BB01206.value.BB012_Bairro,
            Bb012CodigoCidade: BB01206.value.BB012_Codigo_Cidade,
            Bb012Uf: BB01206.value.BB012_UF,
            Bb012Cep: BB01206.value.BB012_CEP,
            Bb012CodigoPais: BB01206.value.BB012_Codigo_Pais,
            Bb012EntregaLogradouro: BB01206.value.BB012_Entrega_Logradouro,
            Bb012EntregaNumero: BB01206.value.BB012_Entrega_Numero,
            Bb012EntregaComplement: BB01206.value.BB012_Entrega_Complement,
            Bb012EntregaCodgbairro: BB01206.value.BB012_Entrega_CodgBairro,
            Bb012EntregaBairro: BB01206.value.BB012_Entrega_Bairro,
            Bb012EntregaCodCidade: BB01206.value.BB012_Entrega_Cod_Cidade,
            Bb012EntregaUf: BB01206.value.BB012_Entrega_Uf,
            Bb012EntregaCep: BB01206.value.BB012_Entrega_CEP,
            Bb012EntregaPais: BB01206.value.BB012_Entrega_Pais,
            Bb012Perimetro: BB01206.value.BB012_Perimetro,
            Bb012EntregaPerimetro: BB01206.value.BB012_Entrega_Perimetro,
            Bb012Telefone: BB01206.value.bb012_Telefone,
            Bb012Celular: BB01206.value.bb012_Celular,
            Bb012Email: BB01206.value.bb012_email
        };

        const In_csicp_bb012_Completo: ContaCreate = {
            Bb012: bb012,
            Bb01201: bb01201,
            Bb01202: bb01202,
            Bb01206: bb01206
        };

        try {
            const response = await UpdateConta(tenant, BB012.value.ID, In_csicp_bb012_Completo);
            if (response.data.Str_ReturnErro.Out_IsSuccess) {
                showSnackbar('Conta atualizada com sucesso', 'success');
                setTimeout(() => {
                    router.push({
                        name: 'Contas'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Str_ReturnErro.Out_Message || 'Erro ao criar conta', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao editar a conta', 'error');
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
}

const redirectToEditCompleto = async (id: string) => {
    if (id) {
        await router.push({
            name: 'ContasEditCompleto',
            params: {
                id: id
            }
        });
    } else {
        console.error('Item indefinido');
    }
};

function redirectToContas() {
    router.push({ name: 'Contas' });
}

// Observa mudanças em BB012_CPF
watch(
    () => BB01202.value.BB012_CPF,
    (newCPF) => {
        disableCNPJ.value = !!newCPF; // Desabilita o campo CNPJ se CPF tiver algum valor
        if (!newCPF) disableCNPJ.value = false; // Habilita CNPJ caso CPF seja vazio
    }
);

// Observa mudanças em BB012_CNPJ
watch(
    () => BB01202.value.BB012_CNPJ,
    (newCNPJ) => {
        disableCPF.value = !!newCNPJ; // Desabilita o campo CPF se CNPJ tiver algum valor
        if (!newCNPJ) disableCPF.value = false; // Habilita CPF caso CNPJ seja vazio
    }
);

onMounted(() => {
    fetchContaById(props.id);
});
</script>
