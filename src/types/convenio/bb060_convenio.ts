export interface ConvenioCompleto {
    PageSize: PageSize;
    Convenio_List: Convenio_List[];
    Code_Erro: Code_Erro;
}

export interface PageSize {
    cs_list_total_itens: number;
    cs_itens_per_page: string;
    cs_number_of_pages: number;
}

export interface Convenio_List {
    csicp_bb060: Csicp_bb060;
    csicp_bb005: Csicp_bb005;
    csicp_sy001_UserProp: Csicp_sy001_UserProp;
    csicp_bb006: Csicp_bb006;
    csicp_bb007: Csicp_bb007;
    csicp_bb008: Csicp_bb008;
    csicp_bb009: Csicp_bb009;
    csicp_sy001_UserInc: Csicp_sy001_UserInc;
    csicp_sy001_UserAlt: Csicp_sy001_UserAlt;
    csicp_ff003: Csicp_ff003;
    csicp_bb026: Csicp_bb026;
    csicp_bb067: Csicp_bb067;
    Associado_List: Associado_List[];
    MemoriaCalculoAssociados: MemoriaCalculoAssociados[];
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

export interface Csicp_bb005 {
    ID: string;
    BB005_Filial: number;
    BB005_Codigo: number;
    BB005_NomeCCusto: string;
    BB005_ColunaImpressao: number;
    EmpresaId: string;
    BB005_IsActive: boolean;
}

export interface Csicp_sy001_UserProp {
    Id: string;
    SY001_Usuario: string;
    SY001_Nome: string;
    SY001_Senha: string;
    SY001_Bloqueado: boolean;
    SY001_Data_Validade: string;
    SY001_AutAlterarSenha: number;
    SY001_AltSenhaPxLogin: number;
    SY001_Expira_Senha: number;
    SY001_SenhExpAposNDias: number;
    SY001_DtExpiracaoLogin: string;
    SY001_DeptoLotado: string;
    SY001_Cargo: string;
    SY001_Email: string;
    SY001_Imagem: string;
    SY001_DataUltimoAcesso: string;
    UserID: number;
    SY001_Idioma_ID: number;
    SY001_SenhaCS: string;
    SY001_Celular: string;
}

export interface Csicp_bb006 {
    ID: string;
    BB006_Filial: number;
    BB006_CodgBanco: number;
    BB006_Banco: string;
    BB006_NomeReduzido: string;
    BB006_NoBanco: number;
    BB006_Agencia: number;
    BB006_Agencia_DV: string;
    BB006_NoConta: number;
    BB006_ContaDV: string;
    BB006_DVAgenciaCC: string;
    BB006_Endereco: string;
    BairroId: string;
    CidadeId: string;
    BB006_Telefone: string;
    BB006_Fax: string;
    BB006_Email: string;
    BB006_HomePage: string;
    BB006_Contato: string;
    BB006_DiasRetencao: number;
    BB006_DiasRetencaoDesc: number;
    BB006_SaldoAtual: number;
    BB006_TxCobSimples: number;
    BB006_TxDesconto: number;
    BB006_ContaContabil: string;
    BB006_CodgHistorico: number;
    BB006_LimiteCredito: number;
    BB006_MsgBoleto: string;
    BB006_CodEmpresaBanco: string;
    BB006_NroSeqRemessa: number;
    BB006_PercComissao: number;
    BB006_MovtaTesouraria: number;
    BB006_NomeAgencia: string;
    BB006_Classificacao: number;
    BB006_CodGeracaoCRec: number;
    EmpresaId: string;
    BB006_TipoCobrancaID: string;
    UFId: string;
    BB006_IsActive: boolean;
    BB006_Banco_ID: number;
    BB006_CodCobrador_ID: string;
    BB006_API_ID: number;
}

export interface Csicp_bb007 {
    ID: string;
    BB007_Filial: number;
    BB007_Codigo: number;
    BB007_Responsavel: string;
    BB007_NomeReduzido: string;
    BB007_Classificacao: number;
    BB007_Usuario_ID: string;
    BB007_CodgSupervisor: string;
    BB007_CodgGerente: string;
    BB007_GeraCPagar: number;
    BB007_Coms1: number;
    BB007_Coms2: number;
    BB007_Coms3: number;
    BB007_Coms4: number;
    BB007_Coms5: number;
    BB007_BaseComICMS: number;
    BB007_BaseComICMSRet: number;
    BB007_BaseComIPI: number;
    BB007_BaseComFrete: number;
    BB007_BaseComAcrFinan: number;
    BB007_BaseComDespesas: number;
    BB007_BaseComSeguro: number;
    BB007_MaxDescVenda: number;
    BB007_CodgCCusto: number;
    BB007_CodgAlmox: number;
    BB007_CodgAtividade: number;
    BB007_Senha: string;
    BB007_NomeBanco: string;
    BB007_Agencia: string;
    BB007_Conta: string;
    BB007_CORERegistro: string;
    BB007_VinculoCliente: number;
    BB007_Observacao: string;
    BB007_NroHandHeld: number;
    BB007_UserHandHeld: string;
    BB007_SenhaHandHeld: string;
    BB007_HandHeldSuperv: number;
    BB007_ImpHandHeld: string;
    BB007_NomeUsuario: string;
    BB031_FuncaoID: string;
    BB032_CargoID: string;
    BB007_DtAdmissao: string;
    BB007_DtDemissao: string;
    BB007_CodgRegiao: string;
    BB007_FaixaAutorizacao: string;
    BB007_CCustoID: string;
    BB007_AlmoxID: string;
    EmpresaID: string;
    BB007_IsActive: boolean;
    bb007_ContaFornID: string;
    bb007_CPF: string;
}

export interface Csicp_bb008 {
    ID: string;
    EmpresaID: string;
    BB008_Filial: number;
    BB008_Codigo: number;
    BB008_Condicao_Pagto: string;
    BB008_Tipo: number;
    BB008_Condicao: string;
    BB008_CodFormaPagto: number;
    BB008_VlrMaxFormaPagto: number;
    BB008_VlrMinFormaPagto: number;
    BB008_EntLiquidada: number;
    BB008_ParcLiquidadas: number;
    BB008_Aprova_Venda: number;
    BB008_Perc_Acrescimo: number;
    BB008_Perc_Desconto: number;
    BB008_IndPrecoVenda: number;
    BB008_PercEntrada: number;
    BB008_ValorAcrescimo: number;
    BB008_FatorJuros: number;
    BB008_IsActive: boolean;
    BB008_tipoID: number;
    BB008_QtdParcela: number;
}

export interface Csicp_bb009 {
    ID: string;
    BB009_Filial: number;
    BB009_Codigo: number;
    BB009_TipoCobranca: string;
    EmpresaID: string;
    BB009_IsActive: boolean;
}

export interface Csicp_sy001_UserInc {
    Id: string;
    SY001_Usuario: string;
    SY001_Nome: string;
    SY001_Senha: string;
    SY001_Bloqueado: boolean;
    SY001_Data_Validade: string;
    SY001_AutAlterarSenha: number;
    SY001_AltSenhaPxLogin: number;
    SY001_Expira_Senha: number;
    SY001_SenhExpAposNDias: number;
    SY001_DtExpiracaoLogin: string;
    SY001_DeptoLotado: string;
    SY001_Cargo: string;
    SY001_Email: string;
    SY001_Imagem: string;
    SY001_DataUltimoAcesso: string;
    UserID: number;
    SY001_Idioma_ID: number;
    SY001_SenhaCS: string;
    SY001_Celular: string;
}

export interface Csicp_sy001_UserAlt {
    Id: string;
    SY001_Usuario: string;
    SY001_Nome: string;
    SY001_Senha: string;
    SY001_Bloqueado: boolean;
    SY001_Data_Validade: string;
    SY001_AutAlterarSenha: number;
    SY001_AltSenhaPxLogin: number;
    SY001_Expira_Senha: number;
    SY001_SenhExpAposNDias: number;
    SY001_DtExpiracaoLogin: string;
    SY001_DeptoLotado: string;
    SY001_Cargo: string;
    SY001_Email: string;
    SY001_Imagem: string;
    SY001_DataUltimoAcesso: string;
    UserID: number;
    SY001_Idioma_ID: number;
    SY001_SenhaCS: string;
    SY001_Celular: string;
}

export interface Csicp_ff003 {
    Id: string;
    FF003_FilialID: string;
    FF003_TipoEspecie: number;
    FF003_Codigo: number;
    FF003_Descricao: string;
    FF003_DescResumida: string;
    FF003_PFX: string;
    FF003_Provisao: number;
    FF003_CCustoID: string;
    FF003_LctoEntTitulosID: string;
    FF003_LctoBxNormalID: string;
    FF003_LctoBxDevolucaoID: string;
    FF003_SeqNroTitulo: number;
}

export interface Csicp_bb026 {
    ID: string;
    EmpresaID: string;
    BB026_Filial: number;
    BB026_Codigo: number;
    BB026_FormaPagamento: string;
    BB026_DadosChequeSN: number;
    BB026_DadosCartaoSN: number;
    BB026_VincCupomFiscal: number;
    BB026_Classificacao: number;
    BB026_CRPlanoContaID: string;
    BB026_DBPlanoContaID2: string;
    BB026_NRO_Autenticacoes: number;
    BB026_Valor_Minimo: number;
    BB026_Valor_Maximo: number;
    BB026_Troco_Maximo: number;
    BB026_PontoSangria: number;
    BB026_Tipo: number;
    BB026_ParcelaPorDepto: boolean;
    BB026_CondPagtoFixoID: string;
    BB026_AdministradoraID: string;
    BB026_Utiliza_PINPAD: boolean;
    BB026_ConsultaCheque: boolean;
    BB026_ImpressaoCheque: boolean;
    BB026_ChequeBomPara: boolean;
    BB026_SolicitaEmitente: boolean;
    BB026_SolicitaQtd: boolean;
    BB026_SolicitaCondPagto: boolean;
    BB026_AceitaPagto: boolean;
    BB026_AceitaRecebimento: boolean;
    BB026_CapturaRecebPVPDV: boolean;
    BB026_PermiteTroco: boolean;
    BB026_SangriaAutomatica: boolean;
    BB026_NaoAbreGaveta: boolean;
    BB026_TipoVinculo_ID: number;
    BB026_IsActive: boolean;
    BB026_Classe_Id: number;
    BB026_Especie_ID: string;
    BB026_MeioPagtoImpFiscal: string;
    BB026_TipoEspecie: number;
    BB026_pComissaoVend: number;
    BB026_AceitaVPresente: boolean;
    BB026_IsLibEntregaLiq: boolean;
    bb026_IsAplicaAprovCond: boolean;
    bb026_IsAgrupa: boolean;
}

export interface Csicp_bb067 {
    bb067_Id: number;
    bb067_Codigo: string;
    bb067_Descricao: string;
}

export interface Associado_List {
    csicp_bb061: Csicp_bb061;
    csicp_bb061_tp: Csicp_bb061_tp;
    csicp_bb012: Csicp_bb012;
    csicp_bb01208: Csicp_bb01208;
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

export interface Csicp_bb061_tp {
    Id: number;
    Label: string;
    Order: number;
    Is_Active: boolean;
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

export interface MemoriaCalculoAssociados {
    csicp_bb063: Csicp_bb063;
    csicp_bb061_tp: Csicp_bb061_tp2;
    csicp_bb012: Csicp_bb0122;
    csicp_bb01208: Csicp_bb012082;
    csicp_bb005: Csicp_bb0052;
    csicp_bb006: Csicp_bb0062;
    csicp_bb026: Csicp_bb0262;
    csicp_bb008: Csicp_bb0082;
    csicp_sy001_Prop: Csicp_sy001_Prop;
    csicp_bb007: Csicp_bb0072;
    csicp_bb009: Csicp_bb0092;
    csicp_bb062: Csicp_bb062;
    csicp_bb067: Csicp_bb0672;
}

export interface Csicp_bb063 {
    bb063_Id: number;
    bb063_ConvenioID: number;
    bb061_tipoAssID: number;
    bb012_ContaId: string;
    bb063_DependenteID: string;
    bb063_Valor: number;
    bb063_CustoID: string;
    bb063_AgCobradorID: string;
    bb063_FPagto_ID: string;
    bb063_CondicaoID: string;
    bb063_UsuarioProprieID: string;
    bb063_ResponsavelID: string;
    bb063_TipoCobrancaID: string;
    ff102_ID: string;
    bb062_Ref_ID: number;
    bb063_ConvMasterID: number;
}

export interface Csicp_bb061_tp2 {
    Id: number;
    Label: string;
    Order: number;
    Is_Active: boolean;
}

export interface Csicp_bb0122 {
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

export interface Csicp_bb012082 {
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

export interface Csicp_bb0052 {
    ID: string;
    BB005_Filial: number;
    BB005_Codigo: number;
    BB005_NomeCCusto: string;
    BB005_ColunaImpressao: number;
    EmpresaId: string;
    BB005_IsActive: boolean;
}

export interface Csicp_bb0062 {
    ID: string;
    BB006_Filial: number;
    BB006_CodgBanco: number;
    BB006_Banco: string;
    BB006_NomeReduzido: string;
    BB006_NoBanco: number;
    BB006_Agencia: number;
    BB006_Agencia_DV: string;
    BB006_NoConta: number;
    BB006_ContaDV: string;
    BB006_DVAgenciaCC: string;
    BB006_Endereco: string;
    BairroId: string;
    CidadeId: string;
    BB006_Telefone: string;
    BB006_Fax: string;
    BB006_Email: string;
    BB006_HomePage: string;
    BB006_Contato: string;
    BB006_DiasRetencao: number;
    BB006_DiasRetencaoDesc: number;
    BB006_SaldoAtual: number;
    BB006_TxCobSimples: number;
    BB006_TxDesconto: number;
    BB006_ContaContabil: string;
    BB006_CodgHistorico: number;
    BB006_LimiteCredito: number;
    BB006_MsgBoleto: string;
    BB006_CodEmpresaBanco: string;
    BB006_NroSeqRemessa: number;
    BB006_PercComissao: number;
    BB006_MovtaTesouraria: number;
    BB006_NomeAgencia: string;
    BB006_Classificacao: number;
    BB006_CodGeracaoCRec: number;
    EmpresaId: string;
    BB006_TipoCobrancaID: string;
    UFId: string;
    BB006_IsActive: boolean;
    BB006_Banco_ID: number;
    BB006_CodCobrador_ID: string;
    BB006_API_ID: number;
}

export interface Csicp_bb0262 {
    ID: string;
    EmpresaID: string;
    BB026_Filial: number;
    BB026_Codigo: number;
    BB026_FormaPagamento: string;
    BB026_DadosChequeSN: number;
    BB026_DadosCartaoSN: number;
    BB026_VincCupomFiscal: number;
    BB026_Classificacao: number;
    BB026_CRPlanoContaID: string;
    BB026_DBPlanoContaID2: string;
    BB026_NRO_Autenticacoes: number;
    BB026_Valor_Minimo: number;
    BB026_Valor_Maximo: number;
    BB026_Troco_Maximo: number;
    BB026_PontoSangria: number;
    BB026_Tipo: number;
    BB026_ParcelaPorDepto: boolean;
    BB026_CondPagtoFixoID: string;
    BB026_AdministradoraID: string;
    BB026_Utiliza_PINPAD: boolean;
    BB026_ConsultaCheque: boolean;
    BB026_ImpressaoCheque: boolean;
    BB026_ChequeBomPara: boolean;
    BB026_SolicitaEmitente: boolean;
    BB026_SolicitaQtd: boolean;
    BB026_SolicitaCondPagto: boolean;
    BB026_AceitaPagto: boolean;
    BB026_AceitaRecebimento: boolean;
    BB026_CapturaRecebPVPDV: boolean;
    BB026_PermiteTroco: boolean;
    BB026_SangriaAutomatica: boolean;
    BB026_NaoAbreGaveta: boolean;
    BB026_TipoVinculo_ID: number;
    BB026_IsActive: boolean;
    BB026_Classe_Id: number;
    BB026_Especie_ID: string;
    BB026_MeioPagtoImpFiscal: string;
    BB026_TipoEspecie: number;
    BB026_pComissaoVend: number;
    BB026_AceitaVPresente: boolean;
    BB026_IsLibEntregaLiq: boolean;
    bb026_IsAplicaAprovCond: boolean;
    bb026_IsAgrupa: boolean;
}

export interface Csicp_bb0082 {
    ID: string;
    EmpresaID: string;
    BB008_Filial: number;
    BB008_Codigo: number;
    BB008_Condicao_Pagto: string;
    BB008_Tipo: number;
    BB008_Condicao: string;
    BB008_CodFormaPagto: number;
    BB008_VlrMaxFormaPagto: number;
    BB008_VlrMinFormaPagto: number;
    BB008_EntLiquidada: number;
    BB008_ParcLiquidadas: number;
    BB008_Aprova_Venda: number;
    BB008_Perc_Acrescimo: number;
    BB008_Perc_Desconto: number;
    BB008_IndPrecoVenda: number;
    BB008_PercEntrada: number;
    BB008_ValorAcrescimo: number;
    BB008_FatorJuros: number;
    BB008_IsActive: boolean;
    BB008_tipoID: number;
    BB008_QtdParcela: number;
}

export interface Csicp_sy001_Prop {
    Id: string;
    SY001_Usuario: string;
    SY001_Nome: string;
    SY001_Senha: string;
    SY001_Bloqueado: boolean;
    SY001_Data_Validade: string;
    SY001_AutAlterarSenha: number;
    SY001_AltSenhaPxLogin: number;
    SY001_Expira_Senha: number;
    SY001_SenhExpAposNDias: number;
    SY001_DtExpiracaoLogin: string;
    SY001_DeptoLotado: string;
    SY001_Cargo: string;
    SY001_Email: string;
    SY001_Imagem: string;
    SY001_DataUltimoAcesso: string;
    UserID: number;
    SY001_Idioma_ID: number;
    SY001_SenhaCS: string;
    SY001_Celular: string;
}

export interface Csicp_bb0072 {
    ID: string;
    BB007_Filial: number;
    BB007_Codigo: number;
    BB007_Responsavel: string;
    BB007_NomeReduzido: string;
    BB007_Classificacao: number;
    BB007_Usuario_ID: string;
    BB007_CodgSupervisor: string;
    BB007_CodgGerente: string;
    BB007_GeraCPagar: number;
    BB007_Coms1: number;
    BB007_Coms2: number;
    BB007_Coms3: number;
    BB007_Coms4: number;
    BB007_Coms5: number;
    BB007_BaseComICMS: number;
    BB007_BaseComICMSRet: number;
    BB007_BaseComIPI: number;
    BB007_BaseComFrete: number;
    BB007_BaseComAcrFinan: number;
    BB007_BaseComDespesas: number;
    BB007_BaseComSeguro: number;
    BB007_MaxDescVenda: number;
    BB007_CodgCCusto: number;
    BB007_CodgAlmox: number;
    BB007_CodgAtividade: number;
    BB007_Senha: string;
    BB007_NomeBanco: string;
    BB007_Agencia: string;
    BB007_Conta: string;
    BB007_CORERegistro: string;
    BB007_VinculoCliente: number;
    BB007_Observacao: string;
    BB007_NroHandHeld: number;
    BB007_UserHandHeld: string;
    BB007_SenhaHandHeld: string;
    BB007_HandHeldSuperv: number;
    BB007_ImpHandHeld: string;
    BB007_NomeUsuario: string;
    BB031_FuncaoID: string;
    BB032_CargoID: string;
    BB007_DtAdmissao: string;
    BB007_DtDemissao: string;
    BB007_CodgRegiao: string;
    BB007_FaixaAutorizacao: string;
    BB007_CCustoID: string;
    BB007_AlmoxID: string;
    EmpresaID: string;
    BB007_IsActive: boolean;
    bb007_ContaFornID: string;
    bb007_CPF: string;
}

export interface Csicp_bb0092 {
    ID: string;
    BB009_Filial: number;
    BB009_Codigo: number;
    BB009_TipoCobranca: string;
    EmpresaID: string;
    BB009_IsActive: boolean;
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

export interface Csicp_bb0672 {
    bb067_Id: number;
    bb067_Codigo: string;
    bb067_Descricao: string;
}

export interface Code_Erro {
    Code_Erro: string;
    Mensagem: string;
}

export interface ApiResponse<T> {
    Convenio_List: any;
    PageSize: any;
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
