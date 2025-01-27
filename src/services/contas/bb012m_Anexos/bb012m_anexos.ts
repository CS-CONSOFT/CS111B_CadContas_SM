import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AnexosCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012m_anexos';

const CreateAnexos = async (tenantId: number | undefined, anexos: AnexosCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb012m`, anexos, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar anexos:', error);
        throw error;
    }
};

const DeleteAnexos = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb012m/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar anexos:', error);
        throw error;
    }
};

export { CreateAnexos, DeleteAnexos };
