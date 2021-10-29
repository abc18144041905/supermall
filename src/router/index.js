import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const CateGroy = () => import('../views/categroy/CateGroy')
const ShopCart = () => import('../views/shopcart/ShopCart')
const Profile = () => import('../views/profile/Profile')
const Detial = () => import('../views/detial/Detial')

//安装插件
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/categroy',
    component: CateGroy
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/detial/:goodsId',
    component: Detial
  }
]
const router =  new VueRouter({
   routes,
   mode:'history'
})

export default router