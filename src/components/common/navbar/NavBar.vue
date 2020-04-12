<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}

.left .right {
  width: 60px;
  height: 44px;
}
.center {
  text-align: center;
}
</style>