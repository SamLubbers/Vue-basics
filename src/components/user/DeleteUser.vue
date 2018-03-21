<template lang="html">
  <div>
    <div class="form-group">
      <label for="email">email</label>
      <input type="text" class="form-control" v-model='email' id="email">
    </div>
    <button class="btn btn-outline-dark">Delete User</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.form-control
  border-color: #343a40
</style>
