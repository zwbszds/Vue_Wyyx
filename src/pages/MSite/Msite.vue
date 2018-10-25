<template>
  <div class="msite">
    <GoTop></GoTop>
    <div class="mSiteHeader" >
      <div class="msiteLogo">
        <a href="javascript:;" class="logo">网易严选</a>
        <div class="search">
          <i class="search-icon iconfont icon-sousuo"></i>
          <span>搜索商品，共13018款好物</span>
        </div>
      </div>
    </div>

    <div class="mSiteScroll">
      <ul class="scrollUl">
        <li >推荐</li>
        <li>居家</li>
        <li>鞋包配饰</li>
        <li>服装</li>
        <li>电器</li>
        <li>电器</li>
        <li>电器</li>
        <li>电器</li>
      </ul>
    </div>
    <Banner/>



    <ul class="service">
      <li class="service_item iconfont icon-duigou01"><span>网易自营品牌</span></li>
      <li class="service_item iconfont icon-duigou01"><span>30天无退货</span></li>
      <li class="service_item iconfont icon-duigou01"><span>48小时快速退款</span></li>
    </ul>
    <div class="line"></div>
    <div class="good">
      <div class="header">
        <div class="goodTitle">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-duigou01"></i>
        </div>
      </div>
      <div class="goodList">
        <div class="gooditem" v-for="(item, index) in msite.tagList" :key="item.id" >


          <div class="titleFont">
            <span class="maker">{{item.name}}</span><br>
            <span class="goodPrice"> {{item.floorPrice}}元起</span>
          </div>
          <div class="titleImg">
            <img :src="item.picUrl" alt="">
          </div>
        </div>

      </div>
    </div>

    <div class="newList">
      <header class="newHeader">
        <span>新品首发</span><br>

        <div class="all">查看全部 ></div>
      </header>
      <NewGoodsList :data="msite.newItemNewUserList"/>
      <header class="newHeader">
        <span>人气推荐 好物精选</span><br>

        <div class="all">查看全部 ></div>
      </header>
      <NewGoodsList :data="msite.popularItemList"/>
    </div>
    <div class="line"></div>
    <div class="countDown">
      <a href="javascript:;">
        <div class="itemLeft">
          <div class="title">严选限时购</div>
          <div class="countNum">
            <span class="time">00</span>
            <span class="colon">:</span>
            <span class="time">27</span>
            <span class="colon">:</span>
            <span class="time">25</span>
          </div>
          <div class="nextTitle">下一场 22:00  开始</div>
        </div>
        <div class="itemRight">
          <img src="http://yanxuan.nosdn.127.net/8a0e23ce62ec9eb03d400f9cabc5a29e.png?imageView&quality=85&thumbnail=330x330" alt="">
          <div class="price">
            <span class="now">¥309</span>
            <span class="old">¥399</span>
          </div>
        </div>
      </a>
    </div>






    <div class="mSale">
      <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
    </div>


    <div class="line"></div>

    <Subjects :data="msite.topicList"></Subjects>

    <div class="line"></div>

    <GoodsShow :data="msite.cateList"/>
    <div class="line"></div>





    <FooterGuide/>
  </div>


</template>

<script>
  import Banner from './Banner/index.vue'
  import NewGoodsList from './NewGoodsList'
  import Subjects from './Subjects'
  import GoodsShow from './GoodsShow/index.vue'
  import GoTop from '../../components/GoTop'
  import {mapState} from 'vuex'



  import BScroll from 'better-scroll'


  export default {


   computed:{
     ...mapState(['msite'])

   },

    mounted(){



      new BScroll('.mSiteScroll',{
        click: true,
        scrollX:true,
        scrollY:false
      });


    },
    components:{
      Banner,
      NewGoodsList,
      Subjects,
      GoodsShow,
      GoTop
    }
  }



</script>


