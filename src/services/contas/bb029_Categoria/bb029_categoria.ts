import { URLBase } from '../../../services/configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { CategoriaCompleta, ApiResponse, Lista_bb029 } from '../../../types/crm/categoria/bb029_categoria';
import type { CategoriaById } from '../../../types/crm/categoria/bb029_GetCategoriaById';

function GetCategoriaCompleto(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<CategoriaCompleta>>> {
    return axios.get<ApiResponse<CategoriaCompleta>>(
        `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb029_Get_List_Categoria`,
        {
            headers: {
                Tenant_id: tenant,
                In_IsActive: active,
                In_IsCount: count,
                in_search: search,
                in_currentPage: currentpage,
                in_pageSize: pagesize
            }
        }
    );
}

const GetCategoriaById = async (tenantId: number | undefined, in_bb029_id: string): Promise<CategoriaById> => {
    const url = `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb029_Get_Categoria_Por_ID`;

    try {
        const response: AxiosResponse<CategoriaById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb029_id: in_bb029_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar categoria:', error);
        throw error;
    }
};

const SaveCategoria = async (tenantId: number | undefined, Categoria: Lista_bb029): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(
            `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb029_Save_Categoria`,
            Categoria,
            {
                headers: {
                    tenant_id: tenantId
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Erro ao salvar categoria:', error);
        throw error;
    }
};

const DeleteCategoria = async (tenantId: number | undefined, in_bb029_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb029_Delete_Categoria`, {
            headers: {
                tenant_id: tenantId,
                in_bb029_id: in_bb029_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar categoria:', error);
        throw error;
    }
};

export { GetCategoriaCompleto, GetCategoriaById, SaveCategoria, DeleteCategoria };
