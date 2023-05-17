<template>
   <div class="back-top">
     <slot></slot>
   </div>
</template>

<script>
export default {
    name:'BackTop',
    methods:{
      
    }
}
</script>

<style>
   .back-top img {
      width: 43px;
      height: 43px;
      position: fixed;
      bottom: 60px;
      right:10px;
  }
</style>