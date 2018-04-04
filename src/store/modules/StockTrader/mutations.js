export default {
  updateStocks (state) {
    let updatedStocks = []
    for (let stock of state.stocks) {
      let amountChanged = Math.round(state.priceMaxVariance * Math.random())
      updatedStocks.push({
        name: stock.name,
        amountOwned: stock.amountOwned,
        price: Math.random() > 0.5 ? stock.price + amountChanged : stock.price - amountChanged
      })
    }
  },
  buy (state, payLoad) {
    let stock = state.stocks.filter(stock => stock.name === payLoad.stockName)[0]
    state.myFunds -= stock.price * payLoad.quantity
    stock.amountOwned += payLoad.quantity
  },
  sell (state, payLoad) {
    let stock = state.stocks.filter(stock => stock.name === payLoad.stockName)[0]
    state.myFunds += stock.price * payLoad.quantity
    stock.amountOwned -= payLoad.quantity
  }
}
