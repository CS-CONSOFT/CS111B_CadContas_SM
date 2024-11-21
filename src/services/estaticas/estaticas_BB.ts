import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { EstaticasBB } from '../../types/estaticas/estaticas_bb';

async function GetEstaticasBB(): Promise<AxiosResponse<EstaticasBB>> {
    try {
        return await axios.get<EstaticasBB>(`${URLBase}CSR_BB100_Tabelas_LIB/rest/CS_Estaticas/Get_Estaticas_BB`);
    } catch (error) {
        console.error('Erro ao buscar as estatísticas das tabela BB:', error);
        throw error;
    }
}

export { GetEstaticasBB };
