import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import VideoBackground from "vue-responsive-video-background-player";
import VueAwesomeSwiper from "vue-awesome-swiper";

import App from "./App.vue";

import "swiper/css/swiper.css";
import './reset.css'

Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.component("video-background", VideoBackground);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
