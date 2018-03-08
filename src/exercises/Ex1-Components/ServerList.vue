<template lang="html">
  <div>
    <ul class="list-group">
      <server v-for="s in servers" :key='s.identifier' :server='s' :showServerDetails='showServerDetails'/>
    </ul>
  </div>
</template>

<script>
import Server from './Server'
export default {
  data () {
    return {
      servers: [
        {'identifier': 1, 'status': 'active'},
        {'identifier': 2, 'status': 'active'},
        {'identifier': 3, 'status': 'active'},
        {'identifier': 4, 'status': 'active'},
        {'identifier': 5, 'status': 'active'}
      ]
    }
  },
  props: {
    showServerDetails: {
      type: Function,
      required: true
    }
  },
  components: {
    'server': Server
  }
}
</script>
