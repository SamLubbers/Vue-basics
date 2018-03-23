<template lang="html">
  <div>
    <div class="form-group">
      <label for="name">name</label>
      <input type="text" class="form-control" v-model='name' id="name">
    </div>
    <div class="form-group">
      <label for="email">email</label>
      <input type="text" class="form-control" v-model='email' id="email">
    </div>
    <div>
      <button class="btn btn-outline-dark" @click='createUser'>Create New User</button>
      <span class="inline-margin" style="padding: .5rem">
        <transition name='fade' mode='out-in'>
        <span class="success-text" v-if='usercreated'>User succesfully created</span>
        <span class="danger-text" v-else-if='userexists'>User with this email already exists</span>
        </transition>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      usercreated: false,
      userexists: false
    }
  },
  methods: {
    createUser () {
      this.$http.post('api/v1.0/users/', {'email': this.email, 'name': this.name})
        .then(res => {
          this.name = ''
          this.email = ''
          this.usercreated = true
          let vm = this
          setTimeout(function () {
            vm.usercreated = false
          }, 2000)
        }, err => {
          if (err.status === 409) {
            this.userexists = true
            let vm = this
            setTimeout(function () {
              vm.userexists = false
            }, 2000)
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
