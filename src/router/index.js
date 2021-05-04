import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('@/components/comics') // lazy loaded components so that app.js wont be bloated (on larger scale websites)
  }
]

export default new Router({
  mode: 'history',
  routes
})
