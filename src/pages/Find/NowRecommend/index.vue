<template>
  <div class="NowRecommend">
    <div class="title">为你推荐</div>
    <div class="itemMain">
      <a href="javascript:;">
        <img class='itemMainImg':src="data[0].picUrl" alt="">
        <div class="info">
          <div class="line1">
            <div class="Linetitle">{{data[0].title}}</div>
            <div class="price">{{data[0].priceInfo}}元起</div>
          </div>
          <div class="line2">{{data[0].subTitle}}</div>
        </div>
      </a>
    </div>
    <div class="items1">
      <div class="topicInfo">
        <div class="line1">
          <div class="topicTitle">{{data[1].title}}</div>
        </div>
        <div class="line2">
          <div class="cont">{{data[1].subTitle}}</div>
        </div>
      </div>
      <div class="topicPic">
        <img class="topicPicImg" :src="data[1].picUrl" alt="">
        <div class="topicTag">
          <div class="tag">{{data[1].typeName}}</div>
        </div>
      </div>
    </div>
    <div class="items2">
      <div class="topicInfo">
        <div class="line1">
          <div class="topicTitle">{{data[2].title}}</div>
        </div>
        <div class="line2">
          <div class="cont">{{data[2].subTitle}}</div>
        </div>
      </div>
      <div class="topicPic">
        <img class="topicPicImg" :src="data[2].picUrl" alt="">
        <div class="topicTag">
          <div class="tag">{{data[2].typeName}}</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    props:{
      data:Array
    },
    computed:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .NowRecommend
    margin-top 20px
    width (750/$rpx)
    heigh (700/$rpx)
    background: #fff



    .title
      float left
      width 100%
      height (120.1/$rpx)
      display flex
      justify-content center
      align-items center
      font-size (26/$rpx)
    .itemMain

      position relative
      width 100%
      height 100%
      text-align center
      border-bottom (186/$rpx) solid #fff
      a

        .itemMainImg
          width (688.4/$rpx)
          height (386.2/$rpx)
        .info
          .line1

            .Linetitle
              position absolute
              left 50px
              bottom -80px
              font-size (38/$rpx)
              color #333

            .price
              position absolute
              right 45px
              bottom -75px
              color #333
              font-size (35/$rpx)
          .line2
              margin-top 30px
              position absolute
              right 179px
              bottom -133px
            font-size (29/$rpx)




    .items1
      position relative
      width (687/$rpx)
      height (272.1/$rpx)
      border 1px solid lightgray


      border-radius 10px



      margin 0 auto 25px
      .topicInfo
        display flex
        flex-direction column
        justify-content center
        width (408.2/$rpx)
        height (272/$rpx)
        margin-left 30px
        .line1
          color #333
          .topicTitle
            font-size (30/$rpx)
            margin-bottom 16px
            white-space nowrap
            overflow hidden
            text-overflow: ellipsis;
        .line2
          .cont
            width (230/$rpx)
            font-size (26/$rpx)
            color #7e8c8d
            white-space nowrap
            overflow hidden
            text-overflow: ellipsis;
      .topicPic
        .topicPicImg
          position absolute
          right 0
          top 0
          width (279/$rpx)
          height (272/$rpx)
        .topicTag
          position absolute
          right 60px
          top 20px
          font-size (26/$rpx)
          background: #fff
          border-radius 9px
          padding 6px



    .items2
      position relative
      width (687/$rpx)
      height (272.1/$rpx)
      border 1px solid lightgray


      border-radius 10px



      margin 0 auto 25px
      .topicInfo
        display flex
        flex-direction column
        justify-content center
        width (408.2/$rpx)
        height (272/$rpx)
        margin-left 30px
        .line1
          color #333
          .topicTitle
            font-size (30/$rpx)
            margin-bottom 16px
            white-space nowrap
            overflow hidden
            text-overflow: ellipsis;
        .line2
          .cont
            width (230/$rpx)
            font-size (26/$rpx)
            color #7e8c8d
            white-space nowrap
            overflow hidden
            text-overflow: ellipsis;
      .topicPic
        .topicPicImg
          position absolute
          right 0
          top 0
          width (279/$rpx)
          height (272/$rpx)
        .topicTag
          position absolute
          right 60px
          top 20px
          font-size (26/$rpx)
          background: #fff
          border-radius 9px
          padding 6px












</style>
