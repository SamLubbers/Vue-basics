<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-12" style="text-align: center">
        <h1 v-myon:click="{'hover': hintEventElement, 'action':highlightEventElement}">I change colors when you hover over me, and when you click me!</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    myon: {
      bind (el, binding, vnode) {
        el.style.transition = 'all 0.5s linear'
        if (binding.value.hover) {
          el.addEventListener('mouseover', binding.value.hover)
        }
        if (binding.arg === 'click') {
          el.addEventListener('click', binding.value.action)
        }
      }
    }
  },
  methods: {
    highlightEventElement (event) {
      event.target.style.color = '#42b983'
    },
    hintEventElement (event) {
      event.target.style.color = '#CCC'
    }
  }
}
</script>
