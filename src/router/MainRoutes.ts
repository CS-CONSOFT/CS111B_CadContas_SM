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
        },
        {
            name: 'ContasCreate',
            path: '/ContasCreate',
            component: () => import('@/views/Relacionamento/ContasCreateView.vue'),
            meta: {
                title: 'Contas'
            }
        },
        {
            name: 'ContasEdit',
            path: 'ContasEdit/:id?',
            component: () => import('@/views/Relacionamento/ContasEditView.vue'),
            meta: {
                title: 'Contas'
            },
            props: true
        }
    ]
};

export default MainRoutes;
