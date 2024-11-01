import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb012m } from '../../../types/crm/bb012_GetContaById';

const SaveAnexos = async (tenantId: number | undefined, anexos: Csicp_bb012m): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012m_Save_ImagensAnexos`, anexos, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar anexos:', error);
        throw error;
    }
};

const DeleteAnexos = async (tenantId: number | undefined, bb012m_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012m_Delete_ImagensAnexos`, {
            headers: {
                Tenant_id: tenantId,
                In_BB012m_ID: bb012m_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar anexos:', error);
        throw error;
    }
};

export { SaveAnexos, DeleteAnexos };
