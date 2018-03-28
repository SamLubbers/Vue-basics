<template>
  <div>
    <stock v-for='stock in stocks' :key='stock.name' :stock='stock' stockType='buy'></stock>
  </div>
</template>
<script>
import Stock from './Stock'
import MapGetters from 'Vuex'

export default {
  components: {
    stock: Stock
  },
  computed: {
    ...MapGetters([
      'myStocks'
    ])
  }
}
</script>
<style lang="sass" scoped>
</style>
