<template>
  <header class="search">
    <div class="inner">
      <div class="ipt">
        <i class="icon"></i>
        <span class="placeholder">搜索商品, 共9723款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .search
    position fixed
    top 0
    left 0
    z-index 5
    width 100%
    height (88/$rpx)
    .inner
      display flex
      align-items center
      padding 0 (30/$rpx)
      width 100%
      height (88/$rpx)
      position relative
      background-color #ffffff
      &:after
        content ''
        position: absolute
        background-color #d9d9d9
        left 0
        width 100%
        height 1px
        transform-origin 50% 100% 0
        bottom 0
      .ipt
        width (690/$rpx)
        display flex
        align-items center
        justify-content center

        height (56/$rpx)
        font-size (28/$rpx)
        background-color #ededed
        border-radius (8/$rpx)
        >.icon
          display inline-block
          vertical-align middle
          width (28/$rpx)
          height (28/$rpx)

          background-repeat no-repeat
          margin-right (10/$rpx)
        >.placeholder
          font-size (27/$rpx)
          color #666666
</style>
