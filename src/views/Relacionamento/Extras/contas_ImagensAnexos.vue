<template>
    <v-card class="px-4 py-2 border" elevation="0">
        <v-row class="d-flex my-2">
            <v-col cols="12" class="d-flex justify-end">
                <cs_BtnAdicionar @click="openDialog" />
            </v-col>
        </v-row>

        <v-card class="border mb-10" elevation="0">
            <v-row class="pa-0">
                <v-col cols="12">
                    <p class="text-h4 px-6 py-3 ma-0 rounded-t bg-primary">Imagens/Anexos</p>
                </v-col>
            </v-row>

            <v-data-table
                :headers="headers"
                :items="items"
                :loading="loading"
                hide-default-footer
                loading-text="Carregando dados..."
                :search="search"
            >
                <template v-slot:no-data>
                    <p>Nenhum dado encontrado.</p>
                </template>
                <template v-slot:progress>
                    <v-progress-linear v-if="loading" color="blue" height="10" indeterminate></v-progress-linear>
                </template>
                <template v-slot:item.Imagem="{ item }">
                    <v-row no-gutters class="d-flex justify-center">
                        <v-col cols="auto">
                            <v-img v-if="item.ImagemPath" :width="160" aspect-ratio="16/9" cover :src="item.ImagemPath" />

                            <a :href="'data:image/jpeg;base64,' + item.Imagem" target="_blank" download="imagem.jpg">
                                <v-img :width="160" aspect-ratio="16/9" cover :src="'data:image/jpeg;base64,' + item.Imagem" />
                            </a>
                        </v-col>
                    </v-row>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon small @click="confirmDelete(item)" class="v-btn-icon">mdi-delete</v-icon>
                </template>
            </v-data-table>
        </v-card>
    </v-card>

    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-form ref="formRef">
                <cs_uploadImage :token="ETokenGenericoLabel.CDN_AWS" @close-dialog="close" @on-image-upload="vincularImagem">
                    >
                    <template #image-options>
                        <v-card-subtitle> Selecione o tipo de anexo e o documento </v-card-subtitle>
                        <v-col>
                            <cs_SelectTpAnexos v-model="var_SelectedTpAnexo" Prm_etiqueta="Tipo de Anexo" :Prm_isObrigatorio="false" />
                        </v-col>
                        <v-col>
                            <cs_SelectTpDocumento
                                class="mb-5"
                                v-model="var_SelectedDocumento"
                                Prm_etiqueta="Documento"
                                :Prm_isObrigatorio="false"
                            />
                        </v-col>
                    </template>
                </cs_uploadImage>
            </v-form>
        </v-card>
    </v-dialog>

    <v-dialog v-model="confirmDialog" max-width="400">
        <v-card>
            <v-card-title class="text-h5 pa-4 bg-error">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta imagem/anexo?</v-card-text>
            <v-card-actions class="d-flex justify-space-around">
                <v-spacer></v-spacer>
                <cs_BtnCancelar @click="cancelDelete" />
                <cs_BtnExcluir @click="deleteImg" />
            </v-card-actions>
        </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" top v-bind:color="snackbarColor" multi-line>
        {{ snackbarMessage }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="snackbar = false"></v-btn>
        </template>
    </v-snackbar>
</template>
<script setup lang="ts">
// Import de bibliotecas e etc...
import { ref, onMounted } from 'vue';
import { validationRules } from '../../../utils/ValidationRules';
import { getUserFromLocalStorage } from '../../../utils/getUserStorage';
import { ETokenGenericoLabel } from '@/utils/EnumTokenGenerico';
// Import de API's
import { GetContaById } from '../../../services/contas/bb012_conta';
import { helperHandleUploadImg } from '../../../services/cdn/cs_UploadImgHelper';
import { SaveAnexos, DeleteAnexos } from '../../../services/contas/bb012m_Anexos/bb012m_anexos';
// Import de types
import type { ContaById, GED_List } from '../../../types/crm/bb012_GetContaById';
import type { Csicp_bb012m } from '../../../types/crm/bb012_GetContaById';
//Import de componentes
import cs_BtnAdicionar from '../../../submodules/cs_components/src/components/botoes/cs_BtnAdicionar.vue';
import cs_BtnCancelar from '../../../submodules/cs_components/src/components/botoes/cs_BtnCancelar.vue';
import cs_BtnExcluir from '../../../submodules/cs_components/src/components/botoes/cs_BtnExcluir.vue';
import cs_uploadImage from '../../../submodules/cs_components/src/components/upload/cs_uploadImage.vue';
import cs_SelectTpAnexos from '../../../components/selects/cs_SelectTpAnexos.vue';
import cs_SelectTpDocumento from '../../../components/selects/cs_SelectTpDocumento.vue';

interface Item {
    ID: string;
    BB012_ID: string;
    ImagemPath: string;
    Imagem: string;
    Nome: string;
    Documento: string;
    TipoDocumento: string;
    TipoArquivo: string;
}

// Enum para eventos personalizados
enum EnumEvents {
    SUCCESS = 'update-success',
    FALIED = 'update-falied',
    CLOSE = 'close'
}

// Define os eventos emitidos pelo componente
const emit = defineEmits<{
    (e: EnumEvents.CLOSE): void;
}>();

//Declaração do Header para montagem da tabela
const headers = ref([
    {
        title: 'Imagem',
        value: 'Imagem',
        sortable: false,
        width: '15%',
        align: 'start'
    },
    {
        title: 'Nome',
        value: 'Nome',
        sortable: false,
        width: '40%'
    },
    {
        title: 'Documento',
        value: 'Documento',
        sortable: false,
        width: '10%'
    },
    {
        title: 'Tipo Documento',
        value: 'TipoDocumento',
        sortable: false,
        width: '15%'
    },
    {
        title: 'Tipo Arquivo',
        value: 'TipoArquivo',
        sortable: false,
        width: '10%'
    },
    {
        title: 'Ações',
        align: 'center',
        value: 'actions',
        sortable: false,
        width: '10%'
    }
]);

const props = defineProps<{
    id: string;
}>();

const items = ref<Item[]>([]);
const user = getUserFromLocalStorage();
const tenant = user?.TenantId;
const formRef = ref<any>(null);

const loading = ref(false);
const search = ref('');
const dialog = ref(false);
const confirmDialog = ref(false);
const itemToDelete = ref<Item | null>(null);
const itemToEdit = ref<Item | null>(null);

//Variáveis de edição/adição
const var_Id = ref('');
const var_bb012_Id = ref('');
const var_Imagem = ref<string>('');
const var_SelectedTpAnexo = ref<number>(0);
const var_SelectedDocumento = ref<{ title: string; value: number } | any>(null);

const rules = {
    codigo: [validationRules.required, validationRules.numeric],
    nome: [validationRules.required]
};

//Variaveis do Snackbar
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('');

//Funções
const showSnackbar = (message: string, color: string) => {
    snackbarMessage.value = message;
    snackbarColor.value = color;
    snackbar.value = true;
};

const fetchData = async (id: string) => {
    loading.value = true;

    try {
        const data: ContaById = await GetContaById(tenant, id);
        items.value = data.GED_List.map((item: GED_List) => ({
            ID: item.csicp_bb012m.ID,
            BB012_ID: item.csicp_bb012m.BB012_ID,
            ImagemPath: item.csicp_bb012m.bb012m_Path,
            Imagem: item.csicp_bb012m.BB012m_Content,
            Nome: item.csicp_bb012m.BB012m_Filename,
            Documento: item.csicp_bb012mdc.Label,
            TipoDocumento: item.csicp_bb012mtd.Label,
            TipoArquivo: item.csicp_bb012m.BB012m_FileType
        }));

        //Solução temporaria para sempre ter o ID da BB012 preenchido para usar nas APIs.
        var_bb012_Id.value = data.csicp_bb012.csicp_bb012.ID;

        console.log(data);
    } catch (error) {
        showSnackbar('Erro ao buscar conta.', 'error');
    } finally {
        loading.value = false;
    }
};

// Função para vincular a imagem selecionada
async function vincularImagem(selectedImage: File) {
    sendImg(selectedImage);
}

async function sendImg(selectedImage: File) {
    // Salvando imagem no CDN
    try {
        const response = await helperHandleUploadImg(selectedImage, ETokenGenericoLabel.CDN_AWS);

        if (response.Out_Success) {
            // Cria o corpo da requisição com os dados da imagem
            const data: Csicp_bb012m = {
                ID: var_Id.value,
                BB012_ID: var_bb012_Id.value,
                BB012_ContatoID: '',
                BB012_CandidatoID: '',
                BB043_CampanhaID: '',
                BB042_PotencialID: '',
                BB040_AtividadeID: '',
                BB041_CasoID: '',
                BB012m_Codigo_Cliente: 0,
                BB012m_Descricao: var_SelectedDocumento.value.title,
                BB012m_Content: response.binary,
                BB012m_FileType: selectedImage.type,
                BB012m_Filename: selectedImage.name,
                BB012M_Is_Active: true,
                bb012m_TipoDoctoID: var_SelectedTpAnexo.value,
                bb012m_DoctoID: var_SelectedDocumento.value.value,
                bb012m_DataDocto: '',
                bb012m_Path: response.Out_Path
            };

            // Envia a imagem para o serviço de backend
            const res = await SaveAnexos(tenant, data);

            // Exibe uma mensagem de sucesso ou erro
            if (res.data.Out_IsSuccess) {
                showSnackbar('Anexo salvo com sucesso', 'success');
                fetchData(props.id);
            } else {
                showSnackbar(res.data.Out_Message || 'Falha ao salvar o anexo. Verifique os dados.', 'error');
            }
        }
    } catch (error) {
        snackbarMessage.value = 'Erro ao fazer o upload da imagem.';
        snackbarColor.value = 'error';
    } finally {
        // Fecha o diálogo e emite um evento de fechamento
        emit(EnumEvents.CLOSE);
        dialog.value = false;
    }
}

const openDialog = () => {
    dialog.value = true;
    itemToEdit.value = null;
    var_Id.value = '';
};

const confirmDelete = (item: Item) => {
    confirmDialog.value = true;
    itemToDelete.value = item;
};

const cancelDelete = () => {
    confirmDialog.value = false;
};

const deleteImg = async () => {
    if (!itemToDelete.value) return;
    try {
        await DeleteAnexos(tenant, itemToDelete.value.ID);
        showSnackbar('Anexo excluído com sucesso', 'success');
        fetchData(props.id);
        confirmDialog.value = false;
    } catch (error) {
        showSnackbar('Erro ao excluir o anexo', 'error');
    }
};

// Função para fechar o diálogo
function close() {
    dialog.value = false;
    emit(EnumEvents.CLOSE);
}

onMounted(() => {
    fetchData(props.id);
});
</script>
