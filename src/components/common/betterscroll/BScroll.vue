<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data() {
    return {
      scroll: null,
      probeType: this.probeType
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    });
    this.scroll.on("scroll", position => {
      // console.log(position);
      this.$emit("scrollY", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      console.log("finish");
      this.scroll.finishPullUp();
    }
  }
};
</script>
<style scoped>
</style>