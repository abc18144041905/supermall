// import axios from 'axios'
import {request_dhgoods} from './request'
//http://api.tbk.dingdanxia.com/vip/goodsList?apikey=Ef3pZnara4FzEOeOZtyIesYXoh9VvCx3&channelType=1&page=1
export function getCateGoods(channelType,page,jxCode){
  return request_dhgoods({
     url:'/vip/goodsList',
     params:{
         apikey:'Ef3pZnara4FzEOeOZtyIesYXoh9VvCx3',
         //请求类型默认频道0,1
         sourceType:1,
         //频道类型:0-超高佣，1-出单爆款（不支持排序）; 当请求类型为频道时必传
         channelType,
         // 女装精选7hfpy0m4 ,男装精选 wj7evz2j,美妆精选vd0wbfdx,数码电子dpot8m5u,精选首饰szkl4kj7 ,
         // 鞋包精选byh9331t ,母婴精选gkf52p8p ,居家精选cnrzcs22 ,运动户外精选 indvf44e ,家用电器uggxpyh5
         jxCode,
         //页码
         page,
         //分页大小:默认20，最大100
         pageSize:20
     }
  })
}
