<template>
  <div id="app">
    <div class="header" v-if="IndexPage" @click="back">
      返回
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      IndexPage: function () {
        return true
      }
    },
    methods:{
      back(){
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  .describe{
    width: 600px;
    margin: auto;
    background: #f3f3cc;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
  }
  .header{
    width: 120px;
    height: 30px;
    line-height: 30px;
    background: deeppink;
    margin: 20px auto;
    cursor: pointer;
    color: white;
    border-radius: 15px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
