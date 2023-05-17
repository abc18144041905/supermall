<template>
   <div class="wrapper" ref="wrapper">
       <div class="content">
            <slot></slot>
       </div>
       
   </div>
   
</template>

<script>
//import BScroll from 'better-scroll'
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
     name:'Scroll',
     props:{
        probeType:{
             type:Number,
             defaule:0
          },
          pullUpLoad:{
             type:Boolean,
             defaule:true
          }
     },
     data(){
       return{
          scroll:null,
       }
     },
     mounted(){
      this.scroll = new BScroll(this.$refs.wrapper, {
          click:true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
      })
      // 2.将监听事件回调
      this.scroll.on('scroll', pos => {
          this.$emit('scroll', pos)
      })
      //监听上拉事件this.pullingUpHandler
      this.scroll.on('pullingUp', ()=>{
           this.$emit('pullingUp')
      })
      
        
       
     },
     methods:{
          scrollTo(x,y,time){
               this.scroll && this.scroll.scrollTo(x,y,time)
          },
          finishPullUp(){
               this.scroll && this.scroll.finishPullUp()
               //console.log("zaizheli")
          },
          refresh(){
               this.scroll && this.scroll.refresh()
          },
          destroy(){
               this.scroll && this.scroll.destroy()
          }
     }
}
</script>

<style scoped>
</style>