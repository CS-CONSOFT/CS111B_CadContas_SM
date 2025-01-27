import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { RelacaoContatosContaCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb01208_relacaocontacontato';

const CreateRelacaoContaContato = async (
    tenantId: number | undefined,
    contato: RelacaoContatosContaCreate
): Promise<AxiosResponse<any>> => {
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

const DeleteRelacaoContaContato = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb01208/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar contato:', error);
        throw error;
    }
};

export { CreateRelacaoContaContato, DeleteRelacaoContaContato };
