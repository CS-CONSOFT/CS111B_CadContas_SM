import { URLBase } from '@/services/configuracoes_axios';
import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { ComboContas, ApiResponseBB012Combo } from '@/types/crm/combos/Combo_ContaTypes';

function getListContasCombo(
    tenant: number | undefined,
    modRelacaoId: number | undefined
): Promise<AxiosResponse<ApiResponseBB012Combo<ComboContas>>> {
    return axios.get<ApiResponseBB012Combo<ComboContas>>(`${URLBase}/CSR_BB100_ClienteFor_IS/rest/CS_Contas/csicp_bb012_Get_Contas_Combo`, {
        headers: {
            tenant_id: tenant,
            In_IsActive: true,
            In_IsCount: false,
            in_search: '',
            in_currentPage: 1,
            in_pageSize: 999,
            In_ModRelacaoID: modRelacaoId
        }
    });
}

export { getListContasCombo };
