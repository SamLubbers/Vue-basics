import Vue from 'vue'
import Vuex from 'vuex'
import StockTrader from './modules/StockTrader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    StockTrader
  }
})
