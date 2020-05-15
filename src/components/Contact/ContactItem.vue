<!--
 * @Description: ContactItem.vue
 * @Author: 李洋华
 * @Date: 2020-05-15 14: 48
 -->

<template>
  <div class="contact-item">
    <img class="contact-item__img" :src="src" alt="" srcset="" />
    <p class="contact-item__name">{{ name }}</p>
    <p class="contact-item__deital">{{ detail }}</p>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    src: String,
    name: String,
    detail: String,
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.contact-item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
}
.contact-item__img {
  width: 42px;
  height: 42px;
}
.contact-item__name {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin: 10px 0 10px 0
}
.contact-item__deital {
  font-size: 12px;
  color: #a0a0a0;
}
</style>
