<!--
 * @Description: Introduction.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 14
 -->

<template>
  <div class="introduction" id="introduction">
    <Title en="Introduction" zh="公司简介"></Title>
    <el-tabs >
      <el-tab-pane label="衣川文化">
        衣川文化（北京）有限公司成立于2015年8月，是一家专注于男士文化、时尚、生活的传媒公司，也是行业领先的原创内容生产者。旗下有众多知名自媒体品牌，内容阅读量过亿，粉丝超过百万。公司成立以来，以新媒体为主导媒介，深耕男士文化领域，同时与众多知名品牌合作，打造了一系列拥有广泛传播的系列男性文化内容。
      </el-tab-pane>
      <el-tab-pane label="业务简介">
        衣川文化拥有丰富的内容创作经验和一流的内容创作团队，为客户量身定制的原创内容在网络上多次引发广泛传播。同时在多个内容平台为客户提供一体化的整合营销方案。针对文字、视频、线下活动等不同领域，我们都有成熟的营销策略和配套服务。
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Title from "../Title";

export default {
  name: "Introduction",
  data() {
    return {};
  },
  props: {},
  components: {
    Title,
  },
  mounted() {},
  methods: {},
};
</script>

<style>
.el-tabs__nav-scroll {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>
