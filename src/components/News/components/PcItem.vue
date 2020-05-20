<!--
 * @Description: PcItem.vue
 * @Author: 李洋华
 * @Date: 2020-05-16 10: 23
 -->

<template>
  <div
    class="pc-item full"
    @mouseover="showTip = true"
    @mouseleave="showTip = false"
    @click="handleClick"
  >
    <el-image class="full cursor" :src="src" fit="cover"></el-image>
    <ImageViewer
      v-dom-portal
      v-show="showViewer"
      :url-list="images"
      :on-close="handleClose"
    ></ImageViewer>
    <transition name="el-fade-in">
      <el-card v-show="showTip" class="pc-item__content">
        <p class="pc-item__title">{{ title }}</p>
        <p
          class="pc-item__text"
          v-for="(text, index) in textLists"
          :key="index"
        >
          {{ text }}
        </p>
      </el-card>
    </transition>
  </div>
</template>

<script>
import ImageViewer from "../ImageViewer";

export default {
  name: "PcItem",
  data() {
    return {
      prevOverflow: "",
      showTip: false,
      showViewer: false,
    };
  },
  components: {
    ImageViewer,
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
.pc-item {
  position: relative;

  cursor: pointer;
}
.pc-item__content {
  position: absolute;
  top: 5%;
  left: 5%;

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;

  width: 90%;
  height: 90%;

  text-align: center;
  pointer-events: none;

  background: #f0f0f0;
}
.pc-item__title {
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 48px;
}
.pc-item__text {
  font-size: 16px;
  line-height: 24px;
}
</style>
