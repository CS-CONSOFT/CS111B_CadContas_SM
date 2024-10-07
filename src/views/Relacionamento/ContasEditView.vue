<template>
    <v-container fluid>
        <v-toolbar title="Editar Conta" class="rounded-lg" style="background-color: transparent">
            <v-row class="d-flex flex-row-reverse">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn prepend-icon="mdi-arrow-left" flat class="bg-primary mr-4" to="/Contas">Voltar</v-btn>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-form ref="formRef">
            <v-card class="px-4 py-2 border" elevation="0">
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto">
                        <v-btn color="primary" @click="">Salvar</v-btn>
                        <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                    </v-col>
                </v-row>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Conta</p>
                        </v-col>
                        <v-row class="d-flex ml-6 justify-space-between">
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                            <v-col cols="2">Select</v-col>
                        </v-row>
                    </v-row>

                    <v-row class="d-flex mt-5 px-4">
                        <v-col cols="12">
                            <p class="py-3 ma-0 rounded">Sobre</p>
                        </v-col>
                        <v-col col="6">
                            <InputTexto
                                v-model="BB012.BB012_Codigo"
                                Prm_etiqueta="Código"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.codigo"
                            />

                            <InputTexto
                                v-model="BB012.BB012_Nome_Cliente"
                                Prm_etiqueta="Nome da Conta"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="true"
                                :rules="rules.nome"
                            />

                            <InputTexto
                                v-model="BB012.BB012_Nome_Fantasia"
                                Prm_etiqueta="Nome Fantasia"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col col="6">
                            <InputTexto
                                v-model="BB012.BB012_Data_Aniversario"
                                Prm_etiqueta="Data Aniversario"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                                type="date"
                            />

                            <InputTexto
                                v-model="BB012.BB012_Data_Cadastro"
                                Prm_etiqueta="Data Cadastro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Endereço</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex mt-5 px-4">
                        <v-col col="6">
                            <div class="d-flex justify-between">
                                <v-col cols="11" class="px-0 py-0">
                                    <InputTexto
                                        v-model="BB01206.BB012_CEP"
                                        Prm_etiqueta="CEP"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="1" class="py-0">
                                    <v-btn class="v-btn-icon" icon="mdi-magnify"></v-btn>
                                </v-col>
                            </div>

                            <div class="d-flex">
                                <v-col cols="9" class="pa-0">
                                    <InputTexto
                                        v-model="BB01206.BB012_Logradouro"
                                        Prm_etiqueta="Logradouro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="3" class="pa-0 pl-4">
                                    <InputTexto
                                        v-model="BB01206.BB012_Numero"
                                        Prm_etiqueta="Número"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>

                            <InputTexto
                                v-model="BB01206.BB012_Complemento"
                                Prm_etiqueta="Complemento"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col col="6">
                            <InputTexto
                                v-model="BB01206.BB012_Perimetro"
                                Prm_etiqueta="Perímetro"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <InputTexto
                                        v-model="BB01206.BB012_Bairro"
                                        Prm_etiqueta="Bairro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <InputTexto
                                        v-model="BB01206.BB012_Bairro"
                                        Prm_etiqueta="Bairro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>
                            <div class="d-flex">
                                <v-col cols="6" class="pa-0">
                                    <InputTexto
                                        v-model="BB01206.BB012_Bairro"
                                        Prm_etiqueta="Bairro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                                <v-col cols="6" class="pa-0 pl-4">
                                    <InputTexto
                                        v-model="BB01206.BB012_Bairro"
                                        Prm_etiqueta="Bairro"
                                        :Prm_limpavel="false"
                                        :Prm_isObrigatorio="false"
                                    />
                                </v-col>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card class="border mb-10" elevation="0">
                    <v-row>
                        <v-col cols="12">
                            <p class="px-6 py-3 ma-0 rounded-t bg-primary">Outros Dados</p>
                        </v-col>
                    </v-row>
                    <v-row class="d-flex mt-5 px-4">
                        <v-col cols="6">
                            <InputTexto v-model="BB01202.BB012_CPF" Prm_etiqueta="CPF" :Prm_limpavel="false" :Prm_isObrigatorio="false" />

                            <InputTexto
                                v-model="BB01206.BB012_Bairro"
                                Prm_etiqueta="Zona"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <InputTexto
                                v-model="BB01206.BB012_Bairro"
                                Prm_etiqueta="Entrega Montagem Rota"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                        <v-col cols="6">
                            <InputTexto
                                v-model="BB01206.BB012_Bairro"
                                Prm_etiqueta="Venda Rota"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />

                            <InputTexto
                                v-model="BB01206.BB012_Bairro"
                                Prm_etiqueta="Limite de Crédito"
                                :Prm_limpavel="false"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </v-row>
                </v-card>
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto" class="d-flex align-center">
                        <v-btn text class="text-h6 pa-2" @click="redirectToEditCompleto(BB012.ID)">
                            <span class="underline">Mais Informações</span>
                            <v-icon class="ml-1">mdi-chevron-right</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="d-flex flex-row-reverse my-2">
                    <v-col cols="auto">
                        <v-btn color="primary" @click="">Salvar</v-btn>
                        <v-btn color="error" :to="'/Contas'" class="ml-4">Cancelar</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-container>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { validationRules } from '../../utils/ValidationRules';
