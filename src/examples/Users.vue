<template lang="html">
  <div class="container">
    <template v-if='serverStatus === "alive"'>
    <div class="row">
      <div class="col-12 navigation">
        <div class="flex-row" style="justify-content: space-evenly">
          <router-link tag='button' class="btn btn-outline-dark" :to="{name: 'viewUsers'}">View Users</router-link>
          <router-link tag='button' class="btn btn-outline-dark" :to="{name: 'NewUser'}">New User</router-link>
          <router-link tag='button' class="btn btn-outline-dark" :to="{name: 'DeleteUser'}">Delete User</router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <transition name='fade' mode='out-in'>
            <router-view></router-view>
        </transition>
      </div>
    </div>
    </template>
    <template v-else-if='serverStatus === "down"'>
      <activateserver/>
    </template>
  </div>
</template>

<script>
import ActivateServer from '@/components/ActivateServer'

export default {
  components: {
    activateserver: ActivateServer
  },
  data () {
    return {
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
