import { newURLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { PeriodoCompleto, PeridoById, PeriodoCreate } from '../../types/crm/periodo/bb062_periodo';

function GetPeriodoCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<PeriodoCompleto>> {
    const url =
        `${newURLBase}/api/v1/bb062?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;
    return axios.get<PeriodoCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetPeriodoById = async (tenantId: number | undefined, id: string): Promise<PeridoById> => {
    const url = `${newURLBase}/api/v1/bb062/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<PeridoById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar período:', error);
        throw error;
    }
};

const CreatePeriodo = async (tenantId: number | undefined, periodo: PeriodoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb062`, periodo, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar período:', error);
        throw error;
    }
};

const UpdatePeriodo = async (tenantId: number | undefined, id: string, periodo: PeriodoCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}/api/v1/bb062/${encodeURIComponent(id)}`, periodo, {
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

const DeletePeriodo = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb062/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar período:', error);
        throw error;
    }
};

const GerarTitulo = async (tenantId: number | undefined, In_bb062_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.get(`${newURLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_Pro_GerarTitulosConvenio`, {
            headers: {
                Tenant_ID: tenantId,
                In_bb062_Id: In_bb062_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao gerar título:', error);
        throw error;
    }
};

export { GetPeriodoCompleto, GetPeriodoById, CreatePeriodo, UpdatePeriodo, DeletePeriodo, GerarTitulo };
