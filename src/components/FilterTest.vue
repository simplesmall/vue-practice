<template>
  <div>
    <h3>FilterTest</h3>
    <div class="describe">
      一些vue与JavaScript结合的实现原生数组的操作
    </div>
    <div class="container">
      <div class="list">
        <p>原始数组</p>
        <span v-for="(item,index) in bookList" :key="index">{{item.name}} --- {{item.author}}</span>
      </div>
      <div class="list">
        <p @click="addNode"
           style="cursor: pointer;border: 1px solid red;margin:0 50px;border-radius: 3px;background:cyan;color: #000">
          添加元素后的数组 [反复点我查看效果]</p>
        <span v-for="(item,index) in bookList" :key="index">{{item.name}} --- {{item.author}}</span>
      </div>
      <div class="list">
        <p>通过Java过滤数组</p>
        <span v-for="(item,index) in filterList" :key="index">{{item.name}} --- {{item.author}}</span>
      </div>
    </div>
    <div class="container">
      <div class="list">
        <p>累计counter</p>
        <span style="font-size: 24px">{{counter}}</span>
        <input type="button" value="点我增加counter的值" style="width: 50%;margin: 4px auto;background:cyan;cursor:pointer;"
               @click="counter++">
      </div>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FilterTest",
    data() {
      return {
        bookList: [
          {name: '灰太狼的坚强', author: 'Jack Jim'},
          {name: 'Fish happy', author: 'kakuy.biylkusa'},
          {name: 'Vue and JavaScript xxx', author: 'Nobody knows'},
          {name: 'Java special journey', author: '马丁.盯的丁'},
          {name: '颈椎病康复指南', author: 'lovely coder'},
        ],
        isAdd: true,
        counter: 0
      }
    },
    methods: {
      addNode() {
        this.counter++;
        let addNode = {name: '添加进来的Java书', author: 'Myself'}
        this.isAdd = !this.isAdd
        // 方法一  添加数组元素
        /*this.$set(this.bookList,5,{
          name:'TEMP_demo',
          author:'me'
        })*/
        // 方法二  添加数组元素
        if (this.isAdd) {
          this.bookList.push(addNode)
        } else {
          this.bookList.pop()
        }
      }
    },
    computed: {
      filterList: function () {
        return this.bookList.filter(function (book) {
          return book.name.match('Java')
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 420px;
    margin: 20px 0;
    background: #ccc;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 30%;
    height: 400px;
    background: #fcc;
    color: white;
    border-radius: 3px;
  }

  .list p {
    color: orangered;
  }
</style>
