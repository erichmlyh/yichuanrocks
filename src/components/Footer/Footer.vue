<!--
 * @Description: Footer.vue
 * @Author: 李洋华
 * @Date: 2020-05-15 14: 47
 -->

<template>
  <div class="footer">
    <div class="footer__content" :class="{'footer__content--mobile':mobile}">
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
  props: {
    mobile: Boolean
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.footer {
  width: 100%;
  padding: 20px 0 40px 0;

  background: #000;
}
.footer__img {
}
.footer__content {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;

  margin: 0 auto;
}
.footer__content--mobile {
  transform: scale(0.85);
  transform-origin: center;
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
    margin: 10px 0 5px 0;
    padding-top: 10px;

    border-top: 1px solid #a0a0a0;
}
</style>
