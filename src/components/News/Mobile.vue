<!--
 * @Description: Mobile.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 17: 33
 -->

<template>
  <div class="news">
    <Title :mobile="true" en="News" zh="川衣咨询"></Title>
  </div>
</template>

<script>
import Title from "../Title";

export default {
  name: "MobileNews",
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
