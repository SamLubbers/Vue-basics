<template lang="html">
  <div>
    <label>Full name</label>
    <div class="flex-row">
      <div class="input-group" style="margin-right: 5px">
        <div class="input-group-prepend">
          <span class="input-group-text" id="name-label">Name</span>
        </div>
        <input type="text" aria-describedby="name-label" class="form-control" v-model='name' @input='nameEntered'>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="surname-label">Surname</span>
        </div>
        <input type="text" aria-describedby="surname-label" class="form-control" v-model='surname' @input='nameEntered'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      'name': '',
      'surname': ''
    }
  },
  props: ['value'],
  methods: {
    nameEntered () {
      this.$emit('input', this.name + ' ' + this.surname)
    }
  }
}
</script>
