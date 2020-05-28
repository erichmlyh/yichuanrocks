<!--
 * @Description: Pc.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 15: 03
 -->

<template>
  <div class="header" :style="headerStyle">
    <a href="#" class="header__ancher" v-scroll-to="'#introduction'"
      >公司介绍</a
    >
    <a href="#" class="header__ancher" v-scroll-to="'#news'">公司资讯</a>
    <img class="header__img" src="@/assets/logow.png" />
    <a href="#" class="header__ancher" v-scroll-to="'#partners'">合作伙伴</a>
    <a href="#" class="header__ancher" v-scroll-to="'#contact'">联系我们</a>
  </div>
</template>

<script>
const html = document.documentElement;
export default {
  name: "PcHeader",
  data() {
    return {
      rate: 0,
    };
  },
  computed: {
    headerStyle() {
      return {
        background: `rgba(0,0,0,${this.rate})`,
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const clientHeight = html.clientHeight;
      const { y: scrollTop = 0 } = html.getBoundingClientRect();

      this.rate = Math.min(Math.abs(scrollTop / clientHeight), 1);
    },
  },
};
</script>

<style scoped lang="css">
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;

  width: 100%;
  height: 80px;
}
.header__ancher {
  color: #fff;

  font-size: 14px;

  text-decoration-line: none;
}
.header__ancher + .header__ancher {
  margin-left: 40px;
}
.header__img {
  width: 75px;
  margin: 0 40px;
}
@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .header__ancher {
    font-size: 16px;
  }
  .header__img {
    width: 85px;
  }
}
@media only screen and (min-width: 1920px) {
  .header__ancher {
    font-size: 18px;
  }
  .header__img {
    width: 100px;
  }
}
</style>
