<template lang="html">
  <div>
    <div class="progressbar-container">
      <div class="progressbar" :style="{width: progressPercentage+'%'}">
        <p v-if='current_value != 0'>{{current_value}}/{{max_value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'current_value': Number,
    'max_value': Number
  },
  computed: {
    progressPercentage: function () {
      return (this.current_value / this.max_value) * 100
    }
  }
}
</script>

<style lang="sass" scoped>
$vue-green: #42b983

.progressbar-container
  position: relative
  width: 100%
  background: #F5F5F5
  border: 1px solid #CCC
  border-radius: 5px
  height: 30px
  margin: 2rem 0

.progressbar
  position: absolute
  background: $vue-green
  width: 100%
  height: 100%
  color: white
  text-align: center
  transition: all 0.1s linear

</style>
