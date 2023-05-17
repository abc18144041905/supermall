<template>
     <div id="home">
        <nav-bar class="home-nav">
             <div slot="center">购物街</div>
        </nav-bar>
        <tab-control v-show="isTabFixed" class="fixtab-control" ref="tabControl1" @tabClick="tabClick" :titles="['超高佣','出单爆款']"></tab-control>
        <scroll class="content1" ref='scroll' 
           @scroll="contentScroll" 
           :probeType = "3" 
           :pullUpLoad="true"
            @pullingUp="loadMore">
            <div>
            <home-swiper @overimgload="overimgload" :banners="banner" ref="hSwiper"></home-swiper>
            <recommend-view :recommends="recommend"></recommend-view>
            <feature-view></feature-view>
            <tab-control ref="tabControl2" @tabClick="tabClick" :titles="['超高佣','出单爆款']"></tab-control>
            <goods-list :goods="goods[currentType].list"></goods-list>
            
            </div>
            <p class="loadShow" v-show="loadShow">加载中...</p>
            <p class="noAll" v-show="noAll">--我也是有底线的--</p>
        </scroll>
        <back-top @click.native="backTop" v-show="showBackTop">
           <img src="~assets/img/common/top.png" alt="">
        </back-top>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata,getHomeGoods} from 'network/home'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from './childComps/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'
import {dbounce} from 'commonjs/utils'

export default {
     name:'Home',
     components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
     },
     data(){
         return{
            banner:[],
            recommend:[],
            goods:{
               "0":{page:0,list:[]},//女装1
               "1":{page:0,list:[]},//儿童8
            },
            currentType:0,
            showBackTop:false,
            isTabFixed: false,
            tabOffsetTop: 0,
            loadShow:false,
            mumall:null,
            noAll:false,
            saveY:0,
            scrolllisth:[],
         }
     },
     created(){
        //请求多个数据
        this.getHomeMultidata()
        this.getHomeGoods(0)
        this.getHomeGoods(1)
     },
     mounted(){
        //监听item中图片加载完
        const refresh = dbounce(this.$refs.scroll.refresh,50)
        this.$bus.$on('itemImageLoad',() => {
            this.$refs.scroll.refresh() 
        })
     },
     activated(){
        this.$refs.scroll.refresh()
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
     },
     deactivated(){
        this.saveY = this.$refs.scroll.scroll.y
     },
     methods:{
        //存储当前要缓存页面的高度

        //检查一张轮播图加载完获取TabControl的高度
        overimgload(){
          let once = false
           //获取tabControl的offsettop值,所有组件都有$el,用于获取组件的元素的
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
          this.scrolllisth[0] = this.scrolllisth[1] = -this.tabOffsetTop
        },
        //事件监听相关
        tabClick(index){
            //this.leavelist(this.currentType)
            this.$refs.scroll.scroll.stop()
            this.currentType = index
            switch(index){
                case 0:
                this.$refs.scroll.scrollTo(0,this.scrolllisth[index],0)
                break
                case 1:
                this.$refs.scroll.scrollTo(0,this.scrolllisth[index],0)
                break
            }
            this.isAave = true
            this.noAll = false
            this.loadShow = false
            this.$refs.tabControl2.currentIndex = index
            this.$refs.tabControl1.currentIndex = index
        },
        //监听上拉加载
        loadMore(){
           this.getHomeGoods(this.currentType)
           if(this.noAll != true){
               this.loadShow = true
           }
        },
        contentScroll(position) {
		    // 1.决定tabFixed是否显示
            this.isTabFixed = position.y < -this.tabOffsetTop;
          // 2.决定backTop是否显示
            this.showBackTop = position.y < -800;
          //存储当前要缓存页面的高度
          this.scrolllisth[this.currentType] = this.$refs.scroll.scroll.y
        },
        backTop() {
            this.$refs.scroll.scrollTo(0, 0)
        },
        //网络请求相关
        getHomeMultidata(){
           getHomeMultidata().then(res => {
             this.banner = res.data.banner.list
             this.dKeyword = res.data.dKeyword.list
             this.keywords = res.data.keywords.list
             this.recommend = res.data.recommend.list
           })
        },
        getHomeGoods(channelType){
          const min = this.goods[channelType].page + 1
          getHomeGoods(channelType,min).then(res => {
             this.goods[channelType].page = min
             const itemz = res.data.data
             if(itemz == null){
                this.noAll = true
                this.loadShow = false
             }else{
               this.goods[channelType].list.push(...itemz)
               this.noAll = false
               this.loadShow = false
             }
             this.$refs.scroll.finishPullUp()
             this.$refs.scroll.refresh()
         }).catch(err => {
             console.log(err)
         })
        }
     }
}
</script>

<style>
   #home{
        height: 100vh;
   }
   .home-nav{
        background-color: var(--color-tint);
        color: #ffffff;
   }
   .content1{
      position: absolute;
      width: 100%;
      height:calc(100% - 93px);
      overflow: hidden;
   }
   .fixtab-control{
      position: fixed;
      top: 44px;
      left: 0;
      right: 0;
   }
  .loadShow,.noAll{
     line-height: 40px;
     text-align: center;
  }
</style>