export interface PeridoById {
    csicp_bb062: Csicp_bb062;
    csicp_bb062_sta: Csicp_bb062_sta;
    csicp_bb037_DiaVencto: Csicp_bb037_DiaVencto;
    csicp_bb001: Csicp_bb001;
}

export interface Csicp_bb062 {
    bb062_Id: number;
    bb062_EstabID: string;
    bb062_Ano: number;
    bb062_Mes: number;
    bb062_Descritivo: string;
    bb062_DtEmissao: string;
    bb062_DiaVenctoID: string;
    bb062_StatusID: number;
}

export interface Csicp_bb062_sta {
    Id: number;
    Label: string;
    Order: number;
    Is_Active: boolean;
}

export interface Csicp_bb037_DiaVencto {
    Id: string;
    bb037_Codigo: string;
    bb037_Descricao: string;
    bb037_Dia: number;
    bb037_QtdDiasMCompra: number;
    bb037_IsActive: boolean;
}

export interface Csicp_bb001 {
    ID: string;
    BB001_CodigoEmpresa: number;
    BB001_RazaoSocial: string;
    BB001_Endereco: string;
    BB001_Complemento: string;
    BB001_NumResidencial: string;
    BB001_Bairro: string;
    BB001_CEP: number;
    BB001_CNPJ: number;
    BB001_InscEstadual: string;
    BB001_InscJunta: number;
    BB001_DataInscricao: string;
    BB001_NomeFantasia: string;
    BB001_Telefone: string;
    BB001_Fax: string;
    BB001_SlogamEmpresa1: string;
    BB001_SlogamEmpresa2: string;
    BB001_Email: string;
    BB001_HomePage: string;
    BB001_RamoEmpresa: number;
    BB002_GrupoEmpresa: string;
    BB001_CodgClienteAux: number;
    BB001_AlmoxPadrao: number;
    BB001_AlmoxTransfer: number;
    BB001_BDDistribuida: number;
    BB001_CNAEFiscal: number;
    BB001_SUFRAMAEmp: string;
    BB001_InscMunicipal: string;
    BB001_PaisID: string;
    CidadeId: string;
    BB001_UFID: string;
    BB001_NomeOficial: string;
    BB001_CPF_Oficial: number;
    BB001_CodgCartorio: number;
    BB001_NomeSubstituto: string;
    BB001_DescricaoOficial: string;
    BB001_CapitalMunicipio: number;
    bb001_Cor1_Hexa: string;
    bb001_Cor2_Hexa: string;
    BB001_Idioma_ID: number;
    BB001_IsActive: boolean;
    BB001_Token: string;
    BB001_UsuarioSIRC: string;
    BB001_SenhaSIRC: string;
    BB001_TenantFiscal: number;
    bb001_Token_eSitef: string;
    bb001_URL_GooglePlay: string;
    bb001_URL_AppStore: string;
    bb001_CIX: string;
    BB001_Chave_APL: string;
    BB001_Aut_Token: string;
    BB001_Token_CSPIX: string;
}
