<template>
    <div>
        <swiper ref="swiper" v-if="banners.length">
          <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="" @load="imageLoad">
            </a>
          </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  data(){
    return{
      isLoad:false
    }
  },
  props:{
     banners:{
		    type: Array,
        default: []
      }
  },
  components:{
     Swiper,
     SwiperItem
  },
  methods: {
		  stopTimer() {
		    this.$refs.swiper.stopTimer()
      },
      startTimer() {
		    if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imageLoad(){
        if(!this.isLoad){
           this.$emit('overimgload')
           this.isLoad = true
        }
         
      }
    }
}
</script>

<style>
 
</style>