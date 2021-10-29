const getters = {
  cartList(state) {
    return state.cartList
  },
  cartCount(state, getters) {
    return getters.cartList.filter(item => item.checked == true).length
    
  }
}

export default getters
