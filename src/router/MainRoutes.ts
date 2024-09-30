import { RouteNames } from './RouteNames';

const MainRoutes = {
    path: '/Main',
    meta: {
        requiresAuth: true
    },
    redirect: '/Main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Home',
            path: '/Home',
            component: () => import('@/views/HomeView.vue'),
            meta: {
                title: 'Home'
            }
        },
        {
            name: 'Contas',
            path: '/Contas',
            component: () => import('@/views/Relacionamento/ContasView.vue'),
            meta: {
                title: 'Contas'
            }
        }
    ]
};

export default MainRoutes;
