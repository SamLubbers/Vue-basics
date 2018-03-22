<template lang="html">
  <div>
    <div class="form-group">
      <label for="email">email</label>
      <input type="text" class="form-control" v-model='email' id="email">
    </div>
    <button class="btn btn-outline-dark" @click='deleteUser'>Delete User</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  methods: {
    deleteUser () {
      this.$http.delete(`api/v1.0/users/${this.email}`)
        .then(res => {
          console.log('user deleted')
          this.email = ''
        }, err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.form-control
  border-color: #343a40
</style>
