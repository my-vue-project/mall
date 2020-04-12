<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template #title>
        <div>首页</div>
      </template>
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt />
      </template>
      <template #activeicon>
        <img src="~assets/img/tabbar/home_active.svg" alt />
      </template>
    </tab-bar-item>

    <tab-bar-item path="/category">
      <template #title>
        <div>分类</div>
      </template>
      <template #icon>
        <img src="~assets/img/tabbar/shopcart.svg" alt />
      </template>
      <template #activeicon>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt />
      </template>
    </tab-bar-item>

    <tab-bar-item path="/shopcar">
      <template #title>
        <div>购物车</div>
      </template>
      <template #icon>
        <img src="~assets/img/tabbar/profile.svg" alt />
      </template>
      <template #activeicon>
        <img src="~assets/img/tabbar/profile_active.svg" alt />
      </template>
    </tab-bar-item>

    <tab-bar-item path="/profile">
      <template #title>
        <div>我的</div>
      </template>
      <template #icon>
        <img src="~assets/img/tabbar/category.svg" alt />
      </template>
      <template #activeicon>
        <img src="~assets/img/tabbar/category_active.svg" alt />
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBarItem,
    TabBar
  }
};
</script>
<style scoped>
</style>