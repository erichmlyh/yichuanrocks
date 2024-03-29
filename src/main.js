import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import VideoBackground from "vue-responsive-video-background-player";
import VueAwesomeSwiper from "vue-awesome-swiper";
import DomPortal from "vue-dom-portal";
import { Row, Col, Tabs, TabPane, Image, Card } from "element-ui";
import VideoPlayer from "vue-video-player";
import App from "./App.vue";

import "video.js/dist/video-js.css";
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
Vue.use(VideoPlayer);
Vue.component("video-background", VideoBackground);
Vue.use(DomPortal);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Image);
Vue.use(Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
