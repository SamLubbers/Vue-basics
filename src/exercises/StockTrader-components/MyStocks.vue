<template>
  <div>
    <template v-if='myStocks.length > 0'>
    <stock v-for='stock in myStocks' :key='stock.name' :stock='stock' stockType='sell'></stock>
    </template>
    <template v-else>
    <p class="center mt-3">You do not own any stocks. <router-link tag='a' :to="{ name: 'allStocks' }">Buy some here</router-link></p>
    </template>
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
