<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12 center">
        <h1>Math Quiz</h1>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <keep-alive>
        <component :is='mode' :status='status' @setStatus='status = $event'/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './MathQuiz-components/Question.vue'
import Answer from './MathQuiz-components/Answer.vue'
export default {
  data () {
    return {
      'correct': 0,
      'incorrect': 0,
      'mode': 'question',
      'status': ''
    }
  },
  components: {
    'question': Question,
    'answer': Answer
  },
  watch: {
    status: function () {
      this.mode = this.mode === 'question' ? 'answer' : 'question'
    }
  }
}
</script>

<style lang="css">
</style>
