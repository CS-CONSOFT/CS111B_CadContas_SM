import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb01207 } from '../../../types/crm/bb012_conta';

const SaveMembroConvAvalista = async (tenantId: number | undefined, membroConvAvalista: Csicp_bb01207): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(
            `${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01207_Save_MembroConvAvalista`,
            membroConvAvalista,
            {
                headers: {
                    Tenant_id: tenantId
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Erro ao salvar membro convênio avalista:', error);
        throw error;
    }
};

const DeleteMembroConvAvalista = async (tenantId: number | undefined, bb01207_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb01207_Delete_MembroConvAvalista`, {
            headers: {
                Tenant_id: tenantId,
                In_BB01207_ID: bb01207_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar membro convênio avalista:', error);
        throw error;
    }
};

export { SaveMembroConvAvalista, DeleteMembroConvAvalista };
