<template>
  <div class="zhuanti"                                             >
    <div class="zhuantiWrap">
      <div class="zhuantiHeader">
        <span>专题精选</span>
        <i class="iconfont icon-yuanjiantou1"></i>
      </div>
      <div class="zhuantiContainer">
        <ul class="zhuantiList">
          <li class="zhuantiItem"  v-for="item in data" :key="item.id">
            <a href="javascript:;">
              <img :src="item.itemPicUrl" alt="">
              <div class="title_top">{{item.title}}</div>
              <div class="title_bottom">{{item.subtitle}}</div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      data: Array
    },
    mounted(){
      new BScroll('.zhuantiContainer',{
        click: true,
        scrollX:true,
        scrollY:false
      });

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .zhuanti
    width 100%
    .zhuantiHeader

      width 100%
      height (110/$rpx)
      display flex
      justify-content center
      align-items center
      span
        width (128/$rpx)
        height (48/$rpx)
        font-size (33/$rpx)
        white-space nowrap


    .zhuantiContainer
      display flex
      width 100%
      height (453/$rpx)
      .zhuantiList
        height (417/$rpx)
        display flex
        .zhuantiItem
          margin-left 25px
          border-radius 20px
          height (417/$rpx)
          width (575/$rpx)
          >a
            >img
              width (575/$rpx)
              height (322/$rpx)
            .title_top
              font-size (30/$rpx)
              white-space nowrap
              overflow hidden;
              text-overflow ellipsis;
              color #000
              margin 15px 0
            .title_bottom
              font-size (25/$rpx)
              white-space nowrap
              overflow hidden;
              text-overflow ellipsis;




</style>
