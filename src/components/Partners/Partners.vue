<!--
 * @Description: Partners.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="partners" id="partners">
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
  components: {},
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
  margin: 0 auto;
  height: 200px;
}
.partners-swiper__slide {
  height: 200px;
  background: red;
}
.partners-next {
    transform: rotateZ(90deg);
    transform-origin: center;
    left: 50%;
    right: aut0;
    top: auto;
    bottom: -50%;
}
</style>
