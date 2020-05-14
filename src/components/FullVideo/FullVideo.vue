<!--
 * @Description: FullVideo.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 14: 36
 -->

<template>
  <div class="full-video">
    <video-background :src="video" :class="mobile ? 'mobile' : 'pc'">
    </video-background>
  </div>
</template>

<script>
import video from "@/assets/video.mp4";
export default {
  name: "FullVideo",
  data() {
    return {
      video,
    };
  },
  props: {
    mobile: Boolean,
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.full-video .pc {
  height: 100vh;
  max-height: 100vh;
}
.full-video .mobile {
  height: 56vw;
  max-height: 56vw;
}
</style>
