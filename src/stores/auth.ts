import { defineStore } from 'pinia';
import { router } from '@/router';
import { LoginGeral } from '@/services/login/axios_login';
import { StorageTypesKey } from '@/types/StorageTypes';
import { IListaEstabelecimentos, Registro, User } from '@/types/login/Login';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: null as User | null,
        //@ts-ignore
        estabsUser: (null as IListaEstabelecimentos) || null,
        returnUrl: null as string | null
    }),
    actions: {
        async login(dominio: string, username: string, password: string) {
            try {
                const reg: Registro = {
                    Dominio: dominio,
                    Usuario: username,
                    Senha: password
                };
                const response = await LoginGeral(reg);
                const userData = response.data.Model;
                this.setUser(userData);
                router.push('/home'); 
            } catch (error) {
                throw new Error('Erro ao fazer login');
            }
        },
        setUser(user: User) {
            this.user = user;
            localStorage.setItem(StorageTypesKey.USER, JSON.stringify(user)); // armazena no localStorage se necessário
        },
        setUserEstab(userEstab: IListaEstabelecimentos) {
            this.estabsUser = userEstab;
            localStorage.setItem(StorageTypesKey.USER_ESTABS, JSON.stringify(userEstab)); // armazena no localStorage se necessário
        },
        logout() {
            this.user = null;
            localStorage.removeItem(StorageTypesKey.USER);
            router.push('/'); // redireciona para a página inicial após logout
        },
        checkSession() {
            const storedUser = localStorage.getItem(StorageTypesKey.USER);
            if (storedUser) {
                this.user = JSON.parse(storedUser);
            }
        }
    }
});
