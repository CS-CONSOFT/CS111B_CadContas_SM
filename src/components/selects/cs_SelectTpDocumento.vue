<template>
    <v-select
        v-model="internalSelectedTpDocumento"
        :items="formattedTpDocumento"
        item-value="value"
        item-text="title"
        variant="solo-filled"
        hide-details
        @change="emitSelection"
        return-object
    >
        <template v-slot:label>
            <span class="d-flex align-center" style="font-size: 12px; font-weight: 500; padding-bottom: 0.1em; color: #808080">
                {{ computedLabel }}<span v-if="props.Prm_isObrigatorio" class="text-error">*</span>
            </span>
        </template>
    </v-select>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { GetEstaticasBB } from '../../services/estaticas/bb012_comboEstaticas';
import type { Csicp_bb012mdc } from '../../types/estaticas/estaticas_BB012';

const emit = defineEmits<{
    (e: 'update:modelValue', value: number | null): void;
}>();

const props = defineProps<{ Prm_etiqueta?: string; Prm_isObrigatorio: boolean }>();

const tipoDocumento = ref<Csicp_bb012mdc[]>([]);
const internalSelectedTpDocumento = ref<number | null>(null);

const computedLabel = computed(() => props.Prm_etiqueta || 'Selecione um tipo');

const formattedTpDocumento = computed(() => {
    return [
        { title: '', value: 0 },
        ...tipoDocumento.value.map((item) => ({
            title: item.Label,
            value: item.Id
        }))
    ];
});

const fetchClasse = async () => {
    try {
        const response = await GetEstaticasBB();
        if (response.status === 200) {
            tipoDocumento.value = response.data.csicp_bb012mdc;
            if (internalSelectedTpDocumento.value) {
                const selected = tipoDocumento.value.find((documento) => documento.Id === internalSelectedTpDocumento.value);
                if (selected) {
                    internalSelectedTpDocumento.value = selected.Id;
                }
            }
        } else {
            console.error('Erro ao buscar os tipos:', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar os tipos:', error);
    }
};

onMounted(async () => {
    await fetchClasse();
});

watch(internalSelectedTpDocumento, (newVal) => {
    emit('update:modelValue', newVal);
});

function emitSelection() {
    emit('update:modelValue', internalSelectedTpDocumento.value);
}
</script>
