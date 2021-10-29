<template>
     <div class="goods-item" @click="goToDetail">
      <img v-lazy="goodsItem.goodsMainPicture" alt="" @load="imageload">
      <div class="goods-info">
        <p>{{goodsItem.goodsName}}</p>
        <span class="price">¥{{goodsItem.vipPrice}}</span>
        <span class="brand" v-show="isbrand">{{goodsItem.brandName}}</span>
      </div>
    </div>
</template>

<script>
export default {
    props:{
       goodsItem:{
         type:Object,
         default(){
            return {}
         }
       },
       isbrand:{
         type:Boolean,
         default:true
       }
    },
    methods: {
      goToDetail(){
        // 1.获取iid
        //let iid = this.goods.iid;
         
        // 2.跳转到详情页面
        //this.$router.push({path: '/detail', query: {iid}})
        this.$router.push('/detial/'+ this.goodsItem.goodsId)
        //3.销毁滚动
        this.$bus.$emit('destroy')
      },
      //监听图片加载完
      imageload(){
         this.$bus.$emit('itemImageLoad')
      }
      
    },
    computed: {
      getImg() {
        //return this.goods.img || this.goods.image || this.goods.show.img
      }
    },
}
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .brand {
    position: relative;
  }

  .goods-info .brand::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>