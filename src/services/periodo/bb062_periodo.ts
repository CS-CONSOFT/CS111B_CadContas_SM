import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { PeriodoCompleto, ApiResponse, Csicp_bb062 } from '../../types/crm/periodo/bb062_periodo';
import type { PeridoById } from '../../types/crm/periodo/bb062_GetPeriodoById';

function GetPeriodoList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<PeriodoCompleto>>> {
    return axios.get<ApiResponse<PeriodoCompleto>>(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb062_Get_List`, {
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

const GetPeriodoById = async (tenantId: number | undefined, in_bb062_id: string): Promise<PeridoById> => {
    const url = `${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb062_Get_PorID`;

    try {
        const response: AxiosResponse<PeridoById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb062_id: in_bb062_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar período:', error);
        throw error;
    }
};

const SavePeriodo = async (tenantId: number | undefined, periodo: Csicp_bb062): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb062_Save`, periodo, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar período:', error);
        throw error;
    }
};

const DeletePeriodo = async (tenantId: number | undefined, in_bb062_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}/CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb062_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb062_id: in_bb062_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar período:', error);
        throw error;
    }
};

const GerarTitulo = async (tenantId: number | undefined, In_bb062_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.get(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_Pro_GerarTitulosConvenio`, {
            headers: {
                tenant_id: tenantId,
                In_bb062_Id: In_bb062_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao gerar título:', error);
        throw error;
    }
};

export { GetPeriodoList, GetPeriodoById, SavePeriodo, DeletePeriodo, GerarTitulo };
