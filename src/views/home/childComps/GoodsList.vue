<template>
  <div class="goods">
      <goods-list-item class="goods-list" v-for="(item,index) in goods" :goodsItem="item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    name:'GoodsList',
    data(){
      return {

      }
    },
    props:{
       goods:{
         type:Array,
         default(){
            return []
         }
       }
    },
    components:{
       GoodsListItem
    },
}
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
  }
  .goods-list{
     width: 46%;
     margin-right: 2%;
     margin-left: 2%;
  }
</style>