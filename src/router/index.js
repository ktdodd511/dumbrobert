import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/services', component: 'Services' },
  { path: '/contact', component: 'Contact' },
  { path: '/dumpsters', component: 'Dumpsters' },
  { path: '/storage-containers', component: 'Storage' },
  { path: '/portable-toliets', component: 'Portable' },
  { path: '/equipment-rental', component: 'Equipment' },
  { path: '/debris-removal', component: 'Debris' },
  { path: '/recycling-services', component: 'Recycle' },
  { path: '/temporary-fencing', component: 'Fencing' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
