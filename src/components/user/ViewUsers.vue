<template lang="html">
  <div>
    <template v-if='users.length > 0'>
    <table class="table">
      <thead>
        <tr>
          <th v-for='(v, k) in users[0]' :key='k'>k</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(user, index) in users' :key='index'>
          <td v-for='(v, k, i) in user' :key='i'>v</td>
        </tr>
      </tbody>
    </table>
    </template>
    <template v-else>
      <div class="center">
        <p>No users currently in the database. Try adding a user</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'users': []
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
