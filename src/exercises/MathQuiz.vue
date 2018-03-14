<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h1>Math Quiz</h1>
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-2">
        <question-card/>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from './MathQuiz-components/QuestionCard.vue'
export default {
  components: {
    'question-card': QuestionCard
  }
}
</script>

<style lang="css">
</style>
