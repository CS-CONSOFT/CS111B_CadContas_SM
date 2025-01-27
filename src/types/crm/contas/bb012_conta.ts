export interface ContaCompleta {
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
    NavBb012IdIndicadorNavigation: NavBb012IdIndicadorNavigation;
    NavGetBB1201: NavGetBB12012;
    NavGetBB1202: NavGetBB12022;
    NavGetBB1206: NavGetBB12062;
    NavBB012_ModeloRelacao: NavBB012_ModeloRelacao2;
    NavBB012_StatusConta: NavBB012_StatusConta2;
    NavBB012_TipoConta: NavBB012_TipoConta2;
    NavBB012_GrupoConta: NavBB012_GrupoConta2;
    NavBB012_ClasseConta: NavBB012_ClasseConta2;
    NavBB012_SitConta: NavBB012_SitConta2;
    NavBB012_MCred: NavBB012_MCred2;
    NavBB012_EstabelecimentoCadastro: NavBB012_EstabelecimentoCadastro2;
    NavOutrosEnderecosList: NavOutrosEnderecosList[];
    NavNotasList: NavNotasList[];
    NavRetencaoImpostosList: NavRetencaoImpostosList[];
    NavContatosList: NavContatosList[];
    NavMembrosCompleto: NavMembrosCompleto;
    NavBensList: NavBensList[];
    NavDadosBancariosList: NavDadosBancariosList[];
    NavGEDList: NavGEDList[];
    NavAnaliseCreditoList: NavAnaliseCreditoList[];
    NavMeuCrediarioList: NavMeuCrediarioList[];
}

