import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DynamicLink from '@/components/directives/DynamicLink'
import DynamicTable from '@/components/directives/DynamicTable'
import DynamicStyling from '@/components/directives/DynamicStyling'
import Events from '@/components/directives/Events'
import Game from '@/components/exercises/Game'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/directives/DynamicLink',
    name: 'DynamicLink',
    component: DynamicLink
  }, {
    path: '/directives/DynamicTable',
    name: 'DynamicTable',
    component: DynamicTable
  }, {
    path: '/directives/DynamicStyling',
    name: 'DynamicStyling',
    component: DynamicStyling
  }, {
    path: '/directives/Events',
    name: 'Events',
    component: Events
  }, {
    path: '/exercises/Game',
    name: 'Game',
    component: Game
  }]
})
