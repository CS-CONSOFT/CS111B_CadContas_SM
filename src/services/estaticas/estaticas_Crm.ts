import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { EstaticasCRM } from '../../types/estaticas/estaticas_CRM';

async function GetEstaticasCRM(): Promise<AxiosResponse<EstaticasCRM>> {
    try {
        return await axios.get<EstaticasCRM>(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/Get_Estaticas_CRM`);
    } catch (error) {
        console.error('Erro ao buscar as estatísticas do CRM:', error);
        throw error;
    }
}

export { GetEstaticasCRM };
