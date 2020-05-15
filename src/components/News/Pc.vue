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
        <swiper-slide class="news-swiper__slide">
          <el-image
            style="width:100%;height: 100%"
            :src="configs[0].src"
            :fit="cover"
          ></el-image>
        </swiper-slide>
        <swiper-slide class="news-swiper__slide"
          ><el-image
            style="width:100%;height: 100%"
            :src="configs[0].src"
            :fit="cover"
          ></el-image
        ></swiper-slide>
        <swiper-slide class="news-swiper__slide"
          ><el-image
            style="width:100%;height: 100%"
            :src="configs[0].src"
            :fit="cover"
          ></el-image
        ></swiper-slide>
        <swiper-slide class="news-swiper__slide"
          ><el-image
            style="width:100%;height: 100%"
            :src="configs[0].src"
            :fit="cover"
          ></el-image
        ></swiper-slide>
        <swiper-slide class="news-swiper__slide"
          ><el-image
            style="width:100%;height: 100%"
            :src="configs[0].src"
            :fit="cover"
          ></el-image
        ></swiper-slide>
      </swiper>
      <div class="news-arrow news-pre"></div>
      <div class="news-arrow news-next"></div>
    </div>
  </div>
</template>

<script>
import Title from "../Title";
import news from "./imgs/news.jpg";

export default {
  name: "News",
  data() {
    return {
      configs: [
        {
          src: news,
        },
      ],
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
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
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
  height: 600px;
  margin: 0 auto;
}
.news-swiper__slide {
  width: 570px;
  height: 570px;
}
.news-arrow {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 32px;
  margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
  z-index: 10;
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
