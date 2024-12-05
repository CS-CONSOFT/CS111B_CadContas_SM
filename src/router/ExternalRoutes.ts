import { title } from 'process';

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
            name: 'AnaliseCredito',
            path: 'AnaliseCredito/:id?',
            component: () => import('../../src/views/AnaliseCredito/AnaliseCreditoView.vue'),
            meta: {
                title: 'Analise de Crédito'
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
        },
        {
            name: 'ConvenioEdit',
            path: 'ConvenioEdit/:id?',
            component: () => import('../../src/views/Convenio/ConvenioEditView.vue'),
            meta: {
                title: 'Convênio'
            },
            props: true
        },
        {
            name: 'ConvenioCreate',
            path: '/ConvenioCreate',
            component: () => import('../../src/views/Convenio/ConvenioCreateView.vue'),
            meta: {
                title: 'Convênio'
            }
        },
        {
            name: 'ConvenioMaster',
            path: '/ConvenioMaster',
            component: () => import('../../src/views/ConvenioMaster/ConvenioMasterView.vue'),
            meta: {
                title: 'Convênio Master'
            }
        },
        {
            name: 'FaixaEtaria',
            path: '/FaixaEtaria',
            component: () => import('../../src/views/FaixaEtaria/FaixaEtariaView.vue'),
            meta: {
                title: 'Faixa Etária'
            }
        },
        {
            name: 'FaixaEtariaEdit',
            path: 'FaixaEtariaEdit/:id?',
            component: () => import('../../src/views/FaixaEtaria/FaixaEtariaEditView.vue'),
            meta: {
                title: 'Faixa Etária'
            },
            props: true
        },
        {
            name: 'FaixaEtariaCreate',
            path: '/FaixaEtariaCreate',
            component: () => import('../../src/views/FaixaEtaria/FaixaEtariaCreateView.vue'),
            meta: {
                title: 'Faixa Etária'
            }
        },
        {
            name: 'Periodo',
            path: '/Periodo',
            component: () => import('../../src/views/Periodo/PeriodoListView.vue'),
            meta: {
                title: 'Período Cobrança'
            }
        }
    ]
};

export default CrmRoutes;
