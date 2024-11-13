export interface FaixaEtariaCompleto {
    PageSize: PageSize;
    TabelaFaixaEtaria: TabelaFaixaEtaria[];
    Code_Erro: Code_Erro;
}

export interface PageSize {
    cs_list_total_itens: number;
    cs_itens_per_page: string;
    cs_number_of_pages: number;
}

export interface TabelaFaixaEtaria {
    csicp_bb064: Csicp_bb064;
}

export interface Csicp_bb064 {
    bb064_FxEtariaId: number;
    bb064_Descricao: string;
    bb064_IsActive: boolean;
}

export interface Code_Erro {
    Code_Erro: string;
    Mensagem: string;
}

export interface ApiResponse<T> {
    TabelaFaixaEtaria: any;
    PageSize: any;
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
