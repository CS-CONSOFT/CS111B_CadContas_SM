export interface CategoriaCompleta {
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
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface CategoriaById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
    TenantId: number;
    Id: string;
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
    Bb029IsActive: boolean;
}

export interface CategoriaCreate {
    Bb029Codgcategoria: number;
    Bb029Categoria: string;
}
