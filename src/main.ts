import { createApp } from "vue";


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import SvgIcon from "@/components/svg-icon/index";
import 'virtual:svg-icons-register'

import App from './App.vue'

const app = createApp(App)


app.use(ElementPlus)
app.component('svg-icon',SvgIcon)

app.mount('#app')


