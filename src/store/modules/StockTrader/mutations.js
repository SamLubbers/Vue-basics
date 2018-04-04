export default {
  updateStocks (state) {
    for (let stock of state.stocks) {
      let amountChanged = Math.round(state.priceMaxVariance * Math.random())
      let newprice = Math.random() > 0.5 ? stock.price + amountChanged : stock.price - amountChanged
      stock.price = newprice > 0 ? newprice : 0
    }
  },
  buy (state, payLoad) {
    let stock = state.stocks.filter(stock => stock.name === payLoad.stockName)[0]
    let cost = stock.price * payLoad.quantity
    if (cost <= state.myFunds) {
      state.myFunds -= cost
      stock.amountOwned += payLoad.quantity
    }
  },
  sell (state, payLoad) {
    let stock = state.stocks.filter(stock => stock.name === payLoad.stockName)[0]
    payLoad.quantity = payLoad.quantity > stock.amountOwned ? stock.amountOwned : payLoad.quantity
    state.myFunds += stock.price * payLoad.quantity
    stock.amountOwned -= payLoad.quantity
  }
}
