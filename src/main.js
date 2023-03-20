// import Vue from 'vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router'

// import JwPagination from "jw-vue-pagination";

// Vue.component("jw-pagination", JwPagination);

import './assets/main.css'

createApp(App).use(router).mount('#app')


