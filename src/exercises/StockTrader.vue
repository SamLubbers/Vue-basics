<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-12" style="border: 1px solid black">
        <router-link :to="{ name: 'myStocks' }">Portfolio</router-link>
        <router-link :to="{ name: 'allStocks' }">Stocks</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 full-width">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
.full-width
  padding: 0
</style>
