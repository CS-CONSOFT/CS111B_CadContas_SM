export interface ConvenioMasterCompleto {
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
    Bb067Id: number;
    Bb067Descricao: string;
    Bb067Codigo: string;
}

export interface ConvenioMasterById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
    TenantId: number;
    Bb067Id: number;
    Bb067Descricao: string;
    Bb067Codigo: string;
}

export interface ConvenioMasterCreate {
    Bb067Codigo: string;
    Bb067Descricao: string;
}
