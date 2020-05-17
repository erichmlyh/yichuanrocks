<!--
 * @Description: PartnersSlide.vue
 * @Author: 李洋华
 * @Date: 2020-05-16 15: 16
 -->

<template>
  <div class="partners-slide" v-if="show">
    <el-row>
      <!-- left -->
      <el-col :xs="24" :span="8">
        <el-row>
          <el-col :span="12">
            <div class="partners-slide__square">
              <PartnerImage v-bind="options[0]"></PartnerImage>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="partners-slide__square">
              <PartnerImage v-bind="options[1]"></PartnerImage>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <div class="partners-slide__half">
            <PartnerImage v-bind="options[2]"></PartnerImage>
          </div>
        </el-row>
      </el-col>
      <!-- middle -->
      <el-col :xs="24" :span="8">
        <el-row>
          <el-col :span="12">
            <div class="partners-slide__double">
              <PartnerImage v-bind="options[3]"></PartnerImage>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="partners-slide__double">
              <PartnerImage v-bind="options[4]"></PartnerImage>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <!-- right -->
      <el-col :xs="24" :span="8">
        <el-row>
          <div class="partners-slide__half">
            <PartnerImage v-bind="options[5]"></PartnerImage>
          </div>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="partners-slide__square">
              <PartnerImage v-bind="options[6]"></PartnerImage>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="partners-slide__square">
              <PartnerImage v-bind="options[7]"></PartnerImage>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PartnerImage from "./PartnerImage";

export default {
  name: "PartnersSlide",
  data() {
    return {};
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    show() {
      return Array.isArray(this.options) && this.options.length === 8;
    },
  },
  components: {
    PartnerImage,
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="css">
.partners-slide {
  width: 100%;
}
.partners-slide__square {
  position: relative;

  box-sizing: border-box;
  padding-top: 100%;
}
.partners-slide__half {
  position: relative;

  box-sizing: border-box;
  padding-top: 50%;
}
.partners-slide__double {
  position: relative;

  box-sizing: border-box;
  padding-top: 200%;
}
</style>
