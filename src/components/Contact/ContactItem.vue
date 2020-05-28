<!--
 * @Description: ContactItem.vue
 * @Author: 李洋华
 * @Date: 2020-05-15 14: 48
 -->

<template>
  <div class="contact-item">
    <img class="contact-item__img" :src="src" alt="" srcset="" />
    <p class="contact-item__name">{{ name }}</p>
    <a :href="href" class="contact-item__detail">{{ detail }}</a>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: {
    src: String,
    name: String,
    detail: String,
    href: {
      type: String,
      default: 'javacript: void 0;'
    }
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.contact-item {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: flex-start;

  margin-bottom: 30px;
}
.contact-item__img {
  width: 32px;
  height: 32px;
}
.contact-item__name {
  margin: 10px 0 10px 0;

  color: #000;

  font-size: 16px;
  font-weight: bold;
}
.contact-item__detail {
  color: #999;

  font-size: 12px;
  text-decoration: none;
}
</style>
