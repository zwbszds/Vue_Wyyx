<template>
  <div class="allHeader">

    <div class="shouye" @click="$router.replace('/msite')"></div>
    <div class="font"></div>

    <div class="xunzhao"  @click="$router.replace('/find')"></div>





    <div class="shop" @click="$router.replace('/shop')"></div>








  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .allHeader
    background:#FAFAFA
    position relative
    width 100%
    height (88/$rpx)
    display flex
    .shouye
      position absolute
      left 19px
      top 17px
      flex-grow 1
      background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
      background-repeat no-repeat
      width (48/$rpx)
      height (48/$rpx)
      background-position 1px -72px
    .font
      position absolute
      left 277px
      top 17px
      flex-grow 4
      background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
      background-repeat no-repeat
      width (172/$rpx)
      height (54/$rpx)
      background-position 1px -127px
    .xunzhao
      position absolute
      left 580px
      top 17px
      flex-grow 1
      background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
      background-repeat no-repeat
      width (65/$rpx)
      height (65/$rpx)
      background-position 1px -343px
    .shop
      position absolute
      right 19px
      top 4px
      flex-grow 1
      background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
      background-repeat no-repeat
      width (65/$rpx)
      height (65/$rpx)
      background-position 1px 2px
      float right

</style>
