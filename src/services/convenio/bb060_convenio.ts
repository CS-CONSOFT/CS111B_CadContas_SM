import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ConvenioCompleto, ApiResponse, Csicp_bb060 } from '../../types/convenio/bb060_convenio';
import type { ConvenioById } from '../../types/convenio/bb060_GetConvenioById';

function GetConvenioList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<ConvenioCompleto>>> {
    return axios.get<ApiResponse<ConvenioCompleto>>(
        `${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb060_Get_Lista_Convenio_Completo`,
        {
            headers: {
                Tenant_id: tenant,
                In_IsActive: active,
                In_IsCount: count,
                in_search: search,
                in_currentPage: currentpage,
                in_pageSize: pagesize
            }
        }
    );
}

const GetConvenioById = async (tenantId: number | undefined, in_bb060_id: string): Promise<ConvenioById> => {
    const url = `${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb060_Get_Convenio_PorID`;

    try {
        const response: AxiosResponse<ConvenioById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb060_id: in_bb060_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar convênio:', error);
        throw error;
    }
};

const SaveConvenio = async (tenantId: number | undefined, convenio: Csicp_bb060): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb060_Save_Convenio`, convenio, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar convênio:', error);
        throw error;
    }
};

const DeleteConvenio = async (tenantId: number | undefined, in_bb060_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb060_Delete_Convenio`, {
            params: {
                Tenant_id: tenantId,
                in_bb060_id: in_bb060_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar convênio:', error);
        throw error;
    }
};

export { GetConvenioList, GetConvenioById, SaveConvenio, DeleteConvenio };
