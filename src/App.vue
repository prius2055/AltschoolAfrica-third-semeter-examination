<template>
  <NavigationBar />
  <img alt="logo" src="./assets/icons8-handshake.gif" />
  <router-view></router-view>
  <FooterBar />
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterBar from "./components/FooterBar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterBar,
  },
};
</script>

<style>
img {
  width: 100px;
  height: 100px;
  margin: 60px 47% 0px 47%;
}
</style>

