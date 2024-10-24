import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb012c } from '../../../types/crm/bb012_conta';

const SaveBens = async (tenantId: number | undefined, bem: Csicp_bb012c): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012c_Save_Bens`, bem, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar bem:', error);
        throw error;
    }
};

const DeleteBens = async (tenantId: number | undefined, bb012c_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012c_Delete_Bens`, {
            headers: {
                Tenant_id: tenantId,
                In_BB012c_ID: bb012c_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar bem:', error);
        throw error;
    }
};

export { SaveBens, DeleteBens };
