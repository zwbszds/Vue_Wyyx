<template>
   <div class="topIc">
     <div class="topIcContainer">
        <ul class="topIcList">
          <li class="topIcItem" v-for="(item, index) in data" :key="index">
            <img class='topIcItemImg':src="item.picUrl" alt="">

            <div class="tCount">
              <span class="tCountOn">{{item.articleCount}}</span>
            </div>
            <span class="title">{{item.title}}</span>

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
    mounted(){
      new BScroll('.topIcContainer',{
        click: true,
        scrollX:true,
        scrollY:false
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .topIc
    background-color #fff
    width (750/$rpx)
    height (286.15/$rpx)
    border-top  13px solid #fff
    border-bottom  13px solid #fff

    .topIcContainer

      border-radius 15px
      display flex
      margin 25px
      width (750/$rpx)
      height (226/$rpx)
      .topIcList
        display flex
        height (226/$rpx)
        .topIcItem
          text-align center
          margin-right 20px
          position relative
          width (164.1/$rpx)
          height (210.1/$rpx)

          .topIcItemImg
            width (164.1/$rpx)
            height (164.1/$rpx)
          .tCount
            .tCountOn
              color #fff
              position absolute
              right 0
              top 0
              font-size (25/$rpx)
          .title
            margin 0 auto
            font-size (20/$rpx)
            color #333





</style>
