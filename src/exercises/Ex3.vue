<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Form input</h2>
        <form>
          <input type="text" v-model='fullName'>
        </form>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
        <h2>Form output</h2>
        <b>fullName</b> {{fullName}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'fullName': ''
    }
  }
}
</script>

<style lang="css">
</style>
