<template>
  <div>
    <navigation/>
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
import StockTraderNav from './StockTrader-components/StockTraderNav'
export default {
  components: {
    'navigation': StockTraderNav
  }
}
</script>
<style lang="sass" scoped>
.full-width
  padding: 0
</style>
