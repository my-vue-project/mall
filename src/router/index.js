import Vue from 'vue'
import VueRouter from 'vue-router'

const Category = () => import('views/category/Category')
const Home = () => import('views/home/Home')
const Profile = () => import('views/profile/Profile')
const ShopCar = () => import('views/shopcar/ShopCar')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopcar',
    component: ShopCar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
