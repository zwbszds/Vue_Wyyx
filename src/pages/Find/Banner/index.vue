<template>
  <div class="swiper">
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in data " :key="index">
          <img :src="item.picUrl">
          <div class="content">
            <div class="subTitle">{{item.subTitle}}</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'


  import 'swiper/dist/css/swiper.min.css'
  export default {
    props:{
      data:Array
    },
    mounted(){
      new Swiper('.swiper-container', {

        centeredSlides: true,

        pagination: {
          el: '.swiper-pagination'
        },
        loop:true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .swiper
    background: #fff
    border-top  24px solid #fff
    border-bottom  24px solid #fff
    .swiper-container

      width (690.3/$rpx)
      height (385.2/$rpx)
      .swiper-wrapper
        width (690.3/$rpx)
        height (385.2/$rpx)
        .swiper-slide
          width (690.3/$rpx)
          height (385.2/$rpx)
          img
            width (670.3/$rpx)
            height (385.2/$rpx)
            border-radius 20px






</style>
