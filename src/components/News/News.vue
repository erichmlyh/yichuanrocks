<!--
 * @Description: News.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="news" id="news">
    <Title en="News" zh="川衣咨询"></Title>
    <div class="news-swiper__container">
      <swiper class="news-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="news-swiper__slide">Slide 1</swiper-slide>
        <swiper-slide class="news-swiper__slide">Slide 2</swiper-slide>
        <swiper-slide class="news-swiper__slide">Slide 3</swiper-slide>
        <swiper-slide class="news-swiper__slide">Slide 4</swiper-slide>
        <swiper-slide class="news-swiper__slide">Slide 5</swiper-slide>
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Title from '../Title'

export default {
  name: "News",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".news .swiper-button-next",
          prevEl: ".news .swiper-button-prev"
        }
      }
    };
  },
  components: {
    Title
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style>
.news {
  height: 500px;
}
.news-swiper__container {
  position: relative;
}
.news-swiper {
  width: 410px;
  height: 200px;
  margin: 0 auto;
}
.news-swiper__slide {
  width: 200px;
  height: 200px;

  background: red;
}
</style>
