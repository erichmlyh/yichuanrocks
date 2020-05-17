<!--
 * @Description: MobileItem.vue
 * @Author: 李洋华
 * @Date: 2020-05-17 10: 22
 -->

<template>
  <div class="mobile-item">
    <el-image
      class="full"
      :src="src"
      fit="cover"
      @click="handleClick"
    ></el-image>
    <ImageViewer
      v-show="showViewer"
      :url-list="images"
      :on-close="handleClose"
    ></ImageViewer>
    <div class="mobile-item__content">
      <p class="mobile-item__title">{{ title }}</p>
      <p
        class="mobile-item__text"
        v-for="(text, index) in textLists"
        :key="index"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
import ImageViewer from "../ImageViewer";

export default {
  name: "MobileItem",
  data() {
    return {
      showViewer: false,
    };
  },
  props: {
    src: String,
    title: String,
    textLists: {
      type: Array,
      default: () => [],
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: { ImageViewer },
  mounted() {},
  methods: {
    handleClick() {
      this.prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      this.showViewer = true;
    },
    handleClose() {
      document.body.style.overflow = this.prevOverflow;
      this.showViewer = false;
    },
  },
};
</script>

<style scoped lang="css">
.mobile-item__content {
  padding: 30px 0;
}
.mobile-item__title {
  margin-bottom: 8px;

  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
}
.mobile-item__text {
  font-size: 16px;
  line-height: 24px;
}
</style>
