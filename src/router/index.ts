import { createRouter, createWebHistory } from 'vue-router';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { useAuthStore } from '@/stores/auth';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        MainRoutes,
        AuthRoutes,
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/authentication/Error.vue')
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const publicPages = ['/Login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    await auth.checkSession();

    if (!to.matched.length) {
        return next('/Home');
    }

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return next('/Login');
    }

    next();
});
