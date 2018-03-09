<template lang="html">
  <div class="flex-row quote-container" @click="$emit('quoteClicked')">
    <p class="quote">"{{quote}}"</p>
  </div>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.quote-container
  padding: 1rem 2rem
  margin: 1rem 0
  border: 1px solid #CCC
  border-radius: 2px
  color: #777

  &:hover
    background: #CCC
    color: white
    cursor: pointer

  &:active
    background: #777

.quote
  font-style: italic
  margin: 0
</style>
