import { createApp } from 'vue'
import App from './App.vue'
//全局组件需要在
const app = createApp(App)
import Global from './components/09_组件/Global.vue'
app.component('Card', Global) //在其他页面无需引用直接 <Card /> 就可以
app.mount('#app')
