import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { BensCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012c_bens';

const CreateBens = async (tenantId: number | undefined, bem: BensCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb012c`, bem, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar bem:', error);
        throw error;
    }
};

const DeleteBens = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb012c/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar bem:', error);
        throw error;
    }
};

export { CreateBens, DeleteBens };
