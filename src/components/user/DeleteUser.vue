<template lang="html">
  <div>
    <div class="form-group">
      <label for="email">email</label>
      <input type="text" class="form-control" v-model='email' id="email">
    </div>
    <div>
      <button class="btn btn-outline-dark" @click='deleteUser'>Delete User</button>
      <transition name='fade'>
      <span class="green-text inline-margin" style="padding: .5rem " v-if='deleted'>User succesfully deleted</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      deleted: false
    }
  },
  methods: {
    deleteUser () {
      this.$http.delete(`api/v1.0/users/${this.email}`)
        .then(res => {
          this.email = ''
          this.deleted = true
          let vm = this
          setTimeout(function () {
            vm.deleted = false
          }, 2000)
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
