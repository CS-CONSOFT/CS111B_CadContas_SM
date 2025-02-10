import { newURLBase, serviceBs101 } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ContaCompleta } from '../../../types/crm/contas/bb012_conta';
import type { ContaById } from '../../../types/crm/contas/bb012_contabyid';
import type { ContaCreate } from '../../../types/crm/contas/bb012_contacreate';

function GetContasCompleta(
    tenantId: number | undefined,
    active: boolean,
    pagenumber: number,
    pagesize: number,
    cpfcnpj?: string,
    modrelacao?: number | undefined,
    grupo?: number | undefined,
    classe?: number | undefined,
    status?: number | undefined,
    situacao?: number | undefined,
    searchCodigo?: string,
    search?: string
): Promise<AxiosResponse<ContaCompleta>> {
    const params = new URLSearchParams();

    params.append('IsActive', String(active));
    params.append('PageNumber', String(pagenumber));
    params.append('PageSize', String(pagesize));

    if (search) params.append('Search', search);
    if (searchCodigo) params.append('SearchCode', searchCodigo);
    if (cpfcnpj) params.append('CPF_CNPJ', cpfcnpj);
    if (modrelacao !== undefined) params.append('ModRelacaoId', String(modrelacao));
    if (grupo !== undefined) params.append('GrupoId', String(grupo));
    if (classe !== undefined) params.append('ClasseId', String(classe));
    if (status !== undefined) params.append('StatusId', String(status));
    if (situacao !== undefined) params.append('SituacaoId', String(situacao));

    // Montagem da URL final
    const url = `${newURLBase}${serviceBs101}/v1/bb012?${params.toString()}`;

    // Retorno da chamada Axios com os cabeçalhos necessários
    return axios.get<ContaCompleta>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetContaById = async (tenantId: number | undefined, id: string): Promise<ContaById> => {
    const url = `${newURLBase}${serviceBs101}/v1/bb012/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<ContaById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar conta:', error);
        throw error;
    }
};

const CreateConta = async (tenantId: number | undefined, conta: ContaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}${serviceBs101}/v1/bb012`, conta, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar conta:', error);
        throw error;
    }
};

const UpdateConta = async (tenantId: number | undefined, id: string, convenio: ContaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}${serviceBs101}/v1/bb012/${encodeURIComponent(id)}`, convenio, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar conta:', error);
        throw error;
    }
};

const DeleteConta = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}${serviceBs101}/v1/bb012/${encodeURIComponent(id)}`, {
            params: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar conta:', error);
        throw error;
    }
};

const SoftDeleteConta = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.patch(`${newURLBase}${serviceBs101}/v1/bb012/changeActive/${encodeURIComponent(id)}`, null, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar conta:', error);
        throw error;
    }
};

export { GetContasCompleta, GetContaById, CreateConta, UpdateConta, DeleteConta, SoftDeleteConta };
