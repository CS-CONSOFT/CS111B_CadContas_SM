import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { OutrosEnderecosCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012j_outrosenderecos';

const CreateOutrosEnderecos = async (tenantId: number | undefined, endereco: OutrosEnderecosCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb012j`, endereco, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar endereço:', error);
        throw error;
    }
};

const DeleteOutrosEnderecos = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb012j/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar endereço:', error);
        throw error;
    }
};

export { CreateOutrosEnderecos, DeleteOutrosEnderecos };
