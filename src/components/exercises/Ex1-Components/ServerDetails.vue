<template lang="html">
  <div v-if='Object.keys(selectedServer).length !== 0'>
    <h1>Server {{selectedServer.identifier}}</h1>
    <p>Status: {{selectedServer.status}}</p>
    <button class="btn btn-primary" @click='changeServerStatus()'>change status</button>
  </div>
  <div v-else>
    <p>Click on a server of the list to see details</p>
  </div>
</template>

<script>
export default {
  props: {
    selectedServer: {
      type: Object,
      default: null
    },
    changeServerStatus: Function
  }
}
</script>
