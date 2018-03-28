export default {
  stocks (state) {
    return state.stocks
  },
  myStocks (state) {
    console.log('my stocks called')
    return state.stocks.filter(stock => stock.amountOwned > 0)
  },
  myFunds (state) {
    console.log('all stocks called')
    return state.myFunds
  }
}
