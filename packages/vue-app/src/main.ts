import { createApp } from 'vue';
import App from './App.vue';
import router from '@/services/router.service';

createApp(App).use(router).mount('#app');
