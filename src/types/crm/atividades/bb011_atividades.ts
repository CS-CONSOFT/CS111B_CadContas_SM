export interface AtividadeCompleto {
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
    Bb011Codigo: number;
    Bb011Atividade: string;
    Bb011IsActive: boolean;
}
export interface AtividadeById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
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
