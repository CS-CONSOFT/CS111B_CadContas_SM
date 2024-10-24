export interface OutrosEnderecos {
    csicp_bb012j: Csicp_bb012j;
    csicp_bb01206: Csicp_bb01206;
}

export interface Csicp_bb012j {
    ID: string;
    BB012_ID: string;
    BB012j_Telefone: string;
    BB012j_Fax: string;
    BB012j_Email: string;
    BB012j_TipoEndereco: number;
}

export interface Csicp_bb01206 {
    Id: string;
    BB012_ID: string;
    BB012J_EnderecoID: string;
    BB012_Logradouro: string;
    BB012_Numero: string;
    BB012_Complemento: string;
    BB012_Perimetro: string;
    BB012_CodgBairro: string;
    BB012_Bairro: string;
    BB012_Codigo_Cidade: string;
    BB012_UF: string;
    BB012_CEP: number;
    BB012_Codigo_Pais: string;
    BB012_Entrega_Logradouro: string;
    BB012_Entrega_Numero: string;
    BB012_Entrega_Complement: string;
    BB012_Entrega_CodgBairro: string;
    BB012_Entrega_Bairro: string;
    BB012_Entrega_Cod_Cidade: string;
    BB012_Entrega_Uf: string;
    BB012_Entrega_CEP: number;
    BB012_Entrega_Pais: string;
    BB012_Entrega_Perimetro: string;
    bb012_Telefone: string;
    bb012_Celular: string;
    bb012_email: string;
}
