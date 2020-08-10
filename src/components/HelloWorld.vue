<template>
  <div>
    <h3>INDEX</h3>
    <div v-for="(item,index) in ronterList" :key="index" @click="jumpTo(item)">
      <p class="linelyP" :style="isOdd(index)">{{item.caseName}} .............. <span>{{item.name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        ronterList: [
          {caseName: 'FilterTest', to: "/FilterTest", name: 'FilterTest 集合测试'},
          {caseName: 'v-on', to: "/on", name: 'OnTest'},
          {caseName: 'v-bind', to: "/bind", name: 'BindTest'},
          {caseName: '组件开发', to: "/components", name: 'Components'},
        ]
      }
    },
    mounted() {
    },
    methods: {
      jumpTo(item) {
        this.$router.push(item.to)
      },
      isOdd(index) {
        return index % 2 == 0 ? 'background-image: linear-gradient(to left, #33FFFF , #FF3399);' : 'background-image: linear-gradient(to right, #33FFFF , #FF3399);'
      }
    },
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .linelyP {
    width: 50%;
    height: 30px;
    line-height: 30px;
    margin: 10px auto;
    color: blanchedalmond;
    font-size: 20px;
    font-family: Tahoma;
    cursor: pointer;
    border-radius: 3px;
  }

  .linelyP span{
    color: greenyellow;
  }

  a {
    text-decoration: none;
  }

</style>
