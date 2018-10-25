<template>
  <div class="loginContainer">
    <ShopHeader/>
    <div class="loginInner">
      <div class="login_header">
        <div class="header_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="网易严选">
        </div>
        <div class="login_header_title">
          <a href="javascript:;">账号登录</a>
        </div>
      </div>
      <div class="login_type">
        <div class="login_type_username">
          <input type="text" placeholder="手机/邮箱/用户名">
        </div>
        <div class="login_type_pwd">
          <input type="text" placeholder="密码">
          <div class="switch_button off">
            <div class="switch_circle"></div>
            <span class="switch_text">...</span>
          </div>
        </div>
        <div class="login_type_captcha">
          <input type="text" placeholder="验证码">
          <img src="../../common/images/captcha.svg" alt="captcha">
        </div>
      </div>
      <div class="login_content">
        <button class="login_submit">登录</button>
        <button class="login_button" @click="$router.replace('/personal')">其他登录方式</button>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 10rem
    height 100%
    background #fff
    .loginInner
      padding-top (60/$rem)
      width 80%
      margin 0 auto
      .login_header
        width 100%
        margin-top (100/$rem)
        .header_img
          text-align center
          padding-bottom 0.13333rem
          img
            width (268/$rem)
            height (90/$rem)
        .login_logo
          font-size (40/$rem)
          font-weight bold
          color #b4282d
          text-align center
        .login_header_title
          margin-top (40/$rem)
          text-align center
          >a
            color #b4282d
            font-size (30/$rem)
            padding-bottom (4/$rem)
            font-weight bold
      .login_type
        margin-top (170/$rem)
        .login_type_username
          input
            font-size 0.4rem
            height (90/$rem)
            width 100%
            border (1/$rem) #666 solid
            padding-left (10/$rem)
        .login_type_pwd
          input
            font-size 0.4rem
            height (90/$rem)
            width 100%
            border (1/$rem) #666 solid
            margin (30/$rem) 0
            padding-left (10/$rem)

          .switch_button
            font-size (20/$rem)
            border (1/$rem) solid #ddd
            border-radius (8/$rem)
            transition background-color .3s,border-color .3s
            padding 0 (6/$rem)
            width (70/$rem)
            height (31/$rem)
            line-height (16/$rem)
            color #fff
            position absolute
            top 50%
            right (85/$rem)
            transform translateY(-50%)
            &.off
              background #fff
              .switch_text
                float right
                color #ddd
                font-size (30/$rem)
            &.on
              background #b4282d
            >.switch_circle
              //transform translateX(40px)
              position absolute
              top -1px
              left -1px
              width (30/$rem)
              height (30/$rem)
              border 1px solid #ddd
              border-radius 50%
              background #fff
              box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
              transition transform .3s
        .login_type_captcha
          input
            font-size 0.4rem
            height (90/$rem)
            width 100%
            border 1px #666 solid
            padding-left (10/$rem)
          img
            position absolute
            top 56%
            right (60/$rem)
            width (300/$rem)
            height (100/$rem)
        input::-webkit-input-placeholder
          font-size 0.4rem
      .login_content
        .login_submit
          display block
          width 100%
          height (94/$rem)
          margin-top (30/$rem)
          border-radius (4/$rem)
          background #b4282d
          color #fff
          text-align center
          font-size (30/$rem)
          line-height (42/$rem)
          border 0
        .login_button
          width 100%
          height (94/$rem)
          border-radius (4/$rem)
          text-align center
          font-size (30/$rem)
          line-height (42/$rem)
          border 1px #b4282d solid
          background #fff
          color #b4282d
          margin-top (20/$rem)
      .about_us
        display block
        font-size (30/$rem)
        margin-top (20/$rem)
        text-align center
        color #999
</style>

