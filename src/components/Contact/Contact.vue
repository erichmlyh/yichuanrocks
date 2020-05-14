<!--
 * @Description: Contact.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 14
 -->

<template>
  <div class="contact" id="contact">
    <Title en="Contact us" zh="联系我们"></Title>
    
  </div>
</template>

<script>
import Title from '../Title'

export default {
  name: "Contact",
  data() {
    return {};
  },
  props: {},
  components: {Title},
  mounted() {},
  methods: {}
};
</script>

<style>
.contact {
  height: 500px;
}
</style>
