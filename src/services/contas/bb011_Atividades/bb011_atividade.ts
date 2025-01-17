import { newURLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AtividadeCompleto, AtividadeById, AtividadeCreate } from '../../../types/crm/atividades/bb011_atividades';

function GetAtividadeCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<AtividadeCompleto>> {
    const url =
        `${newURLBase}/api/v1/bb011?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<AtividadeCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetAtividadeById = async (tenantId: number | undefined, id: string): Promise<AtividadeById> => {
    const url = `${newURLBase}/api/v1/bb011/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<AtividadeById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar atividade:', error);
        throw error;
    }
};

const CreateAtividade = async (tenantId: number | undefined, Atividade: AtividadeCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb011`, Atividade, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar atividade:', error);
        throw error;
    }
};

const UpdateAtividade = async (tenantId: number | undefined, id: string, Atividade: AtividadeCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}/api/v1/bb011/${encodeURIComponent(id)}`, Atividade, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar atividade:', error);
        throw error;
    }
};

const DeleteAtividade = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb011/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar atividade:', error);
        throw error;
    }
};

const SoftDeleteAtividade = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.patch(`${newURLBase}/api/v1/bb011/changeActive/${encodeURIComponent(id)}`, null, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar atividade:', error);
        throw error;
    }
};

export { GetAtividadeCompleto, GetAtividadeById, CreateAtividade, UpdateAtividade, DeleteAtividade, SoftDeleteAtividade };
