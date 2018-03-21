<template lang="html">
  <div class="container">
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
        <keep-alive>
          <component :is='state'/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import ViewUsers from '@/components/user/ViewUsers'

export default {
  components: {
    viewusers: ViewUsers
  },
  data () {
    return {
      state: 'viewusers'
    }
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
