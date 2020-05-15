<template>
  <div id="app">
    <Header :mobile="mobile"></Header>
    <FullVideo :mobile="mobile"></FullVideo>
    <Introduction :mobile="mobile"></Introduction>
    <News :mobile="mobile"></News>
    <Partners :mobile="mobile"></Partners>
    <Contact :mobile="mobile"></Contact>
    <Footer :mobile="mobile"></Footer>
  </div>
</template>

<script>
import FullVideo from "./components/FullVideo";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import News from "./components/News";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      mobile: this.isXs(),
    };
  },
  components: {
    Header,
    FullVideo,
    Introduction,
    News,
    Partners,
    Contact,
    Footer,
  },
  beforeCreate() {
    window.addEventListener("resize", () => {
      this.mobile = this.isXs();
    });
  },
  methods: {
    isXs() {
      return document.documentElement.clientWidth < 768;
    },
  },
};
</script>

<style></style>
