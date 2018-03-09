<template lang="html">
  <div class="flex-row">
    <div class="input-group">
      <div class="input-group-prepend">
      <label for="newquoteinput" id="newquotelabel" class="input-group-text">New Quote:</label>
      </div>
      <input type="text" class="form-control" id="newquoteinput" aria-describedby="newquotelabel"
      v-model='newQuote' @keypress.enter='addQuote(newQuote)'>
    </div>
    <button class="btn btn-primary inline-margin" @click='addQuote(newQuote)'>Add quote</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newQuote: ''
    }
  },
  props: {
    addQuote: {
      type: Function,
      required: true
    }
  }
}
</script>
<style scoped>

</style>
