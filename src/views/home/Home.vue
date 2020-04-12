<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <home-swiper :banners="banner" />
    <recommend-view :recommends="recommend" />
    <feature-view />
    <tab-control class="tab-control" :title="['流行','新款','精选']" @active="activeTitle" />
    <goods :goodslist="goods[currentType].list" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";

import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import FeatureView from "./childrenComps/FeatureView";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    Goods
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop"
    };
  },
  computed: {},
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.homeMultidata();

    this.goodsList("pop");
    this.goodsList("new");
    this.goodsList("sell");
  },
  methods: {
    homeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    goodsList(type) {
      let goods = this.goods[type];
      let page = goods.page + 1;
      getHomeGoods(type, page)
        .then(res => {
          goods.list = [...goods.list, ...res.data.list];
        })
        .catch(e => console.logvalue(e));
    },
    activeTitle(value = "流行") {
      console.log(value);
      if (value === "流行") {
        this.currentType = "pop";
      } else if (value === "新款") {
        this.currentType = "new";
      } else if (value === "精选") {
        this.currentType = "sell";
      } else {
        return "pop";
      }
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.home-nav {
  color: #fff;
  background: var(--color-tint);
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 98;
  background-color: #fff;
}
</style>