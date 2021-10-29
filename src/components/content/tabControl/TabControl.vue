<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="item" class="tab-control-item" :class="{active:index == currentIndex}">
         <span @click="itemClick(index)">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    data(){
       return{
         currentIndex:0
       }
    },
    props:{
       titles:{
         type:Array,
         default(){
           return []
         }
       }
    },
    methods:{
      itemClick(index){
         this.currentIndex = index
         this.$emit('tabClick',index)
      }
    }
}
</script>

<style>
  .tab-control{
     width: 100%;
     display: flex;
     text-align: center;
     font-size: 15px;
     background-color: #fff;
     z-index: 9;
  }
  .tab-control-item{
    height: 50px;
    line-height: 50px;
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding: 5px;
  }
</style>