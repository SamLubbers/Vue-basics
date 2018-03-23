<template lang="html">
  <div>
    <transition name='fade' mode='out-in'>
    <template v-if='users.length > 0'>
    <table class="table">
      <thead>
        <tr>
          <th v-for='(k, i) in orderedKeys' :key='i'>{{k}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) in users' :key='index'>
          <td v-for='(k, i) in orderedKeys' :key='i'>{{user[k]}}</td>
        </tr>
      </tbody>
    </table>
    </template>
    <template v-else>
      <div class="center">
        <p>{{errorMessage}}</p>
      </div>
    </template>
  </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'users': [],
      'orderedKeys': ['id', 'name', 'email'],
      errorMessage: ''
    }
  },
  created () {
    this.$http.get('api/v1.0/users/')
      .then((res) => {
        this.users = res['body']
      }, err => {
        if (err.status === 404) {
          this.errorMessage = 'No users currently in the database'
        }
      }
      )
  }
}
</script>

<style lang="sass" scoped>
</style>
