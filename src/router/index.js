import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OnTest from "../components/OnTest";
import BindTest from "../components/BindTest";
import FilterTest from "../components/FilterTest";

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
  ]
})
