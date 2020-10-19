<template>
  <input type="button" value="点我">
  <!--<div id="table">

    <div class="tab">
      <el-radio-group v-model="cardActive">
        <el-radio-button v-for="(item,index) in card" :label="item" :key="index"
                         @click="chooseTable(item)"></el-radio-button>
      </el-radio-group>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        v-for="(value,key,index) in tableData[2]"
        :key="index"
        :prop="key"
        :label="key">
      </el-table-column>
    </el-table>

  </div>-->
</template>

<script>
  import XLSX from 'xlsx'
  import axois from 'axios'

  export default {
    name: "ExcelReview",
    data() {
      return {
        tableData: [
          {
            '接口大类': '基础信息',
            '接口类别': '人防部门',
            '接口类别ID': 'O2_001'
          },
          {
            '接口大类': '基础信息',
            '接口类别': '人防部门',
            '接口类别ID': 'O2_001'
          }
        ],
        card: [],
        cardActive: '',
        workbook: {}

      }
    },
    watch: {
      // cardActive(ov, nv) {
      //   this.getTable(ov)
      // }
    },
    mounted() {
      // this.readWorkbookFromRemoteFile('http://localhost/base/Sheet1.xlsx')
      // this.readWorkbookFromRemoteFile('http://capi.wwxcy.cn/Sheet1.xlsx')
      // this.outTool()
      // this.openFile('http://mczaiyun.top/ht/123.xlsx')
      // this.openFile(this.urlToBlob('http://mczaiyun.top/ht/123.xlsx'))
      this.showData()
    },
    methods: {
      showData() {
        const result = this.readUrlFile('http://mczaiyun.top/ht/123.xlsx')
        console.log(result)
      },
      // 测试读取网络文件显示数据
      readUrlFile(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function (e) {
          if (xhr.status === 200) {
            var data = new Uint8Array(xhr.response)
            var workbook = XLSX.read(data, {type: 'array'});
            if (callback){
              callback(workbook)
            } else {
              callback('workbook')
            }
          }
        };
        xhr.send();
      },
      // 测试URL to blob
      urlToBlob(the_url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("get", the_url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
          if (this.status == 200) {
            if (callback) {
              callback(this.response);
            }
          }
        };
        xhr.send();
      },
      // 读取文件内容
      openFile(file) {
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        reader.onload = (e) => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, {type: 'binary'});
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws, {header: 1});
          console.log('File content show:==>', data)
          /* Update state */
          const cols = make_cols(ws['!ref']);
          console.log('cols', cols)
        };
        reader.readAsBinaryString(file);
      },
      // 展示sheetJS基本数据
      outTool() {
        // const sheetData = XLSX.read('http://capi.wwxcy.cn/Sheet1.xlsx',{type:'array'})
        const sheetData = XLSX.read('http://mczaiyun.top/ht/123.xlsx', {type: 'array'})
        console.log("sheetData : ", sheetData)
        const SheetNames = sheetData.SheetNames
        console.log("SheetNames : ", SheetNames)
        console.log("Sheet", sheetData.Sheets[SheetNames[0]])
        console.log("cell : ", sheetData["A1"])
        const tableData = XLSX.utils.sheet_to_json(sheetData.Sheets[SheetNames[0]])
        console.log(tableData)
      },

      readWorkbookFromRemoteFile(url) {
        var xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.responseType = 'arraybuffer'
        let _this = this
        xhr.onload = function (e) {
          if (xhr.status === 200) {
            var data = new Uint8Array(xhr.response)
            var workbook = XLSX.read(data, {type: 'array'})
            console.log(workbook)

            var sheetNames = workbook.SheetNames // 工作表名称集合
            _this.workbook = workbook
            _this.card = sheetNames
            _this.cardActive = sheetNames[0]
            _this.getTable(sheetNames[0])
          }
        }
        xhr.send()
      },
      getTable(sheetName) {
        console.log(111111111111)
        console.log(sheetName)
        var worksheet = this.workbook.Sheets[sheetName]
        this.tableData = XLSX.utils.sheet_to_json(worksheet)
        console.log(this.tableData)
      }
    }
  }
</script>

<style scoped>
  #table {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    border: 1px solid #ebebeb;
    padding: 20px;
    width: 80%;
    margin: 20px auto;
    border-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    border-radius: 10px;
    overflow: scroll;
    height: 100%;
  }

  .tab {
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: row;
  }
</style>

<style scoped>
  .is-active {
    background-color: #409EFF
  }

  span {
    background-color: red
  }
</style>
