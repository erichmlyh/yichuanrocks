<template>
  <div id="app">
    <Header></Header>
    <Introduction></Introduction>
    <News></News>
    <Partners></Partners>
    <Contact></Contact>
  </div>
</template>

<script>
import Header from './components/Header'
import Introduction from './components/Introduction'
import News from './components/News'
import Partners from './components/Partners'
import Contact from './components/Contact'

export default {
  name: "App",
  components: {Header,Introduction,News,Partners,Contact}
};
</script>

<style>
</style>
