import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { FaixaEtariaCompleto, ApiResponse, Csicp_bb064 } from '../../types/faixa_etaria/bb064_faixaEtaria';
import type { FaixaEtariaById, Csicp_bb066_List, Csicp_bb065 } from '../../types/faixa_etaria/bb064_GetFaixaEtariaById';

function GetFaixaEtariaList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<FaixaEtariaCompleto>>> {
    return axios.get<ApiResponse<FaixaEtariaCompleto>>(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb064_Get_List`, {
        headers: {
            Tenant_id: tenant,
            In_IsActive: active,
            In_IsCount: count,
            in_search: search,
            in_currentPage: currentpage,
            in_pageSize: pagesize
        }
    });
}

const GetFaixaEtariaById = async (tenantId: number | undefined, in_bb064_id: string): Promise<FaixaEtariaById> => {
    const url = `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb064_Get_PorID`;

    try {
        const response: AxiosResponse<FaixaEtariaById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb064_id: in_bb064_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar faixa etária:', error);
        throw error;
    }
};

const SaveFaixaEtaria = async (tenantId: number | undefined, faixaEtaria: Csicp_bb064): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb064_Save`, faixaEtaria, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar faixa etária:', error);
        throw error;
    }
};

const DeleteFaixaEtaria = async (tenantId: number | undefined, in_bb064_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb064_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb064_id: in_bb064_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar faixa etária:', error);
        throw error;
    }
};

// ----------------------------------------------------- Detalhes Faixa Etaria BB066 --------------------------------------------------

const SaveDetalhesFaixaEtaria = async (
    tenantId: number | undefined,
    detalhesFaixaEtaria: Csicp_bb066_List
): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb066_Save`, detalhesFaixaEtaria, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar os detalhes da faixa etária:', error);
        throw error;
    }
};

const DeleteDetalhesFaixaEtaria = async (tenantId: number | undefined, in_bb066_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb066_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb066_id: in_bb066_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar os detalhes da faixa etária:', error);
        throw error;
    }
};

// ----------------------------------------------------- Vincular Convênio X Faixa Etaria BB065 --------------------------------------------------

const SaveVinculoConvenioFaixaEtaria = async (tenantId: number | undefined, vincularConvenio: Csicp_bb065): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb065_Save`, vincularConvenio, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao vincular o convênio a faixa etária:', error);
        throw error;
    }
};

const DeleteVinculoConvenioFaixaEtaria = async (tenantId: number | undefined, in_bb065_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb065_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb065_id: in_bb065_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar o vinculo do convênio a faixa etária:', error);
        throw error;
    }
};

// Atualizar Faixa Etária

const AtualizarFaixaEtaria = async (In_bb064_ID: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.get(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_Pro_AtualizaFxEtaria`, {
            headers: {
                In_bb064_ID: In_bb064_ID
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar a faixa etária:', error);
        throw error;
    }
};

export {
    GetFaixaEtariaList,
    GetFaixaEtariaById,
    SaveFaixaEtaria,
    DeleteFaixaEtaria,
    SaveDetalhesFaixaEtaria,
    DeleteDetalhesFaixaEtaria,
    SaveVinculoConvenioFaixaEtaria,
    DeleteVinculoConvenioFaixaEtaria,
    AtualizarFaixaEtaria
};
