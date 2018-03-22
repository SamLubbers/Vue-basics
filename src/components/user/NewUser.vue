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
      <transition name='fade'>
      <span class="green-text inline-margin" style="padding: .5rem" v-if='usercreated'>User succesfully created</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      usercreated: false
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
