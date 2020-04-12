<template>
  <div id="app">
    <router-view />
    <MainTabBar />
  </div>
</template>
<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  components: {
    MainTabBar
  }
};
</script>
<style lang="scss">
@import "assets/css/base.css";
</style>
