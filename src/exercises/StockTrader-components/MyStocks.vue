<template>
  <div>
    <stock v-for='stock in myStocks' :key='stock.name' :stock='stock' stockType='buy'></stock>
  </div>
</template>
<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

export default {
  components: {
    stock: Stock
  },
  computed: {
    ...mapGetters('StockTrader', [
      'myStocks'
    ])
  }
}
</script>
<style lang="sass" scoped>
</style>
