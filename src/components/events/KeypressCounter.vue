<template lang="html">
    <div class="form-group">
      <input type="text" class="form-control"
      @keyup='keypress_count++'
      @keyup.delete='backspace_count++'>
      <p style="padding:10px">character count: {{character_count}}, backspaces count: {{backspace_count}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      keypress_count: 0,
      backspace_count: 0
    }
  },
  computed: {
    character_count: function () {
      return this.keypress_count - this.backspace_count
    }
  }
}
</script>
