<!--
 * @Description: Footer.vue
 * @Author: 李洋华
 * @Date: 2020-05-15 14: 47
 -->

<template>
  <div class="footer">
    <div class="footer__content">
      <img class="footer__img" src="@/assets/logow.png" width="130" />
      <p class="footer__text footer__text--first">
        <a href="/" class="">衣川文化（北京）有限公司</a>
        <a href="/" class="">Copyright © 2015-2020 YICHUAN</a>
      </p>
      <p class="footer__text">
        <a
          href="http://www.beian.miit.gov.cn/?spm=a2c4g.11174386.n2.3.16f861dbAV6YZ7"
          class=""
          >京ICP备15052662号-4</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  props: {},
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.footer {
  width: 100%;
  background: #000;
  padding: 20px 0 40px 0;
}
.footer__img {
}
.footer__content {
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
}
.footer__text a {
  color: #e0e0e0;
  font-size: 12px;
  text-decoration-line: none;
}
.footer__text a + a {
    margin-left: 25px;
}
.footer__text--first {
    padding-top: 10px;
    margin: 10px 0 5px 0;
    border-top: 1px solid #a0a0a0;
}
</style>
