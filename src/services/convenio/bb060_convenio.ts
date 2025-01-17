import { newURLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ConvenioCompleto, ConvenioById, ConvenioCreate } from '../../types/convenio/bb060_convenio';

function GetConvenioCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<ConvenioCompleto>> {
    const url =
        `${newURLBase}/api/v1/bb060?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<ConvenioCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetConvenioById = async (tenantId: number | undefined, id: string): Promise<ConvenioById> => {
    const url = `${newURLBase}/api/v1/bb060/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<ConvenioById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar convênio:', error);
        throw error;
    }
};

const CreateConvenio = async (tenantId: number | undefined, convenio: ConvenioCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb060`, convenio, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar convênio:', error);
        throw error;
    }
};

const UpdateConvenio = async (tenantId: number | undefined, id: string, convenio: ConvenioCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}/api/v1/bb060/${encodeURIComponent(id)}`, convenio, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar convênio:', error);
        throw error;
    }
};

const DeleteConvenio = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb060/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar convênio:', error);
        throw error;
    }
};

export { GetConvenioCompleto, GetConvenioById, CreateConvenio, UpdateConvenio, DeleteConvenio };
