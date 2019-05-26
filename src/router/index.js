import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Posts from '../components/Posts'

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
    }
  ]
})


export default router