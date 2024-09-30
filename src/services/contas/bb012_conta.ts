import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContaCompleta, ApiResponse } from '@/types/crm/bb012_conta';
import type { ContaById } from '@/types/crm/bb012_GetContaById';

function GetContasList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number,
    modrelacao: number,
    in_grupo: string,
    in_zona: string
): Promise<AxiosResponse<ApiResponse<ContaCompleta>>> {
    return axios.get<ApiResponse<ContaCompleta>>(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Get_List_Contas`, {
        headers: {
            Tenant_id: tenant,
            In_IsActive: active,
            In_IsCount: count,
            in_search: search,
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
            params: {
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

export { GetContasList, GetContaById };
