export interface AtividadeCompleto {
    PageSize: PageSize;
    csicp_bb011: Lista_bb011_Completo[];
    Code_Erro: Code_Erro;
}

export interface PageSize {
    cs_list_total_itens: number;
    cs_itens_per_page: string;
    cs_number_of_pages: number;
}

export interface Lista_bb011_Completo {
    csicp_bb011: Csicp_bb011;
}

export interface Csicp_bb011 {
    csicp_bb011: Csicp_bb0112;
}

export interface Csicp_bb0112 {
    ID: string;
    BB011_Codigo: number;
    BB011_Atividade: string;
    BB011_Is_Active: boolean;
}

export interface Code_Erro {
    Code_Erro: string;
    Mensagem: string;
}

export interface ApiResponse<T> {
    Lista_bb011_Completo: any;
    Csicp_bb011: any;
    PageSize: any;
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: any;
    request?: any;
}
