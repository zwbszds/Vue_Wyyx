<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in msite.focusList" :key="index">
        <a href="javascript:;" class="link_to_good" >
          <img :src="item.picUrl" alt="">
        </a>

      </div>


    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import  {mapState} from 'vuex'
  import Swiper from 'swiper'

  import 'swiper/dist/css/swiper.min.css'
  export default {
    computed:{
      ...mapState(['msite'])
    },
    mounted(){
      this.$store.dispatch('getMsite',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {

            centeredSlides: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination'
            },
            loop:true
          })
        })
      })

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .swiper-container
    bottom-border-1px(#e4e4e4)
    height (400/$rpx)
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img
          width 100%
          height 100%
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774




</style>
