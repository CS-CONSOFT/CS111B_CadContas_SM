import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AvalistaCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb01207_avalistas';

const CreateMembroConvAvalista = async (tenantId: number | undefined, membroConvAvalista: AvalistaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb01207`, membroConvAvalista, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar membro convênio avalista:', error);
        throw error;
    }
};

const DeleteMembroConvAvalista = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb01207/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar membro convênio avalista:', error);
        throw error;
    }
};

export { CreateMembroConvAvalista, DeleteMembroConvAvalista };
