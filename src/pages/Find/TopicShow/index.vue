<template>
  <div class="topicShow">
    <div class="title">十点一刻</div>
    <div class="topicShowContainer">
      <div class="topicShowList">
        <div class="topicShowItem" v-for="item in data" :key="item.id">
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">-—  今日话题    —-</span>
            </div>
            <div class="tsTitle">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">{{item.participantNum}}人参与话题</div>
          </a>
        </div>
        <div class="lastItem">
          <a href="javascript:;">
            <div class="move">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </a>
        </div>
      </div>
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
      new BScroll('.topicShowContainer',{
        click: true,
        scrollX:true,
        scrollY:false
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .topicShow
    width (750/$rpx)
    height (411.2/$rpx)
    background: #fff
    box-sizing border-box

    .title
      display flex
      justify-content center
      align-items center
      width 100%
      height (120/$rpx)
      font-size (28/$rpx)

    .topicShowContainer
      margin-left 30px
      width 100%
      height (411/$rpx)
      display flex
      .topicShowList
        margin 0 auto
        height (411/$rpx)
        display flex
        align-items center

        .topicShowItem

          margin-right 20px
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png")
          width (583/$rpx)
          height (411/$rpx)
          display flex
          flex-direction column
          justify-content center
          align-items: center
          text-align center
          .lineTitle
            width 100%
            height 100%
            text-align center
            .inner
              position absolute
              left 169px
              top 52px
              width (90/$rpx)
              height (25/$rpx)
              font-size (25/$rpx)

              white-space nowrap



          .tsTitle
            width (500.3/$rpx)
            height (40/$rpx)
            font-size (40/$rpx)
            color: #000
            white-space nowrap
          .desc
            width (500.3/$rpx)
            height (40/$rpx)
            font-size (0/$rpx)
            white-space nowrap
          .joinInfo
            margin-left 161px
            width (173.5/$rpx)
            height (48/$rpx)
            font-size (28/$rpx)
            white-space nowrap


        .lastItem
          a
            position relative
            display inline-block
            width (580/$rpx)
            height (385/$rpx)
            border 10px solid #e6e6e6
            padding 0
            background-color #fafafa
            >.move
              position absolute
              top 0
              right 0
              left 0
              bottom 0
              margin auto
              width (240/$rpx)
              height (38/$rpx)
              display flex
              align-items center
              >span
                color #7f7f7f
                font-size (32/$rpx)
                line-height (38/$rpx)
                margin-right (18/$rpx)
              >i
                display inline-block
                width (30/$rpx)
                height (30/$rpx)
                background url('../../../assets/images/right.png')
                background-repeat no-repeat
                background-size 100% 100%


</style>
