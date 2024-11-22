import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AssociadosCompleto, Csicp_bb061 } from '../../types/crm/associados/bb061_associados';

const GetAssociadosList = async (tenantId: number | undefined, in_bb012_id: string): Promise<AssociadosCompleto[]> => {
    const url = `${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb061_Get_Associados`;

    try {
        const response: AxiosResponse<AssociadosCompleto[]> = await axios.get(url, {
            headers: {
                tenant_id: tenantId,
                in_bb012_id: in_bb012_id
            }
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao buscar associados:', error);
        throw error;
    }
};

const SaveAssociado = async (tenantId: number | undefined, associado: Csicp_bb061): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb061_Save`, associado, {
            headers: {
                tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar associado:', error);
        throw error;
    }
};

const DeleteAssociado = async (tenantId: number | undefined, in_bb061_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb061_Delete`, {
            headers: {
                tenant_id: tenantId,
                in_bb061_id: in_bb061_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar associado:', error);
        throw error;
    }
};

const SoftDeleteAssociado = async (tenantId: number | undefined, in_bb061_id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Convenio/csicp_bb061_SoftDelete_Convenio`, {
            headers: {
                tenant_id: tenantId,
                in_bb061_id: in_bb061_id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao inativar associado:', error);
        throw error;
    }
};

export { GetAssociadosList, SaveAssociado, DeleteAssociado, SoftDeleteAssociado };
