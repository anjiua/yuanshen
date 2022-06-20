import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from "./router/index.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router:router
})
