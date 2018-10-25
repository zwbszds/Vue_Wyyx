<template>
  <div class="profile">

    <ShopHeader/>
    <div class="loginTypesWrap">
      <div class="cont">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="button-block">
            <i class="loginPhone"></i>
            <span>手机号码登录</span>
          </div>
          <div class="button-ghostRed">
            <i class="loginMail"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn">
            <span>手机号快捷注册 ></span>
            <i class="right3"></i>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="otherAccount">-->
      <!--<a href="javascript:;">-->
        <!--<i class="icofont icon-weixin"></i>-->
        <!--<span>微信</span>-->
      <!--</a>-->
      <!--<a href="javascript:;">-->
        <!--<i class="icofont icon-qq"></i>-->
        <!--<span>QQ</span>-->
      <!--</a>-->
      <!--<a href="javascript:;">-->
        <!--<i class="icofont icon-weibo"></i>-->
        <!--<span>微博</span>-->
      <!--</a>-->
    <!--</div>-->


  </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader'
  export default {
    components:{
      ShopHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .profile
    background: #f4f4f4;
    width 100%
    height 100%
    .profileHeader
      background:#FAFAFA
      position relative
      width 100%
      height (88/$rpx)
      display flex
      .shouye
        position absolute
        left 19px
        top 17px
        flex-grow 1
        background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-repeat no-repeat
        width (48/$rpx)
        height (48/$rpx)
        background-position 1px -72px
      .font
        position absolute
        left 277px
        top 17px
        flex-grow 4
        background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-repeat no-repeat
        width (172/$rpx)
        height (54/$rpx)
        background-position 1px -127px
      .xunzhao
        position absolute
        left 580px
        top 17px
        flex-grow 1
        background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-repeat no-repeat
        width (65/$rpx)
        height (65/$rpx)
        background-position 1px -343px
      .shop
        position absolute
        right 19px
        top 4px
        flex-grow 1
        background-image: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-repeat no-repeat
        width (65/$rpx)
        height (65/$rpx)
        background-position 1px 2px
        float right



    .loginTypesWrap
      width 100%
      height (624/$rpx)
      .logoWrap
        position relative
        width 100%
        height (410/$rpx)
        img
          display block
          width (268/$rpx)
          height (90/$rpx)
          position absolute
          top 50%
          left 50%
          margin-left -(134/$rpx)
          margin-top -(45/$rpx)

      .btnWrap
        width 100%
        height (293.64/$rpx)
        position relative
        .button-block
          margin 0 auto
          width (670/$rpx)
          height (94/$rpx)
          background: #b4282d
          display flex
          justify-content center
          align-items center
          margin-bottom 30px
          span
            font-size (32/$rpx)
            color white
        .button-ghostRed
          margin 0 auto
          display flex
          justify-content center
          align-items center
          width (670/$rpx)
          height (94/$rpx)
          border #b4282d solid 1px
          margin-bottom 30px
          span
            font-size (32/$rpx)
            color: #b4282d

        .btn
          font-size (32/$rpx)
          text-align center
    .otherAccount
      display flex
      justify-content center
      align-items: flex-end;

      i
        width (40/$rpx)
        height (40/$rpx)
        font-size (40/$rpx)
      span
        font-size (32/$rpx)



</style>
