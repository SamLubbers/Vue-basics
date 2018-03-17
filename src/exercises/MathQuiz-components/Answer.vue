<template lang="html">
    <div class="card center flex-column" :class="status" style="align-items: center;">
      <h4 style="margin: 3rem 0">The answer is {{status}}</h4>
      <button class="btn btn-success" v-if='status === "correct"' @click="$emit('setStatus', '')">New question</button>
      <button class="btn btn-danger" v-else @click="$emit('setStatus', '')">Try again</button>
    </div>
</template>

<script>
export default {
  props: ['status']
}
</script>

<style lang="sass" scoped>
  .card
    height: 240px
  .incorrect
    background-color: pink
    color: red
  .correct
    background-color: lightgreen
    color: green
</style>
