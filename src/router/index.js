import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from '../components/Posts'
import Albums from '../components/Albums'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums
    }
  ]
})


export default router