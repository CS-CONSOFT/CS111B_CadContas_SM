<template>
    <v-select
        v-model="internalSelectedAtividade"
        :items="formattedAtividade"
        item-value="value"
        :rules="props.rules"
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
import { getListAtividade } from '../../services/basico/atividade/bb011_atividade';
import type { Csicp_bb011 } from '../../types/basico/bb011_atividade';
import type { User } from '../../types/login/Login';

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

const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void;
}>();

const props = defineProps<{
    Prm_etiqueta?: string;
    Prm_isObrigatorio: boolean;
    rules?: Array<(v: string) => true | string>;
}>();

const atividade = ref<Csicp_bb011[]>([]);
const internalSelectedAtividade = ref<string | null>(null);
const errors = ref<string[]>([]);

const computedLabel = computed(() => props.Prm_etiqueta || 'Selecione uma atividade');

const formattedAtividade = computed(() => {
    return [
        { title: '', value: null },
        ...atividade.value.map((item) => ({
            title: item.BB011_Atividade,
            value: item.ID
        }))
    ];
});

const fetchAtividade = async () => {
    try {
        const response = await getListAtividade(user?.TenantId);
        if (response.status === 200) {
            atividade.value = response.data.csicp_bb011;
            if (internalSelectedAtividade.value) {
                const selected = atividade.value.find((atividade) => atividade.ID === internalSelectedAtividade.value);
                if (selected) {
                    internalSelectedAtividade.value = selected.ID;
                }
            }
        } else {
            console.error('Erro ao buscar as atividades', response.statusText);
        }
    } catch (error) {
        console.error('Erro ao buscar as atividades:', error);
    }
};

onMounted(async () => {
    getUserFromLocalStorage();
    await fetchAtividade();
});

watch(internalSelectedAtividade, (newVal) => {
    emit('update:modelValue', newVal);
});

function emitSelection() {
    emit('update:modelValue', internalSelectedAtividade.value);
}

function validate() {
    errors.value = [];
    if (props.rules) {
        for (const rule of props.rules) {
            const result = rule(internalSelectedAtividade.value || '');
            if (result !== true) {
                errors.value.push(result);
            }
        }
    }
    return errors.value.length === 0;
}

defineExpose({ validate });
</script>
