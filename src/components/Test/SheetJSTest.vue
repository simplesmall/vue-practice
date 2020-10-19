<template>
  <div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
    <!--  选择文件按钮  -->
    <div class="row">
      <div class="col-xs-12">
        <form class="form-inline">
          <div class="form-group">
            <label for="file">Spreadsheet</label>
            <input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change"/>
          </div>
        </form>
      </div>
    </div>
    <!-- 导出文件的行及按钮 -->
    <div class="row">
      <div class="col-xs-12">
        <button :disabled="data.length ? false : true" class="btn btn-success" @click="_export">Export</button>
      </div>
    </div>
    <!--  文件显示区域  -->
    <div class="row">
      <div class="col-xs-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <!-- 表头显示 -->
            <thead>
            <tr>
              <th v-for="c in cols" :key="c.key">{{c.name}}</th>
            </tr>
            </thead>
            <!-- 表内容显示 -->
            <tbody>
            <tr v-for="(r, key) in data" :key="key">
              <td v-for="c in cols" :key="c.key"> {{ r[c.key] }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import XLSX from 'xlsx'

  // 整合表头数组
  const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({
    name: XLSX.utils.encode_col(i),
    key: i
  }));
  // 支持操作的文件类型后缀
  const _SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
  ].map(function (x) {
    return "." + x;
  }).join(",");
  export default {
    name: "SheetJSTest",
    data() {
      return {
        data: [
          "G"
          // "SheetJS".split(""), "1234567".split("")
        ],
        // 表格表头行
        cols: [
          {name: "A", key: 0},
          // {name: "B", key: 1},
          // {name: "C", key: 2},
          // {name: "D", key: 3},
          // {name: "E", key: 4},
          // {name: "F", key: 5},
          // {name: "G", key: 6},
        ],
        // 支持操作的文件类型后缀
        SheetJSFT: _SheetJSFT
      };
    },
    methods: {
      _suppress(evt) {
        evt.stopPropagation();
        evt.preventDefault();
      },
      _drop(evt) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer.files;
        if (files && files[0]) this._file(files[0]);
      },
      // 输入框选择文件改变
      _change(evt) {
        const files = evt.target.files;
        if (files && files[0]) this._file(files[0]);
      },
      // 读取文件内容
      _file(file) {
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
          console.log('File content show:==>',data)
          /* Update state */
          this.data = data;
          this.cols = make_cols(ws['!ref']);
        };
        reader.readAsBinaryString(file);
      },
      // 导出文件
      _export(evt) {
        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(this.data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate file and send to client */
        XLSX.writeFile(wb, "sheetjs.xlsx");
      },
    }
  }
</script>

<style scoped>

</style>
