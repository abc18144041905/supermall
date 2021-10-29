const mutations = {
  addCounter(state,payload){
     payload.count++
  },
  addToCart(state,payload){
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  },
  changeslect(state,id){
    const statucheck = state.cartList.find(item => {
        return item.goodsId === id
    })
    statucheck.checked = !statucheck.checked
  }
}

export default mutations

