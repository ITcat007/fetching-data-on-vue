import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersPage from '../views/UsersPage'
import UserProfile from '../views/UserProfile'
import AlbumPage from '../views/AlbumPage'

Vue.use(VueRouter)

const routes = [
    {
      path : "/",
      component : UsersPage
    },
    {
      path : "/:id",
      component : UserProfile
    },
    {
      path : "/:id/photos",
      name: "album-page",
      component : AlbumPage
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
