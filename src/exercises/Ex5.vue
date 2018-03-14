<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4>actions on text using filters</h4>
        <span>{{ textToReverse }}</span> -> <span>{{ textToReverse | reverseText }}</span>
        <hr>
        <p>{{textToCount | charCount}}</p>
        <hr>
        <h4>same actions on text but using computed properties</h4>
        <span>{{ textToReverse }}</span> -> <span>{{ reversedText }}</span>
        <hr>
        <p>{{countedText}}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { computedText } from './Ex5-mixins.js'

export default {
  mixins: [computedText],
  data () {
    return {
      'textToReverse': 'this text is reversed',
      'textToCount': 'count'
    }
  },
  filters: {
    reverseText (text) {
      return text.split('').reverse().join('')
    },
    charCount (text) {
      let count = text.length
      return `${text} -> character count -> (${count})`
    }
  }
}
</script>
