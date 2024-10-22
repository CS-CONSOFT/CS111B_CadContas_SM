import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb01203 } from '../../../types/crm/bb012_conta';

const SaveNota = async (tenantId: number | undefined, nota: Csicp_bb01203): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01203_Save_Nota`, nota, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar nota:', error);
        throw error;
    }
};

const DeleteNota = async (tenantId: number | undefined, bb01203_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01203_Delete_Nota`, {
            headers: {
                Tenant_id: tenantId,
                In_BB01203_ID: bb01203_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar nota:', error);
        throw error;
    }
};

export { SaveNota, DeleteNota };
