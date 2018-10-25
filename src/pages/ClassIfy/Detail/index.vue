<template>
  <div class="listDetail" ref="scroll" :class="{'anim' : anim === true}" v-if="navDetail">
    <div class="warp">
      <div class="banner">
        <img :src="navDetail.wapBannerUrl" alt="">
      </div>
      <div class="detailTit">
          <span class="text">
            <span>{{navDetail.name}}</span>
            <span>分类</span>
          </span>
      </div>
      <section class="detail">
        <ul class="list">
          <li class="item" v-for="(item) in navDetail.subCateList" :key="item.id">
            <a href="javascript:;">
              <img :src="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        anim: false
      }
    },
    mounted(){
      this.$store.dispatch('getNavDetail', () => {
        this.$nextTick(() => {
          this._initScroll()
        })
      })
    },
    computed:{
      ...mapState(['navDetail'])
    },
    methods:{
      _initScroll () {
        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        })
      }
    },
    watch: {
      navDetail: function () {
        this.anim = true
        this.timer = setTimeout(() => {
          clearTimeout(this.timer)
          this.anim = false
        }, 800)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  @keyframes animTop
    30%
      transform  translate3d(0, (-100/$rpx), 0)
    60%
      transform translate3d(0, (100/$rpx), 0)
    80%
      transform  translate3d(0, (-20/$rpx), 0)
    100%
      transform translate3d()
  .listDetail
    margin-left (162/$rpx)
    height (1104/$rpx)
    background #ffffff
    &.anim
      animation animTop .8s
    .warp
      margin-top 88px
      padding (30/$rpx) (30/$rpx) (21/$rpx)
      height auto
      background #ffffff
      .banner
        width 100%
        height (192/$rpx)
        border-radius 4px
        img
          width 100%
          height 100%
      .detailTit
        height (108/$rpx)
        line-height (108/$rpx)
        text-align center
        font-size (24/$rpx)
        color #333333
        .text
          position relative
          font-size 0
          >span
            font-size (24/$rpx)
          &:before,&:after
            position absolute
            content ''
            top (-20/$rpx)
            bottom 0
            margin auto
            height 1px
            width (40/$rpx)
            background-color #d9d9d9
          &:before
            left (-56/$rpx)
          &:after
            right (-56/$rpx)
      .detail
        >.list
          >.item
            display inline-block
            margin-right (34/$rpx)
            font-size 0
            width (144/$rpx)
            vertical-align top
            &:nth-child(2n/$rpx)
              margin-right (-10/$rpx)
            >a
              color #333333
              >img
                width (144/$rpx)
                height (144/$rpx)
              >span
                display block
                height (72/$rpx)
                line-height (34/$rpx)
                text-align center
                font-size (24/$rpx)
</style>
