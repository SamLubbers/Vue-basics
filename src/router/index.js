import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/HelloWorld'
import DynamicLink from '@/examples/DynamicLink'
import DynamicTable from '@/examples/DynamicTable'
import DynamicStyling from '@/examples/DynamicStyling'
import Events from '@/examples/Events'

import Users from '@/examples/Users'
import ViewUsers from '@/components/user/ViewUsers'
import NewUser from '@/components/user/NewUser'
import DeleteUser from '@/components/user/DeleteUser'

import Ex1 from '@/exercises/Ex1'
import Ex2 from '@/exercises/Ex2'
import Ex3 from '@/exercises/Ex3'
import Ex4 from '@/exercises/Ex4'
import Ex5 from '@/exercises/Ex5'

import Game from '@/exercises/Game'
import Quotes from '@/exercises/Quotes'
import MathQuiz from '@/exercises/MathQuiz'

import NotFound from '@/NotFound'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/examples/DynamicLink',
    name: 'DynamicLink',
    component: DynamicLink
  }, {
    path: '/examples/DynamicTable',
    name: 'DynamicTable',
    component: DynamicTable
  }, {
    path: '/examples/DynamicStyling',
    name: 'DynamicStyling',
    component: DynamicStyling
  }, {
    path: '/examples/Events',
    name: 'Events',
    component: Events
  }, {
    path: '/examples/Users',
    component: Users,
    children: [
      {path: '', name: 'viewUsers', component: ViewUsers},
      {path: 'new', name: 'NewUser', component: NewUser},
      {path: 'delete', name: 'DeleteUser', component: DeleteUser}
    ]
  }, {
    path: '/exercises/Game',
    name: 'Game',
    component: Game
  }, {
    path: '/exercises/Quotes',
    name: 'Quotes',
    component: Quotes
  }, {
    path: '/exercises/MathQuiz',
    name: 'MathQuiz',
    component: MathQuiz
  }, {
    path: '/exercises/Ex1',
    name: 'Ex1',
    component: Ex1
  }, {
    path: '/exercises/Ex2',
    name: 'Ex2',
    component: Ex2
  }, {
    path: '/exercises/Ex3',
    name: 'Ex3',
    component: Ex3
  }, {
    path: '/exercises/Ex4',
    name: 'Ex4',
    component: Ex4
  }, {
    path: '/exercises/Ex5',
    name: 'Ex5',
    component: Ex5
  }, {
    path: '*',
    component: NotFound
  }]
})
