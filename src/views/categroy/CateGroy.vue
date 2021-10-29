<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories"
                @selectItem="selectItem"></tab-menu>
      <scroll ref="scroll" id="tab-content" :data="[categoryData]"
       :probeType = "3"
        @scroll="contentScroll"
        :pullUpLoad="true"
        @pullingUp="pullingUp">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <!-- <tab-control class="tab-flex" :titles="['超高佣', '出单爆款']"
                       @tabClick="tabClick"></tab-control> -->
          <tab-content-detail :category-detail="categories_deliver"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import TabMenu from './childComps/TabMenu'
  import TabControl from 'components/content/tabControl/TabControl'
  import Scroll from 'components/common/scroll/Scroll'
  import TabContentCategory from './childComps/TabContentCategory'
  import TabContentDetail from './childComps/TabContentDetail'

  import {getCateGoods} from "network/category";
  import {tabControlMixin} from "commonjs/mixin";
  import {categoriesList} from "commonjs/const";
  import {dbounce} from 'commonjs/utils'

  export default {
		name: "Category",
    components: {
		  NavBar,
      TabMenu,
      TabControl,
      Scroll,
      TabContentCategory,
      TabContentDetail
    },
    mixins: [tabControlMixin],
    data() {
		  return {
        categoryData: {
        },
        categories:categoriesList,
        categories_deliver:null,
        currentMenu:'女装精选',
        currentTabIndex:0,
        pulltrue:false
       }
    },
    beforeCreate(){
       //this.categories = categoriesList
       
    },
    created() { 
		  // 1.请求分类数据
      //this._getCategory()
      //console.log(this.categories)
      this.getCateGoods()
      this.categories_deliver = this.current_object()
      // for(){

      // }
    },
    activated(){
        this.$refs.scroll.refresh()
    },
    computed: {
		  showSubcategory() {
		  //   if (this.currentIndex === -1) return {}
      //   return this.categoryData[this.currentIndex].subcategories
      },
      showCategoryDetail() {
		  //   if (this.currentIndex === -1) return []
		  //   return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    activated(){
        this.$refs.scroll.refresh()
        this.$refs.scroll.scrollTo(0, this.categories[this.currentMenu].scrh, 0)
     },
    mounted(){
       //监听item中图片加载完
        const refresh = dbounce(this.$refs.scroll.refresh,50)
        this.$bus.$on('itemImageLoad',() => {
            this.$refs.scroll.refresh() 
        })
    },
    methods: {
      contentScroll(position) {
        this.categories[this.currentMenu].scrh = position.y
      },
      //侦测上拉加载
      pullingUp(){
        this.pulltrue = true
        this.$refs.scroll.refresh() 
        this.getgoodsmeth(this.currentTabIndex,this.currentMenu)
      },
      //当前应该传过去显示的数据
      current_object(currentMenu = '女装精选',currentTabIndex = 0){
         return this.categories[currentMenu]['list'][currentTabIndex]
      },
      getCateGoods(channelType = 0,jxCode = '女装精选'){
          //var newArr = this.goods.filter(item => item.cat_id = cat_id) 
         let min;
         if(this.pulltrue){
            min = this.categories[jxCode]['list'][channelType+2] + 1
         }else{
            min = this.categories[jxCode]['list'][channelType+2]
         }
         let jxCodecode = this.categories[jxCode].jxCode
         getCateGoods(channelType,min,jxCodecode).then(res => {
             this.categories[jxCode]['list'][channelType+2] = min
             let itemz = res.data.data
             this.categories[jxCode]['list'][channelType].push(...itemz)
             this.$refs.scroll.finishPullUp()
             this.$refs.scroll.refresh()
             this.pulltrue = false
         }).catch(err => {
             console.log(err)
         })
        },
		  
      // /**
      //  * 事件响应相关的方法
      //  */
      getgoodsmeth(curr,menu){
        this.getCateGoods(curr,menu)
        this.categories_deliver = this.current_object(menu,curr)
      },
      tabClick(index){
        this.currentTabIndex=index;
        this.getgoodsmeth(this.currentTabIndex,this.currentMenu)
      },
      selectItem(index) {
        this.currentMenu = Object.keys(this.categories)[index];
        this.getgoodsmeth(this.currentTabIndex,this.currentMenu)
        this.$refs.scroll.scrollTo(0, this.categories[this.currentMenu].scrh, 0)
      }
    }
	}
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  </style>
