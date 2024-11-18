export interface FaixaEtariaById {
    csicp_bb064: Csicp_bb064;
    csicp_bb066_List: Csicp_bb066_List[];
    Vinculo_FxEtaria_Convenio: Vinculo_FxEtaria_Convenio[];
}

export interface Csicp_bb064 {
    bb064_FxEtariaId: number;
    bb064_Descricao: string;
    bb064_IsActive: boolean;
}

export interface Csicp_bb066_List {
    bb066_ID: number;
    bb066_FxEtariaID: number;
    bb066_FaixaDe: number;
    bb066_FaixaAte: number;
    bb066_Valor: number;
}

export interface Vinculo_FxEtaria_Convenio {
    csicp_bb065: Csicp_bb065;
    csicp_bb060: Csicp_bb060;
}

export interface Csicp_bb065 {
    bb065_ID: number;
    bb064_FxEtariaID: number;
    bb062_ConvenioID: number;
}

export interface Csicp_bb060 {
    bb060_ConvenioId: number;
    bb060_Codigo: string;
    bb060_Descricao: string;
    bb060_vBase: number;
    bb060_CCustoID: string;
    bb060_UsuarioProprieID: string;
    bb060_AgCobradorID: string;
    bb060_ResponsavelID: string;
    bb060_CondicaoID: string;
    bb060_TipoCobrancaID: string;
    bb060_UsuarioInc: string;
    bb060_UsuarioAlt: string;
    bb060_dthrInc: string;
    bb060_dthrAlt: string;
    bb060_EspecieID: string;
    bb060_FPagto_ID: string;
    bb060_IsActive: boolean;
    bb060_ConvMasterID: number;
}
