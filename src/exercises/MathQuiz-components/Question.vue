<template lang="html">
  <div class="card">
    <div class="card-header">
      {{ question }}
    </div>
    <div class="card-content flex-column" style="justify-content: space-between;">
      <button class="btn btn-primary" v-for='(result, index) in results' :key='index' @click='checkResult(result)'>{{result}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['status'],
  data () {
    return {
      'operation': {},
      'numberOfResults': 4,
      'resultsMaxVariance': 3,
      'maxValue': 5,
      'difficultyRate': 5
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
  },
  methods: {
    checkResult (value) {
      if (value === this.trueResult) {
        this.$emit('setStatus', 'correct')
        this.newQuestion()
      } else {
        this.$emit('setStatus', 'incorrect')
      }
    },
    newQuestion () {
      this.maxValue = this.maxValue + this.difficultyRate
      this.operation = {
        'method': Math.random() > 0.5 ? '+' : '-',
        'values': [this.randomNewValue(), this.randomNewValue()]
      }
    },
    randomNewValue () {
      return Math.round(Math.random() * this.maxValue) + 1
    }
  },
  created () {
    this.newQuestion()
  }
}
</script>

<style lang="sass" scoped>
.card
  height: 240px
.card-header
  text-align: center
  background: #F5F5F5
  padding: .5rem
.card-content
  height: 100%
</style>
