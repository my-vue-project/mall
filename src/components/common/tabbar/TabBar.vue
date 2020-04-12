<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "RabBar",
  data() {
    return {
      name: "zjj"
    };
  },
  components: {
    TabBarItem
  },
  methods: {
    btnClick() {
      console.log("click");
    }
  }
};
</script>
<style scoped>
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 99;
}
</style>