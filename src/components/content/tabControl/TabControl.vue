<template>
  <div class="tabcontrol">
    <div v-for="item in title" :key="item" class="tabitem" @click="isActive(item)">
      <span :class="{active: activeItem===item}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      activeItem: this.title[0]
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      }
    }
  },
  methods: {
    isActive(title) {
      this.$emit("active", title);
      return (this.activeItem = title);
    }
  }
};
</script>
<style scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tabitem {
  flex: 1;
}
.active {
  color: var(--color-height-text);
  padding-bottom: 5px;
  border-bottom: 2px solid var(--color-height-text);
}
</style>