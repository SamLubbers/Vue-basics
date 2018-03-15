<template lang="html">
    <div class="card center flex-column" :class="status" style="justify-content: space-around;">
      <h4 >The answer is {{status}}</h4>
      <button class="btn btn-success" v-if='status === "correct"'>New question</button>
      <button class="btn btn-warning" v-else>Try again</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      'status': 'correct'
    }
  }
}
</script>

<style lang="sass" scoped>
  .card
    height: 240px
  .incorrect
    background-color: lightred
    color: red
  .correct
    background-color: lightgreen
    color: green
</style>
