<template>
     <div id="home">
        <nav-bar class="home-nav">
             <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banner" ref="hSwiper"></home-swiper>
        <recommend-view :recommends="recommend"></recommend-view>
        <feature-view></feature-view>
        <ul>
             <li>dasd</li>
             <li>xasxas</li>
             <li>xasx</li>
             <li>sxaasx</li>
             <li>saxas</li>
             <li>dasd</li>
             <li>xasxas</li>
             <li>xasx</li>
             <li>sxaasx</li>
             <li>saxas</li>
             <li>dasd</li>
             <li>xasxas</li>
             <li>xasx</li>
             <li>sxaasx</li>
             <li>saxas</li>
             <li>dasd</li>
             <li>xasxas</li>
             <li>xasx</li>
             <li>sxaasx</li>
             <li>saxas</li>
        </ul>

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
export default {
     name:'Home',
     components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView
     },
     data(){
         return{
            banner:[],
            dKeyword:[],
            keywords:[],
            recommend:[] 
         }
     },
     created(){
        //请求多个数据
        getHomeMultidata().then(res => {
             this.banner = res.data.banner.list
             this.dKeyword = res.data.dKeyword.list
             this.keywords = res.data.keywords.list
             this.recommend = res.data.recommend.list
        })  
     }
}
</script>

<style>
   #home{
        padding-top: 44px;
   }
   .home-nav{
        background-color: var(--color-tint);
        color: #ffffff;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
   }
</style>