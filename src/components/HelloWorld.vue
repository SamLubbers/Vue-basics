<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-4">
        <h1>Vue.js basics</h1>
        <p>{{description}}</p>
        <hr>
        <p>Update the description from this input field</p>
        <input type="text" v-model="description">
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
