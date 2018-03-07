<template lang="html">
  <div>
    <h2 class="hoverHighlight" @mousemove="updateCoordinates">
      X: {{ x }} Y: {{ y }}
    </h2>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      'x': 0,
      'y': 0
    }
  },
  methods: {
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script>
