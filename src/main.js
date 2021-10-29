import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'

Vue.use(toast)

// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/img/loading/picerr.jpg'),
  loading: require('./assets/img/loading/picload.jpg'),
  attempt: 1
})
//解决移动端点击延时300ms
FastClick.attach(document.body);

Vue.config.productionTip = false

//添加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
