import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ZonaCompleto, ZonaById, ZonaCreate } from '../../../types/crm/zona/bb010_zona';

function GetZonaCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<ZonaCompleto>> {
    const url =
        `${newURLBase}${serviceBs101}/v1/bb010?` +
        `IsActive=${encodeURIComponent(active)}&` +
        `Search=${encodeURIComponent(search)}&` +
        `PageNumber=${encodeURIComponent(pagenumber)}&` +
        `PageSize=${encodeURIComponent(pagesize)}`;

    return axios.get<ZonaCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetZonaById = async (tenantId: number | undefined, id: string): Promise<ZonaById> => {
    const url = `${newURLBase}${serviceBs101}/v1/bb010/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<ZonaById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar zonas:', error);
        throw error;
    }
};

const CreateZona = async (tenantId: number | undefined, Zona: ZonaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb010`, Zona, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar zona:', error);
        throw error;
    }
};

const UpdateZona = async (tenantId: number | undefined, id: string, Zona: ZonaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}${serviceBs101}/v1/bb010/${encodeURIComponent(id)}`, Zona, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar zona:', error);
        throw error;
    }
};

const DeleteZona = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb010/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar zona:', error);
        throw error;
    }
};

const SoftDeleteZona = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.patch(`${newURLBase}${serviceBs101}/v1/bb010/changeActive/${encodeURIComponent(id)}`, null, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar zona:', error);
        throw error;
    }
};

export { GetZonaCompleto, GetZonaById, CreateZona, UpdateZona, DeleteZona, SoftDeleteZona };
