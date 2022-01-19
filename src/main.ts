import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router/index'
import { createPinia } from 'pinia'
import './permission'
// svg sprite registration script
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
// 注册SvgIcon为全局组件
app.component(SvgIcon.name, SvgIcon)

app.mount('#app')
