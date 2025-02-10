import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContatosCompleto, ContatoById, ContatoCreate } from '@/types/crm/contatos/bb035_contatos';

function GetContatosCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<ContatosCompleto>> {
    const url =
        `${newURLBase}${serviceBs101}/v1/bb035?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;
    return axios.get<ContatosCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetContatoById = async (tenantId: number | undefined, id: string): Promise<ContatoById> => {
    const url = `${newURLBase}${serviceBs101}/v1/bb035/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<ContatoById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar contato:', error);
        throw error;
    }
};

const CreateContato = async (tenantId: number | undefined, contato: ContatoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb035`, contato, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar contato:', error);
        throw error;
    }
};

const UpdateContato = async (tenantId: number | undefined, id: string, contato: ContatoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}${serviceBs101}/v1/bb035/${encodeURIComponent(id)}`, contato, {
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

const DeleteContato = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb035/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar contato:', error);
        throw error;
    }
};

export { GetContatosCompleto, GetContatoById, CreateContato, UpdateContato, DeleteContato };
