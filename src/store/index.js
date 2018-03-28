import Vue from 'Vue'
import Vuex from 'Vuex'
import StockTrader from './modules/StockTrader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    StockTrader
  }
})
