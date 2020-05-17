<!--
 * @Description: Introduction.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 14
 -->

<template>
  <div
    :class="mobile ? 'mobile-introduction' : 'pc-introduction'"
    id="introduction"
  >
    <Title :mobile="mobile" en="Introduction" zh="公司简介"></Title>
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in configs"
        :key="index"
        :label="item.title"
      >
        <p
          class="introduction-content"
          v-for="(content, index) in item.contentList"
          :key="index"
        >
          {{ content }}
        </p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Title from "../Title";

import configs from "./configs";

export default {
  name: "PcIntroduction",
  data() {
    return {
      configs,
    };
  },
  props: {
    mobile: Boolean,
  },
  components: {
    Title,
  },
  mounted() {},
  methods: {},
};
</script>

<style>
@import "./pc.css";
@import "./mobile.css";

.introduction-content {
    margin-bottom: 10px;
}
</style>
