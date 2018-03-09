<template>
    <div>
      <slot name='title' class="title"><p>Component title</p></slot>
      <slot name='subtitle' class="subtitle"><p>Component subtitle</p></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
    .title {
      font-size: 20px
    }
    .subtitle {
      font-size: 12px;
      font-style: italic;
      color: #CCC;
    }
</style>
