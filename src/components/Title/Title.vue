<!--
 * @Description: Title.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 16: 44
 -->

<template>
  <div class="title" :class="mobile ? 'title--mobile' : ''">
    <p class="title__en">{{ en }}</p>
    <p class="title__zh">{{ zh }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    en: String,
    zh: String,
    mobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="css">
.title {
  margin: 130px 0 30px 0;

  text-align: center;
}
.title__en {
  font-family: HelveticaNeue, sans-serif;
  font-size: 60px;
  font-weight: bold;
  line-height: 60px;
}
.title__zh {
  margin-top: 6px;

  font-size: 32px;
  line-height: 32px;
}
.title--mobile {
  margin: 60px 0 30px 0;
}
.title--mobile .title__en {
  font-size: 36px;
  line-height: 36px;
}

.title--mobile .title__zh {
  font-size: 24px;
  font-weight: 300;
  line-height: 24px;
}
</style>
