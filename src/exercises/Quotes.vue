<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="title">Quotes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <progressbar :current_value='quotes.length' :max_value='maxQuotes'/>
      </div>
    </div>
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
import ProgressBar from './Quotes-Components/ProgressBar.vue'
import QuoteInput from './Quotes-Components/QuoteInput.vue'
import QuoteContainer from './Quotes-Components/QuoteContainer.vue'
export default {
  data () {
    return {
      quotes: [],
      maxQuotes: 10
    }
  },
  components: {
    'progressbar': ProgressBar,
    'quote-input': QuoteInput,
    'quote-container': QuoteContainer
  },
  methods: {
    addQuote (newQuote) {
      if (this.quotes.length < this.maxQuotes) {
        this.quotes.unshift(newQuote)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.title
  font-style: italic
  text-align: center
  color: #555
</style>
