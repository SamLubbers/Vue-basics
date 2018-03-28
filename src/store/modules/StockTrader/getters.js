export default {
  stocks (state) {
    return state.stocks
  },
  myStocks (state) {
    return state.stocks.filter(stock => stock.amountOwned > 0)
  }
}
