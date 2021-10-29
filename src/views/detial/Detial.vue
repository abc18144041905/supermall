<template>
     <div id="detial">
        <detail-nav-bar class="detail-nav" :currentIndex="currentIndex" @itemClick = "itemClick"></detail-nav-bar>
       <scroll class="content2" ref='scroll' @scroll="scrollH" :probeType = "3" 
           :pullUpLoad="true">
           <div>
            <detial-swiper ref="base" @overimgload="overimgload" :childrentopImages="topImages"></detial-swiper>
            <detail-base-info :goods="goods"></detail-base-info> 
            <detail-shop-info :shop="goods"></detail-shop-info>
            <detail-goods-info :detailImg="detailImg" @detiaimgover="detiaimgover" ref="detipicel"></detail-goods-info>
         </div>
       </scroll>
       <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
       <back-top @click.native="backTop" v-show="showBackTop">
                <img src="~assets/img/common/top.png" alt="">
            </back-top>
     </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetialSwiper from './childComps/DetialSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import BackTop from 'components/content/backtop/BackTop'
import DetailBottomBar from './childComps/DetailBottomBar'
import Toast from 'components/common/toast/Toast'

import {getGoodsDetial} from 'network/detial'

export default {
   name:'Detial',
   components:{
      DetailNavBar,
      DetialSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      BackTop,
      DetailBottomBar,
      Toast
   },
   data(){
     return{
        goodsId:null,
        topImages:[],
        goods:{},
        detailImg:[],
        showBackTop:false,
        detipictop:0,
        currentIndex:0,
     }
   },
   created(){
      this.goodsId = this.$route.params.goodsId
      getGoodsDetial(this.goodsId).then(res=>{
         //获取顶部轮播图数据
         this.goods = res.data.data
         this.topImages = this.goods.goodsCarouselPictures
         this.detailImg = this.goods.goodsDetailPictures
      })
   },
   methods:{
     overimgload(){
        this.$refs.scroll.refresh()
     },
     detiaimgover(){
        this.$refs.scroll.refresh()
        this.detipictop = this.$refs.detipicel.$el.offsetTop  
     },
     scroll(pos){
        
     },
     itemClick(index){
         if(index == 0){
            this.currentIndex = 0
            this.$refs.scroll.scrollTo(0, 0, 0)
         }else{
            this.currentIndex = 1
            this.$refs.scroll.scrollTo(0, -this.detipictop,0)
         }
         
         
     },
     backTop() {
         this.$refs.scroll.scrollTo(0, 0)
     },
     scrollH(position) {
		   // 2.决定backTop是否显示
          this.showBackTop = position.y < -800//-BACKTOP_DISTANC
          if(position.y > -this.detipictop){
              this.currentIndex = 0
          }else{
              this.currentIndex = 1
          }
     },
     addToCart(){
        //获取购物车需要展示的信息
        const product = {}
        product.img = this.topImages[0]
        product.title = this.goods.goodsName
        product.desc = this.goods.goodsDesc
        product.price = this.goods.vipPrice
        product.goodsId = this.goodsId
        //this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
            this.$toast.show(res,1500)
        })
        
     }
   },
   mounted(){
      
      // setInterval(()=>{
      //     console.log(this.$refs.scroll.scroll)
      //  this.$refs.scroll.refresh()
      // },200)
      this.$refs.scroll.refresh()
      //this.$refs.scroll.scrollTo(0, 0, 0)
   },
   watch:{
      detailImg(){
         this.$refs.scroll.refresh()
      }
   }
}
</script>

<style scope>
 #detial{
    position: relative;
    background-color: #fff;
    z-index: 10;
    height: 100vh;
 }
 .content2{
   height:calc(100% - 54px);
   overflow: hidden;
 }
 .detail-nav{
    position: relative;
    z-index: 12;
    background-color: #fff;
 }
</style>