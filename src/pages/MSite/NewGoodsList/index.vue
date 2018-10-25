<template>

    <div class="newGoodGrid">
      <div class="newContainer">
        <ul class="newWrapper">

          <li class="newGoodGridItem" v-for="item in data" :key="item.id">
            <img class='newWrapeImage' :src="item.primaryPicUrl" alt="">
            <div class="name">{{item.name}}</div>
            <div class="newItemDesc">{{item.simpleDesc}}</div>
            <div class="price">￥{{item.retailPrice}}</div>
          </li>
          </ul>
      </div>

    </div>






</template>

<script>
  import BScroll from 'better-scroll'
  export default {
     props:{
      data:Array
     },

    watch:{
      data:function () {
        new BScroll('.newContainer',{
          click: true,
          scrollX:true,
          scrollY:false
        });

      }
    }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .newGoodGrid
    width 100%
    height 100%
    .newContainer
      display flex
      width 100%
      height (415/$rpx)
      .newWrapper

        height (415/$rpx)
        display flex
        align-items center
        .newGoodGridItem
          margin-top 20px
          margin-left 20px
          width (280/$rpx)
          height (415/$rpx)
          .newWrapeImage
            width (280/$rpx)
            height (280/$rpx)
            background-color #F4F4F4
          .name
            font-size (26/$rpx)
            white-space nowrap
            overflow hidden;
            text-overflow ellipsis;

            margin 10px 0
          .newItemDesc
            font-size (24/$rpx)
            white-space nowrap
            overflow hidden;
            text-overflow ellipsis;
            color #7f7f7f
            margin 10px 0
          .price
            font-size (30/$rpx)
            white-space nowrap
            overflow hidden;
            text-overflow ellipsis;
            color #b4282d
            margin 10px 0





</style>
