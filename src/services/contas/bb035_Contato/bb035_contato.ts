import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContatosCompleto, ApiResponse } from '../../../types/crm/contatos/bb035_contatos';
import type { ContatoById } from '../../../types/crm/contatos/bb035_GetContatoById';
import type { ContatosTypes } from './bb035_contatoTypes';

function GetContatosList(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<ContatosCompleto>>> {
    return axios.get<ApiResponse<ContatosCompleto>>(
        `${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_CRM_OutrasFontes/csicp_bb035_Get_List_Contatos`,
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

const GetContatoById = async (tenantId: number | undefined, in_bb035_id: string): Promise<ContatoById> => {
    const url = `${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_CRM_OutrasFontes/csicp_bb035_Get_Contato_ID`;

    try {
        const response: AxiosResponse<ContatoById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                In_bb035_ID: in_bb035_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar contato:', error);
        throw error;
    }
};

const SaveContatoBB035 = async (tenantId: number | undefined, contato: ContatosTypes): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_CRM_OutrasFontes/csicp_bb035_Save`, contato, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar contato:', error);
        throw error;
    }
};

const DeleteContatoBB035 = async (tenantId: number | undefined, in_bb035_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_CRM_OutrasFontes/csicp_bb035_Delete_Contato`, {
            headers: {
                Tenant_id: tenantId,
                In_BB035_ID: in_bb035_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar contato:', error);
        throw error;
    }
};

export { GetContatosList, GetContatoById, SaveContatoBB035, DeleteContatoBB035 };
