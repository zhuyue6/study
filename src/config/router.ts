import Vue from 'vue'
import { AsyncComponent as VueComponent } from 'vue' 
import VueRouter, { RouteConfig } from 'vue-router'
import { nav } from './nav'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [{
  path: nav.main.path,
  component: <VueComponent>nav.main.component,
  children: nav.subList
}]
const router:VueRouter = new VueRouter({
  routes
})
export default router