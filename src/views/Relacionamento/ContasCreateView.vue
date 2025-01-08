<template>
    <v-container fluid>
        <v-toolbar title="Criar Conta" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef">
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
                    <v-col cols="auto">
                        <cs_BtnSalvar @click="salvarConta()" />
                        <cs_BtnCancelar class="ml-4" @click="redirectToContas" />
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-container>

    <!-- Componente de Popup de Consulta CNPJ -->
    <cs_PopUpRecuperarDados v-model="mostrarPopup" @enviarDadosCnpj="receberDadosCnpj" />

    <v-snackbar v-model="snackbar" :timeout="3000" top v-bind:color="snackbarColor" multi-line>
        {{ snackbarMessage }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="snackbar = false"></v-btn>
        </template>
    </v-snackbar>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../utils/getUserStorage';
// Import de API's
import { SaveContaCompleto } from '../../services/contas/bb012_conta';
// Import de types
import type { BB01206, BB012, BB01202, BB01201 } from '../../views/Relacionamento/bb012_Types';
import type { Csicp_bb012, Csicp_bb01201, Csicp_bb01202, Csicp_bb01206 } from '../../services/contas/saveConta';
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
import cs_InputCelular from '../../submodules/cs_components/src/components/campos/cs_InputCelular.vue';
import cs_InputTelefone from '@/submodules/cs_components/src/components/campos/cs_InputTelefone.vue';
import cs_InputCPF from '../../submodules/cs_components/src/components/campos/cs_InputCPF.vue';
import cs_InputCnpj from '../../submodules/cs_components/src/components/campos/cs_InputCnpj.vue';
import cs_BtnCancelar from '../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnSalvar from '../../submodules/cs_components/src/components/botoes/cs_BtnSalvar.vue';
import cs_PopUpRecuperarDados from '../../submodules/cs_components/src/components/popup/cs_PopUpConsultarCnpj.vue';

//Variáveis de modelo
const BB012 = ref<BB012>({
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

const BB01201 = ref<BB01201>({
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

const BB01202 = ref<BB01202>({
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

const BB01206 = ref<BB01206>({
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
const mostrarPopup = ref(false);
const cpfClear = ref<number>(0);
const disableCPF = ref(false);
const disableCNPJ = ref(false);

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

function limparCep(cep: any): string {
    return cep.replace(/\D/g, '');
}

function abrirPopup() {
    mostrarPopup.value = true;
}

// Função para lidar com o recebimento dos dados
function receberDadosCnpj(dados: any) {
    console.log('Dados recebidos do popup:', dados);

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

const onPaisSelecionado = (value: any) => {
    BB01206.value.BB012_Codigo_Pais = value;
};

const handleCepInfo = (info: CEP) => {
    BB01206.value.BB012_Logradouro = info.logradouro;
    BB01206.value.BB012_Bairro = info.bairro;
    BB01206.value.BB012_Complemento = info.complemento;
    BB01206.value.BB012_CEP = Number(limparCep(info.cep));
};

async function salvarConta() {
    if (formRef.value && formRef.value.validate()) {
        const csicp_bb012: Csicp_bb012 = {
            ID: BB012.value.ID,
            BB012_Codigo: BB012.value.BB012_Codigo,
            BB012_Nome_Cliente: BB012.value.BB012_Nome_Cliente,
            BB012_Nome_Fantasia: BB012.value.BB012_Nome_Fantasia,
            BB012_Data_Aniversario: BB012.value.BB012_Data_Aniversario,
            BB012_Data_Cadastro: BB012.value.BB012_Data_Cadastro,
            BB012_Telefone: BB012.value.BB012_Telefone,
            BB012_FaxCelular: BB012.value.BB012_FaxCelular,
            BB012_Home_Page: BB012.value.BB012_Home_Page,
            BB012_Email: BB012.value.BB012_Email,
            BB012_Data_Entrada_Sit: BB012.value.BB012_Data_Entrada_Sit,
            BB012_Data_Saida_Sit: BB012.value.BB012_Data_Saida_Sit,
            BB012_Descricao: BB012.value.BB012_Descricao,
            BB012_Is_Active: BB012.value.BB012_Is_Active,
            BB012_Tipo_Conta_ID: BB012.value.BB012_Tipo_Conta_ID,
            BB012_Grupoconta_ID: BB012.value.BB012_Grupoconta_ID,
            BB012_ClasseConta_ID: BB012.value.BB012_ClasseConta_ID,
            BB012_StatusConta_ID: BB012.value.BB012_StatusConta_ID,
            BB012_Sit_Conta_ID: BB012.value.BB012_Sit_Conta_ID,
            BB012_ModRelacao_ID: BB012.value.BB012_ModRelacao_ID,
            BB012_Sequence: BB012.value.BB012_Sequence,
            bb012_dUltAlteracao: BB012.value.bb012_dUltAlteracao,
            bb012_EstabCadID: BB012.value.bb012_EstabCadID,
            bb012_KeyAcess: BB012.value.bb012_KeyAcess,
            bb012_ID_Indicador: BB012.value.bb012_ID_Indicador,
            bb012_CountAppMCon: BB012.value.bb012_CountAppMCon,
            bb012_OriCadastroID: BB012.value.bb012_OriCadastroID
        };

        const csicp_bb01201: Csicp_bb01201 = {
            Id: BB01201.value.Id,
            BB012_ZonaID: BB01201.value.BB012_ZonaID,
            BB012_AtividadeID: BB01201.value.BB012_AtividadeID,
            BB012_LimiteCredito: BB01201.value.BB012_LimiteCredito,
            BB012_LimCreditoSecun: BB01201.value.BB012_LimCreditoSecun,
            BB012_LimiteCCredito: BB01201.value.BB012_LimiteCCredito,
            BB012_DiaVenctoCartao: BB01201.value.BB012_DiaVenctoCartao,
            BB012_ContaConvenio: BB01201.value.BB012_ContaConvenio,
            BB012_DiasPagtoConv: BB01201.value.BB012_DiasPagtoConv,
            BB012_PadraoBancoID: BB01201.value.BB012_PadraoBancoID,
            BB012_BcoAgenciaConta: BB01201.value.BB012_BcoAgenciaConta,
            BB012_Revenda: BB01201.value.BB012_Revenda,
            BB012_Taxa_Administracao_Con: BB01201.value.BB012_Taxa_Administracao_Con,
            BB012_Requisicao: BB01201.value.BB012_Requisicao,
            BB012_ContaContabil: BB01201.value.BB012_ContaContabil,
            BB012_HistoricoContabilID: BB01201.value.BB012_HistoricoContabilID,
            BB012_ContratoCartao: BB01201.value.BB012_ContratoCartao,
            BB012_DataContratoCartao: BB01201.value.BB012_DataContratoCartao,
            BB012_DtValidadeCartao: BB01201.value.BB012_DtValidadeCartao,
            BB012_ModalidadeCredCartao: BB01201.value.BB012_ModalidadeCredCartao,
            BB012_PercLimCredito: BB01201.value.BB012_PercLimCredito,
            BB012_PrazoEntregaFornec: BB01201.value.BB012_PrazoEntregaFornec,
            BB012_CondPagtoFornec: BB01201.value.BB012_CondPagtoFornec,
            BB012_NatOperacaoID: BB01201.value.BB012_NatOperacaoID,
            BB012_CondPagtoID: BB01201.value.BB012_CondPagtoID,
            BB012_TextoNotaId: BB01201.value.BB012_TextoNotaId,
            BB012_Grau_Risco: BB01201.value.BB012_Grau_Risco,
            BB012_Classe_Credito: BB01201.value.BB012_Classe_Credito,
            BB012_DtValidCadastro: BB01201.value.BB012_DtValidCadastro,
            BB012_Perc_ICMS: BB01201.value.BB012_Perc_ICMS,
            BB012_CodgCategoria: BB01201.value.BB012_CodgCategoria,
            BB012_CategoriaID: BB01201.value.BB012_CategoriaID,
            BB012_LimiteCredParcela: BB01201.value.BB012_LimiteCredParcela,
            BB012_Num_Ult_Fatura: BB01201.value.BB012_Num_Ult_Fatura,
            BB012_TotCompraCarnet: BB01201.value.BB012_TotCompraCarnet,
            BB012_Valor_Entrada: BB01201.value.BB012_Valor_Entrada,
            BB012_Maior_Compra: BB01201.value.BB012_Maior_Compra,
            BB012_Menor_Compra: BB01201.value.BB012_Menor_Compra,
            BB012_TotDiasAtraso: BB01201.value.BB012_TotDiasAtraso,
            BB012_Maior_Atraso: BB01201.value.BB012_Maior_Atraso,
            BB012_Menor_Atraso: BB01201.value.BB012_Menor_Atraso,
            BB012_MediaDeAtraso: BB01201.value.BB012_MediaDeAtraso,
            BB012_MaiorSaldo: BB01201.value.BB012_MaiorSaldo,
            BB012_NumCompras: BB01201.value.BB012_NumCompras,
            BB012_DtPrimCompra: BB01201.value.BB012_DtPrimCompra,
            BB012_DtUltCompra: BB01201.value.BB012_DtUltCompra,
            BB012_VlrMaiorPagto: BB01201.value.BB012_VlrMaiorPagto,
            BB012_NumPagtoDia: BB01201.value.BB012_NumPagtoDia,
            BB012_NumPagtoAtraso: BB01201.value.BB012_NumPagtoAtraso,
            BB012_SaldoDevedor: BB01201.value.BB012_SaldoDevedor,
            BB012_SaldoPedido: BB01201.value.BB012_SaldoPedido,
            BB012_QtdTitProtestado: BB01201.value.BB012_QtdTitProtestado,
            BB012_UltProtesto: BB01201.value.BB012_UltProtesto,
            BB012_QtdChqDevolvido: BB01201.value.BB012_QtdChqDevolvido,
            BB012_UltChqDevolvido: BB01201.value.BB012_UltChqDevolvido,
            BB012_Convenio_ID: BB01201.value.BB012_Convenio_ID,
            BB012_TipoGeracao_ID: BB01201.value.BB012_TipoGeracao_ID,
            BB012_SitEspecial_ID: BB01201.value.BB012_SitEspecial_ID,
            BB012_EntMtgRotaID: BB01201.value.BB012_EntMtgRotaID,
            BB012_VendaRotaID: BB01201.value.BB012_VendaRotaID,
            bb012_DiaVenctoID: BB01201.value.bb012_DiaVenctoID,
            bb012_CodgBcoDebConta: BB01201.value.bb012_CodgBcoDebConta
        };

        const csicp_bb01202: Csicp_bb01202 = {
            Id: BB01202.value.Id,
            BB012_CNPJ: BB01202.value.BB012_CNPJ,
            BB012_InscEstadual: BB01202.value.BB012_InscEstadual,
            BB012_SUFRAMA: BB01202.value.BB012_SUFRAMA,
            BB012_RegSUFRAMAValido: BB01202.value.BB012_RegSUFRAMAValido,
            BB012_RegJuntaComercial: BB01202.value.BB012_RegJuntaComercial,
            BB012_DataRegJunta: BB01202.value.BB012_DataRegJunta,
            BB012_Patrimonio: BB01202.value.BB012_Patrimonio,
            BB012_Capital_Social: BB01202.value.BB012_Capital_Social,
            BB012_CPF: cpfClear.value,
            BB012_RG: BB01202.value.BB012_RG,
            BB012_ComplementoRG: BB01202.value.BB012_ComplementoRG,
            BB012_EmissaoRG: BB01202.value.BB012_EmissaoRG,
            BB012_PIS: BB01202.value.BB012_PIS,
            BB012_ResideDesde: BB01202.value.BB012_ResideDesde,
            BB012_NroDependentes: BB01202.value.BB012_NroDependentes,
            BB012_EmpAdmissao: BB01202.value.BB012_EmpAdmissao,
            BB012_Emp_Profissao: BB01202.value.BB012_Emp_Profissao,
            BB012_ValorRemuneracao: BB01202.value.BB012_ValorRemuneracao,
            BB012_OutrosRendimentos: BB01202.value.BB012_OutrosRendimentos,
            BB012_OrigemOutrosRend: BB01202.value.BB012_OrigemOutrosRend,
            BB012_Insc_Est_SNI_ID: BB01202.value.BB012_Insc_Est_SNI_ID,
            BB012_Sexo_ID: BB01202.value.BB012_Sexo_ID,
            BB012_EstadoCivil_ID: BB01202.value.BB012_EstadoCivil_ID,
            BB012_TipoDomicilio_ID: BB01202.value.BB012_TipoDomicilio_ID,
            BB012_CompResid01_ID: BB01202.value.BB012_CompResid01_ID,
            BB012_CompResid02_ID: BB01202.value.BB012_CompResid02_ID,
            BB012_GEscolaridade_ID: BB01202.value.BB012_GEscolaridade_ID,
            BB012_Ocupacao_Id: BB01202.value.BB012_Ocupacao_Id,
            BB012_NaturalDe_ID: BB01202.value.BB012_NaturalDe_ID,
            BB012_TpTributacao_ID: BB01202.value.BB012_TpTributacao_ID,
            BB012_Ident_Estrangeiro: BB01202.value.BB012_Ident_Estrangeiro,
            BB012_Empresa: BB01202.value.BB012_Empresa,
            BB012_Emp_Endereco: BB01202.value.BB012_Emp_Endereco,
            BB012_Emp_Grupo_ID: BB01202.value.BB012_Emp_Grupo_ID,
            BB012_MotDesoneracaoID: BB01202.value.BB012_MotDesoneracaoID
        };

        const csicp_bb01206: Csicp_bb01206 = {
            Id: BB01206.value.Id,
            BB012_ID: BB01206.value.BB012_ID,
            BB012J_EnderecoID: BB01206.value.BB012J_EnderecoID,
            BB012_Logradouro: BB01206.value.BB012_Logradouro,
            BB012_Numero: BB01206.value.BB012_Numero,
            BB012_Complemento: BB01206.value.BB012_Complemento,
            BB012_Perimetro: BB01206.value.BB012_Perimetro,
            BB012_CodgBairro: BB01206.value.BB012_CodgBairro,
            BB012_Bairro: BB01206.value.BB012_Bairro,
            BB012_Codigo_Cidade: BB01206.value.BB012_Codigo_Cidade,
            BB012_UF: BB01206.value.BB012_UF,
            BB012_CEP: BB01206.value.BB012_CEP,
            BB012_Codigo_Pais: BB01206.value.BB012_Codigo_Pais,
            BB012_Entrega_Logradouro: BB01206.value.BB012_Entrega_Logradouro,
            BB012_Entrega_Numero: BB01206.value.BB012_Entrega_Numero,
            BB012_Entrega_Complement: BB01206.value.BB012_Entrega_Complement,
            BB012_Entrega_CodgBairro: BB01206.value.BB012_Entrega_CodgBairro,
            BB012_Entrega_Bairro: BB01206.value.BB012_Entrega_Bairro,
            BB012_Entrega_Cod_Cidade: BB01206.value.BB012_Entrega_Cod_Cidade,
            BB012_Entrega_Uf: BB01206.value.BB012_Entrega_Uf,
            BB012_Entrega_CEP: BB01206.value.BB012_Entrega_CEP,
            BB012_Entrega_Pais: BB01206.value.BB012_Entrega_Pais,
            BB012_Entrega_Perimetro: BB01206.value.BB012_Entrega_Perimetro,
            bb012_Telefone: BB01206.value.bb012_Telefone,
            bb012_Celular: BB01206.value.bb012_Celular,
            bb012_email: BB01206.value.bb012_email
        };

        const In_csicp_bb012_Completo = {
            csicp_bb012,
            csicp_bb01201,
            csicp_bb01202,
            csicp_bb01206
        };

        try {
            const response = await SaveContaCompleto(tenant, In_csicp_bb012_Completo);
            if (response.data.Str_ReturnErro.Out_IsSuccess) {
                showSnackbar('Conta criada com sucesso', 'success');
                setTimeout(() => {
                    router.push({
                        name: 'Contas'
                    });
                }, 2000);
            } else {
                showSnackbar(response.data.Str_ReturnErro.Out_Message || 'Erro ao criar conta', 'error');
            }
        } catch (error) {
            showSnackbar('Erro inesperado ao criar a conta', 'error');
        }
    } else {
        showSnackbar('Corrija os erros do formulário.', 'error');
    }
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

function redirectToContas() {
    router.push({ name: 'Contas' });
}
</script>
