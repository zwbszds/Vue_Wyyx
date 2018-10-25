<template>
 <div class="find" v-if="findData.recommend||findData.zhen||findData.yxLook">

   <ShopHeader/>
   <Banner :data="findData.banner"/>
   <TopicList :data="findData.column"/>
   <NowRecommend :data="findData.recommend.Item"/>
   <TopicShow :data="findData.tenfifteen"></TopicShow>
   <NowRecommend :data="findData.zhen.Item"/>
   <section class="look">
     <div class="title">严选LOOK</div>

     <a href="javascript:;">
       <img :src="findData.yxLook.picUrl" alt="">
       <div class="authorContainer">
         <div class="author">
           <div class="authorPic">
             <img :src="findData.yxLook.avatar" alt="">
           </div>
           <div class="authorName">{{findData.yxLook.nickname}}</div>
         </div>
       </div>
       <div class="desc">{{findData.yxLook.content}}</div>
     </a>
   </section>
   <MoveTopic :data="findData.yxWeek"></MoveTopic>



 </div>
</template>

<script>
  import ShopHeader from '../../components/ShopHeader'
  import  Banner from './Banner'
  import  TopicList from './TopicList'
  import TopicShow from './TopicShow'
  import NowRecommend from './NowRecommend'
  import MoveTopic from './MoveTopic'

  import {mapState} from 'vuex'
  import Swiper from 'swiper'


  import 'swiper/dist/css/swiper.min.css'

  export default {
    computed:{
      ...mapState(['findData'])
    },
    mounted(){
      this.$store.dispatch('getFindData')
    },


    components:{
      ShopHeader,
      Banner,
      TopicList,
      NowRecommend,
      TopicShow,
      MoveTopic
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .find
    background: #f4f4f4
    .look
      background #ffffff
      margin-bottom 20px
      text-align center
      .title
        line-height 105px
        width (750/$rpx)
        height (120/$rpx)
        font-size (35/$rpx)
      img
        width 100%
        height auto
      .authorContainer

        .author
          display flex
          align-items center
          font-size (30/$rpx)

          .authorPic
            width (50/$rpx)
            height (50/$rpx)
            border-radius 50%
            margin-right (10/$rpx)
            margin-left (10/$rpx)
            border 1px solid #d9d9d9
            overflow hidden
          .authorName
            color: #333;
            font-size (28/$rpx)
            letter-spacing (4/$rpx)
            margin-left (20/$rpx)
            ellipsis()
      .desc
        font-size (28/$rpx)
        color #7f7f7f
        line-height 1.6
        padding (10$rpx) (30/$rpx) (20/$rpx)


</style>
