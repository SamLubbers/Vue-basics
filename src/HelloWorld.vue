<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6">
        <h1>Vue.js basics</h1>
        <div style="display: flex; flex-direction: column">
          <button class="btn btn-primary vertical-margin" @click='$router.push("/examples/Events")'>Events</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/examples/DynamicLink")'>Dynamic Link</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/examples/DynamicTable")'>Dynamic Table</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/examples/DynamicStyling")'>Dynamic Styling</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/exercises/Game")'>Game</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/exercises/MathQuiz")'>Math Quiz</button>
          <button class="btn btn-primary vertical-margin" @click='$router.push("/exercises/Quotes")'>Quotes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      description: 'Learning in progress...'
    }
  }
}
</script>
<style lang='sass' scoped>
.vertical-margin
  margin: 1rem 0
</style>
