<!--
 * @Description: News.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="news" id="news">
    <swiper  class="news-swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div slot="button-prev" >ddddd</div>
      <div slot="button-next" >ddddd</div>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
        // Some Swiper option/callback...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.news {
    height: 600px;
}
.news-swiper {
    height: 500px;
}
</style>
