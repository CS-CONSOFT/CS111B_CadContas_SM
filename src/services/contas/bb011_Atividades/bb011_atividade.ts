import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AtividadeCompleto, ApiResponse, Csicp_bb0112 } from '../../../types/crm/atividades/bb011_atividades';
import type { AtividadeById } from '../../../types/crm/atividades/bb011_GetAtividadesById';

function GetAtividadeCompleto(
    tenant: number | undefined,
    active: boolean,
    count: boolean,
    search: string,
    currentpage: number,
    pagesize: number
): Promise<AxiosResponse<ApiResponse<AtividadeCompleto>>> {
    return axios.get<ApiResponse<AtividadeCompleto>>(
        `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb011_Get_List_AtividadeCompleto`,
        {
            headers: {
                tenant_id: tenant,
                In_IsActive: active,
                In_IsCount: count,
                in_search: search,
                in_currentPage: currentpage,
                in_pageSize: pagesize
            }
        }
    );
}

const GetAtividadeById = async (tenantId: number | undefined, in_bb011_id: string): Promise<AtividadeById> => {
    const url = `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb011_Get_Atividade`;

    try {
        const response: AxiosResponse<AtividadeById> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb011_id: in_bb011_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar atividades:', error);
        throw error;
    }
};

const SaveAtividade = async (tenantId: number | undefined, Atividade: Csicp_bb0112): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(
            `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb011_Save_Atividade`,
            Atividade,
            {
                headers: {
                    tenant_id: tenantId
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Erro ao salvar atividade:', error);
        throw error;
    }
};

const DeleteAtividade = async (tenantId: number | undefined, in_bb011_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb011_Delete_Atividade`, {
            headers: {
                tenant_id: tenantId,
                in_bb011_id: in_bb011_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar atividade:', error);
        throw error;
    }
};

const SoftDeleteAtividade = async (tenantId: number | undefined, in_bb011_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_TabelasTotalizacao/csicp_bb011_SoftDelete_Atividade`, {
            headers: {
                tenant_id: tenantId,
                in_bb011_id: in_bb011_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar atividade:', error);
        throw error;
    }
};

export { GetAtividadeCompleto, GetAtividadeById, SaveAtividade, DeleteAtividade, SoftDeleteAtividade };
