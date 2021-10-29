<template>
    <div class="toast" v-show="isShow">
         <div>{{message}}</div>
    </div>
</template>

<script>
export default {
    // props:{
    //   message:{
    //     type:String,
    //     default:'请稍等...'
    //   },
    //   show:{
    //     type:Boolean,
    //     default:false
    //   }
    // }
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
       show(message,duration = 2000){
           this.isShow = true;
           this.message = message;
           setTimeout(()=>{
               this.isShow = false;
               this.message = ''
           },duration)
       }
    }
}
</script>

<style>
  .toast{
    position: fixed;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    background-color: rgba(0,0, 0, .7);
    color: #fff;
    z-index: 999;
  }
</style>