<!--
 * @Description: Mobile.vue
 * @Author: 李洋华
 * @Date: 2020-05-16 15: 03
 -->

<template>
  <div class="partners">
    <Title
      class="partners-title"
      :mobile="true"
      en="Partners"
      zh="合作伙伴"
    ></Title>
  </div>
</template>

<script>
import Title from "../Title";

export default {
  name: "Mobile",
  data() {
    return {};
  },
  props: {},
  components: { Title },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="scss"></style>
