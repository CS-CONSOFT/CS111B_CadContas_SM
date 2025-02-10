import { newURLBase, serviceBs101 } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ConvenioMasterCompleto, ConvenioMasterById, ConvenioMasterCreate } from '../../types/convenio_master/bb067_convenioMaster';

function GetConvenioMasterCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<ConvenioMasterCompleto>> {
    const url =
        `${newURLBase}${serviceBs101}/v1/bb067?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<ConvenioMasterCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetConvenioMasterById = async (tenantId: number | undefined, id: string): Promise<ConvenioMasterById> => {
    const url = `${newURLBase}${serviceBs101}/v1/bb067/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<ConvenioMasterById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar convênio master:', error);
        throw error;
    }
};

const CreateConvenioMaster = async (tenantId: number | undefined, convenioMaster: ConvenioMasterCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb067`, convenioMaster, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar convênio master:', error);
        throw error;
    }
};

const UpdateConvenioMaster = async (
    tenantId: number | undefined,
    id: string,
    convenioMaster: ConvenioMasterCreate
): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}${serviceBs101}/v1/bb067/${encodeURIComponent(id)}`, convenioMaster, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar convênio master:', error);
        throw error;
    }
};

const DeleteConvenioMaster = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb060/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar convênio master:', error);
        throw error;
    }
};

export { GetConvenioMasterCompleto, GetConvenioMasterById, CreateConvenioMaster, UpdateConvenioMaster, DeleteConvenioMaster };
