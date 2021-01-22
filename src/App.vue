<template>
  <div id="app">
    <Header />
    <Navigation />
    <div class="body-area">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./styles/variables";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: bisque;
  box-shadow: 0px 100px 100px lightsalmon;
  height: 100vh;
}
.body-area {
  height: calc(100vh - 270px);
  overflow-y: auto;
}
.modal-header {
  background-color: lightgray;
}
</style>
