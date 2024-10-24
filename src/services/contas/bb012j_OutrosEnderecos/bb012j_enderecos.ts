import { URLBase } from '../../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { OutrosEnderecos } from './bb012j_enderecoTypes';
const SaveOutrosEnderecos = async (tenantId: number | undefined, endereco: any): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.post(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012j_Save_OutrosEndereco`, endereco, {
            headers: {
                Tenant_id: tenantId
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao salvar endereço:', error);
        throw error;
    }
};

const DeleteOutrosEnderecos = async (tenantId: number | undefined, bb012j_Id: string): Promise<AxiosResponse<any>> => {
    try {
        const response = await axios.delete(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012j_Delete_OutrosEndereco`, {
            headers: {
                Tenant_id: tenantId,
                In_BB012j_ID: bb012j_Id
            }
        });
        return response;
    } catch (error) {
        console.error('Erro ao deletar endereço:', error);
        throw error;
    }
};

export { SaveOutrosEnderecos, DeleteOutrosEnderecos };
