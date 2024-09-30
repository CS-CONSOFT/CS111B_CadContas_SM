<template>
    <v-snackbar v-model="visible" :timeout="timeout" :color="color" top multi-line>
        {{ message }}
        <template v-slot:actions>
            <v-btn color="white" icon="mdi-close" @click="closeSnackbar"></v-btn>
        </template>
    </v-snackbar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface SnackbarProps {
    modelValue: boolean;
    message: string;
    color: string;
    timeout: number;
}

const props = defineProps<SnackbarProps>();
const emit = defineEmits(['update:modelValue']);

const visible = ref(false);
const message = ref('');
const color = ref('success');
const timeout = ref(3000);

watch(
    () => props.modelValue,
    (newValue) => {
        visible.value = newValue;
    }
);

watch(
    () => props.message,
    (newMessage) => {
        message.value = newMessage;
    }
);

watch(
    () => props.color,
    (newColor) => {
        color.value = newColor;
    }
);

const closeSnackbar = () => {
    visible.value = false;
    emit('update:modelValue', false);
};
</script>
