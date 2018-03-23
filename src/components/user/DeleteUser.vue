<template lang="html">
  <div>
    <div class="form-group">
      <label for="email">email</label>
      <input type="text" class="form-control" v-model='email' id="email">
    </div>
    <div>
      <button class="btn btn-outline-dark" @click='deleteUser'>Delete User</button>
      <span class="inline-margin" style="padding: .5rem ">
      <transition name='fade' mode='out-in'>
      <span class="success-text" v-if='deleted'>User succesfully deleted</span>
      <span class="danger-text" v-else-if='notfound'>User with this email does not exists</span>
      </transition>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      deleted: false,
      notfound: false
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
          if (err.status === 404) {
            this.notfound = true
            let vm = this
            setTimeout(() => { vm.deleted = false }, 2000)
          }
        })
    }
  }
}
</script>

<style lang="sass" scoped>
.form-control
  border-color: #343a40
</style>
