<!--
 * @Description: Pc.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 15: 03
 -->

<template>
  <div class="header">
      <a href="#" v-scroll-to="'#introduction'">公司介绍</a>
      <a href="#" v-scroll-to="'#news'">公司咨询</a>
      <a href="#" v-scroll-to="'#partners'">合作伙伴</a>
      <a href="#" v-scroll-to="'#contact'">联系我们</a>
  </div>
</template>

<script>
export default {
 name: 'PcHeader',
  data() {
    return {

    }
  },
  props: {},
  components: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
