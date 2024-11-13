import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ConvenioMasterCompleto, ApiResponse, Csicp_bb067 } from '../../types/convenio_master/bb067_convenioMaster';
import type { ConvenioMasterById } from '../../types/convenio_master/bb067_GetConvenioMasterById';

function GetConvenioMasterList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<ConvenioMasterCompleto>>> {
    return axios.get<ApiResponse<ConvenioMasterCompleto>>(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb067_Get_List`, {
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

const GetConvenioMasterById = async (tenantId: number | undefined, in_bb067_id: string): Promise<ConvenioMasterById> => {
    const url = `${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb067_Get_PorID`;

    try {
        const response: AxiosResponse<ConvenioMasterById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb067_id: in_bb067_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar convênio master:', error);
        throw error;
    }
};

const SaveConvenioMaster = async (tenantId: number | undefined, convenioMaster: Csicp_bb067): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb067_Save`, convenioMaster, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar convênio master:', error);
        throw error;
    }
};

const DeleteConvenioMaster = async (tenantId: number | undefined, in_bb067_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb067_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb067_id: in_bb067_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar convênio master:', error);
        throw error;
    }
};

export { GetConvenioMasterList, GetConvenioMasterById, SaveConvenioMaster, DeleteConvenioMaster };