export interface NavBb012IdIndicadorNavigation {
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
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
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

export interface NavBb007CodggerenteNavigation2 {
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

export interface NavBb007CodgsupervisorNavigation2 {
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
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
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

export interface NavBb007CodggerenteNavigation2 {
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

export interface NavBb007CodgsupervisorNavigation2 {
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
    Cidade: Cidade;
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

export interface NavGetBB12012 {
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
    NavBB010_Zona: NavBB010_Zona2;
    NavBB011_Atividade: NavBB011_Atividade2;
    NavBB006_BancoPadrao: NavBB006_BancoPadrao2;
    NavRevenda: NavRevenda2;
    NavRequisicao: NavRequisicao2;
    NavBB025_NatOperacao: NavBB025_NatOperacao2;
    NavBB008_CondPagamento: NavBB008_CondPagamento2;
    NavBB029_Categoria: NavBB029_Categoria2;
    NavBB01201_Convenio: NavBB01201_Convenio2;
    NavBB01201_TpGeracao: NavBB01201_TpGeracao2;
    NavBB01201_SitEspecial: NavBB01201_SitEspecial2;
    NavBB010_EntregaMontagem: NavBB010_EntregaMontagem2;
    NavBB010_VendaRota: NavBB010_VendaRota2;
    NavBB037_DiaVencimento: NavBB037_DiaVencimento2;
}

export interface NavBB010_Zona2 {
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
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
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

export interface NavBb007CodggerenteNavigation2 {
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

export interface NavBb007CodgsupervisorNavigation2 {
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

export interface NavBB011_Atividade2 {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface NavBB006_BancoPadrao2 {
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

export interface NavRevenda2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavRequisicao2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavBB025_NatOperacao2 {
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
    NavBb025Transacao: NavBb025Transacao2;
}

export interface NavBb025Transacao2 {
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

export interface NavBB008_CondPagamento2 {
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

export interface NavBB029_Categoria2 {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface NavBB01201_Convenio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB01201_TpGeracao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB01201_SitEspecial2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface NavBB010_EntregaMontagem2 {
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
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
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

export interface NavBb007CodggerenteNavigation2 {
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

export interface NavBb007CodgsupervisorNavigation2 {
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

export interface NavBB010_VendaRota2 {
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
    NavBb007Ccusto: NavBb007Ccusto2;
    NavBb007CodggerenteNavigation: NavBb007CodggerenteNavigation2;
    NavBb007CodgsupervisorNavigation: NavBb007CodgsupervisorNavigation2;
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

export interface NavBb007CodggerenteNavigation2 {
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

export interface NavBb007CodgsupervisorNavigation2 {
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

export interface NavBB037_DiaVencimento2 {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface NavGetBB12022 {
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
    NavBB012_RegSUFRAMAValido: NavBB012_RegSUFRAMAValido2;
    NavBB012_Insc_Est_SNI: NavBB012_Insc_Est_SNI2;
    NavBB012_Sexo: NavBB012_Sexo2;
    NavBB012_EstadoCivil: NavBB012_EstadoCivil2;
    NavBB012_Domicilio: NavBB012_Domicilio2;
    NavBB012_ComprovanteResidencia1: NavBB012_ComprovanteResidencia12;
    NavBB012_ComprovanteResidencia2: NavBB012_ComprovanteResidencia22;
    NavBB012_Escolaridade: NavBB012_Escolaridade2;
    NavBB012_Ocupacao: NavBB012_Ocupacao2;
    NavAA028_NatualDe: NavAA028_NatualDe2;
    NavBB001_Tributacao: NavBB001_Tributacao2;
    NavBB012_TipoDaEmpresaTrabalho: NavBB012_TipoDaEmpresaTrabalho2;
    NavBB027_MotivoDesoneracao: NavBB027_MotivoDesoneracao2;
}

export interface NavBB012_RegSUFRAMAValido2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Insc_Est_SNI2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Sexo2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_EstadoCivil2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Domicilio2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_ComprovanteResidencia12 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_ComprovanteResidencia22 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_Escolaridade2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Labelmeucrediario: string;
}

export interface NavBB012_Ocupacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavAA028_NatualDe2 {
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

export interface NavBB001_Tributacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_TipoDaEmpresaTrabalho2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface NavBB027_MotivoDesoneracao2 {
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

export interface NavGetBB12062 {
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
    NavAA028_Cidade: NavAA028_Cidade2;
    NavAA027_UF: NavAA027_UF2;
    NavAA025_Pais: NavAA025_Pais2;
}

export interface NavAA028_Cidade2 {
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

export interface NavAA027_UF2 {
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

export interface NavAA025_Pais2 {
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

export interface NavBB012_ModeloRelacao2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_StatusConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_TipoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_GrupoConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Usocs: string;
}

export interface NavBB012_ClasseConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_SitConta2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    Codgcs: number;
}

export interface NavBB012_MCred2 {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012_EstabelecimentoCadastro2 {
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
    NavRamoEmpresa: NavRamoEmpresa2;
    NavEnderecamento: NavEnderecamento2;
}

export interface NavRamoEmpresa2 {
    Id: number;
    Label: string;
    Tiporegistro: number;
    Order: number;
}

export interface NavEnderecamento2 {
    Pais: Pais2;
    UF: UF2;
    Cidade: Cidade2;
}

export interface Pais2 {
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

export interface UF2 {
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

export interface NavOutrosEnderecosList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012jTelefone: string;
    Bb012jFax: string;
    Bb012jEmail: string;
    Bb012jTipoendereco: number;
    NavTipoEndereco: NavTipoEndereco;
    NavBB1206_Enderecos: NavBB1206_Enderecos;
}

export interface NavTipoEndereco {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB1206_Enderecos {
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
    NavAA028_Cidade: NavAA028_Cidade2;
    NavAA027_UF: NavAA027_UF2;
    NavAA025_Pais: NavAA025_Pais2;
}

export interface NavAA028_Cidade2 {
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

export interface NavAA027_UF2 {
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

export interface NavAA025_Pais2 {
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

export interface NavNotasList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012Contatoid: string;
    Bb012Candidatoid: string;
    Bb043Campanhaid: string;
    Bb042Potencialid: string;
    Bb040Atividadeid: string;
    Bb041Casoid: string;
    Bb046Concorrenteid: string;
    Bb012Nota: string;
    Bb01203IsActive: boolean;
}

export interface NavRetencaoImpostosList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012oCodigo: number;
    Bb012oRetem: number;
    Bb012oPercentual: number;
    Bb012oImpostoId: number;
}

export interface NavContatosList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012Contatoid: string;
    Bb036Candidatoid: string;
    Bb043Campanhaid: string;
    Bb042Potencialid: string;
    Bb040Atividadeid: string;
    Bb041Casoid: string;
    Bb01208IsActive: boolean;
    Concorrenteid: string;
    Bb01208GrauparentId: number;
    Bb01208CodgCliente7x: number;
    Bb01208SeqCliente7x: number;
    Bb01208OrigemcontatoId: number;
    NavCSICP_BB035: NavCSICP_BB035;
    NavCSICP_BB035Gpa: NavCSICP_BB035Gpa;
}

export interface NavCSICP_BB035 {
    TenantId: number;
    Id: string;
    Bb035Primeironome: string;
    Bb035Sobrenome: string;
    Bb035Email: string;
    Bb035Titulo: string;
    Bb035Departamento: string;
    Bb035DataAniversario: string;
    Bb035Telefone: string;
    Bb035Outrotelefone: string;
    Bb035Celular: string;
    Bb035Fax: string;
    Bb035Telefoneresidencia: string;
    Bb035Descricao: string;
    Bb035Assistente: string;
    Bb035Telefoneassist: string;
    Bb035Emailsecundario: string;
    Bb035Cpf: string;
    Bb035Rg: number;
    Bb035OrgaoExpedRg: string;
    Bb035DataEmissaoRg: string;
    Bb035IsActive: boolean;
    Bb035TratamentoId: number;
    Bb035OrigemcontatoId: number;
    Bb035CodgCliente7x: number;
    Bb035SeqCliente7x: number;
    NavCSICP_BB035End: NavCSICP_BB035End;
    NavCSICP_BB035Trat: NavCSICP_BB035Trat;
    NavCSICP_BB035Origem: NavCSICP_BB035Origem;
}

export interface NavCSICP_BB035End {
    TenantId: number;
    Bb035Id: string;
    Bb035Contatoid: string;
    Bb035Logradouro: string;
    Bb035Numero: string;
    Bb035Complemento: string;
    Bb035Bairro: string;
    Bb035CodigoCidade: string;
    Bb035Uf: string;
    Bb035Cep: string;
    Bb035CodigoPais: string;
}

export interface NavCSICP_BB035Trat {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavCSICP_BB035Origem {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavCSICP_BB035Gpa {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavMembrosCompleto {
    NavAvalistaList: NavAvalistaList[];
    NavMembroList: NavMembroList[];
    NavConvenioList: NavConvenioList[];
}

export interface NavAvalistaList {
    TenantId: number;
    Id: string;
    Bb012TipoRegMembroconveni: number;
    Bb012Id: string;
    Bb012Membroid: string;
    Bb01207IsActive: boolean;
}

export interface NavMembroList {
    TenantId: number;
    Id: string;
    Bb012TipoRegMembroconveni: number;
    Bb012Id: string;
    Bb012Membroid: string;
    Bb01207IsActive: boolean;
}

export interface NavConvenioList {
    TenantId: number;
    Id: string;
    Bb012TipoRegMembroconveni: number;
    Bb012Id: string;
    Bb012Membroid: string;
    Bb01207IsActive: boolean;
}

export interface NavBensList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012cDescempresa: string;
    Bb012cProprietramo: string;
    Bb012cValorMedia: number;
    Bb012cFone: string;
    Bb012cIsActive: boolean;
}

export interface NavDadosBancariosList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012Agencia: string;
    Bb012Conta: string;
    Bb012Valorfinanciamento: number;
    Bb012Nomegerente: string;
    Bb012Telefone: string;
    Bb012Faxcelular: string;
    Bb012Homepage: string;
    Bb012Email: string;
    Bb012qIsActive: boolean;
}

export interface NavGEDList {
    TenantId: number;
    Id: string;
    Bb012Id: string;
    Bb012Contatoid: string;
    Bb012Candidatoid: string;
    Bb043Campanhaid: string;
    Bb042Potencialid: string;
    Bb040Atividadeid: string;
    Bb041Casoid: string;
    Bb012mCodigoCliente: number;
    Bb012mDescricao: string;
    Bb012mContent: string;
    Bb012mFiletype: string;
    Bb012mFilename: string;
    Bb012mIsActive: boolean;
    Bb012mTipodoctoid: number;
    Bb012mDoctoid: number;
    Bb012mDatadocto: string;
    Bb012mPath: string;
    NavBB012MDC: NavBB012MDC;
    NavBB012MTD: NavBB012MTD;
}

export interface NavBB012MDC {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavBB012MTD {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
}

export interface NavAnaliseCreditoList {
    TenantId: number;
    Id: number;
    Bb012Id: string;
    Bb01210Tipo: number;
    Bb01210Ano: number;
    Bb01210Mes: number;
    Bb01210Vcredsemscore: number;
    Bb01210Vcredcomscore: number;
    Bb01210Vcredmedia: number;
    Bb01210Dtregistro: string;
    JsonCreditpro: string;
    QtdComportamentoCompras: number;
    QtdAtrasosfreq: number;
    QtdAtrasosmoderados: number;
    QtdPagtospontuais: number;
    QtdSemprepagaprazo: number;
    QtdTitulos: number;
    CteObtemPesoC: number;
    CteObtemPesoP: number;
    Mediasalarialbairro: number;
    Renda: number;
    FFatorajuste: number;
    Wc: number;
    We: number;
    Wp: number;
    Wr: number;
    Scoreclearsale: number;
    Taxascore: number;
    CteCgradValorcredito: number;
    CteCgradFatorGradualidade: number;
    CteCgradCreditoUsado: number;
    CteCgradCreditoPago: number;
    CteCgradCreditoEmaberto: number;
    CteCgradQtdTituloaberto: number;
    CteCgradMaxDiasPagtoatra: number;
    CteCgradMaxDiasTitatraso: number;
    CteCrednaopagoPercNaopago: number;
    CteAgradDPesoVlrsdivida: number;
    CteAgradDPercVlrsdivida: number;
    CteGradualU: number;
    CteGradualUWu: number;
    CteGradualF: number;
    CteGradualP: number;
    FWf: number;
    PWpa: number;
    VlrNovocredito: number;
}

export interface NavMeuCrediarioList {
    TenantId: number;
    Id: number;
    Bb012Contaid: string;
    Bb01209Datareg: string;
    Bb01209Json: string;
}
