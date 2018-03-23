<template lang="html">
  <div class="container">
    <template v-if='serverStatus === "alive"'>
    <div class="row">
      <div class="col-12 navigation">
        <div class="flex-row" style="justify-content: space-evenly">
          <button class="btn btn-outline-dark" @click="state='viewusers'">View Users</button>
          <button class="btn btn-outline-dark" @click="state='newuser'">New User</button>
          <button class="btn btn-outline-dark" @click="state='deleteuser'">Delete User</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
          <component :is='state'/>
      </div>
    </div>
    </template>
    <template v-else-if='serverStatus === "down"'>
      <activateserver/>
    </template>
  </div>
</template>

<script>
import ViewUsers from '@/components/user/ViewUsers'
import NewUser from '@/components/user/NewUser'
import DeleteUser from '@/components/user/DeleteUser'
import ActivateServer from '@/components/ActivateServer'

export default {
  components: {
    viewusers: ViewUsers,
    newuser: NewUser,
    deleteuser: DeleteUser,
    activateserver: ActivateServer
  },
  data () {
    return {
      state: 'viewusers',
      serverStatus: ''
    }
  },
  created () {
    this.$http.get('api/v1.0/users/')
      .then((res) => {
        this.serverStatus = 'alive'
      }, err => {
        console.log(err)
        if (err.status === 504) {
          this.serverStatus = 'down'
        } else {
          this.serverStatus = 'alive'
        }
      })
  }
}
</script>

<style lang="sass" scoped>
.navigation
  border: 1px solid #343a40
  border-right: 0
  border-left: 0
  padding: 1rem 0
  margin: 2rem 0
</style>
