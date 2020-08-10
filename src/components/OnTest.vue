<template>
  <div>
    <h3>v-on test</h3>
    <div class="describe">
      Vue 事件处理的概念 v-on，在事件绑定上，类似原生 JavaScript 的 onclick 等写法，也是在 HTML 上进行监昕的
    </div>
    <div v-on="{click:VonClick}" class="v-on-box">
      <p>v-on="{click:ClickHandle}</p>
    </div>
    <div class="v-on-box" @click="AltClick">
      <p>@click="AltClick"</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OnTest",
    methods: {
      VonClick() {
        console.log("v-on click listener")
      },
      AltClick() {
        console.log("Alt click listener")
      }
    }
  }
</script>

<style scoped>
  .v-on-box {
    width: 300px;
    height: 50px;
    background: deeppink;
    border-radius: 3px;
    margin: 5px auto;
    line-height: 50px;
    cursor: pointer;
  }

  .v-on-box p {
    font-size: 20px;
    color: cyan;
  }
</style>
