<template lang="html">
  <div>
    <label>Full name</label>
    <div class="flex-row">
      <div class="input-group" style="margin-right: 5px">
        <div class="input-group-prepend">
          <span class="input-group-text" id="name-label">Name</span>
        </div>
        <input type="text" aria-describedby="name-label" class="form-control" :value="name" @input='nameEntered'>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="surname-label">Surname</span>
        </div>
        <input type="text" aria-describedby="surname-label" class="form-control" :value='surname' @input='surnameEntered'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    name: function () {
      return this.value.split(' ')[0]
    },
    surname: function () {
      return this.value.split(' ')[1]
    }
  },
  methods: {
    nameEntered (event) {
      let fullName = event.target.value + ' ' + this.surname
      this.$emit('input', fullName)
    },
    surnameEntered (event) {
      let fullName = this.name + ' ' + event.target.value
      this.$emit('input', fullName)
    }
  }
}
</script>
