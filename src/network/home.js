import {request,request_dhgoods} from './request'
//http://api.tbk.dingdanxia.com/vip/item_info?apikey=Ef3pZnara4FzEOeOZtyIesYXoh9VvCx3&id=6917926606185460621
export function getHomeMultidata(){
    return request({
       url:'/home/multidata'
    })
}
export function getHomeGoods(channelType,page){
    //订单侠，抖货商品API
    return request_dhgoods({
       url:'/vip/goodsList',
       params:{
           apikey:'Ef3pZnara4FzEOeOZtyIesYXoh9VvCx3',
           //请求类型默认频道
           sourceType:0,
           //频道类型:0-超高佣，1-出单爆款（不支持排序）; 当请求类型为频道时必传
           channelType,
           //页码
           page,
           //分页大小:默认20，最大100
           pageSize:20
           
       }
    })
}