<template lang="html">
  <div>
    <h2>{{ counter }}</h2>
    <button class="btn btn-primary" @click='counter--'>
      <i class="fas fa-minus"></i>
    </button>
    <button class="btn btn-primary" @click='counter++'>
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      counter: 0
    }
  }
}
</script>
