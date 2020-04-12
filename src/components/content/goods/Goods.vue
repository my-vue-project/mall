<template>
  <div class="goods">
    <goods-list v-for="item in goodslist" :key="item.iid" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsList from "./GoodsList";
export default {
  name: "Goods",
  components: { GoodsList },
  data() {
    return {};
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this.goodslist);
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 5px 60px;
  font-size: 14px;
}
</style>