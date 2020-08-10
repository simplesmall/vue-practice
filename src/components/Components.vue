<template>
  <div>
    <h3>
      COMPONENTS
    </h3>
    <div class="describe">整体布局的局限以及组件拆分后的优点</div>
    方法一:直接在一整个画布上绘制所有元素
    <div class="wrapper">
      <div class="title">
        <span style="float: left;margin: auto 20px;">与XXX聊天中</span> <span
        style="float: right;margin: auto 20px;cursor: pointer">X</span>
      </div>
      <div class="content">
        <div v-for="(msg,index) in msgList" :key="index" class="msgItem" :style="sender(msg)">
          <span>{{msg.from}} </span><span> {{msg.msg}}</span>
        </div>
      </div>
      <div class="input">
        <input type="text" placeholder="请输入.....">
        <input type="button" value="发送">
      </div>
    </div>
    方法二:组件化开发
    <div class="wrapper"></div>
  </div>
</template>

<script>
  export default {
    name: "Components",
    data() {
      return {
        msgList: [
          {from: '1', msg: "hello flutter"},
          {from: '2', msg: "Beautiful and ~~~~"},
          {from: '1', msg: "hello JVM"},
          {from: '2', msg: "hello springBoot"},
          {from: '1', msg: "hello flex-direction: row-reverse;':'flex-direction: row;flex-direction: row-reverse;':'flex-direction: row;"},
        ]
      }
    },
    methods: {
      sender(msg) {
        return msg.from=='2'?'flex-direction: row-reverse;':'flex-direction: row;'
      }
    }
  }
</script>

<style scoped>
  .input input[type='text']{
    width: 70%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding: 0 10px;
    margin: 2px auto;
    border-radius: 10px;
  }
  .input input[type='button']{
    margin: 2px -8px 2px 20px;
    padding: 0;
    width: 20%;
    height: 40px;
    background: deeppink;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
  }
  .msgItem {
    display: flex;
    max-width: calc(100% - 10px);
    margin: 5px 3px;
    min-height: 26px;
    line-height: 20px;
  }
  .msgItem span:nth-child(1){
    margin: 0 10px;
    background: red;
    width: 20px;
    height: 20px;
    line-height: 20px;
    border-radius: 50%;
  }
  .msgItem span:nth-child(2){
    background: lightslategray;
    border-radius: 5px;
    padding: 3px 5px;
  }
  .wrapper {
    margin: 20px auto;
    width: 600px;
    height: 400px;
    background: #ebebeb;
    display: flex;
    flex-direction: column;
  }

  .title {
    width: 100%;
    height: 50px;
    background: #ebebef;
    line-height: 50px;
    font-size: 20px;
  }

  .content {
    width: 100%;
    flex: 1;
    background: transparent;
    padding-top: 10px;
    border-top: 1px solid gainsboro;
  }

  .input {
    width: 100%;
    height: 50px;
    background: blue;
    background: transparent;
  }

</style>
