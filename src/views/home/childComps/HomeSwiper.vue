<template>
    <div>
        <swiper ref="swiper" v-if="banners.length">
          <swiper-item v-for="(item, index) in banners" :key="index">
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
          </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
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
      }
    }
}
</script>

<style>
 
</style>