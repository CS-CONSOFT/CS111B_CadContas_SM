export interface FaixaEtariaCompleto {
    List: List[];
    CurrentPage: number;
    TotalPage: number;
    PageSize: number;
    TotalCount: number;
    HasPrevius: boolean;
    HasNext: boolean;
}

export interface List {
    TenantId: number;
    Bb064Fxetariaid: number;
    Bb064Descricao: string;
    Bb064Isactive: boolean;
}

export interface FaixaEtariaById {
    [x: string]: any;
    TenantId: number;
    Bb064Fxetariaid: number;
    Bb064Descricao: string;
    Bb064Isactive: boolean;
    NavCSICP_BB066List: NavCSICP_BB066List[];
    NavCSICP_BB065List: NavCSICP_BB065List[];
}

export interface NavCSICP_BB066List {
    TenantId: number;
    Bb066Id: number;
    Bb066Fxetariaid: number;
    Bb066Faixade: number;
    Bb066Faixaate: number;
    Bb066Valor: number;
}

export interface NavCSICP_BB065List {
    TenantId: number;
    Bb065Id: number;
    Bb064Fxetariaid: number;
    Bb062Convenioid: number;
    NavBb062Convenio: NavBb062Convenio;
}

export interface NavBb062Convenio {
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
    NavBb007Ccusto: NavBb007Ccusto;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation;
    NavBb031Funcao: NavBb031Funcao;
    NavBb032Cargo: NavBb032Cargo;
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

export interface NavBb007CodggerenteNavigation {
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
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao;
    Bb032Cargo: Bb032Cargo;
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

export interface NavBb007CodgsupervisorNavigation {
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
    Bb007CodggerenteNavigation: string;
    Bb007CodgsupervisorNavigation: string;
    Bb031Funcao: Bb031Funcao2;
    Bb032Cargo: Bb032Cargo2;
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
    NavBb026Administradora: NavBb026Administradora;
    NavBb026Condpagtofixo: NavBb026Condpagtofixo;
}

export interface NavBb026Administradora {
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
}

export interface NavBb026Condpagtofixo {
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

export interface FaixaEtariaCreate {
    Bb064Descricao: string;
}

export interface FaixaEtariaDetalhesCreate {
    Bb066Fxetariaid: number;
    Bb066Faixade: number;
    Bb066Faixaate: number;
    Bb066Valor: number;
}

export interface FaixaEtariaConvenioCreate {
    Bb064Fxetariaid: number;
    Bb062Convenioid: number;
}
