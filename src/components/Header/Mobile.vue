<!--
 * @Description: Mobile.vue
 * @Author: 李洋华
 * @Date: 2020-05-14 15: 06
 -->

<template>
  <div class="header">
      <img src="@/assets/logob.png" width="130" />
  </div>
</template>

<script>
export default {
 name: 'MobileHeader',
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

<style scoped lang="css">
  .header {
      display: flex;
      align-items: center;
      flex-flow: row nowrap;
      justify-content: center;

      height: 115px;
    }
</style>
