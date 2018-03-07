<template lang="html">
  <div class="container">
  <div class="row">
    <div class="col-12" style="text-align:center">
      <h4>Click listener</h4>
      <h2>{{ counter }}</h2>
      <button class="btn btn-primary" @click='counter--'>
        <i class="fas fa-minus"></i>
      </button>
      <button class="btn btn-primary" @click='counter++'>
        <i class="fas fa-plus"></i>
      </button>
      <hr>
      <h4>Hover listener</h4>
      <h2 class="hoverHighlight" @mousemove="updateCoordinates">
        X: {{ x }} Y: {{ y }}
      </h2>
      <hr>
      <h4>Keypress listener</h4>
      <div class="form-group">
        <input type="text" class="form-control"
        @keyup='keypress_count++'
        @keyup.delete='backspace_count++'>
        <p style="padding:10px">character count: {{character_count}}, backspaces count: {{backspace_count}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data () {
    return {
      counter: 0,
      x: 0,
      y: 0,
      keypress_count: 0,
      backspace_count: 0
    }
  },
  computed: {
    character_count: function () {
      return this.keypress_count - this.backspace_count
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