// Import de API's
import { GetContaById } from '../../services/contas/bb012_conta';
// Import de types
import type { ContaById } from '../../types/crm/bb012_GetContaById';
import type { BB01206, BB012, BB01202 } from '../../views/Relacionamento/bb012_Types';
//Import de componentes
import InputTexto from '../../components/campos/cs_InputTexto.vue';
import { User } from '@/types/login/Login';

const props = defineProps<{
    id: string;
}>();

const router = useRouter();

//Variáveis de modelo
const BB012 = ref<BB012>({
    ID: '',
    BB012_Codigo: 0,
    BB012_Nome_Cliente: '',
    BB012_Nome_Fantasia: '',
    BB012_Data_Aniversario: '',
    BB012_Data_Cadastro: '',
    BB012_Telefone: '',
    BB012_FaxCelular: '',
    BB012_Home_Page: '',
    BB012_Email: '',
    BB012_Data_Entrada_Sit: '',
    BB012_Data_Saida_Sit: '',
    BB012_Descricao: '',
    BB012_Is_Active: false,
    BB012_Tipo_Conta_ID: 0,
    BB012_Grupoconta_ID: 0,
    BB012_ClasseConta_ID: 0,
    BB012_StatusConta_ID: 0,
    BB012_Sit_Conta_ID: 0,
    BB012_ModRelacao_ID: 0,
    BB012_Sequence: 0,
    bb012_dUltAlteracao: '',
    bb012_EstabCadID: '',
    bb012_KeyAcess: '',
    bb012_ID_Indicador: '',
    bb012_CountAppMCon: 0,
    bb012_OriCadastroID: 0
});

const BB01206 = ref<BB01206>({
    Id: '',
    BB012_ID: '',
    BB012J_EnderecoID: '',
    BB012_Logradouro: '',
    BB012_Numero: '',
    BB012_Complemento: '',
    BB012_Perimetro: '',
    BB012_CodgBairro: '',
    BB012_Bairro: '',
    BB012_Codigo_Cidade: '',
    BB012_UF: '',
    BB012_CEP: 0,
    BB012_Codigo_Pais: '',
    BB012_Entrega_Logradouro: '',
    BB012_Entrega_Numero: '',
    BB012_Entrega_Complement: '',
    BB012_Entrega_CodgBairro: '',
    BB012_Entrega_Bairro: '',
    BB012_Entrega_Cod_Cidade: '',
    BB012_Entrega_Uf: '',
    BB012_Entrega_CEP: 0,
    BB012_Entrega_Pais: '',
    BB012_Entrega_Perimetro: '',
    bb012_Telefone: '',
    bb012_Celular: '',
    bb012_email: ''
});