<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"


  .msite
    background-color #f4f4f4
    width 100%
    height 100%

    .mSiteHeader
      width 100%
      .msiteLogo
        width 100%
        height (88/$rpx)
        background-color: #fff
        .logo
          width (138/$rpx)
          display inline-block
          height (40/$rpx)
          font-size (33/$rpx)
          margin-top 14px
          margin-left 23px
          vertical-align middle
          line-height (44/$rpx)
          color #000

        .search
          margin 14px 30px 0 0
          line-height 100%
          background-color: #ededed
          width (532/$rpx)
          height (56/$rpx)
          float right
          display: flex
          vertical-align middle
          justify-content:center;
          border-radius 10px
          .search-icon
            margin-top 10px
          span
            font-size (30/$rpx)
            text-align center
            margin-right (5/$rpx)
            color: #7e8c8d


          .iconfont
            font-size  (35/$rpx)
            line-height (28/$rpx)
            color: #7e8c8d



    .mSiteScroll
      width (750/$rpx)
      height (60/$rpx)
      display flex
      align-items center
      .scrollUl
        height 100%
        display flex
        align-items: center
        background-color: #fff
        >li
          white-space nowrap
          margin 0 40px
          height (60/$rpx)
          display flex
          align-items center
          line-height (30/$rpx)
          font-size (30/$rpx)




    .service
      width 100%
      height (73/$rpx)
      display flex
      justify-content: space-around;
      background: #fff
      >li
        float left
        margin-left 10px
        line-height (73/$rpx)
        .iconfont
          font-size (32/$rpx)
        span
          font-size (26/$rpx)
    .line
      float left
      width 100%
      height (18/$rpx)
      background: #f4f4f4
    .good
      overflow hidden
      height (586/$rpx)
      width 100%
      background: #fff
      .header
        background: #fff
        height (110/$rpx)
        display flex
        justify-content center
        align-items center
      .goodTitle
        >span
          font-size (33/$rpx)
        .iconfont
          font-size (33/$rpx)



      .gooditem
          display flex
          justify-content center
          align-items center
          position relative
          padding 17px
          box-sizing border-box
          float left
          width (365/$rpx)
          height (236/$rpx)
          margin-left 10px
          margin-bottom 10px
         .titleImg
            background-color: #efefef
            width (355.2/$rpx)
            height (236.1/$rpx)
            img

              width 100%
              height 100%
         .titleFont
           position absolute
           top 4px
           left 39px
           margin-bottom 10px
           .maker
            font-size (26/$rpx)
           .goodPrice
              font-size (26/$rpx)



    .newList
      float left
      width 100%
      .newHeader
        position relative
        width 100%
        height (261/$rpx)
        display flex
        flex-direction column

        align-items cen
        justify-content: space-between
        background-image url("./images/new.png")
        background-size: 100%;
        background-repeat no-repeat
        border-top solid #f4f4f4 (20/$rpx)
        margin-top (10/$rpx)

        span
          text-align center
          line-height (130/$rpx)
          font-size (35/$rpx)
          color #9BC2E7
        .all
          width (240.1/$rpx)
          height (50/$rpx)
          font-size (28/$rpx)
          background-color #D8E5F1
          position absolute
          left 260px
          top  148px
          text-align center
          line-height 100%
          box-sizing border-box
          padding 10px
          color #9BC2E7



    .countDown
      float left
      width 100%
      height (380/$rpx)


      a
        position relative
        .itemLeft
          float left
          width (334.2/$rpx)
          height (320.2/$rpx)
          position absolute
          left 59px
          top 100px
          .title
            font-size (36/$rpx)
            color #333
            letter-spacing 8px;
            margin-bottom 20px
          .countNum
            margin-bottom 25px
            .time

              background-color: #444
              width (62/$rpx)
              height (56/$rpx)
              color: #fff
              font-size (35/$rpx)
          .nextTitle
            font-size (24/$rpx)
        .itemRight
          float right
          width (320.2/$rpx)
          height (320.2/$rpx)
          position relative
          .price
            width (100/$rpx)
            height (100/$rpx)
            background: rgba(244,143,24,.95)
            border-radius 100%
            position absolute
            bottom 0
            right 0
            display flex
            flex-direction column
            justify-content center
            align-items center
            .now
              font-size (27/$rpx)
              color #fff
            .old
              font-size (27/$rpx)
              color #fff







    .mSale
      >img
        border-bottom  solid  15px  #f4f4f4
        border-top solid  15px  #f4f4f4
        width 100%
        height (300/$rpx)


</style>
