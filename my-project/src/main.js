import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Detail from './Detail.vue'
import List from './List.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/list', component: List},
    { path: '/detail', component: Detail },
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})


