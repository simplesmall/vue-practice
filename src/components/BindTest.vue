<template>
  <div>
    <h3>
      V-model-Test
    </h3>
    <div class="describe">
      v-model 的测试方法
    </div>
    radio单选
    <input type="radio" name="html" v-model="picked" value="html" id="html">
    <label for="html">HTML</label>
    <input type="radio" name="js" v-model="picked" value="js" id="JavaScript">
    <label for="JavaScript">JavaScript</label>
    <input type="radio" name="css" v-model="picked" value="css" id="CSS">
    <label for="CSS">CSS</label>

    选中的是: {{picked}}
    <br>
    <br>
    checkbox 多选
    <input type="checkbox" name="cat" value="cat" id="cat" v-model="checked">
    <label for="cat">CAT</label>
    <input type="checkbox" name="dog" value="dog" id="dog" v-model="checked">
    <label for="dog">DOG</label>
    <input type="checkbox" name="baby" value="baby" id="baby" v-model="checked">
    <label for="baby">BABY</label>
    选中项为:{{checked}}
    <br>
    <br>
    下拉选择器,优先匹配value,没有才匹配才在option里面匹配
    <select v-model="selected" multiple>
      <option>html</option>
      <option value="js">JavaScript</option>
      <option>css</option>
    </select>
    选中的是:{{selected}}
    <br><br>
    v-for 循环输出options:
    <select multiple>
      <option v-for="(select,index) in selectList":key="index" :value="select.value">
        {{select.name}}
      </option>
    </select>
    <br>输出的原数组数据为:{{selectList}}
    <br><br>

  </div>
</template>

<script>
  export default {
    name: "BindTest",
    data() {
      return {
        picked: 'html',
        checked: ['cat'],
        selected: 'js',
        selectList:[
          {value:'Yard',name:'院子'},
          {value:'Avenue',name:'街道'},
          {value:'Street',name:'大道'},
          {value:'Path',name:'小径'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
