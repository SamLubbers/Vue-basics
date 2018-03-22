<template lang="html">
  <div>
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
        <p>No users currently in the database</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'users': [],
      'orderedKeys': ['id', 'name', 'email']
    }
  },
  created () {
    this.$http.get('api/v1.0/users/')
      .then((res) => {
        this.users = res['body']
      }, err => {
        console.log(err)
      }
      )
  }
}
</script>

<style lang="sass" scoped>
</style>
