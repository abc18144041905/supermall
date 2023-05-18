<template>
  <scroll id="tab-menu" :probeType = "3" :pullUpLoad="true">
    <div class="menu-list">
      <div class="menu-list-item"
           :class="{active: index===currentIndex}"
           v-for="(item, index) in Object.keys(categories)"
           :key="index"
           @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

	export default {
		name: "TabMenu",
    components: {
		  Scroll
    },
    props: {
		  categories:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data() {
		  return {
		    currentIndex: 0
      }
    },
    methods: {
		  itemClick(index) {
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    },
    computed:{
      
    }
	}
</script>

<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }

  .menu-list-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
  }

  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
