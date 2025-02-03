export interface AssociadosCompleto {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
    List: List[];
    CurrentPage: number;
    TotalPage: number;
    PageSize: number;
    TotalCount: number;
    HasPrevius: boolean;
    HasNext: boolean;
}

export interface List {
    Bb061Id: number;
    Bb060Convenioid: number;
    Bb061Tipoassid: number;
    Bb012Contaid: string;
    Bb061Dependenteid: string;
    Bb061Valor: number;
    Bb061Isactive: boolean;
    NavBb060Convenio: NavBb060Convenio;
    NavBb061Tipoass: NavBb061Tipoass;
    NavBB012: NavBB012;
}

export interface NavBb060Convenio {
    TenantId: number;
    Bb060Convenioid: number;
    Bb060Codigo: string;
    Bb060Descricao: string;
    Bb060Vbase: number;
    Bb060Ccustoid: string;
    Bb060Usuarioproprieid: string;
    Bb060Agcobradorid: string;
    Bb060Responsavelid: string;
    Bb060Condicaoid: string;
    Bb060Tipocobrancaid: string;
    Bb060Usuarioinc: string;
    Bb060Usuarioalt: string;
    Bb060Dthrinc: string;
    Bb060Dthralt: string;
    Bb060Especieid: string;
    Bb060FpagtoId: string;
    Bb060Isactive: boolean;
    Bb060Convmasterid: number;
    NavBb060Agcobrador: NavBb060Agcobrador;
    NavBb060Ccusto: NavBb060Ccusto;
    NavBb060Condicao: NavBb060Condicao;
    NavBb060Convmaster: NavBb060Convmaster;
    NavBb060Responsavel: NavBb060Responsavel;
    NavBb060Tipocobranca: NavBb060Tipocobranca;
    NavFormaPagamento: NavFormaPagamento;
    NavUsuarioProprietario: NavUsuarioProprietario;
}

export interface NavBb060Agcobrador {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro;
    NavBb006Tipocobranca: NavBb006Tipocobranca;
}

