<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <br>
                <button class="btn btn-primary" @click='selected = "appBlue"'>Load Blue Template</button>
                <button class="btn btn-success" @click='selected = "appGreen"'>Load Green Template</button>
                <button class="btn btn-danger" @click='selected = "appRed"'>Load Red Template</button>
                <hr>
                <component :is='selected'>
                  <p slot='title'>title from the parent component</p>
                  <p slot='subtitle'>subtitle from the parent component</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './Ex2-Components/Blue.vue'
import Green from './Ex2-Components/Green.vue'
import Red from './Ex2-Components/Red.vue'

export default {
  data () {
    return {
      selected: 'appBlue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style>
</style>
