<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header-div :logso = "logoMsg" :listenToChlid="getMessage"></header-div>
    <hello-world>{{logoMsg}}</hello-world>
  </div>
</template>

<script>
import HeaderDiv from './components/HeaderDiv'
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data () {
    return {
      logoMsg: 'test'
    }
  },
  components: {
    HeaderDiv,
    HelloWorld
  },
  methods: {
    getMessage: function (data) {
      console.log(data)
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
