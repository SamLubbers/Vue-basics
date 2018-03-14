<template lang="html">
  <div class="card">
    <div class="card-header">
      {{ question }}
    </div>
    <div class="card-content">
      <button class="btn btn-primary btn-block" v-for='(result, index) in results' :key='index'>{{result}}</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'operation': {
        'method': '+',
        'values': [1, 1]
      },
      'numberOfResults': 4,
      'resultsMaxVariance': 3
    }
  },
  computed: {
    question: function () {
      let text = 'what is '
      let method = this.operation.method
      let values = this.operation.values
      text = text + values.join(method) + '?'
      return text
    },
    trueResult: function () {
      let result = 0
      if (this.operation.method === '+') {
        result = this.operation.values.reduce((a, b) => a + b)
      } else if (this.operation.method === '-') {
        result = this.operation.values.reduce((a, b) => a - b)
      }
      return result
    },
    results: function () {
      let results = []
      let trueResultIndex = Math.floor(Math.random() * this.numberOfResults)
      for (var i = 0; i < this.numberOfResults; i++) {
        if (i === trueResultIndex) {
          results.push(this.trueResult)
        } else {
          let falseResultVariance = Math.round(Math.random() * (this.resultsMaxVariance - 1)) + 1
          if (i % 2 === 0) falseResultVariance = -falseResultVariance
          let falseResult = this.trueResult + falseResultVariance
          results.push(falseResult)
        }
      }
      return results
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  width: 100%
.card-header
  text-align: center
  background: #F5F5F5
  padding: .5rem
</style>
