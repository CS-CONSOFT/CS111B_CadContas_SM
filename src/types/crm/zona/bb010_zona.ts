export interface ZonaCompleto {
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

export interface ZonaById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
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

export interface ZonaCreate {
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
    Bb010Tiporotaid: number;
    Bb010Cidadeid: string;
}
