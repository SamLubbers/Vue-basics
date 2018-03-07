<template>
<div class="container">
  <div class="row">
    <div class="col-12" style="text-align:center">
      <p>This <a :href="dynamiclink" target="_blank">Dynamic link</a> will be updated based on the contents of the input field below</p>
      <hr>
      <input type="text" v-model='dynamiclink'>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DynamicLink',
  data () {
    return {
      dynamiclink: 'https://vuejs.org'
    }
  }
}
</script>
