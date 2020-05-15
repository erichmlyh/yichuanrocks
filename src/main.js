import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import VideoBackground from "vue-responsive-video-background-player";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { Row, Col, Tabs, TabPane } from "element-ui";

import App from "./App.vue";

import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/theme-chalk/display.css";
import "swiper/css/swiper.css";
import './reset.css'

Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.component("video-background", VideoBackground);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(TabPane);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
