<template lang="html">
  <div class="flex-row">
    <div class="input-group">
      <div class="input-group-prepend">
      <label for="newquoteinput" id="newquotelabel" class="input-group-text">New Quote:</label>
      </div>
      <input type="text" class="form-control" id="newquoteinput" aria-describedby="newquotelabel"
      v-model='newQuote' @keypress.enter='addQuote'>
    </div>
    <button class="btn btn-primary inline-margin" @click='addQuote'>Add quote</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newQuote: ''
    }
  },
  methods: {
    addQuote () {
      if (this.newQuote) {
        this.$emit('addQuote', this.newQuote)
        this.newQuote = ''
      }
    }
  }
}
</script>
