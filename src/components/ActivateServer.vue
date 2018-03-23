<template lang="html">
  <div>
    <h2 class="danger-text">Server not active :(</h2>
    <p>This part of the application requires interacting with the server.</p>
    <p>In order to activate the server run the command <span class="inline-code">./runbackend.py</span></p>
    <p>Note that in order to run the server you need to have python 3 and install all dependencies</p>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="sass" scoped>
.inline-code
  background: #F5F5F5
  padding: .25rem
  font-weight: bold
</style>
