const CrmRoutes = {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'CRM',
            path: '/CRM',
            component: () => import('@/views/HomeView.vue'),
            meta: {
                title: 'CRM'
            }
        },
        {
            name: 'Contas',
            path: '/Contas',
            component: () => import('../../src/views/Relacionamento/ContasView.vue'),
            meta: {
                title: 'Contas'
            }
        },
        {
            name: 'ContasCreate',
            path: '/ContasCreate',
            component: () => import('../../src/views/Relacionamento/ContasCreateView.vue'),
            meta: {
                title: 'Contas'
            }
        },
        {
            name: 'ContasEdit',
            path: 'ContasEdit/:id?',
            component: () => import('../../src/views/Relacionamento/ContasEditView.vue'),
            meta: {
                title: 'Contas'
            },
            props: true
        },
        {
            name: 'ContasEditCompleto',
            path: 'ContasEditCompleto/:id?',
            component: () => import('../../src/views/Relacionamento/ContasEditAvancadoView.vue'),
            meta: {
                title: 'Contas'
            },
            props: true
        }
    ]
};

export default CrmRoutes;
