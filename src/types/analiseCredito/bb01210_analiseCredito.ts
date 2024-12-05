export interface AnaliseCreditoCompleta {
    Str_ReturnErro: Str_ReturnErro;
    AnaliseCredito: AnaliseCredito;
}

export interface Str_ReturnErro {
    Out_IsSuccess: boolean;
    Out_Message: string;
    Out_ID_Text: string;
}

export interface AnaliseCredito {
    csicp_bb01210: Csicp_bb01210;
    csicp_bb012: Csicp_bb012;
    csicp_bb01202: Csicp_bb01202;
}

export interface Csicp_bb01210 {
    Id: number;
    bb012_ID: string;
    bb01210_Tipo: number;
    bb01210_Ano: number;
    bb01210_Mes: number;
    bb01210_vCredSemScore: number;
    bb01210_vCredComScore: number;
    bb01210_vCredMedia: number;
    bb01210_DtRegistro: string;
    JSON_CreditPro: string;
    Qtd_Comportamento_compras: number;
    Qtd_AtrasosFreq: number;
    Qtd_AtrasosModerados: number;
    Qtd_PagtosPontuais: number;
    Qtd_SemprePagaPrazo: number;
    Qtd_Titulos: number;
    CTE_Obtem_Peso_C: number;
    CTE_Obtem_Peso_P: number;
    MediaSalarialBairro: number;
    Renda: number;
    F_FatorAjuste: number;
    wC: number;
    wE: number;
    wP: number;
    wR: number;
    ScoreClearSale: number;
    TaxaScore: number;
    CTE_CGrad_ValorCredito: number;
    CTE_CGrad_Fator_Gradualidade: number;
    CTE_CGrad_Credito_Usado: number;
    CTE_CGrad_Credito_Pago: number;
    CTE_CGrad_Credito_EmAberto: number;
    CTE_CGrad_Qtd_TituloAberto: number;
    CTE_CGrad_Max_Dias_PagtoAtra: number;
    CTE_CGrad_Max_Dias_TitAtraso: number;
    CTE_CredNaoPago_Perc_NaoPago: number;
    CTE_AGrad_D_Peso_VlrsDivida: number;
    CTE_AGrad_D_Perc_VlrsDivida: number;
    CTE_Gradual_U: number;
    CTE_Gradual_U_wU: number;
    CTE_Gradual_F: number;
    CTE_Gradual_P: number;
    F_wF: number;
    P_wPA: number;
    Vlr_NovoCredito: number;
}

export interface Csicp_bb012 {
    ID: string;
    BB012_Codigo: number;
    BB012_Nome_Cliente: string;
    BB012_Nome_Fantasia: string;
    BB012_Data_Aniversario: string;
    BB012_Data_Cadastro: string;
    BB012_Telefone: string;
    BB012_FaxCelular: string;
    BB012_Home_Page: string;
    BB012_Email: string;
    BB012_Data_Entrada_Sit: string;
    BB012_Data_Saida_Sit: string;
    BB012_Descricao: string;
    BB012_Is_Active: boolean;
    BB012_Tipo_Conta_ID: number;
    BB012_Grupoconta_ID: number;
    BB012_ClasseConta_ID: number;
    BB012_StatusConta_ID: number;
    BB012_Sit_Conta_ID: number;
    BB012_ModRelacao_ID: number;
    BB012_Sequence: number;
    bb012_dUltAlteracao: string;
    bb012_EstabCadID: string;
    bb012_KeyAcess: string;
    bb012_ID_Indicador: string;
    bb012_CountAppMCon: number;
    bb012_OriCadastroID: number;
}

export interface Csicp_bb01202 {
    Id: string;
    BB012_CNPJ: number;
    BB012_InscEstadual: number;
    BB012_SUFRAMA: string;
    BB012_RegSUFRAMAValido: number;
    BB012_RegJuntaComercial: string;
    BB012_DataRegJunta: string;
    BB012_Patrimonio: number;
    BB012_Capital_Social: number;
    BB012_CPF: number;
    BB012_RG: number;
    BB012_ComplementoRG: string;
    BB012_EmissaoRG: string;
    BB012_PIS: number;
    BB012_ResideDesde: string;
    BB012_NroDependentes: number;
    BB012_EmpAdmissao: string;
    BB012_Emp_Profissao: string;
    BB012_ValorRemuneracao: number;
    BB012_OutrosRendimentos: number;
    BB012_OrigemOutrosRend: string;
    BB012_Insc_Est_SNI_ID: number;
    BB012_Sexo_ID: number;
    BB012_EstadoCivil_ID: number;
    BB012_TipoDomicilio_ID: number;
    BB012_CompResid01_ID: number;
    BB012_CompResid02_ID: number;
    BB012_GEscolaridade_ID: number;
    BB012_Ocupacao_Id: number;
    BB012_NaturalDe_ID: string;
    BB012_TpTributacao_ID: number;
    BB012_Ident_Estrangeiro: string;
    BB012_Empresa: string;
    BB012_Emp_Endereco: string;
    BB012_Emp_Grupo_ID: number;
    BB012_MotDesoneracaoID: number;
}

export interface Score {
    name: string;
    value: string;
}

export interface CreditProData {
    creationDateUtc: string;
    criterion: number;
    document: string;
    id: string;
    scores: Score[];
}
