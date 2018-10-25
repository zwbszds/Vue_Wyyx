<template>
  <footer class="footer_guide bottom-border-1px">
    <a href="javascript:;" class="guide_item " @click="goTo('/msite')"
       :class="{on: $route.path==='/msite'}"
     >
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/find')" :class="{on: $route.path==='/find'}">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/classify')" :class="{on: $route.path==='/classify'}">
      <span class="item_icon ">
        <i class="iconfont icon-navicon-kcfl"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shop')" :class="{on: $route.path==='/shop'}">
      <span class="item_icon">
        <i class="iconfont icon-shoppingcart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-mine"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  import Swiper from 'swiper'

  export default {


   methods:{
     goTo(path){
       this.$router.replace(path)
     },

   }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    z-index 10
    position fixed
    left 0
    bottom 0
    display flex
    background-color #fafafa
    width 100%
    height (98/$rpx)

    .guide_item

      display flex
      flex 1
      flex-direction column
      align-items center
      text-align center
      justify-content: center
      &.on
        color skyblue
      span
        font-size (24/$rpx)
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size (40/$rpx)





</style>
