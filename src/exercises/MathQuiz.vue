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
        <component :is='mode'/>
        <div class="flex-row" style="justify-content: space-around; margin: 1rem 0">
          <p>Correct Answers: {{correct}}</p> <p>Incorrect Answers: {{incorrect}}</p>
        </div>
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
      'mode': 'question'
    }
  },
  components: {
    'question': Question,
    'answer': Answer
  },
  methods: {
    correctAnswer () {
      this.correct++
    },
    incorrectAnswer () {
      this.incorrect++
    }
  }
}
</script>

<style lang="css">
</style>
