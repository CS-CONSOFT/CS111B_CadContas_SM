import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import 'vue3-carousel/dist/carousel.css';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import VueScrollTo from 'vue-scrollto';
import { useAuthStore } from '@/stores/auth';
import { useCustomizerStore } from '@/stores/customizer';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(VueApexCharts);
app.use(vuetify);
app.use(VueScrollTo, {
    duration: 1000,
    easing: 'ease'
});

app.mount('#app');

const authStore = useAuthStore();
authStore.checkSession();

const customizerStore = useCustomizerStore();

// Atualizar a store de customização
customizerStore.$patch({
    Sidebar_drawer: localStorage.getItem('Sidebar_drawer') === 'true',
    Customizer_drawer: localStorage.getItem('Customizer_drawer') === 'true',
    mini_sidebar: localStorage.getItem('mini_sidebar') === 'true',
    setHorizontalLayout: localStorage.getItem('setHorizontalLayout') === 'true',
    setRTLLayout: localStorage.getItem('setRTLLayout') === 'true',
    actTheme: localStorage.getItem('actTheme') || customizerStore.actTheme,
    inputBg: localStorage.getItem('inputBg') || customizerStore.inputBg,
    boxed: localStorage.getItem('boxed') === 'true',
    setBorderCard: localStorage.getItem('setBorderCard') === 'true'
});

// Re-salvar o estado da customização atualizado no localStorage
customizerStore.$subscribe((mutation, state) => {
    localStorage.setItem('customizerState', JSON.stringify(state));
});

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string) || 'Aplicação';
    next();
});
