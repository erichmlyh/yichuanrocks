<!--
 * @Description: PartnerImage.vue
 * @Author: 李洋华
 * @Date: 2020-05-16 16: 04
 -->

<template>
  <div
    class="partner-image full"
    @mouseover="show = true"
    @mouseleave="show = false"
    @click="handleClick"
    @touchstart="show = true"
    @touchend="show = false"
  >
    <el-image class="full" :src="src" fit="cover"></el-image>
    <div
      class="partner-image__mask full"
      :class="show ? 'partner-image__mask--show' : 'partner-image__mask--hide'"
    >
      <img
        class="partner-image__logo"
        :class="
          show ? 'partner-image__logo--show' : 'partner-image__logo--hide'
        "
        v-bind="logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerImage",
  data() {
    return {
      show: !this.mobile,
    };
  },
  props: {
    src: String,
    logo: {
      type: Object,
      default: () => ({})
    },
    url: String,
    mobile: Boolean
  },
  watch: {
    mobile(val) {
      this.show = !val;
    }
  },
  methods: {
    handleClick() {
      this.show = false;
      window.open(this.url);
    },
  },
};
</script>

<style scoped lang="css">
.partner-image {
  position: absolute;
  top: 0;
  left: 0;
  -webkit-user-select:none; 
}
.partner-image * {
  -webkit-user-select:none; 
}
.partner-image__mask {
  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;
  transition: all 0.5s;
  /* background: rgba(100, 100, 100, 0.7); */

  background: rgba(255, 255, 255, 0.7);
}
.partner-image__mask--hide {
  opacity: 0;
}
.partner-image__mask--show {
  opacity: 1;
}

.partner-image__logo {
  position: absolute;
  left: 50%;

  transition: all 0.5s;
  transform: translate(-50%, -50%);
}
.partner-image__logo--hide {
  top: 0%;

  opacity: 0;
}
.partner-image__logo--show {
  top: 50%;

  opacity: 1;
}
</style>
