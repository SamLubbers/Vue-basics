<template>
  <div class="container">
    <div class="row">
      <div class="col-12" style="border: 1px solid black">
        <router-link :to="{ name: 'myStocks' }">MyStocks</router-link>
        <router-link :to="{ name: 'allStocks' }">Stocks</router-link>
        <p>tag</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
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
</style>