const BB01202 = ref<BB01202>({
    Id: '',
    BB012_CNPJ: 0,
    BB012_InscEstadual: 0,
    BB012_SUFRAMA: '',
    BB012_RegSUFRAMAValido: 0,
    BB012_RegJuntaComercial: '',
    BB012_DataRegJunta: '',
    BB012_Patrimonio: 0,
    BB012_Capital_Social: 0,
    BB012_CPF: 0,
    BB012_RG: 0,
    BB012_ComplementoRG: '',
    BB012_EmissaoRG: '',
    BB012_PIS: 0,
    BB012_ResideDesde: '',
    BB012_NroDependentes: 0,
    BB012_EmpAdmissao: '',
    BB012_Emp_Profissao: '',
    BB012_ValorRemuneracao: 0,
    BB012_OutrosRendimentos: 0,
    BB012_OrigemOutrosRend: '',
    BB012_Insc_Est_SNI_ID: 0,
    BB012_Sexo_ID: 0,
    BB012_EstadoCivil_ID: 0,
    BB012_TipoDomicilio_ID: 0,
    BB012_CompResid01_ID: 0,
    BB012_CompResid02_ID: 0,
    BB012_GEscolaridade_ID: 0,
    BB012_Ocupacao_Id: 0,
    BB012_NaturalDe_ID: '',
    BB012_TpTributacao_ID: 0,
    BB012_Ident_Estrangeiro: '',
    BB012_Empresa: '',
    BB012_Emp_Endereco: '',
    BB012_Emp_Grupo_ID: 0,
    BB012_MotDesoneracaoID: 0
});

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

const formRef = ref<any>(null);
const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

//Funções
function getUserFromLocalStorage(): User | null {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
        try {
            return JSON.parse(storedUser) as User;
        } catch (e) {
            console.error('Erro ao parsear o usuário do localStorage', e);
            return null;
        }
    }

    return null;
}
const user = getUserFromLocalStorage();

