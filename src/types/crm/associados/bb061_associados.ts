export interface AssociadosCompleto {
    csicp_bb061: Csicp_bb061;
    csicp_bb012: Csicp_bb012;
    csicp_bb061_tp: Csicp_bb061_tp;
    csicp_bb060: Csicp_bb060;
    csicp_bb01208: Csicp_bb01208;
    csicp_bb035: Csicp_bb035;
}

export interface Csicp_bb061 {
    bb061_Id: number;
    bb060_ConvenioID: number;
    bb061_tipoAssID: number;
    bb012_ContaId: string;
    bb061_DependenteID: string;
    bb061_Valor: number;
    bb061_IsActive: boolean;
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

export interface Csicp_bb061_tp {
    Id: number;
    Label: string;
    Order: number;
    Is_Active: boolean;
}

export interface Csicp_bb060 {
    bb060_ConvenioId: number;
    bb060_Codigo: string;
    bb060_Descricao: string;
    bb060_vBase: number;
    bb060_CCustoID: string;
    bb060_UsuarioProprieID: string;
    bb060_AgCobradorID: string;
    bb060_ResponsavelID: string;
    bb060_CondicaoID: string;
    bb060_TipoCobrancaID: string;
    bb060_UsuarioInc: string;
    bb060_UsuarioAlt: string;
    bb060_dthrInc: string;
    bb060_dthrAlt: string;
    bb060_EspecieID: string;
    bb060_FPagto_ID: string;
    bb060_IsActive: boolean;
    bb060_ConvMasterID: number;
}

export interface Csicp_bb01208 {
    Id: string;
    BB012_ID: string;
    BB012_ContatoID: string;
    BB036_CandidatoID: string;
    BB043_CampanhaId: string;
    BB042_PotencialID: string;
    BB040_AtividadeID: string;
    BB041_CasoID: string;
    BB01208_Is_Active: boolean;
    ConcorrenteID: string;
    BB01208_GrauParent_ID: number;
}

export interface Csicp_bb035 {
    Id: string;
    BB035_PrimeiroNome: string;
    BB035_Sobrenome: string;
    BB035_EMail: string;
    BB035_Titulo: string;
    BB035_Departamento: string;
    BB035_Data_Aniversario: string;
    BB035_Telefone: string;
    BB035_OutroTelefone: string;
    BB035_Celular: string;
    BB035_Fax: string;
    BB035_TelefoneResidencia: string;
    BB035_Descricao: string;
    BB035_Assistente: string;
    BB035_TelefoneAssist: string;
    BB035_EMailSecundario: string;
    BB035_CPF: string;
    BB035_RG: number;
    BB035_Orgao_Exped_RG: string;
    BB035_Data_Emissao_RG: string;
    BB035_Is_Active: boolean;
    BB035_Tratamento_ID: number;
    BB035_OrigemContato_ID: number;
}
