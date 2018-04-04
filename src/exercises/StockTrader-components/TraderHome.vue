<template lang="html">
        <div class="lightjumbotron">
          <h2>Stock Trader application</h2>
          <p class="mb-0">Buy or sell stocks</p>
          <p>Click on 'End Day' to see the stock value change</p>
          <hr>
          <h4>Your funds: {{myFunds}}$</h4>
        </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('StockTrader', [
      'myFunds'
    ])
  }
}
</script>

<style lang="sass" scoped>
.lightjumbotron
  padding: 1rem
  border: 1px solid #D5D5D5
  border-radius: 5px
</style>
