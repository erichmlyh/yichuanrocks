<!--
 * @Description: header.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 01
 -->

<template>
  <div class="header">
    <video-background
      src="./video.mp4"
      style="max-height: 100vw; height: 100vh;"
    >
      <a href="#" v-scroll-to="'#introduction'">公司介绍</a>
      <a href="#" v-scroll-to="'#news'">公司咨询</a>
      <a href="#" v-scroll-to="'#partners'">合作伙伴</a>
      <a href="#" v-scroll-to="'#contact'">联系我们</a>
    </video-background>
  </div>
</template>

<script>
export default {
 name: 'header',
  data() {
    return {

    }
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
