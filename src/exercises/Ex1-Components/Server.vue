<template lang="html">
    <li class="list-group-item hoverHighlightInvert" @click='showServerDetails(server)'>Server number: {{server.identifier}} | status: {{server.status}}</li>
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      required: true
    },
    showServerDetails: Function
  }
}
</script>
