export interface AtividadeCompleto {
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
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface AtividadeById {
    TenantId: number;
    Id: string;
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}

export interface AtividadeCreate {
    Bb011Codigo: number;
    Bb011Atividade: string;
}
