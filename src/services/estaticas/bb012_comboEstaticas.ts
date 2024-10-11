import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { EstaticasBB } from '../../types/estaticas/estaticas_BB012';

async function GetEstaticasBB(): Promise<AxiosResponse<EstaticasBB>> {
    try {
        return await axios.get<EstaticasBB>(`${URLBase}CSR_BB100_ClienteFor_IS/rest/CS_Contas/bb012_Estaticas`);
    } catch (error) {
        console.error('Erro ao buscar as estatísticas:', error);
        throw error;
    }
}

export { GetEstaticasBB };
