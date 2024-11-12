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
        },
        {
            name: 'ContasExtras',
            path: 'ContasExtras/:id?',
            component: () => import('../../src/views/Relacionamento/ContasExtraView.vue'),
            meta: {
                title: 'Extras'
            },
            props: true
        },
        {
            name: 'Contatos',
            path: '/Contatos',
            component: () => import('../../src/views/Contatos/ContatosView.vue'),
            meta: {
                title: 'Contatos'
            }
        },
        {
            name: 'Zonas',
            path: '/Zonas',
            component: () => import('../../src/views/Zonas/ZonasView.vue'),
            meta: {
                title: 'Zonas'
            }
        },
        {
            name: 'Atividades',
            path: '/Atividades',
            component: () => import('../../src/views/Atividades/AtividadesView.vue'),
            meta: {
                title: 'Atividades'
            }
        },
        {
            name: 'Categorias',
            path: '/Categorias',
            component: () => import('../../src/views/Categoria/CategoriaView.vue'),
            meta: {
                title: 'Categorias'
            }
        },
        {
            name: 'Convenio',
            path: '/Convenio',
            component: () => import('../../src/views/Convenio/ConvenioView.vue'),
            meta: {
                title: 'Convênio'
            }
        }
    ]
};

export default CrmRoutes;
