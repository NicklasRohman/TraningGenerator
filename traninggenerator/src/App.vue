<template>
  <Header/>
  <Layout/>
  <Footer/>
</template>

<script>
import Header from "./components/LayoutHeader.vue"
import Layout from "./components/Layout.vue"
import Footer from "./components/LayoutFooter.vue"

export default {
  name: "App",
  components: {
    Header,
    Layout,
    Footer
    
  },
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
