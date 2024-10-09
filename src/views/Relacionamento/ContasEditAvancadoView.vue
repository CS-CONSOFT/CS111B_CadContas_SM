<template>
    <v-container fluid>
        <v-toolbar title="Editar Conta" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef">
            <v-card class="border-sm border-opacity-50 mt-1 pa-4" elevation="0">
                <v-tabs v-model="tab" align-tabs="start" color="primary" class="rounded">
                    <v-tab value="one">Tipo de Conta</v-tab>
                    <v-tab value="two">Dados</v-tab>
                    <v-tab value="three">Crédito</v-tab>
                </v-tabs>
                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            <v-card class="px-4 py-2 border" elevation="0">
                                <v-row class="d-flex flex-row-reverse my-2">
                                    <v-col cols="auto">
                                        <v-btn color="primary" @click="">Salvar</v-btn>
                                        <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                                    </v-col>
                                </v-row>

                                <v-card class="border mb-10" elevation="0">
                                    <v-row>
                                        <v-col cols="12">
                                            <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Tipos de Conta</p>
                                        </v-col>
                                    </v-row>

                                    <v-row class="d-flex mt-5 px-4">
                                        <v-col cols="6">
                                            <v-col cols="12" class="pa-0 pb-5">
                                                <p class="text-h5">Informações</p>
                                            </v-col>
                                            <InputTexto
                                                v-model="BB01202.BB012_RG"
                                                Prm_etiqueta="RG"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_ComplementoRG"
                                                Prm_etiqueta="Complemento RG"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_EmissaoRG"
                                                Prm_etiqueta="Emissão RG"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_PIS"
                                                Prm_etiqueta="PIS"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_Sexo_ID"
                                                        Prm_etiqueta="Sexo"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_EstadoCivil_ID"
                                                        Prm_etiqueta="Estado Civi"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>

                                            <InputTexto
                                                v-model="BB01202.BB012_NaturalDe_ID"
                                                Prm_etiqueta="Naturalidade"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_GEscolaridade_ID"
                                                Prm_etiqueta="Escolaridade"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_ResideDesde"
                                                Prm_etiqueta="Reside Desde"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />
                                        </v-col>
                                        <v-col cols="6">
                                            <InputTexto
                                                v-model="BB01202.BB012_TipoDomicilio_ID"
                                                Prm_etiqueta="Tipo Domicilio"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <v-col cols="12" class="pa-0 pb-5">
                                                <p class="text-h5">Trabalho</p>
                                            </v-col>

                                            <InputTexto
                                                v-model="BB01202.BB012_Empresa"
                                                Prm_etiqueta="Empresa"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01202.BB012_Emp_Endereco"
                                                Prm_etiqueta="Endereço Empresa"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_TipoDomicilio_ID"
                                                        Prm_etiqueta="Tipo Empresa"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_NroDependentes"
                                                        Prm_etiqueta="N° Dependentes"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_Ocupacao_Id"
                                                        Prm_etiqueta="Ocupação"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_EmpAdmissao"
                                                        Prm_etiqueta="Admissão"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_Emp_Profissao"
                                                        Prm_etiqueta="Profissão"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_ValorRemuneracao"
                                                        Prm_etiqueta="Remuneração"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>

                                            <v-col cols="12" class="pa-0 pb-5">
                                                <p class="text-h5">Outros Rendimentos</p>
                                            </v-col>

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_OutrosRendimentos"
                                                        Prm_etiqueta="Valor"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01202.BB012_OrigemOutrosRend"
                                                        Prm_etiqueta="Origem"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-card>
                        </v-window-item>
                        <v-window-item value="two">
                            <v-card class="px-4 py-2 border" elevation="0">
                                <v-row class="d-flex flex-row-reverse my-2">
                                    <v-col cols="auto">
                                        <v-btn color="primary" @click="">Salvar</v-btn>
                                        <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                                    </v-col>
                                </v-row>

                                <v-card class="border mb-10" elevation="0">
                                    <v-row>
                                        <v-col cols="12">
                                            <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Dados</p>
                                        </v-col>
                                    </v-row>

                                    <v-row class="d-flex mt-5 px-4">
                                        <v-col cols="6">
                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_ZonaID"
                                                    Prm_etiqueta="Zona"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_EntMtgRotaID"
                                                    Prm_etiqueta="Entrega Montagem Rota"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_VendaRotaID"
                                                    Prm_etiqueta="Venda Rota"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_AtividadeID"
                                                    Prm_etiqueta="Atividade"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <InputTexto
                                                v-model="BB01201.BB012_PadraoBancoID"
                                                Prm_etiqueta="Padrão Banco"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_BcoAgenciaConta"
                                                Prm_etiqueta="Agência, Banco, Conta"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_Taxa_Administracao_Con"
                                                Prm_etiqueta="Taxa Administração"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />
                                        </v-col>
                                        <v-col cols="6">
                                            <InputTexto
                                                v-model="BB01201.BB012_Requisicao"
                                                Prm_etiqueta="Requisição"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_PrazoEntregaFornec"
                                                Prm_etiqueta="Prazo Entrega"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_CondPagtoFornec"
                                                Prm_etiqueta="Condição Fornecedor"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_NatOperacaoID"
                                                    Prm_etiqueta="Natureza Operação"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_CondPagtoID"
                                                    Prm_etiqueta="Condição de Pagamento"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <InputTexto
                                                v-model="BB01201.BB012_TextoNotaId"
                                                Prm_etiqueta="Texto Nota"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_DtValidCadastro"
                                                Prm_etiqueta="Validade Cadastro"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.bb012_CodgBcoDebConta"
                                                Prm_etiqueta="Código Conta Débito"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-card>
                        </v-window-item>
                        <v-window-item value="three">
                            <v-card class="px-4 py-2 border" elevation="0">
                                <v-row class="d-flex flex-row-reverse my-2">
                                    <v-col cols="auto">
                                        <v-btn color="primary" @click="">Salvar</v-btn>
                                        <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                                    </v-col>
                                </v-row>

                                <v-card class="border mb-10" elevation="0">
                                    <v-row>
                                        <v-col cols="12">
                                            <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Crédito</p>
                                        </v-col>
                                    </v-row>

                                    <v-row class="d-flex mt-5 px-4">
                                        <v-col cols="6">
                                            <InputTexto
                                                v-model="BB01201"
                                                Prm_etiqueta="Status Conta"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201"
                                                Prm_etiqueta="Situação Conta"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201"
                                                Prm_etiqueta="Entrada Situação"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <v-col cols="12" class="d-flex px-0 py-0">
                                                <InputTexto
                                                    v-model="BB01201.BB012_CategoriaID"
                                                    Prm_etiqueta="Categoria"
                                                    :Prm_limpavel="false"
                                                    :Prm_isObrigatorio="false"
                                                />
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-magnify"></v-btn>
                                                <v-btn class="v-btn-icon ml-4" icon="mdi-delete"></v-btn>
                                            </v-col>

                                            <InputTexto
                                                v-model="BB01201.BB012_SitEspecial_ID"
                                                Prm_etiqueta="Situação Especial (Juros)"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_PercLimCredito"
                                                Prm_etiqueta="Limite de Crédito (%)"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_LimiteCCredito"
                                                Prm_etiqueta="Limite de Crédito"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />
                                        </v-col>
                                        <v-col cols="6">
                                            <InputTexto
                                                v-model="BB01201.BB012_LimCreditoSecun"
                                                Prm_etiqueta="Crédito Secundário"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_LimiteCredParcela"
                                                Prm_etiqueta="Limite de Crédito por Parcelas"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_Grau_Risco"
                                                Prm_etiqueta="Grau de Risco (A, B, C, D, E)"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_Classe_Credito"
                                                Prm_etiqueta="Classe Crédito (A, B, C, D)"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <InputTexto
                                                v-model="BB01201.BB012_NumCompras"
                                                Prm_etiqueta="Forma Compra"
                                                :Prm_limpavel="false"
                                                :Prm_isObrigatorio="false"
                                            />

                                            <div class="d-flex">
                                                <v-col cols="6" class="pa-0">
                                                    <InputTexto
                                                        v-model="BB01201.BB012_DiasPagtoConv"
                                                        Prm_etiqueta="Dias Pagamento Convênio"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                                <v-col cols="6" class="pa-0 pl-4">
                                                    <InputTexto
                                                        v-model="BB01201.bb012_DiaVenctoID"
                                                        Prm_etiqueta="Dia Vencimento"
                                                        :Prm_limpavel="false"
                                                        :Prm_isObrigatorio="false"
                                                    />
                                                </v-col>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </v-form>
    </v-container>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
