<!--
 * @Description: Contact.vue
 * @Author: 李洋华
 * @Date: 2020-03-26 18: 14
 -->

<template>
  <div class="contact" id="contact">
    <Title :mobile="mobile" en="Contact us" zh="联系我们"></Title>
    <ContactItem v-for="(item, index) in configs" :key="index" v-bind="item"></ContactItem>
  </div>
</template>

<script>
import Title from "../Title";
import ContactItem from "./ContactItem";
import location from "@/assets/location.png";
import phone from "@/assets/phone.png";
import email from "@/assets/email.png";
import join from "@/assets/join.png";

export default {
  name: "Contact",
  data() {
    return {
      configs: [
        {
          src: location,
          name: "地址",
          detail: "北京市朝阳区阜通东大街59号宜家办公楼401",
        },
        {
          src: phone,
          name: "商务合作请致电",
          detail: "+86 18810476747",
          href: "tel://+86 18810476747"
        },
        {
          src: email,
          name: "邮箱",
          detail: "market@yichuan.rocks",
          href: 'mailto:market@yichuan.rocks'
        },
        {
          src: join,
          name: "加入我们请联系",
          detail: "hr@yichuan.rocks",
          href: 'mailto:hr@yichuan.rocks'
        },
      ],
    };
  },
  props: {
    mobile: Boolean
  },
  components: { Title, ContactItem },
  mounted() {},
  methods: {},
};
</script>

<style>

</style>
