import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb012o } from '../../../types/crm/bb012_conta';

const SaveRetencao = async (tenantId: number | undefined, retencao: Csicp_bb012o): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012o_Save_Retencao`, retencao, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar a retenção de imposto:', error);
        throw error;
    }
};

const DeleteRetencao = async (tenantId: number | undefined, bb012o_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012o_Delete_Retencao`, {
            headers: {
                Tenant_id: tenantId,
                In_BB012o_ID: bb012o_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar a retenção de imposto:', error);
        throw error;
    }
};

export { SaveRetencao, DeleteRetencao };
