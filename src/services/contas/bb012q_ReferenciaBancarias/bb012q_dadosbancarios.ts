import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ReferenciasBancariasCreate } from '../../../types/crm/contas/tabelasAuxiliares/bb012q_referenciasbancarias';

const CreateDadosBancarios = async (
    tenantId: number | undefined,
    dadosBancarios: ReferenciasBancariasCreate
): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb012q`, dadosBancarios, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar dados bancários:', error);
        throw error;
    }
};

const DeleteDadosBancarios = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb012q/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar dados bancários:', error);
        throw error;
    }
};

export { CreateDadosBancarios, DeleteDadosBancarios };
