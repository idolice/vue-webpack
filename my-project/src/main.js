import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Detail from './Detail.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {path:'/detail', component:Detail}
]

const router = new VueRouter({routes:routes})
new Vue({
  el: '#list',
  render: h => h(List)
})


