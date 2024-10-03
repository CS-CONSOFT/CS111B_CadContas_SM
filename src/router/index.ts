import { createRouter, createWebHistory } from 'vue-router';
import CrmRoutes from './ExternalRoutes';

const routes = [
    CrmRoutes,
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
