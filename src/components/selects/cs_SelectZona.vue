<template>
    <v-select
        v-model="internalSelectedZona"
        :items="formattedZona"
        item-value="value"
        item-text="title"
        variant="solo-filled"
        hide-details
        @change="emitSelection"
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
import { getListZonas } from '../../services/basico/zona/bb010_zona';
import type { Lista_bb010 } from '../../types/basico/bb010_zona';
import type { User } from '../../types/login/Login';

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void;
}>();

const props = defineProps<{ Prm_etiqueta?: string; Prm_isObrigatorio: boolean }>();

const zona = ref<Lista_bb010[]>([]);
const internalSelectedZona = ref<string | null>(null);

const computedLabel = computed(() => props.Prm_etiqueta || 'Selecione uma zona');

const formattedZona = computed(() => {
    return zona.value.map((item) => ({
        title: item.BB010_Zona,
        value: item.ID
    }));
});

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

const fetchZona = async () => {
    try {
        const response = await getListZonas(user?.TenantId);
        console.log(response);
        if (response.status === 200) {
            zona.value = response.data.Lista_bb010;
            if (internalSelectedZona.value) {
                const selected = zona.value.find((zona) => zona.ID === internalSelectedZona.value);
                if (selected) {
                    internalSelectedZona.value = selected.ID;
                }
            }
        } else {
            console.error('Erro ao buscar as zonas', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar as zonas:', error);
    }
};

onMounted(async () => {
    getUserFromLocalStorage();
    await fetchZona();
});

watch(internalSelectedZona, (newVal) => {
    emit('update:modelValue', newVal);
});

function emitSelection() {
    emit('update:modelValue', internalSelectedZona.value);
}
</script>
