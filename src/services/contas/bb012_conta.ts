import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContaCompleta, ApiResponse } from '../../types/crm/bb012_conta';
import type { ContaById, Csicp_bb012 } from '../../types/crm/bb012_GetContaById';
import type { Csicp_bb012_Completo } from './saveConta';

function GetContasList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    In_CodgConta: string,
    search: string,
    currentpage: number,
    pagesize: number,
    modrelacao: number,
    in_grupo: string,
    in_zona: string
): Promise<AxiosResponse<ApiResponse<ContaCompleta>>> {
    return axios.get<ApiResponse<ContaCompleta>>(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Get_List_ContasCompleto`, {
        headers: {
            Tenant_id: tenant,
            In_IsActive: active,
            In_IsCount: count,
            in_search: search,
            In_CodgConta: In_CodgConta,
            in_currentPage: currentpage,
            in_pageSize: pagesize,
            In_ModRelacaoID: modrelacao,
            In_ClauseInt_List_csicp_bb012_GruCta: in_grupo,
            In_ClauseInt_List_csicp_bb010_Zona: in_zona
        }
    });
}

const GetContaById = async (tenantId: number | undefined, In_BB012_ID: string): Promise<ContaById> => {
    const url = `${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Get_Conta`;

    try {
        const response: AxiosResponse<ContaById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                In_BB012_ID: In_BB012_ID
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar conta:', error);
        throw error;
    }
};

const SaveContaCompleto = async (tenantId: number | undefined, conta: Csicp_bb012_Completo): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Completo_Save_Conta`, conta, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar conta:', error);
        throw error;
    }
};

const DeleteConta = async (tenantId: number | undefined, bb012_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Delete_Conta`, {
            params: {
                Tenant_id: tenantId,
                In_BB012_ID: bb012_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar conta:', error);
        throw error;
    }
};

const SoftDeleteConta = async (tenantId: number | undefined, bb012_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_SoftDelete_Conta`, {
            params: {
                Tenant_id: tenantId,
                In_BB012_ID: bb012_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar conta:', error);
        throw error;
    }
};

export { GetContasList, GetContaById, SaveContaCompleto, DeleteConta, SoftDeleteConta };
