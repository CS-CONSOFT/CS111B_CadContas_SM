import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ZonaCompleto, ApiResponse, Csicp_bb0102 } from '../../../types/crm/zona/bb010_zona';
import type { ZonaById } from '../../../types/crm/zona/bb010_GetZonaById';

function GetZonaCompleto(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<ZonaCompleto>>> {
    return axios.get<ApiResponse<ZonaCompleto>>(
        `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb010_Get_List_ZonaCompleto`,
        {
            headers: {
                tenant_id: tenant,
                In_IsActive: active,
                In_IsCount: count,
                in_search: search,
                in_currentPage: currentpage,
                in_pageSize: pagesize
            }
        }
    );
}

const GetZonaById = async (tenantId: number | undefined, in_bb010_id: string): Promise<ZonaById> => {
    const url = `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb010_Get_Zona`;

    try {
        const response: AxiosResponse<ZonaById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb010_id: in_bb010_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar zonas:', error);
        throw error;
    }
};

const SaveZona = async (tenantId: number | undefined, Zona: Csicp_bb0102): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb010_Save_Zona`, Zona, {
            headers: {
                tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar zona:', error);
        throw error;
    }
};

const DeleteZona = async (tenantId: number | undefined, in_bb010_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb010_Delete_Zona`, {
            headers: {
                tenant_id: tenantId,
                in_bb010_id: in_bb010_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar zona:', error);
        throw error;
    }
};

const SoftDeleteZona = async (tenantId: number | undefined, in_bb010_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb010_SoftDelete_Zona`, {
            headers: {
                tenant_id: tenantId,
                in_bb010_id: in_bb010_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar zona:', error);
        throw error;
    }
};

export { GetZonaCompleto, GetZonaById, SaveZona, DeleteZona, SoftDeleteZona };
