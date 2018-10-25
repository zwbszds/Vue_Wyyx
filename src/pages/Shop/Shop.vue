<template>
  <div class="shop">
    <div class="shopHeader">
      <div class="shopContainer">购物车</div>
    </div>
    <div class="serviceWrap">
      <div class="serviceList">
        <div class="serviceItem">
          <div class="serviceLine"></div>
          <span>30天无忧退货</span>
        </div>
        <div class="serviceItem">
          <div class="serviceLine"></div>
          <span>48小时快速退款</span>
        </div>
        <div class="serviceItem">
          <div class="serviceLine"></div>
          <span>满88元免邮费</span>
        </div>
      </div>
      <div class="defaultPage">
        <div class="container">
          <div class="img"></div>
          <div class="txt">
            <div class="noCart-login">
              <div class="noCart-title">去添加点什么吧</div>

                <div class="noCart-btn"@click="$router.replace('/profile')">登录</div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "../../../static/css/reset.css"
  @import "../../common/stylus/mixins.styl"
  .shop
    width 100%
    height 100%

    .shopHeader
      background:#FAFAFA
      width 100%
      height (88/$rpx)
      display flex
      justify-content center
      align-items center
      .shopContainer
        display flex
        align-items center
        width (108/$rpx)
        height (88/$rpx)
        font-size (37/$rpx)
        white-space nowrap
    .serviceWrap
      width 100%
      height (1168/$rpx)
      background: #f4f4f4;
      .serviceList
        width 100%
        height (70/$rpx)
        display flex
        justify-content: space-around;
        align-items center
        .serviceItem
          display flex
          margin-left 10px
          line-height (73/$rpx)
          span
            font-size (26/$rpx)


      .defaultPage

        width 100%
        height 100%
        .container
          width 100%
          height 100%
          position relative
          display flex
          justify-content center
          align-items center
          .img
            background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png")
            width (248.13/$rpx)
            height (248.13/$rpx)
            position fixed
            left 0
            right 0
            bottom 0
            top 0
            margin auto
          .txt
            display flex
            justify-content center
            align-items center
            position absolute
            left 142px
            top  616px
            .noCart-login
              width 100%
              height (170/$rpx)
              .noCart-title
                display flex
                justify-content center
                align-items center
                width 100%
                height (28/$rpx)
                font-size (28/$rpx)
              .noCart-btn
                margin-top 30px
                display flex
                justify-content center
                align-items center
                width (480.2/$rpx)
                height (92/$rpx)
                background: #b4282d
                font-size (36/$rpx)
                color white

</style>
