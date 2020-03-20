<template>
  <div id="app">
    <!-- 滚动 -->
    <!-- <a href="#" v-scroll-to="'#element'">Scroll to #element</a> -->

    <video-background
      src="./video.mp4"
      style="max-height: 100vw; height: 100vh;"
    >
      <a href="#" v-scroll-to="'#element'">Scroll to #element</a>
    </video-background>
    <div id="element">
      Hi. I'm #element.
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
#app {

  text-align: center;

  color: #2c3e50;

  font-family: Avenir, Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