// Import de API's
import { GetContaById } from '../../services/contas/bb012_conta';
// Import de types
import type { ContaById } from '../../types/crm/bb012_GetContaById';
import type { BB01202, BB01201 } from '../../views/Relacionamento/bb012_Types';
//Import de componentes
import InputTexto from '../../components/campos/cs_InputTexto.vue';
import { User } from '@/types/login/Login';

const props = defineProps<{
    id: string;
}>();

const router = useRouter();
const tab = ref(null);

//Variáveis de modelo
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
function getUserFromLocalStorage(): User | null {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        try {
            return JSON.parse(storedUser) as User;
        } catch (e) {
            console.error('Erro ao parsear o usuário do localStorage', e);
            return null;
        }
    }

    return null;
}
const user = getUserFromLocalStorage();

const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchContaById = async (id: string) => {
    try {
        const data: ContaById = await GetContaById(user?.TenantId, id);

        //Variáveis de modelo BB01202
        BB01202.value.Id = data.BB01202.csicp_bb01202.Id;
        BB01202.value.BB012_CNPJ = data.BB01202.csicp_bb01202.BB012_CNPJ;
        BB01202.value.BB012_InscEstadual = data.BB01202.csicp_bb01202.BB012_InscEstadual;
        BB01202.value.BB012_SUFRAMA = data.BB01202.csicp_bb01202.BB012_SUFRAMA;
        BB01202.value.BB012_RegSUFRAMAValido = data.BB01202.csicp_bb01202.BB012_RegSUFRAMAValido;
        BB01202.value.BB012_RegJuntaComercial = data.BB01202.csicp_bb01202.BB012_RegJuntaComercial;
        BB01202.value.BB012_DataRegJunta = data.BB01202.csicp_bb01202.BB012_DataRegJunta;
        BB01202.value.BB012_Patrimonio = data.BB01202.csicp_bb01202.BB012_Patrimonio;
        BB01202.value.BB012_Capital_Social = data.BB01202.csicp_bb01202.BB012_Capital_Social;
        BB01202.value.BB012_CPF = data.BB01202.csicp_bb01202.BB012_CPF;
        BB01202.value.BB012_RG = data.BB01202.csicp_bb01202.BB012_RG;
        BB01202.value.BB012_ComplementoRG = data.BB01202.csicp_bb01202.BB012_ComplementoRG;
        BB01202.value.BB012_EmissaoRG = data.BB01202.csicp_bb01202.BB012_EmissaoRG;
        BB01202.value.BB012_PIS = data.BB01202.csicp_bb01202.BB012_PIS;
        BB01202.value.BB012_ResideDesde = data.BB01202.csicp_bb01202.BB012_ResideDesde;
        BB01202.value.BB012_NroDependentes = data.BB01202.csicp_bb01202.BB012_NroDependentes;
        BB01202.value.BB012_EmpAdmissao = data.BB01202.csicp_bb01202.BB012_EmpAdmissao;
        BB01202.value.BB012_Emp_Profissao = data.BB01202.csicp_bb01202.BB012_Emp_Profissao;
        BB01202.value.BB012_ValorRemuneracao = data.BB01202.csicp_bb01202.BB012_ValorRemuneracao;
        BB01202.value.BB012_OutrosRendimentos = data.BB01202.csicp_bb01202.BB012_OutrosRendimentos;
        BB01202.value.BB012_OrigemOutrosRend = data.BB01202.csicp_bb01202.BB012_OrigemOutrosRend;
        BB01202.value.BB012_Insc_Est_SNI_ID = data.BB01202.csicp_bb01202.BB012_Insc_Est_SNI_ID;
        BB01202.value.BB012_Sexo_ID = data.BB01202.csicp_bb01202.BB012_Sexo_ID;
        BB01202.value.BB012_EstadoCivil_ID = data.BB01202.csicp_bb01202.BB012_EstadoCivil_ID;
        BB01202.value.BB012_TipoDomicilio_ID = data.BB01202.csicp_bb01202.BB012_TipoDomicilio_ID;
        BB01202.value.BB012_CompResid01_ID = data.BB01202.csicp_bb01202.BB012_CompResid01_ID;
        BB01202.value.BB012_CompResid02_ID = data.BB01202.csicp_bb01202.BB012_CompResid02_ID;
        BB01202.value.BB012_GEscolaridade_ID = data.BB01202.csicp_bb01202.BB012_GEscolaridade_ID;
        BB01202.value.BB012_Ocupacao_Id = data.BB01202.csicp_bb01202.BB012_Ocupacao_Id;
        BB01202.value.BB012_NaturalDe_ID = data.BB01202.csicp_bb01202.BB012_NaturalDe_ID;
        BB01202.value.BB012_TpTributacao_ID = data.BB01202.csicp_bb01202.BB012_TpTributacao_ID;
        BB01202.value.BB012_Ident_Estrangeiro = data.BB01202.csicp_bb01202.BB012_Ident_Estrangeiro;
        BB01202.value.BB012_Empresa = data.BB01202.csicp_bb01202.BB012_Empresa;
        BB01202.value.BB012_Emp_Endereco = data.BB01202.csicp_bb01202.BB012_Emp_Endereco;
        BB01202.value.BB012_Emp_Grupo_ID = data.BB01202.csicp_bb01202.BB012_Emp_Grupo_ID;
        BB01202.value.BB012_MotDesoneracaoID = data.BB01202.csicp_bb01202.BB012_MotDesoneracaoID;

        // Variáveis do modelo BB01201
        BB01201.value.Id = data.BB01201.csicp_bb01201.Id;
        BB01201.value.BB012_ZonaID = data.BB01201.csicp_bb01201.BB012_ZonaID;
        BB01201.value.BB012_AtividadeID = data.BB01201.csicp_bb01201.BB012_AtividadeID;
        BB01201.value.BB012_LimiteCredito = data.BB01201.csicp_bb01201.BB012_LimiteCredito;
        BB01201.value.BB012_LimCreditoSecun = data.BB01201.csicp_bb01201.BB012_LimCreditoSecun;
        BB01201.value.BB012_LimiteCCredito = data.BB01201.csicp_bb01201.BB012_LimiteCCredito;
        BB01201.value.BB012_DiaVenctoCartao = data.BB01201.csicp_bb01201.BB012_DiaVenctoCartao;
        BB01201.value.BB012_ContaConvenio = data.BB01201.csicp_bb01201.BB012_ContaConvenio;
        BB01201.value.BB012_DiasPagtoConv = data.BB01201.csicp_bb01201.BB012_DiasPagtoConv;
        BB01201.value.BB012_PadraoBancoID = data.BB01201.csicp_bb01201.BB012_PadraoBancoID;
        BB01201.value.BB012_BcoAgenciaConta = data.BB01201.csicp_bb01201.BB012_BcoAgenciaConta;
        BB01201.value.BB012_Revenda = data.BB01201.csicp_bb01201.BB012_Revenda;
        BB01201.value.BB012_Taxa_Administracao_Con = data.BB01201.csicp_bb01201.BB012_Taxa_Administracao_Con;
        BB01201.value.BB012_Requisicao = data.BB01201.csicp_bb01201.BB012_Requisicao;
        BB01201.value.BB012_ContaContabil = data.BB01201.csicp_bb01201.BB012_ContaContabil;
        BB01201.value.BB012_HistoricoContabilID = data.BB01201.csicp_bb01201.BB012_HistoricoContabilID;
        BB01201.value.BB012_ContratoCartao = data.BB01201.csicp_bb01201.BB012_ContratoCartao;
        BB01201.value.BB012_DataContratoCartao = data.BB01201.csicp_bb01201.BB012_DataContratoCartao;
        BB01201.value.BB012_DtValidadeCartao = data.BB01201.csicp_bb01201.BB012_DtValidadeCartao;
        BB01201.value.BB012_ModalidadeCredCartao = data.BB01201.csicp_bb01201.BB012_ModalidadeCredCartao;
        BB01201.value.BB012_PercLimCredito = data.BB01201.csicp_bb01201.BB012_PercLimCredito;
        BB01201.value.BB012_PrazoEntregaFornec = data.BB01201.csicp_bb01201.BB012_PrazoEntregaFornec;
        BB01201.value.BB012_CondPagtoFornec = data.BB01201.csicp_bb01201.BB012_CondPagtoFornec;
        BB01201.value.BB012_NatOperacaoID = data.BB01201.csicp_bb01201.BB012_NatOperacaoID;
        BB01201.value.BB012_CondPagtoID = data.BB01201.csicp_bb01201.BB012_CondPagtoID;
        BB01201.value.BB012_TextoNotaId = data.BB01201.csicp_bb01201.BB012_TextoNotaId;
        BB01201.value.BB012_Grau_Risco = data.BB01201.csicp_bb01201.BB012_Grau_Risco;
        BB01201.value.BB012_Classe_Credito = data.BB01201.csicp_bb01201.BB012_Classe_Credito;
        BB01201.value.BB012_DtValidCadastro = data.BB01201.csicp_bb01201.BB012_DtValidCadastro;
        BB01201.value.BB012_Perc_ICMS = data.BB01201.csicp_bb01201.BB012_Perc_ICMS;
        BB01201.value.BB012_CodgCategoria = data.BB01201.csicp_bb01201.BB012_CodgCategoria;
        BB01201.value.BB012_CategoriaID = data.BB01201.csicp_bb01201.BB012_CategoriaID;
        BB01201.value.BB012_LimiteCredParcela = data.BB01201.csicp_bb01201.BB012_LimiteCredParcela;
        BB01201.value.BB012_Num_Ult_Fatura = data.BB01201.csicp_bb01201.BB012_Num_Ult_Fatura;
        BB01201.value.BB012_TotCompraCarnet = data.BB01201.csicp_bb01201.BB012_TotCompraCarnet;
        BB01201.value.BB012_Valor_Entrada = data.BB01201.csicp_bb01201.BB012_Valor_Entrada;
        BB01201.value.BB012_Maior_Compra = data.BB01201.csicp_bb01201.BB012_Maior_Compra;
        BB01201.value.BB012_Menor_Compra = data.BB01201.csicp_bb01201.BB012_Menor_Compra;
        BB01201.value.BB012_TotDiasAtraso = data.BB01201.csicp_bb01201.BB012_TotDiasAtraso;
        BB01201.value.BB012_Maior_Atraso = data.BB01201.csicp_bb01201.BB012_Maior_Atraso;
        BB01201.value.BB012_Menor_Atraso = data.BB01201.csicp_bb01201.BB012_Menor_Atraso;
        BB01201.value.BB012_MediaDeAtraso = data.BB01201.csicp_bb01201.BB012_MediaDeAtraso;
        BB01201.value.BB012_MaiorSaldo = data.BB01201.csicp_bb01201.BB012_MaiorSaldo;
        BB01201.value.BB012_NumCompras = data.BB01201.csicp_bb01201.BB012_NumCompras;
        BB01201.value.BB012_DtPrimCompra = data.BB01201.csicp_bb01201.BB012_DtPrimCompra;
        BB01201.value.BB012_DtUltCompra = data.BB01201.csicp_bb01201.BB012_DtUltCompra;
        BB01201.value.BB012_VlrMaiorPagto = data.BB01201.csicp_bb01201.BB012_VlrMaiorPagto;
        BB01201.value.BB012_NumPagtoDia = data.BB01201.csicp_bb01201.BB012_NumPagtoDia;
        BB01201.value.BB012_NumPagtoAtraso = data.BB01201.csicp_bb01201.BB012_NumPagtoAtraso;
        BB01201.value.BB012_SaldoDevedor = data.BB01201.csicp_bb01201.BB012_SaldoDevedor;
        BB01201.value.BB012_SaldoPedido = data.BB01201.csicp_bb01201.BB012_SaldoPedido;
        BB01201.value.BB012_QtdTitProtestado = data.BB01201.csicp_bb01201.BB012_QtdTitProtestado;
        BB01201.value.BB012_UltProtesto = data.BB01201.csicp_bb01201.BB012_UltProtesto;
        BB01201.value.BB012_QtdChqDevolvido = data.BB01201.csicp_bb01201.BB012_QtdChqDevolvido;
        BB01201.value.BB012_UltChqDevolvido = data.BB01201.csicp_bb01201.BB012_UltChqDevolvido;
        BB01201.value.BB012_Convenio_ID = data.BB01201.csicp_bb01201.BB012_Convenio_ID;
        BB01201.value.BB012_TipoGeracao_ID = data.BB01201.csicp_bb01201.BB012_TipoGeracao_ID;
        BB01201.value.BB012_SitEspecial_ID = data.BB01201.csicp_bb01201.BB012_SitEspecial_ID;
        BB01201.value.BB012_EntMtgRotaID = data.BB01201.csicp_bb01201.BB012_EntMtgRotaID;
        BB01201.value.BB012_VendaRotaID = data.BB01201.csicp_bb01201.BB012_VendaRotaID;
        BB01201.value.bb012_DiaVenctoID = data.BB01201.csicp_bb01201.bb012_DiaVenctoID;
        BB01201.value.bb012_CodgBcoDebConta = data.BB01201.csicp_bb01201.bb012_CodgBcoDebConta;

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar os dados.', 'error');
    }
};

onMounted(() => {
    fetchContaById(props.id);
    getUserFromLocalStorage();
});
</script>
