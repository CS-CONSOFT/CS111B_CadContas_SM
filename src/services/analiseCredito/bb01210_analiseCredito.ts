import { URLBase } from '../configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { AnaliseCreditoCompleta } from '../../types/analiseCredito/bb01210_analiseCredito';

function GetAnaliseCredito(tenant: number | undefined, In_BB012_ID: string): Promise<AxiosResponse<AnaliseCreditoCompleta>> {
    return axios.get<AnaliseCreditoCompleta>(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_AnaliseCredito/CS_AnaliseCredito`, {
        headers: {
            Tenant_id: tenant,
            In_BB012_ID: In_BB012_ID
        }
    });
}

export { GetAnaliseCredito };
