import Vue from 'vue'
import Router from 'vue-router'
import Word2016 from '@/components/Word2016'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Word2016',
      component: Word2016
    }
  ]
})
