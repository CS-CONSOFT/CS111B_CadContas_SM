import { newURLBase, serviceBs101 } from '../../../services/configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { CategoriaCompleta, CategoriaById, CategoriaCreate } from '../../../types/crm/categoria/bb029_categoria';

function GetCategoriaCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<CategoriaCompleta>> {
    const url =
        `${newURLBase}${serviceBs101}/v1/bb029?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<CategoriaCompleta>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetCategoriaById = async (tenantId: number | undefined, id: string): Promise<CategoriaById> => {
    const url = `${newURLBase}${serviceBs101}/v1/bb029/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<CategoriaById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar categoria:', error);
        throw error;
    }
};

const CreateCategoria = async (tenantId: number | undefined, Categoria: CategoriaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb029`, Categoria, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar categoria:', error);
        throw error;
    }
};

const UpdateCategoria = async (tenantId: number | undefined, id: string, Categoria: CategoriaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}${serviceBs101}/v1/bb029/${encodeURIComponent(id)}`, Categoria, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
        throw error;
    }
};

const DeleteCategoria = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb029/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar categoria:', error);
        throw error;
    }
};

export { GetCategoriaCompleto, GetCategoriaById, CreateCategoria, UpdateCategoria, DeleteCategoria };
