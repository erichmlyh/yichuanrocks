<!--
 * @Description: Mobile.vue
 * @Author: 李洋华
 * @Date: 2020-05-16 15: 03
 -->

<template>
  <div class="mobile-partners" id="partners">
    <Title
      class="partners-title"
      :mobile="true"
      en="Partners"
      zh="合作伙伴"
    ></Title>
    <PartnersSlide
      v-for="(slide, index) in configs"
      :key="index"
      :options="slide"
      mobile
    ></PartnersSlide>
  </div>
</template>

<script>
import Title from "../Title";
import PartnersSlide from "./components/PartnersSlide";
import configs from "./configs";

export default {
  name: "Mobile",
  data() {
    return {
      configs,
    };
  },
  props: {},
  components: { Title, PartnersSlide },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.mobile-partners {
  margin-bottom: 40px;
}
</style>
