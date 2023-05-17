import {request_dhgoods} from './request'
export function getGoodsDetial(id){
  //订单侠，唯品会联盟
  return request_dhgoods({
     url:'/vip/item_info',
     params:{
         apikey:'Ef3pZnara4FzEOeOZtyIesYXoh9VvCx3',
         //商品id
         id
     }
  })
}

// export class Goods {
//   constructor(itemInfo, columns, services) {
//     this.title = itemInfo.title;
//     this.desc = itemInfo.desc;
//     this.newPrice = itemInfo.price;
//     this.oldPrice = itemInfo.oldPrice;
//     this.discount = itemInfo.discountDesc;
//     this.columns = columns;
//     this.services = services;
//     this.nowPrice = itemInfo.highNowPrice;
//   }
// }