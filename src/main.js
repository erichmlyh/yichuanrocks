import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import VideoBackground from "vue-responsive-video-background-player";

import App from './App.vue'
import './reset.css'

// You can also pass in the default options
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
