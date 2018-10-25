<template>
  <div class="fineGoods">
    <div class="fineWrap" >

      <div class="fineContainer" v-for="items in data" :key="items.id">
        <div class="line"></div>
        <div class="fineTitle"><span>{{items.name}}好物</span></div>
        <div class="fineList">
          <div class="fineItem" v-for="(item, index) in items.itemList" v-if="index<=6" :key="item.id">
            <img :src="item.listPicUrl" alt="">
            <div class="desc">{{item.simpleDesc}}</div>
            <div class="name">{{item.name}}</div>
            <span class="price">￥{{item.retailPrice}}</span>

          </div>




        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      data:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .fineGoods
    width 100%
    .fineWrap
      width 100%
      height 100%
      .fineContainer
        width 100%
        height 100%
        .fineTitle
          margin-top 20px
          width 100%
          height (120/$rpx)
          display flex
          justify-content center
          align-items center
          span
            font-size (30/$rpx)


        .fineList
          display flex
          width 100%
          .fineItem
            margin-left 24px
            width (375.2/$rpx)
            height (537.2/$rpx)

            img
              width (345.2/$rpx)
              height (345.2/$rpx)
              background-color #f4f4f4
            .desc
              margin-top 15px
              display flex
              justify-content center
              align-items center
              width (345.2/$rpx)
              height (68/$rpx)
              background-color #F1ECE2
              font-size (26/$rpx)
              color #9F8A60
              white-space nowrap
              overflow hidden;
              text-overflow ellipsis;
            .name
              margin-top 15px
              font-size (26/$rpx)
            .price
              font-size (33/$rpx)
              color #b4282d



        .line
          float left
          width 100%
          height (18/$rpx)
          background: #f4f4f4

</style>
