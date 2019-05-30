import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/home'
import store from './store'

// lazy load route
const Favorites = () => import('./pages/favorites')

Vue.use(VueRouter)

const routes = [
    { path: '/favorites', component: Favorites, meta: { requiresAuth: true } },
    { path: '*', component: Home, meta: { requiresAuth: true } },
]

const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
    store
})



export default router
