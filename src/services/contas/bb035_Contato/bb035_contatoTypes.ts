export interface ContatosTypes {
    csicp_bb035: Csicp_bb035;
    csicp_bb035_end: Csicp_bb035_end;
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

export interface Csicp_bb035_end {
    bb035_Id: string;
    BB035_ContatoID: string;
    BB035_Logradouro: string;
    BB035_Numero: string;
    BB035_Complemento: string;
    BB035_Bairro: string;
    BB035_Codigo_Cidade: string;
    BB035_UF: string;
    BB035_CEP: string;
    BB035_Codigo_Pais: string;
}
