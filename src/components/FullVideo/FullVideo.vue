<!--
 * @Description: FullVideo.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 14: 36
 -->

<template>
  <div class="full-video">
    <video-player
      v-if="mobile"
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player>
    <video-background v-else :src="video" :poster="poster" class="pc">
    </video-background>
  </div>
</template>

<script>
import video from "@/assets/video.mp4";
import poster from "@/assets/poster.jpg";

export default {
  name: "FullVideo",
  data() {
    return {
      video,
      poster,
      playerOptions : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: video,  // 路径
          type: 'video/mp4'  // 类型
        }, ],
        poster: poster, //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          // fullscreenToggle: true  //全屏按钮
        }
    }
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

<style lang="css">
.full-video .pc {
  height: 100vh;
  max-height: 100vh;
}
.full-video .mobile {
  height: 56vw;
  max-height: 56vw;
}
.video-js .vjs-big-play-button {
  top: 50% !important;
  left: 50% !important;

  transform: translate(-50%,-50%);
}
</style>
