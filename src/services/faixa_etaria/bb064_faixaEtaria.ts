import { newURLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type {
    FaixaEtariaCompleto,
    FaixaEtariaById,
    FaixaEtariaCreate,
    FaixaEtariaConvenioCreate,
    FaixaEtariaDetalhesCreate
} from '../../types/faixa_etaria/bb064_faixaEtaria';

function GetFaixaEtariaCompleto(
    tenantId: number | undefined,
    active: boolean,
    search: string,
    pagenumber: number,
    pagesize: number
): Promise<AxiosResponse<FaixaEtariaCompleto>> {
    const url =
        `${newURLBase}/api/v1/bb064?` +
        `active=${encodeURIComponent(active)}&` +
        `search=${encodeURIComponent(search)}&` +
        `pagenumber=${encodeURIComponent(pagenumber)}&` +
        `pagesize=${encodeURIComponent(pagesize)}`;

    return axios.get<FaixaEtariaCompleto>(url, {
        headers: {
            Tenant_ID: tenantId
        }
    });
}

const GetFaixaEtariaById = async (tenantId: number | undefined, id: string): Promise<FaixaEtariaById> => {
    const url = `${newURLBase}/api/v1/bb064/${encodeURIComponent(id)}`;

    try {
        const response: AxiosResponse<FaixaEtariaById> = await axios.get(url, {
            headers: {
                Tenant_ID: tenantId
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar faixa etária:', error);
        throw error;
    }
};

const CreateFaixaEtaria = async (tenantId: number | undefined, faixaEtaria: FaixaEtariaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb064`, faixaEtaria, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar faixa etária:', error);
        throw error;
    }
};

const UpdateFaixaEtaria = async (tenantId: number | undefined, id: string, faixaEtaria: FaixaEtariaCreate): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.put(`${newURLBase}/api/v1/bb064/${encodeURIComponent(id)}`, faixaEtaria, {
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

const DeleteFaixaEtaria = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb064/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar faixa etária:', error);
        throw error;
    }
};

// ----------------------------------------------------- Detalhes Faixa Etaria BB066 --------------------------------------------------

const CreateDetalhesFaixaEtaria = async (
    tenantId: number | undefined,
    detalhesFaixaEtaria: FaixaEtariaDetalhesCreate
): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb066`, detalhesFaixaEtaria, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar os detalhes da faixa etária:', error);
        throw error;
    }
};

const DeleteDetalhesFaixaEtaria = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb066/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar os detalhes da faixa etária:', error);
        throw error;
    }
};

// ----------------------------------------------------- Vincular Convênio X Faixa Etaria BB065 --------------------------------------------------

const CreateVinculoConvenioFaixaEtaria = async (
    tenantId: number | undefined,
    vincularConvenio: FaixaEtariaConvenioCreate
): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${newURLBase}/api/v1/bb065`, vincularConvenio, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao vincular o convênio a faixa etária:', error);
        throw error;
    }
};

const DeleteVinculoConvenioFaixaEtaria = async (tenantId: number | undefined, id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${newURLBase}/api/v1/bb065/${encodeURIComponent(id)}`, {
            headers: {
                Tenant_ID: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar o vinculo do convênio a faixa etária:', error);
        throw error;
    }
};

// Atualizar Faixa Etária

const AtualizarFaixaEtaria = async (tenantId: number | undefined, In_bb064_ID: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.get(`${newURLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_Pro_AtualizaFxEtaria`, {
            headers: {
                Tenant_ID: tenantId,
                In_bb064_ID: In_bb064_ID
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao atualizar a faixa etária:', error);
        throw error;
    }
};

export {
    GetFaixaEtariaCompleto,
    GetFaixaEtariaById,
    CreateFaixaEtaria,
    UpdateFaixaEtaria,
    DeleteFaixaEtaria,
    CreateDetalhesFaixaEtaria,
    DeleteDetalhesFaixaEtaria,
    CreateVinculoConvenioFaixaEtaria,
    DeleteVinculoConvenioFaixaEtaria,
    AtualizarFaixaEtaria,
    FaixaEtariaConvenioCreate
};
