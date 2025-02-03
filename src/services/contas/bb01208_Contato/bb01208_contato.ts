import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb01208 } from '../../../types/crm/contas/tabelasAuxiliares/bb01208_relacaocontacontato';

const CreateRelacaoContaContato = async (tenantId: number | undefined, contato: Csicp_bb01208): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb01208`, contato, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar contato:', error);
        throw error;
    }
};

const UpdateRelacaoContaContato = async (tenantId: number | undefined, id: string, contato: Csicp_bb01208): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}/api/v1/bb01208/${encodeURIComponent(id)}`, contato, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar contato:', error);
        throw error;
    }
};

const DeleteRelacaoContaContato = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb01208/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar contato:', error);
        throw error;
    }
};

export { CreateRelacaoContaContato, UpdateRelacaoContaContato, DeleteRelacaoContaContato };
