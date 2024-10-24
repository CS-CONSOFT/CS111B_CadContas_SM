import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Csicp_bb012q } from '../../../types/crm/bb012_conta';

const SaveDadosBancarios = async (tenantId: number | undefined, dadosBancarios: Csicp_bb012q): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(
            `${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012q_Save_DadosBancario`,
            dadosBancarios,
            {
                headers: {
                    Tenant_id: tenantId
                }
            }
        );
        return response;
    } catch (error) {
        console.error('Erro ao salvar dados bancários:', error);
        throw error;
    }
};

const DeleteDadosBancarios = async (tenantId: number | undefined, bb012q_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012q_Delete_DadosBancario`, {
            headers: {
                Tenant_id: tenantId,
                In_BB012q_ID: bb012q_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar dados bancários:', error);
        throw error;
    }
};

export { SaveDadosBancarios, DeleteDadosBancarios };
