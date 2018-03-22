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
    <button class="btn btn-outline-dark" @click='createUser'>Create New User</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    createUser () {
      this.$http.post('api/v1.0/users/', {'email': this.email, 'name': this.name})
        .then(res => {
          console.log('new user created')
          this.name = ''
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
