<!--
 * @Description: Partners.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="partners" id="partners">
    <Title en="Partners" zh="合作伙伴"></Title>
    <div class="partners-swiper__container">
      <swiper class="partners-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="partners-swiper__slide">Slide 1</swiper-slide>
        <swiper-slide class="partners-swiper__slide">Slide 2</swiper-slide>
        <swiper-slide class="partners-swiper__slide">Slide 3</swiper-slide>
        <swiper-slide class="partners-swiper__slide">Slide 4</swiper-slide>
        <swiper-slide class="partners-swiper__slide">Slide 5</swiper-slide>
      </swiper>
      <div class="swiper-button-prev partners-prev"></div>
      <div class="swiper-button-next partners-next"></div>
    </div>
  </div>
</template>

<script>
import Title from '../Title'

export default {
  name: "Partners",
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        navigation: {
          nextEl: ".partners .swiper-button-next",
          prevEl: ".partners .swiper-button-prev"
        }
      }
    };
  },
  props: {},
  components: {Title},
  mounted() {},
  methods: {}
};
</script>

<style>
.partners {
  height: 500px;
}

.partners-swiper__container {
  position: relative;
}
.partners-swiper {
  height: 200px;
  margin: 0 auto;
}
.partners-swiper__slide {
  height: 200px;

  background: red;
}
.partners-next {
    top: auto;
    right: aut0;
    bottom: -50%;
    left: 50%;

    transform: rotateZ(90deg);
    transform-origin: center;
}
</style>
