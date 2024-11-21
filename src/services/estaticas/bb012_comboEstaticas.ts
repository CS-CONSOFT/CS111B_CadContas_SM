import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { EstaticasBB012 } from '../../types/estaticas/estaticas_BB012';

async function GetEstaticasBB012(): Promise<AxiosResponse<EstaticasBB012>> {
    try {
        return await axios.get<EstaticasBB012>(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/bb012_Estaticas`);
    } catch (error) {
        console.error('Erro ao buscar as estatísticas da BB012:', error);
        throw error;
    }
}

export { GetEstaticasBB012 };
