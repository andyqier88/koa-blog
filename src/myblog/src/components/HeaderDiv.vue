<template>
  <div class="header">
    <span>I am {{logso}}</span>
    <button  v-on:click="show = !show">发消息</button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
  
</template>

<script>
/* eslint-disable */
export default {
  name: 'HeaderDiv',
  data(){
    return {
      show: true
    }
  },
  props:['logso'],
  methods:{
    // sendMessage:function(){
    //   this.$emit("listenToChlid","huji")
    //   console.log("huji")
    // }
  }
}
</script>

<style>
  .header{
    color: rgb(97, 96, 95);
  }
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
