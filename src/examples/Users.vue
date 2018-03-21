<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12 navigation">
        <div class="flex-row" style="justify-content: space-evenly">
          <button class="btn btn-outline-dark" @click="state='view'">View Users</button>
          <button class="btn btn-outline-dark" @click="state='new'">New User</button>
          <button class="btn btn-outline-dark" @click="state='delete'">Delete User</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: 'view'
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
