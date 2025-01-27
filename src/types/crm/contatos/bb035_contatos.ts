export interface ContatosCompleto {
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

export interface ContatoById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
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

export interface ContatoCreate {
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
    Bb035TratamentoId: number;
    Bb035OrigemcontatoId: number;
    Bb035CodgCliente7x: number;
    Bb035SeqCliente7x: number;
    NavCSICP_BB035End: NavCSICP_BB035EndCreate;
}

export interface NavCSICP_BB035EndCreate {
    Bb035Id: string;
    Bb035Logradouro: string;
    Bb035Numero: string;
    Bb035Complemento: string;
    Bb035Bairro: string;
    Bb035CodigoCidade: string;
    Bb035Uf: string;
    Bb035Cep: string;
    Bb035CodigoPais: string;
}
