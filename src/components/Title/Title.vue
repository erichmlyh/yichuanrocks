<!--
 * @Description: Title.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 16: 44
 -->

<template>
  <div class="title">
    <p class="title_en">{{ en }}</p>
    <p class="title_zh">{{ zh }}</p>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    en: String,
    zh: String,
  },
};
</script>

<style scoped lang="css">
.title {
  margin: 30px 0;

  text-align: center;
}
.title_en {
  font-family: "HelveticaNeue";
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
}
.title_zh {
  margin-top: 6px;

  font-family: "HelveticaNeue";
  font-size: 16px;
  line-height: 16px;
}
</style>