const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchContaById = async (id: string) => {
    try {
        const data: ContaById = await GetContaById(user?.TenantId, id);

        // Acessa os campos BB012
        BB012.value.ID = data.csicp_bb012.csicp_bb012.ID;
        BB012.value.BB012_Codigo = data.csicp_bb012.csicp_bb012.BB012_Codigo;
        BB012.value.BB012_Nome_Cliente = data.csicp_bb012.csicp_bb012.BB012_Nome_Cliente;
        BB012.value.BB012_Nome_Fantasia = data.csicp_bb012.csicp_bb012.BB012_Nome_Fantasia;
        BB012.value.BB012_Data_Aniversario = data.csicp_bb012.csicp_bb012.BB012_Data_Aniversario;
        BB012.value.BB012_Data_Cadastro = data.csicp_bb012.csicp_bb012.BB012_Data_Cadastro;
        BB012.value.BB012_Telefone = data.csicp_bb012.csicp_bb012.BB012_Telefone;
        BB012.value.BB012_FaxCelular = data.csicp_bb012.csicp_bb012.BB012_FaxCelular;
        BB012.value.BB012_Home_Page = data.csicp_bb012.csicp_bb012.BB012_Home_Page;
        BB012.value.BB012_Email = data.csicp_bb012.csicp_bb012.BB012_Email;
        BB012.value.BB012_Data_Entrada_Sit = data.csicp_bb012.csicp_bb012.BB012_Data_Entrada_Sit;
        BB012.value.BB012_Data_Saida_Sit = data.csicp_bb012.csicp_bb012.BB012_Data_Saida_Sit;
        BB012.value.BB012_Descricao = data.csicp_bb012.csicp_bb012.BB012_Descricao;
        BB012.value.BB012_Is_Active = data.csicp_bb012.csicp_bb012.BB012_Is_Active;
        BB012.value.BB012_Tipo_Conta_ID = data.csicp_bb012.csicp_bb012.BB012_Tipo_Conta_ID;
        BB012.value.BB012_Grupoconta_ID = data.csicp_bb012.csicp_bb012.BB012_Grupoconta_ID;
        BB012.value.BB012_ClasseConta_ID = data.csicp_bb012.csicp_bb012.BB012_ClasseConta_ID;
        BB012.value.BB012_StatusConta_ID = data.csicp_bb012.csicp_bb012.BB012_StatusConta_ID;
        BB012.value.BB012_Sit_Conta_ID = data.csicp_bb012.csicp_bb012.BB012_Sit_Conta_ID;
        BB012.value.BB012_ModRelacao_ID = data.csicp_bb012.csicp_bb012.BB012_ModRelacao_ID;
        BB012.value.BB012_Sequence = data.csicp_bb012.csicp_bb012.BB012_Sequence;
        BB012.value.bb012_dUltAlteracao = data.csicp_bb012.csicp_bb012.bb012_dUltAlteracao;
        BB012.value.bb012_EstabCadID = data.csicp_bb012.csicp_bb012.bb012_EstabCadID;
        BB012.value.bb012_KeyAcess = data.csicp_bb012.csicp_bb012.bb012_KeyAcess;
        BB012.value.bb012_ID_Indicador = data.csicp_bb012.csicp_bb012.bb012_ID_Indicador;
        BB012.value.bb012_CountAppMCon = data.csicp_bb012.csicp_bb012.bb012_CountAppMCon;
        BB012.value.bb012_OriCadastroID = data.csicp_bb012.csicp_bb012.bb012_OriCadastroID;

        //Acessa os campos da BB01206
        BB01206.value.Id = data.BB01206_Endereco.csicp_bb01206.Id;
        BB01206.value.BB012_ID = data.BB01206_Endereco.csicp_bb01206.BB012_ID;
        BB01206.value.BB012J_EnderecoID = data.BB01206_Endereco.csicp_bb01206.BB012J_EnderecoID;
        BB01206.value.BB012_Logradouro = data.BB01206_Endereco.csicp_bb01206.BB012_Logradouro;
        BB01206.value.BB012_Numero = data.BB01206_Endereco.csicp_bb01206.BB012_Numero;
        BB01206.value.BB012_Complemento = data.BB01206_Endereco.csicp_bb01206.BB012_Complemento;
        BB01206.value.BB012_Perimetro = data.BB01206_Endereco.csicp_bb01206.BB012_Perimetro;
        BB01206.value.BB012_CodgBairro = data.BB01206_Endereco.csicp_bb01206.BB012_CodgBairro;
        BB01206.value.BB012_Bairro = data.BB01206_Endereco.csicp_bb01206.BB012_Bairro;
        BB01206.value.BB012_Codigo_Cidade = data.BB01206_Endereco.csicp_bb01206.BB012_Codigo_Cidade;
        BB01206.value.BB012_UF = data.BB01206_Endereco.csicp_bb01206.BB012_UF;
        BB01206.value.BB012_CEP = data.BB01206_Endereco.csicp_bb01206.BB012_CEP;
        BB01206.value.BB012_Codigo_Pais = data.BB01206_Endereco.csicp_bb01206.BB012_Codigo_Pais;
        BB01206.value.BB012_Entrega_Logradouro = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Logradouro;
        BB01206.value.BB012_Entrega_Numero = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Numero;
        BB01206.value.BB012_Entrega_Complement = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Complement;
        BB01206.value.BB012_Entrega_CodgBairro = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_CodgBairro;
        BB01206.value.BB012_Entrega_Bairro = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Bairro;
        BB01206.value.BB012_Entrega_Cod_Cidade = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Cod_Cidade;
        BB01206.value.BB012_Entrega_Uf = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Uf;
        BB01206.value.BB012_Entrega_CEP = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_CEP;
        BB01206.value.BB012_Entrega_Pais = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Pais;
        BB01206.value.BB012_Entrega_Perimetro = data.BB01206_Endereco.csicp_bb01206.BB012_Entrega_Perimetro;
        BB01206.value.bb012_Telefone = data.BB01206_Endereco.csicp_bb01206.bb012_Telefone;

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    }
};

const redirectToEditCompleto = async (id: string) => {
    if (id) {
        await router.push({
            name: 'ContasEditCompleto',
            params: {
                id: id
            }
        });
    } else {
        console.error('Item indefinido');
    }
};

onMounted(() => {
    fetchContaById(props.id);
    getUserFromLocalStorage();
});
</script>
