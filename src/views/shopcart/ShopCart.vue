<template>
  <div id="cart">
    <nav-bar class="nav-bar"><div slot="center">购物车({{count}})</div></nav-bar>
    <cart-list class="cart-list"></cart-list>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartList from './childComps/CartList'
  import BottomBar from './childComps/BottomBar'
  import {mapGetters} from 'vuex'

	export default {
	  name: "ShopCart",
      components: {
	  NavBar,
      CartList,
      BottomBar
    },
    computed: {
	//   cartList() {
	// 	    return this.$store.getters.cartList
    //   },
    //   cartCount() {
	// 	    return this.$store.getters.cartCount
    //   }
    // ...mapGetters(['cartList','cartCount'])
        ...mapGetters({
            list:'cartList',
            count:'cartCount'
        })
    }
	}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    z-index: 100;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>
