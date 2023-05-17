<template>
  <scroll :probeType = "3" :pullUpLoad="true" class="content" ref="scroll">
    <div>
       <cart-list-item v-for="item in cartList" :key="item.goodsid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import {mapGetters} from 'vuex'

	export default {
		name: "CartList",
    components: {
      Scroll,
      CartListItem
    },

    methods:{
      
    },
    computed:{
       ...mapGetters(['cartList'])
    },
    activated(){
       this.$refs.scroll.refresh()
    }
	}
</script>

<style scoped>
  .content{
    height: calc(100% - 137px);
    overflow: hidden;
  }
</style>
