import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb01208 } from '../../../types/crm/bb012_conta';

const SaveContato = async (tenantId: number | undefined, contato: Csicp_bb01208): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01208_Save_Contato`, contato, {
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

const DeleteContato = async (tenantId: number | undefined, bb01208_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01208_Delete_Contato`, {
            headers: {
                Tenant_id: tenantId,
                In_BB01208_ID: bb01208_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar contato:', error);
        throw error;
    }
};

export { SaveContato, DeleteContato };
