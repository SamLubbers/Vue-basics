<template>
  <div class="stock-container">
    <div class="d-flex justify-content-between stock-header" :style="{background: stockType === 'buy' ? 'lightgreen' : 'lightblue'}">
      <h5 class="mb-0">{{stock.name}}</h5>
      <div>
        <span>price: {{stock.price}}</span> | <span>amount owned: {{stock.amountOwned}}</span>
      </div>
    </div>
    <div class="d-flex justify-content-between stock-body">
      <input type="text" class='form-control' style="width: 200px" v-model.number="quantity">
      <button class="btn" :class="stockType === 'buy' ? 'btn-primary' : 'btn-danger'" @click='execute(stock.name)'>{{stockType}}</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    quantity: 0
  }),
  props: {
    stock: {
      type: Object,
      required: true
    },
    stockType: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('StockTrader', [
      'buy',
      'sell'
    ]),
    execute (stockName) {
      let payLoad = {stockName: stockName, quantity: this.quantity}
      if (this.stockType === 'buy') {
        this.buy(payLoad)
      } else if (this.stockType === 'sell') {
        this.sell(payLoad)
      }
      this.quantity = '0'
    }
  }
}
</script>
<style lang="sass" scoped>
.stock-container
  border: 1px solid #CCC
  border-radius: 5px
  width: 400px
  display: inline-block
  margin: 1rem
  overflow: hidden

.stock-header
  padding: 1rem .5rem
  border-bottom: 1px solid #CCC
  padding: 1rem

.stock-body
  padding: 1rem
</style>
