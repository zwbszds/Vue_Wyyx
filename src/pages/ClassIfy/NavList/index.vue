<template>
  <div class="listMenu">
    <div class="inner" ref="scroll">
      <ul>
        <li class="item" :class='{"active":navIndex===index}' v-for="(item,index) in navData" :key="index"
        @click="currentIndex(index)">
          <a href="javascript:;">
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {

    mounted(){


     this.$store.dispatch('getNavData',()=>{
          this.$nextTick(()=>{

            //页面渲染完成后才可以滑动
            this._initScroll()
          })
      })

    },


    methods:{
      _initScroll(){

        new BScroll (this.$refs.scroll, {
          click: true,
          startY: 0
        })

      },
      currentIndex (index) {
        this.$store.dispatch('setNavIndex',index)
        this.$store.dispatch('getNavDetail')
      }
    },
    computed:{
      ...mapState(['navData','navIndex']),


    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .listMenu
    position fixed
    top (88/$rpx)
    left 0
    bottom 0
    z-index 4
    width (162/$rpx)
    background-color #ffffff
    &:after
      content ''
      position absolute
      background-color rgba(0,0,0,.15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      max-height (1104/$rpx)
      padding-top (40/$rpx)
      overflow hidden
      >ul
        padding-bottom (138/$rpx)
        >.item
          width 100%
          height (76/$rpx)
          line-height (76/$rpx)
          text-align center
          border none
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width (6/$rpx)
              background-color skyblue
            >a
              font-size (36/$rpx)
              line-height (76/$rpx)
              font-weight 700
              color $main
          +.item
            margin-top (20/$rpx)
          >a
            display block
            color #333333
            font-size (28/$rpx)
            line-height (56/$rpx)
            ellipsis()
</style>
