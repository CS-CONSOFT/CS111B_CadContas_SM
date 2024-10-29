import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContatoById, Csicp_bb035 } from '../../../types/crm/bb035_GetContatoById';

const GetContatoById = async (tenantId: number | undefined, in_bb035_id: string): Promise<ContatoById> => {
    const url = `${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_CRM_OutrasFontes/csicp_bb035_Get_Contato_ID`;

    try {
        const response: AxiosResponse<ContatoById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId
            },
            params: {
                In_bb035_ID: in_bb035_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar contato:', error);
        throw error;
    }
};

const SaveContatoBB035 = async (tenantId: number | undefined, contato: Csicp_bb035): Promise<AxiosResponse<any>> => {
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

export { GetContatoById, SaveContatoBB035, DeleteContatoBB035 };
