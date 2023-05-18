<template>
    <div>
        <swiper ref="swiper" v-if="childrentopImages.length">
          <swiper-item v-for="(item, index) in childrentopImages" :key="index">
              <img :src="item" alt="" @load="imageLoad">
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
     childrentopImages:{
		    type: Array,
        default(){
          return []
        }
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