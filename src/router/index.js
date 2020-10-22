import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OnTest from "../components/OnTest";
import BindTest from "../components/BindTest";
import FilterTest from "../components/FilterTest";
import Components from "../components/Components";
import ExcelReview from "../components/Test/ExcelReview";
import SheetJSTest from "../components/Test/SheetJSTest";
import LuckySheetDemo from "../components/Test/LuckySheetDemo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/FilterTest',
      name: 'FilterTest',
      component: FilterTest
    },
    {
      path: '/on',
      name: 'OnTest',
      component: OnTest
    },
    {
      path: '/bind',
      name: 'BindTest',
      component: BindTest
    },
    {
      path: '/components',
      name:'Components',
      component: Components
    },
    {
      path: '/excel',
      name:'ExcelReview',
      component: ExcelReview
    },
    {
      path: '/sheetJS',
      name:'SheetJSTest',
      component: SheetJSTest
    },
    {
      path: '/LuckySheetDemo',
      name:'LuckySheetDemo',
      component: LuckySheetDemo
    }
  ]
})
