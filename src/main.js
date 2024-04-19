import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).mount('#app')
createApp(App).use(VueAxios, axios);
