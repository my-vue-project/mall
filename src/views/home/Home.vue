<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template #center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <b-scroll class="content" ref="scroll" @scrollY="getScrollY" @pullingUp="getMore">
      <home-swiper :banners="banner" />
      <recommend-view :recommends="recommend" />
      <feature-view />
      <tab-control class="tab-control" :title="['流行','新款','精选']" @active="activeTitle" />
      <goods :goodslist="goods[currentType].list" />
    </b-scroll>
    <back @click.native="backClick" :probeType="3" :class="{backTop: isBackTop}" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home";

import NavBar from "components/common/navbar/NavBar";
import BScroll from "components/common/betterscroll/BScroll";

import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import Back from "components/content/back/Back";

import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommendView from "./childrenComps/RecommendView";
import FeatureView from "./childrenComps/FeatureView";

export default {
  name: "Home",
  components: {
    NavBar,
    BScroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    Goods,
    Back
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
      currentType: "pop",
      scroll: null,
      isBackTop: false
    };
  },
  computed: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.homeMultidata();

    this.goodsList("pop");
    this.goodsList("new");
    this.goodsList("sell");
  },
  methods: {
    /**
     * 网络请求
     */
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
      goods.page = goods.page + 1;
      console.log(goods.page);
      getHomeGoods(type, goods.page)
        .then(res => {
          goods.list = [...goods.list, ...res.data.list];
        })
        .catch(e => console.log(e));
    },
    /**
     * 事件监听方法
     */
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
    },
    backClick() {
      this.scroll.scrollTo(0, 0, 1000);
    },
    getScrollY(position) {
      // console.log(position.y);
      this.isBackTop = -position.y < 1000;
      // console.log(this.isBackTop);
    },
    getMore() {
      console.log("more");
      this.goodsList(this.currentType);
      this.scroll.finishPullUp();
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.scroll = this.$refs.scroll;
    // this.scrollY = this.scroll.getScrollY();
    // console.log(this.scrollY);
  }
};
</script>
<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  color: #fff;
  background: var(--color-tint);
  height: 44px;
  line-height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 98;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.backTop {
  display: none;
}
</style>