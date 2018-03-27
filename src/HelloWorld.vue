<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-6">
        <h1>Vue.js basics</h1>
        <div style="display: flex; flex-direction: column">
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'Events'}">Events</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'DynamicLink'}">Dynamic Link</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'DynamicTable'}">Dynamic Table</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'DynamicStyling'}">Dynamic Styling</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'Game'}">Game</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'MathQuiz'}">Math Quiz</router-link>
          <router-link tag='button' class="btn btn-primary vertical-margin" :to="{name: 'Quotes'}">Quotes</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style lang='sass' scoped>
.vertical-margin
  margin: 1rem 0
</style>
