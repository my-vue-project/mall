<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isTrue">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="activeicon"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      thispath: ""
    };
  },

  methods: {
    btnClick() {
      // console.log(this.$route.path);
      this.thispath = this.$route.path;
      if (this.thispath !== this.path) {
        this.$router.push(this.path);
      }
    }
  },
  computed: {
    isTrue() {
      return this.$route.path.includes(this.path);
    },
    isActiveColor() {
      return this.isTrue ? { color: this.isActive } : {};
    }
  },

  props: {
    path: String,
    isActive: {
      type: String,
      default: "red"
    }
  }
};
</script>
<style scoped>
.tab-bar-item {
  align-content: c;
  flex: 1;
  text-align: center;
  height: 49px;
  vertical-align: middle;
  padding-bottom: 6px;
  font-size: var(--font-size);
  border-top: 1px solid rgb(238, 235, 235);
}
.activecolor {
  color: var(--color-height-text);
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  padding-top: 3px;
}
</style>