export interface NavBairro {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb060Ccusto {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb060Condicao {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada;
    NavBB001Excibicao: NavBB001Excibicao;
    NavListBB017_FatoresAcrescimos: NavListBB017_FatoresAcrescimos[];
}

export interface NavBb008Tipo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavListBB017_FatoresAcrescimos {
    TenantId: number;
    Bb017Id: string;
    Bb017Empresaid: string;
    Bb017Fpagtoid: string;
    Bb017Condicaoid: string;
    Bb017Fatoracrescimo: number;
    Bb017Fatorsementrada: number;
    Bb017Ordem: number;
    Bb017CmdTefVdId: number;
    Bb017CmdTefCancId: number;
    Bb017Parcliquidadas: number;
    Bb017Entliquidada: number;
    Bb017Vacimade: number;
    NavSta_BB017_EntLiquidada: NavSta_BB017_EntLiquidada;
    NavSta_BB017_ParcLiquidadas: NavSta_BB017_ParcLiquidadas;
    NavCSICP_PD001Ctef_Cmd_Tef_VD: NavCSICP_PD001Ctef_Cmd_Tef_VD;
    NavCSICP_PD001Ctef_Cmd_Tef_Canc: NavCSICP_PD001Ctef_Cmd_Tef_Canc;
    NavBb008Condicao: NavBb008Condicao;
    NavBB026FormaPagamento: string;
}

export interface NavSta_BB017_EntLiquidada {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSta_BB017_ParcLiquidadas {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_VD {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_Canc {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBb008Condicao {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    NavBB001Excibicao: NavBB001Excibicao2;
}

export interface NavBb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb060Convmaster {
    TenantId: number;
    Bb067Id: number;
    Bb067Descricao: string;
    Bb067Codigo: string;
}

export interface NavBb060Responsavel {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto;
    NavBb001Exibicao: NavBb001Exibicao;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
    NavListBB007C_ContasClientes: NavListBB007C_ContasClientes[];
    NavListBB007D_ResponsavelAlmoxarife: NavListBB007D_ResponsavelAlmoxarife[];
}

export interface NavBb007Ccusto {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb007CodggerenteNavigation {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao;
    NavBb032Cargo: NavBb032Cargo;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb007CodgsupervisorNavigation {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavListBB007C_ContasClientes {
    TenantId: number;
    Bb007cId: number;
    Bb007Responid: string;
    Bb012Contaid: string;
    Bb007cPcomissao: number;
    NavBb012Conta: NavBb012Conta;
}

export interface NavBb012Conta {
    TenantId: number;
    Id: string;
    Bb012Codigo: number;
    Bb012NomeCliente: string;
    Bb012NomeFantasia: string;
    Bb012DataAniversario: string;
    Bb012DataCadastro: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012HomePage: string;
    Bb012Email: string;
    Bb012DataEntradaSit: string;
    Bb012DataSaidaSit: string;
    Bb012Descricao: string;
    Bb012IsActive: boolean;
    Bb012TipoContaId: number;
    Bb012GrupocontaId: number;
    Bb012ClassecontaId: number;
    Bb012StatuscontaId: number;
    Bb012SitContaId: number;
    Bb012ModrelacaoId: number;
    Bb012Sequence: number;
    Bb012Dultalteracao: string;
    Bb012Estabcadid: string;
    Bb012Keyacess: string;
    Bb012IdIndicador: string;
    Bb012Countappmcon: number;
    Bb012Oricadastroid: number;
    Bb012IdIndicadorNavigation: string;
    OsusrE9aCsicpBb01201: OsusrE9aCsicpBb01201;
    OsusrE9aCsicpBb01202: OsusrE9aCsicpBb01202;
    OsusrE9aCsicpBb01206: OsusrE9aCsicpBb01206;
    OsusrE9aCsicpBb01205: OsusrE9aCsicpBb01205;
    BB012_ModeloRelacao: BB012_ModeloRelacao;
    BB012_StatusConta: BB012_StatusConta;
    BB012_TipoConta: BB012_TipoConta;
    BB012_GrupoConta: BB012_GrupoConta;
    BB012_ClasseConta: BB012_ClasseConta;
    BB012_SitConta: BB012_SitConta;
    BB012_MCred: BB012_MCred;
    BB012_EstabelecimentoCadastro: BB012_EstabelecimentoCadastro;
}

export interface OsusrE9aCsicpBb01201 {
    TenantId: number;
    Id: string;
    Bb012Zonaid: string;
    Bb012Atividadeid: string;
    Bb012Limitecredito: number;
    Bb012Limcreditosecun: number;
    Bb012Limiteccredito: number;
    Bb012Diavenctocartao: number;
    Bb012Contaconvenio: string;
    Bb012Diaspagtoconv: number;
    Bb012Padraobancoid: string;
    Bb012Bcoagenciaconta: string;
    Bb012Revenda: number;
    Bb012TaxaAdministracaoCon: number;
    Bb012Requisicao: number;
    Bb012Contacontabil: string;
    Bb012Historicocontabilid: string;
    Bb012Contratocartao: number;
    Bb012Datacontratocartao: string;
    Bb012Dtvalidadecartao: string;
    Bb012Modalidadecredcartao: string;
    Bb012Perclimcredito: number;
    Bb012Prazoentregafornec: number;
    Bb012Condpagtofornec: string;
    Bb012Natoperacaoid: string;
    Bb012Condpagtoid: string;
    Bb012Textonotaid: string;
    Bb012GrauRisco: string;
    Bb012ClasseCredito: string;
    Bb012Dtvalidcadastro: string;
    Bb012PercIcms: number;
    Bb012Codgcategoria: string;
    Bb012Categoriaid: string;
    Bb012Limitecredparcela: number;
    Bb012NumUltFatura: number;
    Bb012Totcompracarnet: number;
    Bb012ValorEntrada: number;
    Bb012MaiorCompra: number;
    Bb012MenorCompra: number;
    Bb012Totdiasatraso: number;
    Bb012MaiorAtraso: number;
    Bb012MenorAtraso: number;
    Bb012Mediadeatraso: number;
    Bb012Maiorsaldo: number;
    Bb012Numcompras: number;
    Bb012Dtprimcompra: string;
    Bb012Dtultcompra: string;
    Bb012Vlrmaiorpagto: number;
    Bb012Numpagtodia: number;
    Bb012Numpagtoatraso: number;
    Bb012Saldodevedor: number;
    Bb012Saldopedido: number;
    Bb012Qtdtitprotestado: number;
    Bb012Ultprotesto: string;
    Bb012Qtdchqdevolvido: number;
    Bb012Ultchqdevolvido: string;
    Bb012ConvenioId: number;
    Bb012TipogeracaoId: number;
    Bb012SitespecialId: number;
    Bb012Entmtgrotaid: string;
    Bb012Vendarotaid: string;
    Bb012Diavenctoid: string;
    Bb012Codgbcodebconta: string;
    BB010_Zona: BB010_Zona;
    BB011_Atividade: BB011_Atividade;
    BB006_BancoPadrao: BB006_BancoPadrao;
    Revenda: Revenda;
    Requisicao: Requisicao;
    BB025_NatOperacao: BB025_NatOperacao;
    BB008_CondPagamento: BB008_CondPagamento;
    BB029_Categoria: BB029_Categoria;
    BB01201_Convenio: BB01201_Convenio;
    BB01201_TpGeracao: BB01201_TpGeracao;
    BB01201_SitEspecial: BB01201_SitEspecial;
    BB010_EntregaMontagem: BB010_EntregaMontagem;
    BB010_VendaRota: BB010_VendaRota;
    BB037_DiaVencimento: BB037_DiaVencimento;
}

export interface BB010_Zona {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco01;
    Bb010Banco02: Bb010Banco02;
    Bb010Banco03: Bb010Banco03;
    Bb010Ccusto: Bb010Ccusto;
    Bb010Vendedor: Bb010Vendedor;
}

export interface Bb010Banco01 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro;
    Bb006Tipocobranca: Bb006Tipocobranca;
}

export interface Bairro {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco02 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco03 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto;
    Bb001Empresa: Bb001Empresa;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao;
    Bb032Cargo: Bb032Cargo;
    CSICP_GG001: CSICP_GG001;
}

export interface Bb007Ccusto {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs[];
    Bb001Pais: Bb001Pais;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation;
    Bb001Uf: Bb001Uf;
    Cidade: Cidade;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis[];
    Bb001CnaesList: Bb001CnaesList[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls[];
}

export interface OsusrE9aCsicpBb001Imgs {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation;
}

export interface StatusNavigation {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj;
    Bb001Regimetributario: Bb001Regimetributario;
    Bb001Tpatividade: Bb001Tpatividade;
    Bb001Tptributacao: Bb001Tptributacao;
}

export interface Bb001Naturezapj {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG001 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation;
    BB001FilialNav: BB001FilialNav;
}

export interface Gg001TipoalmoxarifadoNavigation {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB011_Atividade {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface BB006_BancoPadrao {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Revenda {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Requisicao {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface BB025_NatOperacao {
    TenantId: number;
    Id: string;
    Bb025Filial: number;
    Bb025Codigo: string;
    Bb025Descricao: string;
    Bb025GeraDuplicata: number;
    Bb025UsaTabelaPreco: number;
    Bb025Codtptransacao: number;
    Bb025Transacaoid: string;
    Bb025GrupoContabil: number;
    Bb025Moddoctofiscal: string;
    Bb025Cfopdentroestado: string;
    Bb025Cfopforaestado: string;
    Bb025Baixaestoque: number;
    Empresaid: string;
    Bb025Isactive: boolean;
    Bb025ModdoctofiscalId: number;
    Bb025Valorizarprecoid: number;
    Bb025Transacao: Bb025Transacao;
    osusr66CSpedInAjIcm: Osusr66CSpedInAjIcm;
}

export interface Bb025Transacao {
    TenantId: number;
    Id: string;
    Bb027Filial: number;
    Bb027Codigo: number;
    Bb027Descricao: string;
    Bb027Baixaestoque: number;
    Bb027Geracreceber: number;
    Bb027Atualizaprcompra: number;
    Bb027Calcsubstituicao: number;
    Bb027Calculaiss: number;
    Bb027Cfopdentroestado: string;
    Bb027Cfopforaestado: string;
    Bb027Agregasubstrib: number;
    Bb027Difa: number;
    Bb027Icst: number;
    Bb027Irrf: number;
    Bb027Pis: number;
    Bb027Cofins: number;
    Bb027Irpj: number;
    Bb027Icmsdiferido: number;
    Bb027Geraestatistica: number;
    Bb027Codgcst: string;
    Bb027Transdevolucao: number;
    Bb027Reducaoicms: number;
    Bb027Reducaoipi: number;
    Bb027Reducaoicmsst: number;
    Bb027Reducaoiss: number;
    Empresaid: string;
    Bb027EntsaiId: number;
    Bb027PodertercId: number;
    Bb027CalcicmsId: number;
    Bb027CalcipiId: number;
    Bb027SomaipiBaseicmsId: number;
    Bb027IpiBrutoId: number;
    Bb027BaseicmsbrutaliqId: number;
    Bb027BasesubsbrutaliqId: number;
    Bb027CfopStaticaId: number;
    Bb027TdevolucaoId: string;
    Bb027RegimeId: number;
    Bb027CfopForaestadoId: number;
    Bb027Hashid: string;
    Bb027Descnatoper: string;
    Bb027CalcajusteicmsId: number;
    Bb027CodgajusteicmsId: number;
    Bb027Icmsdiferidoid: number;
    Bb027PicmsDiferido: number;
    Bb027Tdevolucao: string;
}

export interface Osusr66CSpedInAjIcm {
    Id: number;
    Codigo: string;
    DataIni: string;
    DataFin: string;
    Descricao: string;
    Uf: string;
    Order: number;
    Isactive: boolean;
}

export interface BB008_CondPagamento {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    CSICP_Bb008Tipo: CSICP_Bb008Tipo;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    CSICP_BB001: CSICP_BB001;
}

export interface CSICP_Bb008Tipo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface CSICP_BB001 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB029_Categoria {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface BB01201_Convenio {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_TpGeracao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_SitEspecial {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB010_EntregaMontagem {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB010_VendaRota {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB037_DiaVencimento {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface OsusrE9aCsicpBb01202 {
    TenantId: number;
    Id: string;
    Bb012Cnpj: string;
    Bb012Inscestadual: number;
    Bb012Suframa: string;
    Bb012Regsuframavalido: number;
    Bb012Regjuntacomercial: string;
    Bb012Dataregjunta: string;
    Bb012Patrimonio: number;
    Bb012CapitalSocial: number;
    Bb012Cpf: number;
    Bb012Rg: number;
    Bb012Complementorg: string;
    Bb012Emissaorg: string;
    Bb012Pis: number;
    Bb012Residedesde: string;
    Bb012Nrodependentes: number;
    Bb012Empadmissao: string;
    Bb012EmpProfissao: string;
    Bb012Valorremuneracao: number;
    Bb012Outrosrendimentos: number;
    Bb012Origemoutrosrend: string;
    Bb012InscEstSniId: number;
    Bb012SexoId: number;
    Bb012EstadocivilId: number;
    Bb012TipodomicilioId: number;
    Bb012Compresid01Id: number;
    Bb012Compresid02Id: number;
    Bb012GescolaridadeId: number;
    Bb012OcupacaoId: number;
    Bb012NaturaldeId: string;
    Bb012TptributacaoId: number;
    Bb012IdentEstrangeiro: string;
    Bb012Empresa: string;
    Bb012EmpEndereco: string;
    Bb012EmpGrupoId: number;
    Bb012Motdesoneracaoid: number;
    BB012_RegSUFRAMAValido: BB012_RegSUFRAMAValido;
    BB012_Insc_Est_SNI: BB012_Insc_Est_SNI;
    BB012_Sexo: BB012_Sexo;
    BB012_EstadoCivil: BB012_EstadoCivil;
    BB012_Domicilio: BB012_Domicilio;
    BB012_ComprovanteResidencia1: BB012_ComprovanteResidencia1;
    BB012_ComprovanteResidencia2: BB012_ComprovanteResidencia2;
    BB012_Escolaridade: BB012_Escolaridade;
    BB012_Ocupacao: BB012_Ocupacao;
    AA028_NatualDe: AA028_NatualDe;
    BB001_Tributacao: BB001_Tributacao;
    BB012_TipoDaEmpresaTrabalho: BB012_TipoDaEmpresaTrabalho;
    BB027_MotivoDesoneracao: BB027_MotivoDesoneracao;
}

export interface BB012_RegSUFRAMAValido {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Insc_Est_SNI {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Sexo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstadoCivil {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Domicilio {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia1 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Escolaridade {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface BB012_Ocupacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface AA028_NatualDe {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface BB001_Tributacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoDaEmpresaTrabalho {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB027_MotivoDesoneracao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Conteudo: string;
    OsusrE9aCsicpBb027Imps: OsusrE9aCsicpBb027Imps[];
}

export interface OsusrE9aCsicpBb027Imps {
    TenantId: number;
    Bb027bId: string;
    Bb027Id: string;
    Bb027bImpostosId: number;
    Bb027bCodgfilial: number;
    Bb027bCodgtransacao: number;
    Bb027bCodgcst: string;
    Bb027bRegimeId: number;
    Bb027bOrigemId: number;
    Bb027bCstIcmsId: number;
    Bb027bCstIpiId: number;
    Bb027bCstPisId: number;
    Bb027bNatBcCredPis: number;
    Bb027bCstCofinsId: number;
    Bb027bNatBcCredCofins: number;
    Bb027bInformacoesnf: string;
    Bb027bInformacoesipi: string;
    Bb027bInformacoespis: string;
    Bb027bInformacoescofins: string;
    Bb027bModbcId: number;
    Bb027bMotdesoneracaoid: number;
    Bb027bUfDestId: string;
    Bb027bClassecontaId: number;
    Bb027bModalbcIcmsStId: number;
    Bb027bAliquota: number;
    Bb027bReducaobase: number;
    Bb027bMp255Id: number;
    Bb027bReducaobcst: number;
    Bb027bCfopStaticaId: number;
    Bb027bCenquadIpiId: number;
    Bb027bAliqInternauf: number;
    Bb027bHashid: string;
    Bb027bIsvicmsdesSubtrai: boolean;
    Bb027bFcalcicmsdesId: number;
    Bb027bPicmsDiferido: number;
    Bb027bVicmsdesonsubId: number;
    Bb027cIndpres: number;
    Bb027bCbenef: string;
    Bb027bPpropocaodestino: number;
    Bb027bFcalcicmsdes: Bb027bFcalcicmsdes;
    Bb027bModbc: Bb027bModbc;
    Bb027bMotdesoneracao: string;
}

export interface Bb027bFcalcicmsdes {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface Bb027bModbc {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Digito: string;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface OsusrE9aCsicpBb01206 {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jEnderecoid: string;
    Bb012Logradouro: string;
    Bb012Numero: string;
    Bb012Complemento: string;
    Bb012Codgbairro: string;
    Bb012Bairro: string;
    Bb012CodigoCidade: string;
    Bb012Uf: string;
    Bb012Cep: number;
    Bb012CodigoPais: string;
    Bb012EntregaLogradouro: string;
    Bb012EntregaNumero: string;
    Bb012EntregaComplement: string;
    Bb012EntregaCodgbairro: string;
    Bb012EntregaBairro: string;
    Bb012EntregaCodCidade: string;
    Bb012EntregaUf: string;
    Bb012EntregaCep: number;
    Bb012EntregaPais: string;
    Bb012Perimetro: string;
    Bb012EntregaPerimetro: string;
    Bb012Telefone: string;
    Bb012Celular: string;
    Bb012Email: string;
    AA028_Cidade: AA028_Cidade;
    AA027_UF: AA027_UF;
    AA025_Pais: AA025_Pais;
}

export interface AA028_Cidade {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface AA027_UF {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface AA025_Pais {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface OsusrE9aCsicpBb01205 {
    TenantId: number;
    Id: string;
    Bb012Filial: string;
    Bb012Login: string;
    Bb012Qtdeusuario: number;
    Bb012Categoriaatendimento: string;
    Bb012Diapagamento: number;
    Bb012Qtdusuariopdvn: number;
    Bb012Qtdusuariopdvf: number;
    Bb012Qtdhrscontrato: number;
    Bb012Qtdhrsexcedente: number;
    Bb012Valorhrexcedente: number;
    Bb012Empresaid: string;
    IdNavigation: string;
}

export interface BB012_ModeloRelacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_StatusConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_GrupoConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB012_ClasseConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_SitConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB012_MCred {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstabelecimentoCadastro {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface NavListBB007D_ResponsavelAlmoxarife {
    TenantId: number;
    Bb007dId: number;
    Bb007Responid: string;
    Gg001Almoxid: string;
    Nav_Ggg001: Nav_Ggg001;
}

export interface Nav_Ggg001 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    NavGg001Tipoalmoxarifado: NavGg001Tipoalmoxarifado;
}

export interface NavGg001Tipoalmoxarifado {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBb060Tipocobranca {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavFormaPagamento {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb026Filial: number;
    Bb026Codigo: number;
    Bb026Formapagamento: string;
    Bb026Dadoschequesn: number;
    Bb026Dadoscartaosn: number;
    Bb026Vinccupomfiscal: number;
    Bb026Classificacao: number;
    Bb026Crplanocontaid: string;
    Bb026Dbplanocontaid2: string;
    Bb026NroAutenticacoes: number;
    Bb026ValorMinimo: number;
    Bb026ValorMaximo: number;
    Bb026TrocoMaximo: number;
    Bb026Pontosangria: number;
    Bb026Tipo: number;
    Bb026Parcelapordepto: boolean;
    Bb026Condpagtofixoid: string;
    Bb026Administradoraid: string;
    Bb026UtilizaPinpad: boolean;
    Bb026Consultacheque: boolean;
    Bb026Impressaocheque: boolean;
    Bb026Chequebompara: boolean;
    Bb026Solicitaemitente: boolean;
    Bb026Solicitaqtd: boolean;
    Bb026Solicitacondpagto: boolean;
    Bb026Aceitapagto: boolean;
    Bb026Aceitarecebimento: boolean;
    Bb026Permitetroco: boolean;
    Bb026Sangriaautomatica: boolean;
    Bb026Naoabregaveta: boolean;
    Bb026TipovinculoId: number;
    Bb026Isactive: boolean;
    Bb026ClasseId: number;
    Bb026EspecieId: string;
    Bb026Meiopagtoimpfiscal: string;
    Bb026Tipoespecie: number;
    Bb026Pcomissaovend: number;
    Bb026Aceitavpresente: boolean;
    Bb026Capturarecebpvpdv: boolean;
    Bb026Islibentregaliq: boolean;
    Bb026Isaplicaaprovcond: boolean;
    Bb026Isagrupa: boolean;
    NavBb019Administradora: NavBb019Administradora;
    NavBb008Condpagtofixo: NavBb008Condpagtofixo;
    NavBb026Classe: NavBb026Classe;
    NavBb026Tipo: NavBb026Tipo;
    NavBb026Vin: NavBb026Vin;
    NavBB026_DadosCartaoSN: NavBB026_DadosCartaoSN;
    NavBB026_DadosChequeSN: NavBB026_DadosChequeSN;
    NavBB026_VincCupomFiscal: NavBB026_VincCupomFiscal;
    Nav_CSICP_FF003Tpesp: Nav_CSICP_FF003Tpesp;
}

export interface NavBb019Administradora {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb019Filial: number;
    Bb019Codigo: number;
    Bb019Administradora: string;
    Bb019TaxaDeCobranca: number;
    Bb019Venctopadrao: number;
    Bb019Contaid: string;
    Bb019Usafatoracresc: number;
    Bb019Finanproprio: number;
    Bb019Tac: number;
    Bb019Email: string;
    Bb019Homepage: string;
    Bb019TipofinancId: number;
    Bb019Isactive: boolean;
    Bb019Dialimitevenctopadrao: number;
    Bb019Codigocredenciadora: string;
    Bb019LogoAdm: string;
    Bb019Filename: string;
    Bb019Path: string;
    NavCSICP_Bb019Tipo: NavCSICP_Bb019Tipo;
}

export interface NavCSICP_Bb019Tipo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Tband: string;
    CodgbandeiraSitef: string;
    Codgautorizadora: number;
}

export interface NavBb008Condpagtofixo {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    NavBB001Excibicao: NavBB001Excibicao2;
    NavListBB017_FatoresAcrescimos: NavListBB017_FatoresAcrescimos2[];
}

export interface NavBb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavListBB017_FatoresAcrescimos2 {
    TenantId: number;
    Bb017Id: string;
    Bb017Empresaid: string;
    Bb017Fpagtoid: string;
    Bb017Condicaoid: string;
    Bb017Fatoracrescimo: number;
    Bb017Fatorsementrada: number;
    Bb017Ordem: number;
    Bb017CmdTefVdId: number;
    Bb017CmdTefCancId: number;
    Bb017Parcliquidadas: number;
    Bb017Entliquidada: number;
    Bb017Vacimade: number;
    NavSta_BB017_EntLiquidada: NavSta_BB017_EntLiquidada2;
    NavSta_BB017_ParcLiquidadas: NavSta_BB017_ParcLiquidadas2;
    NavCSICP_PD001Ctef_Cmd_Tef_VD: NavCSICP_PD001Ctef_Cmd_Tef_VD2;
    NavCSICP_PD001Ctef_Cmd_Tef_Canc: NavCSICP_PD001Ctef_Cmd_Tef_Canc2;
    NavBb008Condicao: NavBb008Condicao2;
    NavBB026FormaPagamento: string;
}

export interface NavSta_BB017_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSta_BB017_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_VD2 {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_Canc2 {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBb008Condicao2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    NavBB001Excibicao: NavBB001Excibicao2;
}

export interface NavBb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb026Classe {
    Id: number;
    Label: string;
    Imagem: string;
    Order: number;
    IsActive: boolean;
    Tpag: string;
    Usocs: string;
    UrlFormapagto: string;
}

export interface NavBb026Tipo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBb026Vin {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB026_DadosCartaoSN {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB026_DadosChequeSN {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB026_VincCupomFiscal {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Nav_CSICP_FF003Tpesp {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    IdPdv: number;
}

export interface NavUsuarioProprietario {
    TenantId: number;
    Id: string;
    Sy001Usuario: string;
    Sy001Nome: string;
    Sy001Senha: string;
    Sy001Bloqueado: boolean;
    Sy001DataValidade: string;
    Sy001Autalterarsenha: number;
    NavSY001_AlterarSenha: NavSY001_AlterarSenha;
    Sy001Altsenhapxlogin: number;
    NavSy001Altsenhapxlogin: NavSy001Altsenhapxlogin;
    Sy001ExpiraSenha: number;
    NavSy001ExpiraSenha: NavSy001ExpiraSenha;
    Sy001Senhexpaposndias: number;
    Sy001Dtexpiracaologin: string;
    Sy001Deptolotado: string;
    Sy001Cargo: string;
    Sy001Email: string;
    Sy001Imagem: string;
    Sy001Dataultimoacesso: string;
    Userid: number;
    Sy001IdiomaId: number;
    NavSy001IdiomaId: NavSy001IdiomaId;
    Sy001Senhacs: string;
    Sy001Celular: string;
    OsusrE9aCsicpSy001Imgs: OsusrE9aCsicpSy001Imgs[];
}

export interface NavSY001_AlterarSenha {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSy001Altsenhapxlogin {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSy001ExpiraSenha {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSy001IdiomaId {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface OsusrE9aCsicpSy001Imgs {
    TenantId: number;
    Id: string;
    UsuarioId: string;
    Nome: string;
    Tipo: string;
    Ispadrao: boolean;
    Path: string;
}

export interface NavBb061Tipoass {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012 {
    TenantId: number;
    Id: string;
    Bb012Codigo: number;
    Bb012NomeCliente: string;
    Bb012NomeFantasia: string;
    Bb012DataAniversario: string;
    Bb012DataCadastro: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012HomePage: string;
    Bb012Email: string;
    Bb012DataEntradaSit: string;
    Bb012DataSaidaSit: string;
    Bb012Descricao: string;
    Bb012IsActive: boolean;
    Bb012TipoContaId: number;
    Bb012GrupocontaId: number;
    Bb012ClassecontaId: number;
    Bb012StatuscontaId: number;
    Bb012SitContaId: number;
    Bb012ModrelacaoId: number;
    Bb012Sequence: number;
    Bb012Dultalteracao: string;
    Bb012Estabcadid: string;
    Bb012Keyacess: string;
    Bb012IdIndicador: string;
    Bb012Countappmcon: number;
    Bb012Oricadastroid: number;
    NavBb012IdIndicadorNavigation: string;
    NavGetBB1201: NavGetBB1201;
    NavGetBB1202: NavGetBB1202;
    NavGetBB1206: NavGetBB1206;
    NavBB012_ModeloRelacao: NavBB012_ModeloRelacao;
    NavBB012_StatusConta: NavBB012_StatusConta;
    NavBB012_TipoConta: NavBB012_TipoConta;
    NavBB012_GrupoConta: NavBB012_GrupoConta;
    NavBB012_ClasseConta: NavBB012_ClasseConta;
    NavBB012_SitConta: NavBB012_SitConta;
    NavBB012_MCred: NavBB012_MCred;
    NavBB012_EstabelecimentoCadastro: NavBB012_EstabelecimentoCadastro;
}

export interface NavGetBB1201 {
    TenantId: number;
    Id: string;
    Bb012Zonaid: string;
    Bb012Atividadeid: string;
    Bb012Limitecredito: number;
    Bb012Limcreditosecun: number;
    Bb012Limiteccredito: number;
    Bb012Diavenctocartao: number;
    Bb012Contaconvenio: string;
    Bb012Diaspagtoconv: number;
    Bb012Padraobancoid: string;
    Bb012Bcoagenciaconta: string;
    Bb012Revenda: number;
    Bb012TaxaAdministracaoCon: number;
    Bb012Requisicao: number;
    Bb012Contacontabil: string;
    Bb012Historicocontabilid: string;
    Bb012Contratocartao: number;
    Bb012Datacontratocartao: string;
    Bb012Dtvalidadecartao: string;
    Bb012Modalidadecredcartao: string;
    Bb012Perclimcredito: number;
    Bb012Prazoentregafornec: number;
    Bb012Condpagtofornec: string;
    Bb012Natoperacaoid: string;
    Bb012Condpagtoid: string;
    Bb012Textonotaid: string;
    Bb012GrauRisco: string;
    Bb012ClasseCredito: string;
    Bb012Dtvalidcadastro: string;
    Bb012PercIcms: number;
    Bb012Codgcategoria: string;
    Bb012Categoriaid: string;
    Bb012Limitecredparcela: number;
    Bb012NumUltFatura: number;
    Bb012Totcompracarnet: number;
    Bb012ValorEntrada: number;
    Bb012MaiorCompra: number;
    Bb012MenorCompra: number;
    Bb012Totdiasatraso: number;
    Bb012MaiorAtraso: number;
    Bb012MenorAtraso: number;
    Bb012Mediadeatraso: number;
    Bb012Maiorsaldo: number;
    Bb012Numcompras: number;
    Bb012Dtprimcompra: string;
    Bb012Dtultcompra: string;
    Bb012Vlrmaiorpagto: number;
    Bb012Numpagtodia: number;
    Bb012Numpagtoatraso: number;
    Bb012Saldodevedor: number;
    Bb012Saldopedido: number;
    Bb012Qtdtitprotestado: number;
    Bb012Ultprotesto: string;
    Bb012Qtdchqdevolvido: number;
    Bb012Ultchqdevolvido: string;
    Bb012ConvenioId: number;
    Bb012TipogeracaoId: number;
    Bb012SitespecialId: number;
    Bb012Entmtgrotaid: string;
    Bb012Vendarotaid: string;
    Bb012Diavenctoid: string;
    Bb012Codgbcodebconta: string;
    NavBB010_Zona: NavBB010_Zona;
    NavBB011_Atividade: NavBB011_Atividade;
    NavBB006_BancoPadrao: NavBB006_BancoPadrao;
    NavRevenda: NavRevenda;
    NavRequisicao: NavRequisicao;
    NavBB025_NatOperacao: NavBB025_NatOperacao;
    NavBB008_CondPagamento: NavBB008_CondPagamento;
    NavBB029_Categoria: NavBB029_Categoria;
    NavBB01201_Convenio: NavBB01201_Convenio;
    NavBB01201_TpGeracao: NavBB01201_TpGeracao;
    NavBB01201_SitEspecial: NavBB01201_SitEspecial;
    NavBB010_EntregaMontagem: NavBB010_EntregaMontagem;
    NavBB010_VendaRota: NavBB010_VendaRota;
    NavBB037_DiaVencimento: NavBB037_DiaVencimento;
}

export interface NavBB010_Zona {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    NavBb010Banco01: NavBb010Banco01;
    NavBb010Banco02: NavBb010Banco02;
    NavBb010Banco03: NavBb010Banco03;
    NavBb010Ccusto: NavBb010Ccusto;
    NavBb010Vendedor: NavBb010Vendedor;
}

export interface NavBb010Banco01 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco02 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco03 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Ccusto {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb010Vendedor {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
    NavListBB007C_ContasClientes: NavListBB007C_ContasClientes2[];
    NavListBB007D_ResponsavelAlmoxarife: NavListBB007D_ResponsavelAlmoxarife2[];
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb007CodggerenteNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb007CodgsupervisorNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavListBB007C_ContasClientes2 {
    TenantId: number;
    Bb007cId: number;
    Bb007Responid: string;
    Bb012Contaid: string;
    Bb007cPcomissao: number;
    NavBb012Conta: NavBb012Conta2;
}

export interface NavBb012Conta2 {
    TenantId: number;
    Id: string;
    Bb012Codigo: number;
    Bb012NomeCliente: string;
    Bb012NomeFantasia: string;
    Bb012DataAniversario: string;
    Bb012DataCadastro: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012HomePage: string;
    Bb012Email: string;
    Bb012DataEntradaSit: string;
    Bb012DataSaidaSit: string;
    Bb012Descricao: string;
    Bb012IsActive: boolean;
    Bb012TipoContaId: number;
    Bb012GrupocontaId: number;
    Bb012ClassecontaId: number;
    Bb012StatuscontaId: number;
    Bb012SitContaId: number;
    Bb012ModrelacaoId: number;
    Bb012Sequence: number;
    Bb012Dultalteracao: string;
    Bb012Estabcadid: string;
    Bb012Keyacess: string;
    Bb012IdIndicador: string;
    Bb012Countappmcon: number;
    Bb012Oricadastroid: number;
    Bb012IdIndicadorNavigation: string;
    OsusrE9aCsicpBb01201: OsusrE9aCsicpBb012012;
    OsusrE9aCsicpBb01202: OsusrE9aCsicpBb012022;
    OsusrE9aCsicpBb01206: OsusrE9aCsicpBb012062;
    OsusrE9aCsicpBb01205: OsusrE9aCsicpBb012052;
    BB012_ModeloRelacao: BB012_ModeloRelacao2;
    BB012_StatusConta: BB012_StatusConta2;
    BB012_TipoConta: BB012_TipoConta2;
    BB012_GrupoConta: BB012_GrupoConta2;
    BB012_ClasseConta: BB012_ClasseConta2;
    BB012_SitConta: BB012_SitConta2;
    BB012_MCred: BB012_MCred2;
    BB012_EstabelecimentoCadastro: BB012_EstabelecimentoCadastro2;
}

export interface OsusrE9aCsicpBb012012 {
    TenantId: number;
    Id: string;
    Bb012Zonaid: string;
    Bb012Atividadeid: string;
    Bb012Limitecredito: number;
    Bb012Limcreditosecun: number;
    Bb012Limiteccredito: number;
    Bb012Diavenctocartao: number;
    Bb012Contaconvenio: string;
    Bb012Diaspagtoconv: number;
    Bb012Padraobancoid: string;
    Bb012Bcoagenciaconta: string;
    Bb012Revenda: number;
    Bb012TaxaAdministracaoCon: number;
    Bb012Requisicao: number;
    Bb012Contacontabil: string;
    Bb012Historicocontabilid: string;
    Bb012Contratocartao: number;
    Bb012Datacontratocartao: string;
    Bb012Dtvalidadecartao: string;
    Bb012Modalidadecredcartao: string;
    Bb012Perclimcredito: number;
    Bb012Prazoentregafornec: number;
    Bb012Condpagtofornec: string;
    Bb012Natoperacaoid: string;
    Bb012Condpagtoid: string;
    Bb012Textonotaid: string;
    Bb012GrauRisco: string;
    Bb012ClasseCredito: string;
    Bb012Dtvalidcadastro: string;
    Bb012PercIcms: number;
    Bb012Codgcategoria: string;
    Bb012Categoriaid: string;
    Bb012Limitecredparcela: number;
    Bb012NumUltFatura: number;
    Bb012Totcompracarnet: number;
    Bb012ValorEntrada: number;
    Bb012MaiorCompra: number;
    Bb012MenorCompra: number;
    Bb012Totdiasatraso: number;
    Bb012MaiorAtraso: number;
    Bb012MenorAtraso: number;
    Bb012Mediadeatraso: number;
    Bb012Maiorsaldo: number;
    Bb012Numcompras: number;
    Bb012Dtprimcompra: string;
    Bb012Dtultcompra: string;
    Bb012Vlrmaiorpagto: number;
    Bb012Numpagtodia: number;
    Bb012Numpagtoatraso: number;
    Bb012Saldodevedor: number;
    Bb012Saldopedido: number;
    Bb012Qtdtitprotestado: number;
    Bb012Ultprotesto: string;
    Bb012Qtdchqdevolvido: number;
    Bb012Ultchqdevolvido: string;
    Bb012ConvenioId: number;
    Bb012TipogeracaoId: number;
    Bb012SitespecialId: number;
    Bb012Entmtgrotaid: string;
    Bb012Vendarotaid: string;
    Bb012Diavenctoid: string;
    Bb012Codgbcodebconta: string;
    BB010_Zona: BB010_Zona2;
    BB011_Atividade: BB011_Atividade2;
    BB006_BancoPadrao: BB006_BancoPadrao2;
    Revenda: Revenda2;
    Requisicao: Requisicao2;
    BB025_NatOperacao: BB025_NatOperacao2;
    BB008_CondPagamento: BB008_CondPagamento2;
    BB029_Categoria: BB029_Categoria2;
    BB01201_Convenio: BB01201_Convenio2;
    BB01201_TpGeracao: BB01201_TpGeracao2;
    BB01201_SitEspecial: BB01201_SitEspecial2;
    BB010_EntregaMontagem: BB010_EntregaMontagem2;
    BB010_VendaRota: BB010_VendaRota2;
    BB037_DiaVencimento: BB037_DiaVencimento2;
}

export interface BB010_Zona2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB011_Atividade2 {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface BB006_BancoPadrao2 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Revenda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Requisicao2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface BB025_NatOperacao2 {
    TenantId: number;
    Id: string;
    Bb025Filial: number;
    Bb025Codigo: string;
    Bb025Descricao: string;
    Bb025GeraDuplicata: number;
    Bb025UsaTabelaPreco: number;
    Bb025Codtptransacao: number;
    Bb025Transacaoid: string;
    Bb025GrupoContabil: number;
    Bb025Moddoctofiscal: string;
    Bb025Cfopdentroestado: string;
    Bb025Cfopforaestado: string;
    Bb025Baixaestoque: number;
    Empresaid: string;
    Bb025Isactive: boolean;
    Bb025ModdoctofiscalId: number;
    Bb025Valorizarprecoid: number;
    Bb025Transacao: Bb025Transacao2;
    osusr66CSpedInAjIcm: Osusr66CSpedInAjIcm2;
}

export interface Bb025Transacao2 {
    TenantId: number;
    Id: string;
    Bb027Filial: number;
    Bb027Codigo: number;
    Bb027Descricao: string;
    Bb027Baixaestoque: number;
    Bb027Geracreceber: number;
    Bb027Atualizaprcompra: number;
    Bb027Calcsubstituicao: number;
    Bb027Calculaiss: number;
    Bb027Cfopdentroestado: string;
    Bb027Cfopforaestado: string;
    Bb027Agregasubstrib: number;
    Bb027Difa: number;
    Bb027Icst: number;
    Bb027Irrf: number;
    Bb027Pis: number;
    Bb027Cofins: number;
    Bb027Irpj: number;
    Bb027Icmsdiferido: number;
    Bb027Geraestatistica: number;
    Bb027Codgcst: string;
    Bb027Transdevolucao: number;
    Bb027Reducaoicms: number;
    Bb027Reducaoipi: number;
    Bb027Reducaoicmsst: number;
    Bb027Reducaoiss: number;
    Empresaid: string;
    Bb027EntsaiId: number;
    Bb027PodertercId: number;
    Bb027CalcicmsId: number;
    Bb027CalcipiId: number;
    Bb027SomaipiBaseicmsId: number;
    Bb027IpiBrutoId: number;
    Bb027BaseicmsbrutaliqId: number;
    Bb027BasesubsbrutaliqId: number;
    Bb027CfopStaticaId: number;
    Bb027TdevolucaoId: string;
    Bb027RegimeId: number;
    Bb027CfopForaestadoId: number;
    Bb027Hashid: string;
    Bb027Descnatoper: string;
    Bb027CalcajusteicmsId: number;
    Bb027CodgajusteicmsId: number;
    Bb027Icmsdiferidoid: number;
    Bb027PicmsDiferido: number;
    Bb027Tdevolucao: string;
}

export interface Osusr66CSpedInAjIcm2 {
    Id: number;
    Codigo: string;
    DataIni: string;
    DataFin: string;
    Descricao: string;
    Uf: string;
    Order: number;
    Isactive: boolean;
}

export interface BB008_CondPagamento2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    CSICP_Bb008Tipo: CSICP_Bb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    CSICP_BB001: CSICP_BB0012;
}

export interface CSICP_Bb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface CSICP_BB0012 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB029_Categoria2 {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface BB01201_Convenio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_TpGeracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_SitEspecial2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB010_EntregaMontagem2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB010_VendaRota2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB037_DiaVencimento2 {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface OsusrE9aCsicpBb012022 {
    TenantId: number;
    Id: string;
    Bb012Cnpj: string;
    Bb012Inscestadual: number;
    Bb012Suframa: string;
    Bb012Regsuframavalido: number;
    Bb012Regjuntacomercial: string;
    Bb012Dataregjunta: string;
    Bb012Patrimonio: number;
    Bb012CapitalSocial: number;
    Bb012Cpf: number;
    Bb012Rg: number;
    Bb012Complementorg: string;
    Bb012Emissaorg: string;
    Bb012Pis: number;
    Bb012Residedesde: string;
    Bb012Nrodependentes: number;
    Bb012Empadmissao: string;
    Bb012EmpProfissao: string;
    Bb012Valorremuneracao: number;
    Bb012Outrosrendimentos: number;
    Bb012Origemoutrosrend: string;
    Bb012InscEstSniId: number;
    Bb012SexoId: number;
    Bb012EstadocivilId: number;
    Bb012TipodomicilioId: number;
    Bb012Compresid01Id: number;
    Bb012Compresid02Id: number;
    Bb012GescolaridadeId: number;
    Bb012OcupacaoId: number;
    Bb012NaturaldeId: string;
    Bb012TptributacaoId: number;
    Bb012IdentEstrangeiro: string;
    Bb012Empresa: string;
    Bb012EmpEndereco: string;
    Bb012EmpGrupoId: number;
    Bb012Motdesoneracaoid: number;
    BB012_RegSUFRAMAValido: BB012_RegSUFRAMAValido2;
    BB012_Insc_Est_SNI: BB012_Insc_Est_SNI2;
    BB012_Sexo: BB012_Sexo2;
    BB012_EstadoCivil: BB012_EstadoCivil2;
    BB012_Domicilio: BB012_Domicilio2;
    BB012_ComprovanteResidencia1: BB012_ComprovanteResidencia12;
    BB012_ComprovanteResidencia2: BB012_ComprovanteResidencia22;
    BB012_Escolaridade: BB012_Escolaridade2;
    BB012_Ocupacao: BB012_Ocupacao2;
    AA028_NatualDe: AA028_NatualDe2;
    BB001_Tributacao: BB001_Tributacao2;
    BB012_TipoDaEmpresaTrabalho: BB012_TipoDaEmpresaTrabalho2;
    BB027_MotivoDesoneracao: BB027_MotivoDesoneracao2;
}

export interface BB012_RegSUFRAMAValido2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Insc_Est_SNI2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Sexo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstadoCivil2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Domicilio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia12 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia22 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Escolaridade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface BB012_Ocupacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface AA028_NatualDe2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface BB001_Tributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoDaEmpresaTrabalho2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB027_MotivoDesoneracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Conteudo: string;
    OsusrE9aCsicpBb027Imps: OsusrE9aCsicpBb027Imps2[];
}

export interface OsusrE9aCsicpBb027Imps2 {
    TenantId: number;
    Bb027bId: string;
    Bb027Id: string;
    Bb027bImpostosId: number;
    Bb027bCodgfilial: number;
    Bb027bCodgtransacao: number;
    Bb027bCodgcst: string;
    Bb027bRegimeId: number;
    Bb027bOrigemId: number;
    Bb027bCstIcmsId: number;
    Bb027bCstIpiId: number;
    Bb027bCstPisId: number;
    Bb027bNatBcCredPis: number;
    Bb027bCstCofinsId: number;
    Bb027bNatBcCredCofins: number;
    Bb027bInformacoesnf: string;
    Bb027bInformacoesipi: string;
    Bb027bInformacoespis: string;
    Bb027bInformacoescofins: string;
    Bb027bModbcId: number;
    Bb027bMotdesoneracaoid: number;
    Bb027bUfDestId: string;
    Bb027bClassecontaId: number;
    Bb027bModalbcIcmsStId: number;
    Bb027bAliquota: number;
    Bb027bReducaobase: number;
    Bb027bMp255Id: number;
    Bb027bReducaobcst: number;
    Bb027bCfopStaticaId: number;
    Bb027bCenquadIpiId: number;
    Bb027bAliqInternauf: number;
    Bb027bHashid: string;
    Bb027bIsvicmsdesSubtrai: boolean;
    Bb027bFcalcicmsdesId: number;
    Bb027bPicmsDiferido: number;
    Bb027bVicmsdesonsubId: number;
    Bb027cIndpres: number;
    Bb027bCbenef: string;
    Bb027bPpropocaodestino: number;
    Bb027bFcalcicmsdes: Bb027bFcalcicmsdes2;
    Bb027bModbc: Bb027bModbc2;
    Bb027bMotdesoneracao: string;
}

export interface Bb027bFcalcicmsdes2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface Bb027bModbc2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Digito: string;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface OsusrE9aCsicpBb012062 {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jEnderecoid: string;
    Bb012Logradouro: string;
    Bb012Numero: string;
    Bb012Complemento: string;
    Bb012Codgbairro: string;
    Bb012Bairro: string;
    Bb012CodigoCidade: string;
    Bb012Uf: string;
    Bb012Cep: number;
    Bb012CodigoPais: string;
    Bb012EntregaLogradouro: string;
    Bb012EntregaNumero: string;
    Bb012EntregaComplement: string;
    Bb012EntregaCodgbairro: string;
    Bb012EntregaBairro: string;
    Bb012EntregaCodCidade: string;
    Bb012EntregaUf: string;
    Bb012EntregaCep: number;
    Bb012EntregaPais: string;
    Bb012Perimetro: string;
    Bb012EntregaPerimetro: string;
    Bb012Telefone: string;
    Bb012Celular: string;
    Bb012Email: string;
    AA028_Cidade: AA028_Cidade2;
    AA027_UF: AA027_UF2;
    AA025_Pais: AA025_Pais2;
}

export interface AA028_Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface AA027_UF2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface AA025_Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface OsusrE9aCsicpBb012052 {
    TenantId: number;
    Id: string;
    Bb012Filial: string;
    Bb012Login: string;
    Bb012Qtdeusuario: number;
    Bb012Categoriaatendimento: string;
    Bb012Diapagamento: number;
    Bb012Qtdusuariopdvn: number;
    Bb012Qtdusuariopdvf: number;
    Bb012Qtdhrscontrato: number;
    Bb012Qtdhrsexcedente: number;
    Bb012Valorhrexcedente: number;
    Bb012Empresaid: string;
    IdNavigation: string;
}

export interface BB012_ModeloRelacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_StatusConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_GrupoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB012_ClasseConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_SitConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB012_MCred2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstabelecimentoCadastro2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface NavListBB007D_ResponsavelAlmoxarife2 {
    TenantId: number;
    Bb007dId: number;
    Bb007Responid: string;
    Gg001Almoxid: string;
    Nav_Ggg001: Nav_Ggg0012;
}

export interface Nav_Ggg0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    NavGg001Tipoalmoxarifado: NavGg001Tipoalmoxarifado2;
}

export interface NavGg001Tipoalmoxarifado2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB011_Atividade {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface NavBB006_BancoPadrao {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavRevenda {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavRequisicao {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB025_NatOperacao {
    TenantId: number;
    Id: string;
    Bb025Filial: number;
    Bb025Codigo: string;
    Bb025Descricao: string;
    Bb025GeraDuplicata: number;
    Bb025UsaTabelaPreco: number;
    Bb025Codtptransacao: number;
    Bb025Transacaoid: string;
    Bb025GrupoContabil: number;
    Bb025Moddoctofiscal: string;
    Bb025Cfopdentroestado: string;
    Bb025Cfopforaestado: string;
    Bb025Baixaestoque: number;
    Empresaid: string;
    Bb025Isactive: boolean;
    Bb025ModdoctofiscalId: number;
    Bb025Valorizarprecoid: number;
    NavBb025Transacao: NavBb025Transacao;
    NavSpedICMS: NavSpedICMS;
    NavListbb024_Natureza_CFOP: NavListbb024_Natureza_CFOP[];
}

export interface NavBb025Transacao {
    TenantId: number;
    Id: string;
    Bb027Filial: number;
    Bb027Codigo: number;
    Bb027Descricao: string;
    Bb027Baixaestoque: number;
    Bb027Geracreceber: number;
    Bb027Atualizaprcompra: number;
    Bb027Calcsubstituicao: number;
    Bb027Calculaiss: number;
    Bb027Cfopdentroestado: string;
    Bb027Cfopforaestado: string;
    Bb027Agregasubstrib: number;
    Bb027Difa: number;
    Bb027Icst: number;
    Bb027Irrf: number;
    Bb027Pis: number;
    Bb027Cofins: number;
    Bb027Irpj: number;
    Bb027Icmsdiferido: number;
    Bb027Geraestatistica: number;
    Bb027Codgcst: string;
    Bb027Transdevolucao: number;
    Bb027Reducaoicms: number;
    Bb027Reducaoipi: number;
    Bb027Reducaoicmsst: number;
    Bb027Reducaoiss: number;
    Empresaid: string;
    Bb027EntsaiId: number;
    Bb027PodertercId: number;
    Bb027CalcicmsId: number;
    Bb027CalcipiId: number;
    Bb027SomaipiBaseicmsId: number;
    Bb027IpiBrutoId: number;
    Bb027BaseicmsbrutaliqId: number;
    Bb027BasesubsbrutaliqId: number;
    Bb027CfopStaticaId: number;
    Bb027TdevolucaoId: string;
    Bb027RegimeId: number;
    Bb027CfopForaestadoId: number;
    Bb027Hashid: string;
    Bb027Descnatoper: string;
    Bb027CalcajusteicmsId: number;
    Bb027CodgajusteicmsId: number;
    Bb027Icmsdiferidoid: number;
    Bb027PicmsDiferido: number;
    NavBb027Tdevolucao: string;
}

export interface NavSpedICMS {
    Id: number;
    Codigo: string;
    DataIni: string;
    DataFin: string;
    Descricao: string;
    Uf: string;
    Order: number;
    Isactive: boolean;
}

export interface NavListbb024_Natureza_CFOP {
    TenantId: number;
    Bb024Id: number;
    Bb025NatoperacaoId: string;
    Bb024CfopId: number;
    NavSpedCfop: NavSpedCfop;
}

export interface NavSpedCfop {
    Id: number;
    Codigo: string;
    Descricao: string;
    IsActive: boolean;
    Order: number;
}

export interface NavBB008_CondPagamento {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    NavBB001Excibicao: NavBB001Excibicao2;
    NavListBB017_FatoresAcrescimos: NavListBB017_FatoresAcrescimos2[];
}

export interface NavBb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavListBB017_FatoresAcrescimos2 {
    TenantId: number;
    Bb017Id: string;
    Bb017Empresaid: string;
    Bb017Fpagtoid: string;
    Bb017Condicaoid: string;
    Bb017Fatoracrescimo: number;
    Bb017Fatorsementrada: number;
    Bb017Ordem: number;
    Bb017CmdTefVdId: number;
    Bb017CmdTefCancId: number;
    Bb017Parcliquidadas: number;
    Bb017Entliquidada: number;
    Bb017Vacimade: number;
    NavSta_BB017_EntLiquidada: NavSta_BB017_EntLiquidada2;
    NavSta_BB017_ParcLiquidadas: NavSta_BB017_ParcLiquidadas2;
    NavCSICP_PD001Ctef_Cmd_Tef_VD: NavCSICP_PD001Ctef_Cmd_Tef_VD2;
    NavCSICP_PD001Ctef_Cmd_Tef_Canc: NavCSICP_PD001Ctef_Cmd_Tef_Canc2;
    NavBb008Condicao: NavBb008Condicao2;
    NavBB026FormaPagamento: string;
}

export interface NavSta_BB017_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavSta_BB017_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_VD2 {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavCSICP_PD001Ctef_Cmd_Tef_Canc2 {
    Id: number;
    TipotefId: number;
    Codigo: string;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBb008Condicao2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    NavBb008Tipo: NavBb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    NavBB001Excibicao: NavBB001Excibicao2;
}

export interface NavBb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB001Excibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBB029_Categoria {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface NavBB01201_Convenio {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB01201_TpGeracao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB01201_SitEspecial {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface NavBB010_EntregaMontagem {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    NavBb010Banco01: NavBb010Banco012;
    NavBb010Banco02: NavBb010Banco022;
    NavBb010Banco03: NavBb010Banco032;
    NavBb010Ccusto: NavBb010Ccusto2;
    NavBb010Vendedor: NavBb010Vendedor2;
}

export interface NavBb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
    NavListBB007C_ContasClientes: NavListBB007C_ContasClientes2[];
    NavListBB007D_ResponsavelAlmoxarife: NavListBB007D_ResponsavelAlmoxarife2[];
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb007CodggerenteNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb007CodgsupervisorNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavListBB007C_ContasClientes2 {
    TenantId: number;
    Bb007cId: number;
    Bb007Responid: string;
    Bb012Contaid: string;
    Bb007cPcomissao: number;
    NavBb012Conta: NavBb012Conta2;
}

export interface NavBb012Conta2 {
    TenantId: number;
    Id: string;
    Bb012Codigo: number;
    Bb012NomeCliente: string;
    Bb012NomeFantasia: string;
    Bb012DataAniversario: string;
    Bb012DataCadastro: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012HomePage: string;
    Bb012Email: string;
    Bb012DataEntradaSit: string;
    Bb012DataSaidaSit: string;
    Bb012Descricao: string;
    Bb012IsActive: boolean;
    Bb012TipoContaId: number;
    Bb012GrupocontaId: number;
    Bb012ClassecontaId: number;
    Bb012StatuscontaId: number;
    Bb012SitContaId: number;
    Bb012ModrelacaoId: number;
    Bb012Sequence: number;
    Bb012Dultalteracao: string;
    Bb012Estabcadid: string;
    Bb012Keyacess: string;
    Bb012IdIndicador: string;
    Bb012Countappmcon: number;
    Bb012Oricadastroid: number;
    Bb012IdIndicadorNavigation: string;
    OsusrE9aCsicpBb01201: OsusrE9aCsicpBb012012;
    OsusrE9aCsicpBb01202: OsusrE9aCsicpBb012022;
    OsusrE9aCsicpBb01206: OsusrE9aCsicpBb012062;
    OsusrE9aCsicpBb01205: OsusrE9aCsicpBb012052;
    BB012_ModeloRelacao: BB012_ModeloRelacao2;
    BB012_StatusConta: BB012_StatusConta2;
    BB012_TipoConta: BB012_TipoConta2;
    BB012_GrupoConta: BB012_GrupoConta2;
    BB012_ClasseConta: BB012_ClasseConta2;
    BB012_SitConta: BB012_SitConta2;
    BB012_MCred: BB012_MCred2;
    BB012_EstabelecimentoCadastro: BB012_EstabelecimentoCadastro2;
}

export interface OsusrE9aCsicpBb012012 {
    TenantId: number;
    Id: string;
    Bb012Zonaid: string;
    Bb012Atividadeid: string;
    Bb012Limitecredito: number;
    Bb012Limcreditosecun: number;
    Bb012Limiteccredito: number;
    Bb012Diavenctocartao: number;
    Bb012Contaconvenio: string;
    Bb012Diaspagtoconv: number;
    Bb012Padraobancoid: string;
    Bb012Bcoagenciaconta: string;
    Bb012Revenda: number;
    Bb012TaxaAdministracaoCon: number;
    Bb012Requisicao: number;
    Bb012Contacontabil: string;
    Bb012Historicocontabilid: string;
    Bb012Contratocartao: number;
    Bb012Datacontratocartao: string;
    Bb012Dtvalidadecartao: string;
    Bb012Modalidadecredcartao: string;
    Bb012Perclimcredito: number;
    Bb012Prazoentregafornec: number;
    Bb012Condpagtofornec: string;
    Bb012Natoperacaoid: string;
    Bb012Condpagtoid: string;
    Bb012Textonotaid: string;
    Bb012GrauRisco: string;
    Bb012ClasseCredito: string;
    Bb012Dtvalidcadastro: string;
    Bb012PercIcms: number;
    Bb012Codgcategoria: string;
    Bb012Categoriaid: string;
    Bb012Limitecredparcela: number;
    Bb012NumUltFatura: number;
    Bb012Totcompracarnet: number;
    Bb012ValorEntrada: number;
    Bb012MaiorCompra: number;
    Bb012MenorCompra: number;
    Bb012Totdiasatraso: number;
    Bb012MaiorAtraso: number;
    Bb012MenorAtraso: number;
    Bb012Mediadeatraso: number;
    Bb012Maiorsaldo: number;
    Bb012Numcompras: number;
    Bb012Dtprimcompra: string;
    Bb012Dtultcompra: string;
    Bb012Vlrmaiorpagto: number;
    Bb012Numpagtodia: number;
    Bb012Numpagtoatraso: number;
    Bb012Saldodevedor: number;
    Bb012Saldopedido: number;
    Bb012Qtdtitprotestado: number;
    Bb012Ultprotesto: string;
    Bb012Qtdchqdevolvido: number;
    Bb012Ultchqdevolvido: string;
    Bb012ConvenioId: number;
    Bb012TipogeracaoId: number;
    Bb012SitespecialId: number;
    Bb012Entmtgrotaid: string;
    Bb012Vendarotaid: string;
    Bb012Diavenctoid: string;
    Bb012Codgbcodebconta: string;
    BB010_Zona: BB010_Zona2;
    BB011_Atividade: BB011_Atividade2;
    BB006_BancoPadrao: BB006_BancoPadrao2;
    Revenda: Revenda2;
    Requisicao: Requisicao2;
    BB025_NatOperacao: BB025_NatOperacao2;
    BB008_CondPagamento: BB008_CondPagamento2;
    BB029_Categoria: BB029_Categoria2;
    BB01201_Convenio: BB01201_Convenio2;
    BB01201_TpGeracao: BB01201_TpGeracao2;
    BB01201_SitEspecial: BB01201_SitEspecial2;
    BB010_EntregaMontagem: BB010_EntregaMontagem2;
    BB010_VendaRota: BB010_VendaRota2;
    BB037_DiaVencimento: BB037_DiaVencimento2;
}

export interface BB010_Zona2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB011_Atividade2 {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface BB006_BancoPadrao2 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Revenda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Requisicao2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface BB025_NatOperacao2 {
    TenantId: number;
    Id: string;
    Bb025Filial: number;
    Bb025Codigo: string;
    Bb025Descricao: string;
    Bb025GeraDuplicata: number;
    Bb025UsaTabelaPreco: number;
    Bb025Codtptransacao: number;
    Bb025Transacaoid: string;
    Bb025GrupoContabil: number;
    Bb025Moddoctofiscal: string;
    Bb025Cfopdentroestado: string;
    Bb025Cfopforaestado: string;
    Bb025Baixaestoque: number;
    Empresaid: string;
    Bb025Isactive: boolean;
    Bb025ModdoctofiscalId: number;
    Bb025Valorizarprecoid: number;
    Bb025Transacao: Bb025Transacao2;
    osusr66CSpedInAjIcm: Osusr66CSpedInAjIcm2;
}

export interface Bb025Transacao2 {
    TenantId: number;
    Id: string;
    Bb027Filial: number;
    Bb027Codigo: number;
    Bb027Descricao: string;
    Bb027Baixaestoque: number;
    Bb027Geracreceber: number;
    Bb027Atualizaprcompra: number;
    Bb027Calcsubstituicao: number;
    Bb027Calculaiss: number;
    Bb027Cfopdentroestado: string;
    Bb027Cfopforaestado: string;
    Bb027Agregasubstrib: number;
    Bb027Difa: number;
    Bb027Icst: number;
    Bb027Irrf: number;
    Bb027Pis: number;
    Bb027Cofins: number;
    Bb027Irpj: number;
    Bb027Icmsdiferido: number;
    Bb027Geraestatistica: number;
    Bb027Codgcst: string;
    Bb027Transdevolucao: number;
    Bb027Reducaoicms: number;
    Bb027Reducaoipi: number;
    Bb027Reducaoicmsst: number;
    Bb027Reducaoiss: number;
    Empresaid: string;
    Bb027EntsaiId: number;
    Bb027PodertercId: number;
    Bb027CalcicmsId: number;
    Bb027CalcipiId: number;
    Bb027SomaipiBaseicmsId: number;
    Bb027IpiBrutoId: number;
    Bb027BaseicmsbrutaliqId: number;
    Bb027BasesubsbrutaliqId: number;
    Bb027CfopStaticaId: number;
    Bb027TdevolucaoId: string;
    Bb027RegimeId: number;
    Bb027CfopForaestadoId: number;
    Bb027Hashid: string;
    Bb027Descnatoper: string;
    Bb027CalcajusteicmsId: number;
    Bb027CodgajusteicmsId: number;
    Bb027Icmsdiferidoid: number;
    Bb027PicmsDiferido: number;
    Bb027Tdevolucao: string;
}

export interface Osusr66CSpedInAjIcm2 {
    Id: number;
    Codigo: string;
    DataIni: string;
    DataFin: string;
    Descricao: string;
    Uf: string;
    Order: number;
    Isactive: boolean;
}

export interface BB008_CondPagamento2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    CSICP_Bb008Tipo: CSICP_Bb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    CSICP_BB001: CSICP_BB0012;
}

export interface CSICP_Bb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface CSICP_BB0012 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB029_Categoria2 {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface BB01201_Convenio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_TpGeracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_SitEspecial2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB010_EntregaMontagem2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB010_VendaRota2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB037_DiaVencimento2 {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface OsusrE9aCsicpBb012022 {
    TenantId: number;
    Id: string;
    Bb012Cnpj: string;
    Bb012Inscestadual: number;
    Bb012Suframa: string;
    Bb012Regsuframavalido: number;
    Bb012Regjuntacomercial: string;
    Bb012Dataregjunta: string;
    Bb012Patrimonio: number;
    Bb012CapitalSocial: number;
    Bb012Cpf: number;
    Bb012Rg: number;
    Bb012Complementorg: string;
    Bb012Emissaorg: string;
    Bb012Pis: number;
    Bb012Residedesde: string;
    Bb012Nrodependentes: number;
    Bb012Empadmissao: string;
    Bb012EmpProfissao: string;
    Bb012Valorremuneracao: number;
    Bb012Outrosrendimentos: number;
    Bb012Origemoutrosrend: string;
    Bb012InscEstSniId: number;
    Bb012SexoId: number;
    Bb012EstadocivilId: number;
    Bb012TipodomicilioId: number;
    Bb012Compresid01Id: number;
    Bb012Compresid02Id: number;
    Bb012GescolaridadeId: number;
    Bb012OcupacaoId: number;
    Bb012NaturaldeId: string;
    Bb012TptributacaoId: number;
    Bb012IdentEstrangeiro: string;
    Bb012Empresa: string;
    Bb012EmpEndereco: string;
    Bb012EmpGrupoId: number;
    Bb012Motdesoneracaoid: number;
    BB012_RegSUFRAMAValido: BB012_RegSUFRAMAValido2;
    BB012_Insc_Est_SNI: BB012_Insc_Est_SNI2;
    BB012_Sexo: BB012_Sexo2;
    BB012_EstadoCivil: BB012_EstadoCivil2;
    BB012_Domicilio: BB012_Domicilio2;
    BB012_ComprovanteResidencia1: BB012_ComprovanteResidencia12;
    BB012_ComprovanteResidencia2: BB012_ComprovanteResidencia22;
    BB012_Escolaridade: BB012_Escolaridade2;
    BB012_Ocupacao: BB012_Ocupacao2;
    AA028_NatualDe: AA028_NatualDe2;
    BB001_Tributacao: BB001_Tributacao2;
    BB012_TipoDaEmpresaTrabalho: BB012_TipoDaEmpresaTrabalho2;
    BB027_MotivoDesoneracao: BB027_MotivoDesoneracao2;
}

export interface BB012_RegSUFRAMAValido2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Insc_Est_SNI2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Sexo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstadoCivil2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Domicilio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia12 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia22 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Escolaridade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface BB012_Ocupacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface AA028_NatualDe2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface BB001_Tributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoDaEmpresaTrabalho2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB027_MotivoDesoneracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Conteudo: string;
    OsusrE9aCsicpBb027Imps: OsusrE9aCsicpBb027Imps2[];
}

export interface OsusrE9aCsicpBb027Imps2 {
    TenantId: number;
    Bb027bId: string;
    Bb027Id: string;
    Bb027bImpostosId: number;
    Bb027bCodgfilial: number;
    Bb027bCodgtransacao: number;
    Bb027bCodgcst: string;
    Bb027bRegimeId: number;
    Bb027bOrigemId: number;
    Bb027bCstIcmsId: number;
    Bb027bCstIpiId: number;
    Bb027bCstPisId: number;
    Bb027bNatBcCredPis: number;
    Bb027bCstCofinsId: number;
    Bb027bNatBcCredCofins: number;
    Bb027bInformacoesnf: string;
    Bb027bInformacoesipi: string;
    Bb027bInformacoespis: string;
    Bb027bInformacoescofins: string;
    Bb027bModbcId: number;
    Bb027bMotdesoneracaoid: number;
    Bb027bUfDestId: string;
    Bb027bClassecontaId: number;
    Bb027bModalbcIcmsStId: number;
    Bb027bAliquota: number;
    Bb027bReducaobase: number;
    Bb027bMp255Id: number;
    Bb027bReducaobcst: number;
    Bb027bCfopStaticaId: number;
    Bb027bCenquadIpiId: number;
    Bb027bAliqInternauf: number;
    Bb027bHashid: string;
    Bb027bIsvicmsdesSubtrai: boolean;
    Bb027bFcalcicmsdesId: number;
    Bb027bPicmsDiferido: number;
    Bb027bVicmsdesonsubId: number;
    Bb027cIndpres: number;
    Bb027bCbenef: string;
    Bb027bPpropocaodestino: number;
    Bb027bFcalcicmsdes: Bb027bFcalcicmsdes2;
    Bb027bModbc: Bb027bModbc2;
    Bb027bMotdesoneracao: string;
}

export interface Bb027bFcalcicmsdes2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface Bb027bModbc2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Digito: string;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface OsusrE9aCsicpBb012062 {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jEnderecoid: string;
    Bb012Logradouro: string;
    Bb012Numero: string;
    Bb012Complemento: string;
    Bb012Codgbairro: string;
    Bb012Bairro: string;
    Bb012CodigoCidade: string;
    Bb012Uf: string;
    Bb012Cep: number;
    Bb012CodigoPais: string;
    Bb012EntregaLogradouro: string;
    Bb012EntregaNumero: string;
    Bb012EntregaComplement: string;
    Bb012EntregaCodgbairro: string;
    Bb012EntregaBairro: string;
    Bb012EntregaCodCidade: string;
    Bb012EntregaUf: string;
    Bb012EntregaCep: number;
    Bb012EntregaPais: string;
    Bb012Perimetro: string;
    Bb012EntregaPerimetro: string;
    Bb012Telefone: string;
    Bb012Celular: string;
    Bb012Email: string;
    AA028_Cidade: AA028_Cidade2;
    AA027_UF: AA027_UF2;
    AA025_Pais: AA025_Pais2;
}

export interface AA028_Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface AA027_UF2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface AA025_Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface OsusrE9aCsicpBb012052 {
    TenantId: number;
    Id: string;
    Bb012Filial: string;
    Bb012Login: string;
    Bb012Qtdeusuario: number;
    Bb012Categoriaatendimento: string;
    Bb012Diapagamento: number;
    Bb012Qtdusuariopdvn: number;
    Bb012Qtdusuariopdvf: number;
    Bb012Qtdhrscontrato: number;
    Bb012Qtdhrsexcedente: number;
    Bb012Valorhrexcedente: number;
    Bb012Empresaid: string;
    IdNavigation: string;
}

export interface BB012_ModeloRelacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_StatusConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_GrupoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB012_ClasseConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_SitConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB012_MCred2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstabelecimentoCadastro2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface NavListBB007D_ResponsavelAlmoxarife2 {
    TenantId: number;
    Bb007dId: number;
    Bb007Responid: string;
    Gg001Almoxid: string;
    Nav_Ggg001: Nav_Ggg0012;
}

export interface Nav_Ggg0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    NavGg001Tipoalmoxarifado: NavGg001Tipoalmoxarifado2;
}

export interface NavGg001Tipoalmoxarifado2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB010_VendaRota {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    NavBb010Banco01: NavBb010Banco012;
    NavBb010Banco02: NavBb010Banco022;
    NavBb010Banco03: NavBb010Banco032;
    NavBb010Ccusto: NavBb010Ccusto2;
    NavBb010Vendedor: NavBb010Vendedor2;
}

export interface NavBb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    NavBairro: NavBairro2;
    NavBb006Tipocobranca: NavBb006Tipocobranca2;
}

export interface NavBairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface NavBb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface NavBb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
    NavListBB007C_ContasClientes: NavListBB007C_ContasClientes2[];
    NavListBB007D_ResponsavelAlmoxarife: NavListBB007D_ResponsavelAlmoxarife2[];
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb007CodggerenteNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb007CodgsupervisorNavigation2 {
    TenantId: number;
    Id: string;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb001Exibicao: NavBb001Exibicao2;
    NavBb007CodggerenteNavigation: string;
    NavBb007CodgsupervisorNavigation: string;
    NavBb031Funcao: NavBb031Funcao2;
    NavBb032Cargo: NavBb032Cargo2;
}

export interface NavBb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface NavBb001Exibicao2 {
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Nomefantasia: string;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavBb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface NavBb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface NavListBB007C_ContasClientes2 {
    TenantId: number;
    Bb007cId: number;
    Bb007Responid: string;
    Bb012Contaid: string;
    Bb007cPcomissao: number;
    NavBb012Conta: NavBb012Conta2;
}

export interface NavBb012Conta2 {
    TenantId: number;
    Id: string;
    Bb012Codigo: number;
    Bb012NomeCliente: string;
    Bb012NomeFantasia: string;
    Bb012DataAniversario: string;
    Bb012DataCadastro: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012HomePage: string;
    Bb012Email: string;
    Bb012DataEntradaSit: string;
    Bb012DataSaidaSit: string;
    Bb012Descricao: string;
    Bb012IsActive: boolean;
    Bb012TipoContaId: number;
    Bb012GrupocontaId: number;
    Bb012ClassecontaId: number;
    Bb012StatuscontaId: number;
    Bb012SitContaId: number;
    Bb012ModrelacaoId: number;
    Bb012Sequence: number;
    Bb012Dultalteracao: string;
    Bb012Estabcadid: string;
    Bb012Keyacess: string;
    Bb012IdIndicador: string;
    Bb012Countappmcon: number;
    Bb012Oricadastroid: number;
    Bb012IdIndicadorNavigation: string;
    OsusrE9aCsicpBb01201: OsusrE9aCsicpBb012012;
    OsusrE9aCsicpBb01202: OsusrE9aCsicpBb012022;
    OsusrE9aCsicpBb01206: OsusrE9aCsicpBb012062;
    OsusrE9aCsicpBb01205: OsusrE9aCsicpBb012052;
    BB012_ModeloRelacao: BB012_ModeloRelacao2;
    BB012_StatusConta: BB012_StatusConta2;
    BB012_TipoConta: BB012_TipoConta2;
    BB012_GrupoConta: BB012_GrupoConta2;
    BB012_ClasseConta: BB012_ClasseConta2;
    BB012_SitConta: BB012_SitConta2;
    BB012_MCred: BB012_MCred2;
    BB012_EstabelecimentoCadastro: BB012_EstabelecimentoCadastro2;
}

export interface OsusrE9aCsicpBb012012 {
    TenantId: number;
    Id: string;
    Bb012Zonaid: string;
    Bb012Atividadeid: string;
    Bb012Limitecredito: number;
    Bb012Limcreditosecun: number;
    Bb012Limiteccredito: number;
    Bb012Diavenctocartao: number;
    Bb012Contaconvenio: string;
    Bb012Diaspagtoconv: number;
    Bb012Padraobancoid: string;
    Bb012Bcoagenciaconta: string;
    Bb012Revenda: number;
    Bb012TaxaAdministracaoCon: number;
    Bb012Requisicao: number;
    Bb012Contacontabil: string;
    Bb012Historicocontabilid: string;
    Bb012Contratocartao: number;
    Bb012Datacontratocartao: string;
    Bb012Dtvalidadecartao: string;
    Bb012Modalidadecredcartao: string;
    Bb012Perclimcredito: number;
    Bb012Prazoentregafornec: number;
    Bb012Condpagtofornec: string;
    Bb012Natoperacaoid: string;
    Bb012Condpagtoid: string;
    Bb012Textonotaid: string;
    Bb012GrauRisco: string;
    Bb012ClasseCredito: string;
    Bb012Dtvalidcadastro: string;
    Bb012PercIcms: number;
    Bb012Codgcategoria: string;
    Bb012Categoriaid: string;
    Bb012Limitecredparcela: number;
    Bb012NumUltFatura: number;
    Bb012Totcompracarnet: number;
    Bb012ValorEntrada: number;
    Bb012MaiorCompra: number;
    Bb012MenorCompra: number;
    Bb012Totdiasatraso: number;
    Bb012MaiorAtraso: number;
    Bb012MenorAtraso: number;
    Bb012Mediadeatraso: number;
    Bb012Maiorsaldo: number;
    Bb012Numcompras: number;
    Bb012Dtprimcompra: string;
    Bb012Dtultcompra: string;
    Bb012Vlrmaiorpagto: number;
    Bb012Numpagtodia: number;
    Bb012Numpagtoatraso: number;
    Bb012Saldodevedor: number;
    Bb012Saldopedido: number;
    Bb012Qtdtitprotestado: number;
    Bb012Ultprotesto: string;
    Bb012Qtdchqdevolvido: number;
    Bb012Ultchqdevolvido: string;
    Bb012ConvenioId: number;
    Bb012TipogeracaoId: number;
    Bb012SitespecialId: number;
    Bb012Entmtgrotaid: string;
    Bb012Vendarotaid: string;
    Bb012Diavenctoid: string;
    Bb012Codgbcodebconta: string;
    BB010_Zona: BB010_Zona2;
    BB011_Atividade: BB011_Atividade2;
    BB006_BancoPadrao: BB006_BancoPadrao2;
    Revenda: Revenda2;
    Requisicao: Requisicao2;
    BB025_NatOperacao: BB025_NatOperacao2;
    BB008_CondPagamento: BB008_CondPagamento2;
    BB029_Categoria: BB029_Categoria2;
    BB01201_Convenio: BB01201_Convenio2;
    BB01201_TpGeracao: BB01201_TpGeracao2;
    BB01201_SitEspecial: BB01201_SitEspecial2;
    BB010_EntregaMontagem: BB010_EntregaMontagem2;
    BB010_VendaRota: BB010_VendaRota2;
    BB037_DiaVencimento: BB037_DiaVencimento2;
}

export interface BB010_Zona2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB011_Atividade2 {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface BB006_BancoPadrao2 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Revenda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Requisicao2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface BB025_NatOperacao2 {
    TenantId: number;
    Id: string;
    Bb025Filial: number;
    Bb025Codigo: string;
    Bb025Descricao: string;
    Bb025GeraDuplicata: number;
    Bb025UsaTabelaPreco: number;
    Bb025Codtptransacao: number;
    Bb025Transacaoid: string;
    Bb025GrupoContabil: number;
    Bb025Moddoctofiscal: string;
    Bb025Cfopdentroestado: string;
    Bb025Cfopforaestado: string;
    Bb025Baixaestoque: number;
    Empresaid: string;
    Bb025Isactive: boolean;
    Bb025ModdoctofiscalId: number;
    Bb025Valorizarprecoid: number;
    Bb025Transacao: Bb025Transacao2;
    osusr66CSpedInAjIcm: Osusr66CSpedInAjIcm2;
}

export interface Bb025Transacao2 {
    TenantId: number;
    Id: string;
    Bb027Filial: number;
    Bb027Codigo: number;
    Bb027Descricao: string;
    Bb027Baixaestoque: number;
    Bb027Geracreceber: number;
    Bb027Atualizaprcompra: number;
    Bb027Calcsubstituicao: number;
    Bb027Calculaiss: number;
    Bb027Cfopdentroestado: string;
    Bb027Cfopforaestado: string;
    Bb027Agregasubstrib: number;
    Bb027Difa: number;
    Bb027Icst: number;
    Bb027Irrf: number;
    Bb027Pis: number;
    Bb027Cofins: number;
    Bb027Irpj: number;
    Bb027Icmsdiferido: number;
    Bb027Geraestatistica: number;
    Bb027Codgcst: string;
    Bb027Transdevolucao: number;
    Bb027Reducaoicms: number;
    Bb027Reducaoipi: number;
    Bb027Reducaoicmsst: number;
    Bb027Reducaoiss: number;
    Empresaid: string;
    Bb027EntsaiId: number;
    Bb027PodertercId: number;
    Bb027CalcicmsId: number;
    Bb027CalcipiId: number;
    Bb027SomaipiBaseicmsId: number;
    Bb027IpiBrutoId: number;
    Bb027BaseicmsbrutaliqId: number;
    Bb027BasesubsbrutaliqId: number;
    Bb027CfopStaticaId: number;
    Bb027TdevolucaoId: string;
    Bb027RegimeId: number;
    Bb027CfopForaestadoId: number;
    Bb027Hashid: string;
    Bb027Descnatoper: string;
    Bb027CalcajusteicmsId: number;
    Bb027CodgajusteicmsId: number;
    Bb027Icmsdiferidoid: number;
    Bb027PicmsDiferido: number;
    Bb027Tdevolucao: string;
}

export interface Osusr66CSpedInAjIcm2 {
    Id: number;
    Codigo: string;
    DataIni: string;
    DataFin: string;
    Descricao: string;
    Uf: string;
    Order: number;
    Isactive: boolean;
}

export interface BB008_CondPagamento2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Bb008Filial: number;
    Bb008Codigo: number;
    Bb008CondicaoPagto: string;
    Bb008Tipo: number;
    Bb008Condicao: string;
    Bb008Codformapagto: number;
    Bb008Vlrmaxformapagto: number;
    Bb008Vlrminformapagto: number;
    Bb008Entliquidada: number;
    Bb008Parcliquidadas: number;
    Bb008AprovaVenda: number;
    Bb008PercAcrescimo: number;
    Bb008PercDesconto: number;
    Bb008Indprecovenda: number;
    Bb008Percentrada: number;
    Bb008Valoracrescimo: number;
    Bb008Fatorjuros: number;
    Bb008Isactive: boolean;
    Bb008Tipoid: number;
    Bb008Qtdparcela: number;
    CSICP_Bb008Tipo: CSICP_Bb008Tipo2;
    NavBB008_Aprova_Venda: NavBB008_Aprova_Venda2;
    NavBB008_ParcLiquidadas: NavBB008_ParcLiquidadas2;
    NavBB008_EntLiquidada: NavBB008_EntLiquidada2;
    CSICP_BB001: CSICP_BB0012;
}

export interface CSICP_Bb008Tipo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB008_Aprova_Venda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_ParcLiquidadas2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB008_EntLiquidada2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface CSICP_BB0012 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB029_Categoria2 {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface BB01201_Convenio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_TpGeracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB01201_SitEspecial2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB010_EntregaMontagem2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB010_VendaRota2 {
    TenantId: number;
    Id: string;
    Bb010Codigo: number;
    Bb010Zona: string;
    Bb010CodVendedor: number;
    Bb010ColPrecoTabela: number;
    Bb010Banco01Id: string;
    Bb010Banco02Id: string;
    Bb010Banco03Id: string;
    Bb010CcustoId: string;
    Bb010Km: number;
    Bb010FoneContato: string;
    Bb010Promotor: number;
    Bb010Observacao: string;
    Bb010PeriodoRota: number;
    Bb010PeriodoVisita: number;
    Bb010TabelaPreco: string;
    Bb010Vendedorid: string;
    Bb010Isactive: boolean;
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
    Bb010Banco01: Bb010Banco012;
    Bb010Banco02: Bb010Banco022;
    Bb010Banco03: Bb010Banco032;
    Bb010Ccusto: Bb010Ccusto2;
    Bb010Vendedor: Bb010Vendedor2;
}

export interface Bb010Banco012 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco022 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Banco032 {
    TenantId: number;
    Id: string;
    Bb006Filial: number;
    Bb006Codgbanco: number;
    Bb006Banco: string;
    Bb006Nomereduzido: string;
    Bb006Nobanco: number;
    Bb006Agencia: number;
    Bb006AgenciaDv: string;
    Bb006Noconta: number;
    Bb006Contadv: string;
    Bb006Dvagenciacc: string;
    Bb006Endereco: string;
    Bairroid: string;
    Cidadeid: string;
    Bb006Telefone: string;
    Bb006Fax: string;
    Bb006Email: string;
    Bb006Homepage: string;
    Bb006Contato: string;
    Bb006Diasretencao: number;
    Bb006Diasretencaodesc: number;
    Bb006Saldoatual: number;
    Bb006Txcobsimples: number;
    Bb006Txdesconto: number;
    Bb006Contacontabil: string;
    Bb006Codghistorico: number;
    Bb006Limitecredito: number;
    Bb006Msgboleto: string;
    Bb006Codempresabanco: string;
    Bb006Nroseqremessa: number;
    Bb006Perccomissao: number;
    Bb006Movtatesouraria: number;
    Bb006Nomeagencia: string;
    Bb006Classificacao: number;
    Bb006Codgeracaocrec: number;
    Empresaid: string;
    Bb006Tipocobrancaid: string;
    Ufid: string;
    Bb006Isactive: boolean;
    Bb006BancoId: number;
    Bb006CodcobradorId: string;
    Bb006ApiId: number;
    Bairro: Bairro2;
    Bb006Tipocobranca: Bb006Tipocobranca2;
}

export interface Bairro2 {
    TenantId: number;
    Id: string;
    Bb013Codigo: number;
    Bb013Bairro: string;
    Bb013Codgcidade: string;
}

export interface Bb006Tipocobranca2 {
    TenantId: number;
    Id: string;
    Bb009Filial: number;
    Bb009Codigo: number;
    Bb009Tipocobranca: string;
    Empresaid: string;
    Bb009Isactive: boolean;
}

export interface Bb010Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb010Vendedor2 {
    TenantId: number;
    Id: string;
    Bb007Filial: number;
    Bb007Codigo: number;
    Bb007Responsavel: string;
    Bb007Nomereduzido: string;
    Bb007Classificacao: number;
    Bb007UsuarioId: string;
    Bb007Codgsupervisor: string;
    Bb007Codggerente: string;
    Bb007Geracpagar: number;
    Bb007Coms1: number;
    Bb007Coms2: number;
    Bb007Coms3: number;
    Bb007Coms4: number;
    Bb007Coms5: number;
    Bb007Basecomicms: number;
    Bb007Basecomicmsret: number;
    Bb007Basecomipi: number;
    Bb007Basecomfrete: number;
    Bb007Basecomacrfinan: number;
    Bb007Basecomdespesas: number;
    Bb007Basecomseguro: number;
    Bb007Maxdescvenda: number;
    Bb007Codgccusto: number;
    Bb007Codgalmox: number;
    Bb007Codgatividade: number;
    Bb007Senha: string;
    Bb007Nomebanco: string;
    Bb007Agencia: string;
    Bb007Conta: string;
    Bb007Coreregistro: string;
    Bb007Vinculocliente: number;
    Bb007Observacao: string;
    Bb007Nrohandheld: number;
    Bb007Userhandheld: string;
    Bb007Senhahandheld: string;
    Bb007Handheldsuperv: number;
    Bb007Imphandheld: string;
    Bb007Nomeusuario: string;
    Bb031Funcaoid: string;
    Bb032Cargoid: string;
    Bb007Dtadmissao: string;
    Bb007Dtdemissao: string;
    Bb007Codgregiao: string;
    Bb007Faixaautorizacao: string;
    Bb007Ccustoid: string;
    Bb007Almoxid: string;
    Empresaid: string;
    Bb007Isactive: boolean;
    Bb007Contafornid: string;
    Bb007Cpf: string;
    Bb007Ccusto: Bb007Ccusto2;
    Bb001Empresa: Bb001Empresa2;
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
    CSICP_GG001: CSICP_GG0012;
}

export interface Bb007Ccusto2 {
    TenantId: number;
    Id: string;
    Bb005Filial: number;
    Bb005Codigo: number;
    Bb005Nomeccusto: string;
    Bb005Colunaimpressao: number;
    Empresaid: string;
    Bb005Isactive: boolean;
}

export interface Bb001Empresa2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface Bb031Funcao2 {
    TenantId: number;
    Id: string;
    Bb031Codgfuncaoid: number;
    Bb031Descricao: string;
    Bb031Cbo: string;
    Bb031Isactive: boolean;
}

export interface Bb032Cargo2 {
    TenantId: number;
    Id: string;
    Bb032Codgcargoid: number;
    Bb032Cargo: string;
    Bb032Isactive: boolean;
}

export interface CSICP_GG0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    Gg001TipoalmoxarifadoNavigation: Gg001TipoalmoxarifadoNavigation2;
    BB001FilialNav: BB001FilialNav2;
}

export interface Gg001TipoalmoxarifadoNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB001FilialNav2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface BB037_DiaVencimento2 {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface OsusrE9aCsicpBb012022 {
    TenantId: number;
    Id: string;
    Bb012Cnpj: string;
    Bb012Inscestadual: number;
    Bb012Suframa: string;
    Bb012Regsuframavalido: number;
    Bb012Regjuntacomercial: string;
    Bb012Dataregjunta: string;
    Bb012Patrimonio: number;
    Bb012CapitalSocial: number;
    Bb012Cpf: number;
    Bb012Rg: number;
    Bb012Complementorg: string;
    Bb012Emissaorg: string;
    Bb012Pis: number;
    Bb012Residedesde: string;
    Bb012Nrodependentes: number;
    Bb012Empadmissao: string;
    Bb012EmpProfissao: string;
    Bb012Valorremuneracao: number;
    Bb012Outrosrendimentos: number;
    Bb012Origemoutrosrend: string;
    Bb012InscEstSniId: number;
    Bb012SexoId: number;
    Bb012EstadocivilId: number;
    Bb012TipodomicilioId: number;
    Bb012Compresid01Id: number;
    Bb012Compresid02Id: number;
    Bb012GescolaridadeId: number;
    Bb012OcupacaoId: number;
    Bb012NaturaldeId: string;
    Bb012TptributacaoId: number;
    Bb012IdentEstrangeiro: string;
    Bb012Empresa: string;
    Bb012EmpEndereco: string;
    Bb012EmpGrupoId: number;
    Bb012Motdesoneracaoid: number;
    BB012_RegSUFRAMAValido: BB012_RegSUFRAMAValido2;
    BB012_Insc_Est_SNI: BB012_Insc_Est_SNI2;
    BB012_Sexo: BB012_Sexo2;
    BB012_EstadoCivil: BB012_EstadoCivil2;
    BB012_Domicilio: BB012_Domicilio2;
    BB012_ComprovanteResidencia1: BB012_ComprovanteResidencia12;
    BB012_ComprovanteResidencia2: BB012_ComprovanteResidencia22;
    BB012_Escolaridade: BB012_Escolaridade2;
    BB012_Ocupacao: BB012_Ocupacao2;
    AA028_NatualDe: AA028_NatualDe2;
    BB001_Tributacao: BB001_Tributacao2;
    BB012_TipoDaEmpresaTrabalho: BB012_TipoDaEmpresaTrabalho2;
    BB027_MotivoDesoneracao: BB027_MotivoDesoneracao2;
}

export interface BB012_RegSUFRAMAValido2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Insc_Est_SNI2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Sexo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstadoCivil2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Domicilio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia12 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_ComprovanteResidencia22 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_Escolaridade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface BB012_Ocupacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface AA028_NatualDe2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface BB001_Tributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoDaEmpresaTrabalho2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB027_MotivoDesoneracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Conteudo: string;
    OsusrE9aCsicpBb027Imps: OsusrE9aCsicpBb027Imps2[];
}

export interface OsusrE9aCsicpBb027Imps2 {
    TenantId: number;
    Bb027bId: string;
    Bb027Id: string;
    Bb027bImpostosId: number;
    Bb027bCodgfilial: number;
    Bb027bCodgtransacao: number;
    Bb027bCodgcst: string;
    Bb027bRegimeId: number;
    Bb027bOrigemId: number;
    Bb027bCstIcmsId: number;
    Bb027bCstIpiId: number;
    Bb027bCstPisId: number;
    Bb027bNatBcCredPis: number;
    Bb027bCstCofinsId: number;
    Bb027bNatBcCredCofins: number;
    Bb027bInformacoesnf: string;
    Bb027bInformacoesipi: string;
    Bb027bInformacoespis: string;
    Bb027bInformacoescofins: string;
    Bb027bModbcId: number;
    Bb027bMotdesoneracaoid: number;
    Bb027bUfDestId: string;
    Bb027bClassecontaId: number;
    Bb027bModalbcIcmsStId: number;
    Bb027bAliquota: number;
    Bb027bReducaobase: number;
    Bb027bMp255Id: number;
    Bb027bReducaobcst: number;
    Bb027bCfopStaticaId: number;
    Bb027bCenquadIpiId: number;
    Bb027bAliqInternauf: number;
    Bb027bHashid: string;
    Bb027bIsvicmsdesSubtrai: boolean;
    Bb027bFcalcicmsdesId: number;
    Bb027bPicmsDiferido: number;
    Bb027bVicmsdesonsubId: number;
    Bb027cIndpres: number;
    Bb027bCbenef: string;
    Bb027bPpropocaodestino: number;
    Bb027bFcalcicmsdes: Bb027bFcalcicmsdes2;
    Bb027bModbc: Bb027bModbc2;
    Bb027bMotdesoneracao: string;
}

export interface Bb027bFcalcicmsdes2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface Bb027bModbc2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Digito: string;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface OsusrE9aCsicpBb012062 {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jEnderecoid: string;
    Bb012Logradouro: string;
    Bb012Numero: string;
    Bb012Complemento: string;
    Bb012Codgbairro: string;
    Bb012Bairro: string;
    Bb012CodigoCidade: string;
    Bb012Uf: string;
    Bb012Cep: number;
    Bb012CodigoPais: string;
    Bb012EntregaLogradouro: string;
    Bb012EntregaNumero: string;
    Bb012EntregaComplement: string;
    Bb012EntregaCodgbairro: string;
    Bb012EntregaBairro: string;
    Bb012EntregaCodCidade: string;
    Bb012EntregaUf: string;
    Bb012EntregaCep: number;
    Bb012EntregaPais: string;
    Bb012Perimetro: string;
    Bb012EntregaPerimetro: string;
    Bb012Telefone: string;
    Bb012Celular: string;
    Bb012Email: string;
    AA028_Cidade: AA028_Cidade2;
    AA027_UF: AA027_UF2;
    AA025_Pais: AA025_Pais2;
}

export interface AA028_Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface AA027_UF2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface AA025_Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface OsusrE9aCsicpBb012052 {
    TenantId: number;
    Id: string;
    Bb012Filial: string;
    Bb012Login: string;
    Bb012Qtdeusuario: number;
    Bb012Categoriaatendimento: string;
    Bb012Diapagamento: number;
    Bb012Qtdusuariopdvn: number;
    Bb012Qtdusuariopdvf: number;
    Bb012Qtdhrscontrato: number;
    Bb012Qtdhrsexcedente: number;
    Bb012Valorhrexcedente: number;
    Bb012Empresaid: string;
    IdNavigation: string;
}

export interface BB012_ModeloRelacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_StatusConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_TipoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_GrupoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface BB012_ClasseConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_SitConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface BB012_MCred2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface BB012_EstabelecimentoCadastro2 {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    OsusrE9aCsicpBb001Imgs: OsusrE9aCsicpBb001Imgs2[];
    Bb001Pais: Bb001Pais2;
    Bb001RamoempresaNavigation: Bb001RamoempresaNavigation2;
    Bb001Uf: Bb001Uf2;
    Cidade: Cidade2;
    OsusrE9aCsicpBb001Axmls: OsusrE9aCsicpBb001Axmls2[];
    OsusrE9aCsicpBb001Cfgfis: OsusrE9aCsicpBb001Cfgfis2[];
    Bb001CnaesList: Bb001CnaesList2[];
    OsusrE9aCsicpBb001Spls: OsusrE9aCsicpBb001Spls2[];
}

export interface OsusrE9aCsicpBb001Imgs2 {
    TenantId: number;
    Id: string;
    Empresaid: string;
    Status: number;
    Nome: string;
    Tipo: string;
    Imagem: string;
    ExibirEmformapagto: boolean;
    Isactive: boolean;
    Filename: string;
    Path: string;
    StatusNavigation: StatusNavigation2;
}

export interface StatusNavigation2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001Pais2 {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface Bb001RamoempresaNavigation2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface Bb001Uf2 {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface OsusrE9aCsicpBb001Axmls2 {
    TenantId: number;
    Bb001aId: number;
    Bb001aEstabid: string;
    Bb001aNome: string;
    Bb001aEmail: string;
    Bb001aTelefone: string;
    Bb001aCpfcnpj: string;
    Bb001aIscpf: boolean;
}

export interface OsusrE9aCsicpBb001Cfgfis2 {
    TenantId: number;
    Bb001CfgId: string;
    Bb001EmpresaId: string;
    Bb001TptributacaoId: number;
    Bb001PercIcms: number;
    Bb001PercCsllBc: number;
    Bb001PercCsllBcServico: number;
    Bb001PercIrpjBc: number;
    Bb001PercIrpjBcServico: number;
    Bb001NaturezapjId: number;
    Bb001TpatividadeId: number;
    Bb001Regimetributarioid: number;
    Bb001Naturezapj: Bb001Naturezapj2;
    Bb001Regimetributario: Bb001Regimetributario2;
    Bb001Tpatividade: Bb001Tpatividade2;
    Bb001Tptributacao: Bb001Tptributacao2;
}

export interface Bb001Naturezapj2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Regimetributario2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    CrtDigito: string;
}

export interface Bb001Tpatividade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codigofiscal: string;
    Labelgrande: string;
}

export interface Bb001Tptributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface Bb001CnaesList2 {
    TenantId: number;
    Bb001PkId: string;
    Bb001Id: string;
    Bb001CnaeId: string;
    Bb001Isactive: boolean;
    Bb001IscnaeFiscal: boolean;
}

export interface OsusrE9aCsicpBb001Spls2 {
    TenantId: number;
    Bb001SimplesId: string;
    Bb001Id: string;
    Bb001SimplespartId: number;
    Bb001AliqSimples: number;
    Bb001AliqIrpj: number;
    Bb001AliqCsll: number;
    Bb001AliqCofins: number;
    Bb001AliqPisPasep: number;
    Bb001AliqCpp: number;
    Bb001AliqIcms: number;
    Bb001AliqIpi: number;
    Bb001AliqIss: number;
}

export interface NavListBB007D_ResponsavelAlmoxarife2 {
    TenantId: number;
    Bb007dId: number;
    Bb007Responid: string;
    Gg001Almoxid: string;
    Nav_Ggg001: Nav_Ggg0012;
}

export interface Nav_Ggg0012 {
    TenantId: number;
    Id: string;
    Gg001Filial: number;
    Gg001Filialid: string;
    Gg001Codigoalmox: number;
    Gg001Descalmox: string;
    Gg001Isactive: boolean;
    Gg001Tipoalmoxarifado: number;
    Gg001RiControlequalidade: boolean;
    Gg001Caparmaz: number;
    Gg001Descnspadrao: string;
    NavGg001Tipoalmoxarifado: NavGg001Tipoalmoxarifado2;
}

export interface NavGg001Tipoalmoxarifado2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB037_DiaVencimento {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface NavGetBB1202 {
    Id: string;
    Bb012Cnpj: string;
    Bb012Inscestadual: number;
    Bb012Suframa: string;
    Bb012Regsuframavalido: number;
    Bb012Regjuntacomercial: string;
    Bb012Dataregjunta: string;
    Bb012Patrimonio: number;
    Bb012CapitalSocial: number;
    Bb012Cpf: number;
    Bb012Rg: number;
    Bb012Complementorg: string;
    Bb012Emissaorg: string;
    Bb012Pis: number;
    Bb012Residedesde: string;
    Bb012Nrodependentes: number;
    Bb012Empadmissao: string;
    Bb012EmpProfissao: string;
    Bb012Valorremuneracao: number;
    Bb012Outrosrendimentos: number;
    Bb012Origemoutrosrend: string;
    Bb012InscEstSniId: number;
    Bb012SexoId: number;
    Bb012EstadocivilId: number;
    Bb012TipodomicilioId: number;
    Bb012Compresid01Id: number;
    Bb012Compresid02Id: number;
    Bb012GescolaridadeId: number;
    Bb012OcupacaoId: number;
    Bb012NaturaldeId: string;
    Bb012TptributacaoId: number;
    Bb012IdentEstrangeiro: string;
    Bb012Empresa: string;
    Bb012EmpEndereco: string;
    Bb012EmpGrupoId: number;
    Bb012Motdesoneracaoid: number;
    NavBB012_RegSUFRAMAValido: NavBB012_RegSUFRAMAValido;
    NavBB012_Insc_Est_SNI: NavBB012_Insc_Est_SNI;
    NavBB012_Sexo: NavBB012_Sexo;
    NavBB012_EstadoCivil: NavBB012_EstadoCivil;
    NavBB012_Domicilio: NavBB012_Domicilio;
    NavBB012_ComprovanteResidencia1: NavBB012_ComprovanteResidencia1;
    NavBB012_ComprovanteResidencia2: NavBB012_ComprovanteResidencia2;
    NavBB012_Escolaridade: NavBB012_Escolaridade;
    NavBB012_Ocupacao: NavBB012_Ocupacao;
    NavAA028_NatualDe: NavAA028_NatualDe;
    NavBB001_Tributacao: NavBB001_Tributacao;
    NavBB012_TipoDaEmpresaTrabalho: NavBB012_TipoDaEmpresaTrabalho;
    NavBB027_MotivoDesoneracao: NavBB027_MotivoDesoneracao;
}

export interface NavBB012_RegSUFRAMAValido {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Insc_Est_SNI {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Sexo {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_EstadoCivil {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Domicilio {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_ComprovanteResidencia1 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_ComprovanteResidencia2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Escolaridade {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface NavBB012_Ocupacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavAA028_NatualDe {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface NavBB001_Tributacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_TipoDaEmpresaTrabalho {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface NavBB027_MotivoDesoneracao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Conteudo: string;
    OsusrE9aCsicpBb027Imps: OsusrE9aCsicpBb027Imps2[];
}

export interface OsusrE9aCsicpBb027Imps2 {
    TenantId: number;
    Bb027bId: string;
    Bb027Id: string;
    Bb027bImpostosId: number;
    Bb027bCodgfilial: number;
    Bb027bCodgtransacao: number;
    Bb027bCodgcst: string;
    Bb027bRegimeId: number;
    Bb027bOrigemId: number;
    Bb027bCstIcmsId: number;
    Bb027bCstIpiId: number;
    Bb027bCstPisId: number;
    Bb027bNatBcCredPis: number;
    Bb027bCstCofinsId: number;
    Bb027bNatBcCredCofins: number;
    Bb027bInformacoesnf: string;
    Bb027bInformacoesipi: string;
    Bb027bInformacoespis: string;
    Bb027bInformacoescofins: string;
    Bb027bModbcId: number;
    Bb027bMotdesoneracaoid: number;
    Bb027bUfDestId: string;
    Bb027bClassecontaId: number;
    Bb027bModalbcIcmsStId: number;
    Bb027bAliquota: number;
    Bb027bReducaobase: number;
    Bb027bMp255Id: number;
    Bb027bReducaobcst: number;
    Bb027bCfopStaticaId: number;
    Bb027bCenquadIpiId: number;
    Bb027bAliqInternauf: number;
    Bb027bHashid: string;
    Bb027bIsvicmsdesSubtrai: boolean;
    Bb027bFcalcicmsdesId: number;
    Bb027bPicmsDiferido: number;
    Bb027bVicmsdesonsubId: number;
    Bb027cIndpres: number;
    Bb027bCbenef: string;
    Bb027bPpropocaodestino: number;
    Bb027bFcalcicmsdes: Bb027bFcalcicmsdes2;
    Bb027bModbc: Bb027bModbc2;
    Bb027bMotdesoneracao: string;
}

export interface Bb027bFcalcicmsdes2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface Bb027bModbc2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Digito: string;
    OsusrE9aCsicpBb027Imps: string[];
}

export interface NavGetBB1206 {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jEnderecoid: string;
    Bb012Logradouro: string;
    Bb012Numero: string;
    Bb012Complemento: string;
    Bb012Codgbairro: string;
    Bb012Bairro: string;
    Bb012CodigoCidade: string;
    Bb012Uf: string;
    Bb012Cep: number;
    Bb012CodigoPais: string;
    Bb012EntregaLogradouro: string;
    Bb012EntregaNumero: string;
    Bb012EntregaComplement: string;
    Bb012EntregaCodgbairro: string;
    Bb012EntregaBairro: string;
    Bb012EntregaCodCidade: string;
    Bb012EntregaUf: string;
    Bb012EntregaCep: number;
    Bb012EntregaPais: string;
    Bb012Perimetro: string;
    Bb012EntregaPerimetro: string;
    Bb012Telefone: string;
    Bb012Celular: string;
    Bb012Email: string;
    NavAA028_Cidade: NavAA028_Cidade;
    NavAA027_UF: NavAA027_UF;
    NavAA025_Pais: NavAA025_Pais;
}

export interface NavAA028_Cidade {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface NavAA027_UF {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface NavAA025_Pais {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface NavBB012_ModeloRelacao {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_StatusConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_TipoConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_GrupoConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface NavBB012_ClasseConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_SitConta {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface NavBB012_MCred {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_EstabelecimentoCadastro {
    TenantId: number;
    Id: string;
    Bb001Codigoempresa: number;
    Bb001Razaosocial: string;
    Bb001Endereco: string;
    Bb001Complemento: string;
    Bb001Numresidencial: string;
    Bb001Bairro: string;
    Bb001Cep: number;
    Bb001Cnpj: string;
    Bb001Inscestadual: string;
    Bb001Inscjunta: number;
    Bb001Datainscricao: string;
    Bb001Nomefantasia: string;
    Bb001Telefone: string;
    Bb001Fax: string;
    Bb001Slogamempresa1: string;
    Bb001Slogamempresa2: string;
    Bb001Email: string;
    Bb001Homepage: string;
    Bb001Ramoempresa: number;
    Bb002Grupoempresa: string;
    Bb001Codgclienteaux: number;
    Bb001Almoxpadrao: number;
    Bb001Almoxtransfer: number;
    Bb001Bddistribuida: number;
    Bb001Cnaefiscal: number;
    Bb001Suframaemp: string;
    Bb001Inscmunicipal: string;
    Bb001Paisid: string;
    Cidadeid: string;
    Bb001Ufid: string;
    Bb001Nomeoficial: string;
    Bb001CpfOficial: number;
    Bb001Codgcartorio: number;
    Bb001Nomesubstituto: string;
    Bb001Descricaooficial: string;
    Bb001Capitalmunicipio: number;
    Bb001Cor1Hexa: string;
    Bb001Cor2Hexa: string;
    Bb001IdiomaId: number;
    Bb001Isactive: boolean;
    Bb001Token: string;
    Bb001Usuariosirc: string;
    Bb001Senhasirc: string;
    Bb001Tenantfiscal: number;
    Bb001TokenEsitef: string;
    Bb001UrlGoogleplay: string;
    Bb001UrlAppstore: string;
    Bb001Cix: string;
    Bb001ChaveApl: string;
    Bb001AutToken: string;
    Bb001TokenCspix: string;
    NavRamoEmpresa: NavRamoEmpresa;
    NavEnderecamento: NavEnderecamento;
}

export interface NavRamoEmpresa {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavEnderecamento {
    Pais: Pais;
    UF: UF;
    Cidade: Cidade2;
}

export interface Pais {
    TenantId: number;
    Id: string;
    Aa025Codigopais: number;
    Aa025Descricao: string;
    Aa025Codigobacen: number;
    Aa025Codigosiscomex: number;
    Aa025Isactive: boolean;
    Aa025Nacionalidade: string;
    Aa025Iso3166A2: string;
    Aa025Iso3166A3: string;
    Aa025Iso3166N3: number;
    Aa025ExportPaisid: string;
    Aa025CodigoNacoesunidas: number;
}

export interface UF {
    TenantId: number;
    Id: string;
    Aa027Sigla: string;
    Descricao: string;
    Aa027Percicmscontrib: number;
    Aa027Percicmsncontrib: number;
    Aa027Percsubsttribut: number;
    Aa027Mascinsestadual: string;
    Aa027Percicmsentrada: number;
    Aa027Mascieimpressao: string;
    Aa027Codigoibge: number;
    Paisid: string;
    Regiaoid: string;
    Aa027Naturalidade: string;
    Aa027ExportUfid: string;
    Aa025ExportPaisid: string;
    Aa026ExportRegiaoid: string;
}

export interface Cidade2 {
    TenantId: number;
    Id: string;
    Aa028Cidade: string;
    Aa028Percicmscontrib: number;
    A028Percicmsncontrib: number;
    A028Percsubsttribut: number;
    A028Mascinsestadual: string;
    A028Percicmsentrada: number;
    A028Mascieimpressao: string;
    Aa028Codgibge: number;
    Aa028Zonafranca: number;
    Aa028Estadobrasil: number;
    Ufid: string;
    Aa028ExportCidadeid: string;
    Aa027ExportUfid: string;
}

export interface Csicp_bb061 {
  Bb060Convenioid: number
  Bb061Tipoassid: number
  Bb012Contaid: string
  Bb061Dependenteid: string
  Bb061Valor: number
}