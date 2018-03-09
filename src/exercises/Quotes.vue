<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <quote-input @addQuote='addQuote($event)'></quote-input>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <quote-container v-for='(quote, index) in quotes' :key='index' :quote='quote' @quoteClicked='quotes.splice(index, 1)'></quote-container>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteInput from './Quotes-Components/QuoteInput.vue'
import QuoteContainer from './Quotes-Components/QuoteContainer.vue'
export default {
  data () {
    return {
      quotes: ['quote1']
    }
  },
  components: {
    'quote-input': QuoteInput,
    'quote-container': QuoteContainer
  },
  methods: {
    addQuote (newQuote) {
      this.quotes.push(newQuote)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
