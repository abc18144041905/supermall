<template>
  <grid-view>
    <goods-list-item v-for="(item, index) in categoryDetail" :key="index" :isbrand="isbrand" :goodsItem="item"></goods-list-item>
  </grid-view>
</template>

<script>
  import GridView from 'components/common/gridView/GridView'
  import GoodsListItem from 'views/home/childComps/GoodsListItem'

  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem
    },
    data(){
      return{
        isbrand:false
      }
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted(){
    },
    computed:{
      
      // categoryDetailli(){
      //     return categoryDetail
      // }
    }
  }
</script>

<style scoped>

</style>
