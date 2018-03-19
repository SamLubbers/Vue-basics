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
        <transition name='flip' mode='out-in'>
          <keep-alive>
          <component :is='mode' :status='status' @setStatus='status = $event'/>
          </keep-alive>
        </transition>
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

<style lang="sass">
@keyframes flip-out
  from
    transform: rotateY(0deg)
  to
    transform: rotateY(90deg)

@keyframes flip-in
  from
    transform: rotateY(90deg)
  to
    transform: rotateY(0deg)

.flip-enter-active
  animation: flip-in .2s linear forwards

.flip-leave-active
  animation: flip-out .2s linear forwards
</style>
