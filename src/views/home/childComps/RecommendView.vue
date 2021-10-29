<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.id" class="recommend-item">
             <a :href="item.link">
                  <img :src="item.image" alt="">
                  <div>{{item.title}}</div>
             </a>
        </div>
    </div>
</template>

<script>
export default {
    props:{
     recommends:{
		    type: Array,
        default: []
      }
  },
}
</script>

<style>
  .recommend{
     display: flex;
     width: 100%;
     font-size: 12px;
     padding: 15px 0px 20px;
     border-bottom: 10px solid #eee;
  }
  .recommend-item{
     flex: 1;
     text-align: center;
  }
  .recommend-item img{
     width: 70px;
     height: 70px;
     margin-bottom: 10px;
  }
</style>