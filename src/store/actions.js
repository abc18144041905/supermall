const actions = {
  addCart(context, payload) {
    return new Promise((resolve,reject)=>{
        //console.log(info);
        // 1.查看是否添加过
        const oldInfo = context.state.cartList.find(item => item.goodsId === payload.goodsId)
        // 2.+1或者新添加
        if (oldInfo) {
          context.commit('addCounter',oldInfo)
          resolve("当前商品数量+1")
        } else {
          context.commit('addToCart',payload)
          resolve("添加了新的商品")
        }
    })
  },
}

export default actions

