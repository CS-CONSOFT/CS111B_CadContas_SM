<template>
    <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ props }">
            <div class="d-flex align-center mr-5">
                <v-btn class="custom-hover-primary" variant="text" v-bind="props" icon>
                    <v-avatar size="35">
                        <img src="https://picsum.photos/35/35" width="35" alt="Foto de Perfil" />
                    </v-avatar>
                </v-btn>
                <!--<div class="d-flex flex-column align-start ml-3">
                    <h6 class="text-h6 mb-n1">{{ authStore.user?.NomeUsuario }}</h6>

                    <span class="text-subtitle-1 font-weight-regular textSecondary mt-1">{{ authStore.user?.NomeEstabelecimento }}</span>
                </div>-->
            </div>
        </template>

        <v-sheet rounded="md" width="360" elevation="10">
            <div class="px-8 pt-6">
                <div class="d-flex align-center mt-4 pb-6">
                    <v-avatar size="80">
                        <img src="https://picsum.photos/80/80" width="80" />
                    </v-avatar>
                    <div class="ml-3">
                        <h6 class="text-h6 mb-n1">{{ authStore.user?.NomeUsuario }}</h6>
                        <span class="text-subtitle-1 font-weight-regular textSecondary">{{
                            authStore.user?.NomeEstabelecimento
                        }}</span>
                    </div>
                </div>
                <v-divider></v-divider>
            </div>
            <div class="pt-4 pb-6 px-8 text-center">
                <v-btn color="primary"  block @click="authStore.logout()">Logout</v-btn>
                <span class="text-subtitle-1 font-weight-medium textSecondary mt-5 mb-5 d-flex align-start">Alterar Estabelecimento</span>
                <SelectEstabelecimento />
            </div>
        </v-sheet>
    </v-menu>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import SelectEstabelecimento from '@/components/select/SelectEstabelecimento.vue';

const authStore = useAuthStore();
</script>
