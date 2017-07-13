import Vue        from 'vue'
import VueRouter  from 'vue-router'
import App        from './App.vue'
import FilterBar  from './FilterBar.vue'
import Grid1      from './Grid1.vue'
import Grid2      from './Grid2.vue'
import Grid3      from './Grid3.vue'
import Grid4      from './Grid4.vue'

Vue.use(VueRouter);
Vue.component('filter-bar', FilterBar);

// declare routes
const routes = [
  { path: '/', component: Grid1 },
  { path: '/grid1', component: Grid1 },
  { path: '/grid2', component: Grid2 },
  { path: '/grid3', component: Grid3 },
  { path: '/grid4', component: Grid4 }
];

// start a new router with the routes
const router = new VueRouter({routes});

// initiate new vue app
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
