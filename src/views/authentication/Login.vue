<template>
    <div class="mb-0">
        <v-row class="h-100vh mh-100 auth ma-0">
            <v-col cols="12" lg="7" xl="8" class="d-flex align-center justify-center authentication pa-0">          
                <div class="auth-header pt-lg-6 px-sm-6 px-3 pb-lg-6 pb-0">
                    <div class="position-relative">
                        <Logo />
                    </div>
                </div>

                    <img
                    src="@/assets/images/backgrounds/Login_bg.png"
                    height="100%"
                    width="100%"
                    class="d-none d-lg-flex"
                    alt="login-background"
                    style="background: no-repeat center / cover;"
                    />

            </v-col>
            <v-col cols="12" lg="5" xl="4" class="d-flex align-center justify-center bg-surface">
                <div class="mw-100">
                    <h2 class="text-h3 font-weight-semibold mb-2">Bem-Vindo</h2>
                    <div class="text-subtitle-1 mb-6">Ao CS-Icorp</div>
                    <LoginForm />
                    <h6 class="text-h6 text-medium-emphasis d-flex align-center mt-6 font-weight-medium">
                        Novo por aqui?
                        <v-btn
                            class="pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium"
                            height="auto"
                            to="/auth/register"
                            variant="plain"
                            >Crie uma conta</v-btn
                        >
                    </h6>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/* Login form */
import LoginForm from '@/components/auth/LoginForm.vue';
</script>
