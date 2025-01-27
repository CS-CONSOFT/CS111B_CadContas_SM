export interface PeriodoCompleto {
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
    Bb062Id: number;
    Bb062Ano: number;
    Bb062Mes: number;
    Bb062Descritivo: string;
    Bb062Dtemissao: string;
    Bb062Diavenctoid: string;
    Bb062Statusid: number;
    Bb062Estabid: string;
    NavBb062Diavencto: NavBb062Diavencto;
    NavBb062Status: NavBb062Status;
}

export interface NavBb062Diavencto {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface NavBb062Status {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb062s: OsusrE9aCsicpBb062s[];
}

export interface OsusrE9aCsicpBb062s {
    TenantId: number;
    Bb062Id: number;
    Bb062Ano: number;
    Bb062Mes: number;
    Bb062Descritivo: string;
    Bb062Dtemissao: string;
    Bb062Diavenctoid: string;
    Bb062Statusid: number;
    Bb062Estabid: string;
    Bb062Diavencto: Bb062Diavencto;
    Bb062Status: string;
}

export interface Bb062Diavencto {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface PeridoById {
    Success: boolean;
    Message: string;
    Data: Data;
}

export interface Data {
    TenantId: number;
    Bb062Id: number;
    Bb062Ano: number;
    Bb062Mes: number;
    Bb062Descritivo: string;
    Bb062Dtemissao: string;
    Bb062Diavenctoid: string;
    Bb062Statusid: number;
    Bb062Estabid: string;
    NavBb062Diavencto: NavBb062Diavencto;
    NavBb062Status: NavBb062Status;
}

export interface NavBb062Diavencto {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}

export interface NavBb062Status {
    Id: number;
    Label: string;
    Order: number;
    IsActive: boolean;
    OsusrE9aCsicpBb062s: OsusrE9aCsicpBb062s[];
}

export interface OsusrE9aCsicpBb062s {
    TenantId: number;
    Bb062Id: number;
    Bb062Ano: number;
    Bb062Mes: number;
    Bb062Descritivo: string;
    Bb062Dtemissao: string;
    Bb062Diavenctoid: string;
    Bb062Statusid: number;
    Bb062Estabid: string;
    Bb062Diavencto: Bb062Diavencto;
    Bb062Status: string;
}

export interface Bb062Diavencto {
    TenantId: number;
    Id: string;
    Bb037Codigo: string;
    Bb037Descricao: string;
    Bb037Dia: number;
    Bb037Qtddiasmcompra: number;
    Bb037Isactive: boolean;
}
export interface PeriodoCreate {
    Bb062Ano: number;
    Bb062Mes: number;
    Bb062Descritivo: string;
    Bb062Dtemissao: string;
    Bb062Diavenctoid: string;
    Bb062Statusid: number;
    Bb062Estabid: string;
}
