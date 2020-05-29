<!--
 * @Description: Mobile.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 17: 33
 -->

<template>
  <div class="news" id="news">
    <Title :mobile="true" en="News" zh="公司资讯"></Title>
    <Item v-for="(item, index) in configs" :key="index" v-bind="item"></Item>
  </div>
</template>

<script>
import Item from "./components/MobileItem";
import Title from "../Title";

import configs from "./configs";

export default {
  name: "MobileNews",
  data() {
    return {
      configs,
    };
  },
  props: {},
  components: { Title, Item },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.news {
  padding: 0 25px;
}
</style>
