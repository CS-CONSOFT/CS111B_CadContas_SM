import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { RetencaoImpostoCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012o_retencao';

const CreateRetencao = async (tenantId: number | undefined, retencao: RetencaoImpostoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb012o`, retencao, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar retenção de imposto:', error);
        throw error;
    }
};

const DeleteRetencao = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb012o/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar retenção de imposto:', error);
        throw error;
    }
};

export { CreateRetencao, DeleteRetencao };
