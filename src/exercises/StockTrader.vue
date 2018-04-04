<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light mb-3">
      <router-link tag='a' class="navbar-brand" :to="{ name: 'traderHome' }" active-class='active'>Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNav" aria-controls="collapseNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapseNav">
        <div class="navbar-nav mr-auto">
            <router-link tag='a' class="nav-item nav-link" :to="{ name: 'myStocks' }" active-class='active'>Portfolio</router-link>
            <router-link tag='a' class="nav-item nav-link" :to="{ name: 'allStocks' }" active-class='active'>Stocks</router-link>
        </div>
        <span class="navbar-text" style="font-weight: bold; color: black">Funds: {{myFunds}}$</span>
      </div>
    </nav>
    <div class="container">
    <div class="row">
      <div class="col-12 full-width">
        <router-view></router-view>
      </div>
    </div>
  </div>
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
.full-width
  padding: 0
</style>
