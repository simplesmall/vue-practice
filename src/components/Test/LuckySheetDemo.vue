<template>
  <div>
    LuckySheetDemo
  </div>
</template>

<script>
  // import luckysheet from 'luckysheet'

  export default {
    name: "LuckySheetDemo",
    mounted() {
      //  YU 670
      for (let i = 0; i < 15000; i++) {
      console.log(this.generateColumn(i))
      }
    },
    methods: {
      generateColumn(number){
        const highArray = []
        const lowArray = []
        const low = number % 26
        let high = parseInt(number / 26)>0?parseInt(number / 26):-1
        // console.log('high==>',high)
        // 高位不满足进位条件,直接存储
        if (high<26 && high>0){
          highArray.unshift(high)
        }
        // 高位满足进位条件,循环递归拆分存入数组中
        while (high > 25){
          const tempLow = high % 26
          lowArray.unshift(tempLow)
          high = parseInt(high / 26)
          if (high<=25){
            highArray.unshift(high-1)
          }
        }
        // console.log('TempHigh==>',number,highArray,'TempLow==>',lowArray,'Low==>',low)
        // console.log('RETURN RESULT IS==>',this.showArray(highArray),' ',this.showArray(lowArray),' ',this.code(low))
        return this.showHighArray(highArray)+this.showArray(lowArray)+this.code(low)
      },
      showHighArray(array){
        let result = ''
        for (let i = 0; i < array.length; i++) {
          result+= this.code(array[i]-1)
        }
        return result
      },
      showArray(array){
        let result = ''
        for (let i = 0; i < array.length; i++) {
          result+= this.code(array[i])
        }
        return result
      },
      code(num){
        return num <0?'':String.fromCharCode(65 + num)
      }
    }
  }
</script>

<style scoped>

</style>
