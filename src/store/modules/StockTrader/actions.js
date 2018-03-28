export default {
  updateStocks (context) {
    context.commit('updateStocks')
  },
  buy (context, payLoad) {
    context.commit('buy', payLoad)
  },
  sell (context, payLoad) {
    context.commit('sell', payLoad)
  }
}
