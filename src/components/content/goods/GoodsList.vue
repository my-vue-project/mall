<template>
  <a class="goods-item" :href="goodsitem.link">
    <img :src="goodsitem.show.img" alt />
    <div class="goods-title">
      <span class="title">{{goodsitem.title}}</span>
    </div>
    <div class="goods-msg">
      <span class="msg-color">{{goodsitem.price}}</span>
      <span class="collect">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-iconfontyishoucang" />
        </svg>
      </span>
      <span>{{goodsitem.cfav}}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 49%;
  padding-bottom: 40px;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-title {
  width: 100%;
  height: 20px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-msg {
  width: 100%;
  position: absolute;
  bottom: 5px;
  text-align: center;
}
.msg-color {
  color: var(--color-tint);
}
.collect {
  padding: 0 5px;
  position: relative;
  top: -1px;
}
</style>