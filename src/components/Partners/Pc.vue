<!--
 * @Description: Partners.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 15
 -->

<template>
  <div class="pc-partners" id="partners">
    <Title class="partners-title" en="Partners" zh="合作伙伴"></Title>
    <div class="partners-swiper__container">
      <swiper class="partners-swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="(slide, index) in configs"
          :key="index"
          class="partners-swiper__slide"
        >
          <PartnersSlide :options="slide"></PartnersSlide>
        </swiper-slide>
      </swiper>
      <div class="partners-arrow partners-pre"></div>
      <div class="partners-arrow partners-next"></div>
    </div>
  </div>
</template>

<script>
import Title from "../Title";
import PartnersSlide from "./components/PartnersSlide";
import configs from "./configs";

export default {
  name: "Partners",
  data() {
    return {
      configs,
      swiperOptions: {
        direction: "vertical",
        spaceBetween: 10,
        navigation: {
          nextEl: ".pc-partners .partners-pre",
          prevEl: ".pc-partners .partners-next",
        },
      },
    };
  },
  props: {},
  components: { Title, PartnersSlide },
  mounted() {},
  methods: {},
};
</script>

<style>
.pc-partners .partners-title {
  margin-bottom: 100px;
}
.partners-swiper__container {
  position: relative;
}
.partners-swiper {
  height:33.4vw;
}

.partners-arrow {
  position: absolute;
  z-index: 10;
  left: calc(50% - 16px);

  width: 32px;
  height: 20px;

  cursor: pointer;
}
.partners-pre {
  top: -50px;

  background: url("../../assets/top-arrow.png") 100%/100%;
}
.partners-pre.swiper-button-disabled {
  background: url("../../assets/top-arrow-disable.png") 100%/100%;
}
.partners-next {
  bottom: -50px;

  background: url("../../assets/bottom-arrow.png") 100%/100%;
}
.partners-next.swiper-button-disabled {
  background: url("../../assets/bottom-arrow-disable.png") 100%/100%;
}
</style>
