<!--
 * @Description: News.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="news" id="news">
    <Title en="News" zh="公司资讯"></Title>
    <div class="news-swiper__container">
      <swiper class="news-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          class="news-swiper__slide"
          v-for="(item, index) in configs"
          :key="index"
        >
          <Item v-bind="item"></Item>
        </swiper-slide>
      </swiper>
      <div class="news-arrow news-pre"></div>
      <div class="news-arrow news-next"></div>
    </div>
  </div>
</template>

<script>
import Item from "./components/PcItem";
import Title from "../Title";

import configs from './configs'

export default {
  name: "News",
  data() {
    return {
      configs,
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          nextEl: ".news .news-pre",
          prevEl: ".news .news-next",
        },
      },
    };
  },
  components: {
    Title,
    Item,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   // this.swiper.slideTo(3, 1000, false);
  // },
};
</script>

<style>
.news-swiper__container {
  position: relative;

  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}
.news-swiper {
  width: calc(100% - 50px);
  margin: 0 auto;
}
.news-swiper__slide {
  height: auto !important;
}
.news-arrow {
  position: absolute;
  z-index: 10;
  top: 50%;

  width: 20px;
  height: 32px;
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);

  cursor: pointer;
}
.news-pre {
  background: url("../../assets/left-arrow.png") 100%/100%;
}
.news-pre.swiper-button-disabled {
  background: url("../../assets/left-arrow-disable.png") 100%/100%;
}
.news-next {
  right: 0;

  background: url("../../assets/right-arrow.png") 100%/100%;
}
.news-next.swiper-button-disabled {
  background: url("../../assets/right-arrow-disable.png") 100%/100%;
}
</style>
