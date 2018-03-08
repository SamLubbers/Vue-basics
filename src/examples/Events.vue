<template lang="html">
  <div class="container">
  <div class="row">
    <div class="col-12" style="text-align:center">
      <h4>Click listener</h4>
      <!-- counter is a global component -->
      <counter/>
      <hr>
      <h4>Hover listener</h4>
      <coords/>
      <hr>
      <h4>Keypress listener</h4>
      <keycount/>
    </div>
  </div>
  </div>
</template>

<script>
import MouseCoordinates from '@/components/events/MouseCoordinates'
import KeypressCounter from '@/components/events/KeypressCounter'

export default {
  name: 'Events',
  components: {
    coords: MouseCoordinates,
    keycount: KeypressCounter
  }
}
</script>
