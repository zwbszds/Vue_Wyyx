<template>
  <section class="moveTopic">
    <div class="moveTit">
      <span class="inner">更多精彩</span>
    </div>
    <a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">
      <img :src="item.itemPicUrl" alt="img">
      <div class="desc">{{item.title}}</div>
    </a>
  </section>
</template>

<script>
  export default {
    props:{
      data: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .moveTopic
    margin 0 (30/$rpx) (30/$rpx)
    .moveTit
      height (140/$rpx)
      display flex
      align-items center
      &:before
        content ''
        display block
        width (264/$rpx)
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width (264/$rpx)
        height 1px
        background #d9d9d9
      .inner
        margin 0 (24/$rpx)
        font-size (28/$rpx)
        color #333333
    >.item
      display block
      padding (24/$rpx)
      background #ffffff
      color #333333
      margin-bottom (30/$rpx)
      >img
        width (642/$rpx)
        height (360/$rpx)
      >.desc
        font-size (28/$rpx)
        padding (28/$rpx) 0
        line-height 1.2

</style>
