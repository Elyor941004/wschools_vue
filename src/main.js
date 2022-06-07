import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import allComponents from '@/components/UI'
const app = createApp(App);
allComponents.forEach(component=>{
    app.component(component.name, component)
})
app.use(store).use(router).mount('#app')
