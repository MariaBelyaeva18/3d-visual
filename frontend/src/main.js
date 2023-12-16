import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { router } from "./router/index.js";
// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import {createPinia} from "pinia";

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(router)
app.use(createPinia())
app.use(vuetify)

app.mount('#app')
