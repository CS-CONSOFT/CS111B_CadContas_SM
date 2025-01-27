export interface OutrosEnderecosCreate {
    Id: string;
    Bb012Id: string;
    Bb012jTelefone: string;
    Bb012jFax: string;
    Bb012jEmail: string;
    Bb012jTipoendereco: number;
    NavBB1206_Enderecos: NavBB1206_Enderecos;
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
}
