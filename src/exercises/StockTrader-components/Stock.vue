<template>
  <div class="stock-container shadowed">
    <div class="flex-row stock-header" :style="{background: stockType === 'buy' ? 'lightgreen' : 'lightblue'}">
      <span>{{stock.name}}</span> | <span>price: {{stock.price}}</span> | <span>amount owned: {{stock.amountOwned}}</span>
    </div>
    <div class="stock-body">
      <input type="text" class='form-control'>
      <button class="btn" :class="stockType === 'buy' ? 'btn-priamry' : 'btn-danger'">{{stockType}}</button>
    </div>
  </div>
</template>
<script>
export default {
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
  data: () => ({
  })
}
</script>
<style lang="sass" scoped>
.stock-container
  border: 1px solid #F8F8F8
  border-radius: 5px

.stock-header
  padding: 1rem .5rem
  border-bottom: 1px solid #CCC
</style>
