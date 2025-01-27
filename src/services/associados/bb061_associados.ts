import { newURLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AssociadosCompleto, AssociadoCreate } from '../../types/crm/associados/bb061_associados';

function GetAssociadosCompleto(
    tenantId: number | undefined,
    active: boolean,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<AssociadosCompleto>> {
    const url =
        `${newURLBase}/api/v1/bb011?` +
        `active=${encodeURIComponent(active)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<AssociadosCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const CreateAssociado = async (tenantId: number | undefined, associado: AssociadoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb061`, associado, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar associado:', error);
        throw error;
    }
};

const DeleteAssociado = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb061/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar associado:', error);
        throw error;
    }
};

const SoftDeleteAssociado = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.patch(`${newURLBase}/api/v1/bb061/changeActive/${encodeURIComponent(id)}`, null, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar associado:', error);
        throw error;
    }
};

export { GetAssociadosCompleto, CreateAssociado, DeleteAssociado, SoftDeleteAssociado };
