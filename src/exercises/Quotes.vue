<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <quote-input :addQuote='addQuote'></quote-input>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteInput from './Quotes-Components/QuoteInput.vue'
export default {
  components: {
    'quote-input': QuoteInput
  },
  methods: {
    addQuote (newQuote) {
      console.log(newQuote)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
