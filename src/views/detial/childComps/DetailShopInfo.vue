<template>
  <div v-if="Object.keys(shop).length !== 0">
     <div class="shop-info">
    <div class="shop-top">
      <div class="shop-top-img">
           <img :src="shop.brandLogoFull">
      </div>
      <span class="title">{{shop.storeInfo.storeName}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.storeServiceCapability.storeScore}}
          </div>
          <div class="sells-text">店铺评分</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.storeServiceCapability.storeRankRate}}%
          </div>
          <div class="goods-text">店铺同品类排名比例</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr>
            <td>库存状态</td>
            <td class="score score-better" >{{saleStockStatus(shop.saleStockStatus)}}</td>
          </tr>
          <tr>
            <td>商品状态</td>
            <td class="score score-better" >{{status(shop.status)}}</td>
          </tr>
          <tr>
            <td>预付商品</td>
            <td class="score score-better" >{{isPrepay(shop.prepayInfo.isPrepay)}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
  </div>
  
</template>

<script>
	export default {
		name: "DetailShopInfo",
    props: {
		  shop: {
		    type: Object
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    },
    methods:{
      isPrepay(inter){
          if(inter=0){
            return "否"
          }else{
            return "是"
          }
      },
      status(inter){
          if(inter=0){
            return "下架"
          }else{
            return "上架"
          }
      },
      saleStockStatus(inter){
          if(inter=1){
            return "无"
          }else if(inter=2){
            return "有"
          }else{
            return "少"
          }
      }
    }
	}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }
   .shop-top-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
   }
  .shop-top img {
    width: 100%;
  }

  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
