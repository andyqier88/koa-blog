<template>
  <div class="header">
    <span>I am {{logso}}</span>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HeaderDiv',
  data(){
    return {
      navs:[
        {li:'主页'},
        {li:'日志'},
        {li:'说说'},
        {li:'主页'},
        {li:'主页'}
      ]
    }
  },
  props:['logso']
}
</script>

<style>
  .header{
    color: rgb(97, 96, 95);
  }
</style>
