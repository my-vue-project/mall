<template>
  <div class="recommend">
    <a v-for="item in recommends" :key="item.title" :href="item.link" class="rec-item">
      <img :src="item.image" alt />
      <div>{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style scoped>
.recommend {
  display: flex;
  text-align: center;
  width: 100%;
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;
}
.rec-item {
  flex: 1;
  display: block;
}
.rec-item img {
  width: 90%;
  padding-bottom: 8px;
}
</style>