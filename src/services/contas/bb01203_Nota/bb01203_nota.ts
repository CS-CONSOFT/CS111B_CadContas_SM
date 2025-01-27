import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { NotasCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb01203_notas';

const CreateNota = async (tenantId: number | undefined, nota: NotasCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb1203`, nota, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar nota:', error);
        throw error;
    }
};

const DeleteNota = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb1203/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar nota:', error);
        throw error;
    }
};

export { CreateNota, DeleteNota };
