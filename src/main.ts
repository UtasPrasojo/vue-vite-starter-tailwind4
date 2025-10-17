import './assets/main.css'; // Global styles

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './plugins/vue-router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import VueApexCharts from 'vue3-apexcharts';
import './assets/main.css'

const app = createApp(App);

// Gunakan plugins
app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  },
});
app.use(VueApexCharts);

// Daftarkan komponen global untuk ApexCharts
app.component('ApexChart', VueApexCharts);

app.mount('#app');
