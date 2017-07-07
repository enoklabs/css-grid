import Vue        from 'vue'
import VueRouter  from 'vue-router'
import App        from './App.vue'
import Grid1      from './Grid1.vue'
import Grid2      from './Grid2.vue'
import Grid3      from './Grid3.vue'
import Grid4      from './Grid4.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/grid1', component: Grid1 },
  { path: '/grid2', component: Grid2 },
  { path: '/grid3', component: Grid3 },
  { path: '/grid4', component: Grid4 }
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
