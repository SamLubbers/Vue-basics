import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/HelloWorld'
import DynamicLink from '@/examples/DynamicLink'
import DynamicTable from '@/examples/DynamicTable'
import DynamicStyling from '@/examples/DynamicStyling'
import Events from '@/examples/Events'
import Game from '@/exercises/Game'
import Ex1 from '@/exercises/Ex1'
import Ex2 from '@/exercises/Ex2'
import Quotes from '@/exercises/Quotes'

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
  }, {
    path: '/exercises/Ex1',
    name: 'Ex1',
    component: Ex1
  }, {
    path: '/exercises/Ex2',
    name: 'Ex2',
    component: Ex2
  }, {
    path: '/exercises/Quotes',
    name: 'Quotes',
    component: Quotes
  }]
})