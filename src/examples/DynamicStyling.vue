<template>
<div class="container">
  <div class="row">
    <div class="col-12" style="text-align:center">
      <button class="btn" @click="changeButtonStyle" :class="[btnStyle, btnSize]">
      change style
      </button>
      <div style="margin-top:15px">
        <input type="checkbox" id="buttonOutline" v-model='outline'>
        <label for="buttonOutline">Outline</label>
      </div>
      <input type="radio" id="smallButton" value="small" v-model='buttonSize'>
      <label for="smallButton">small</label>
      <input type="radio" id="mediumButton" value="medium" v-model='buttonSize'>
      <label for="mediumButton">medium</label>
      <input type="radio" id="largeButton" value="large" v-model='buttonSize'>
      <label for="largeButton">large</label>

    </div>
  </div>
  <div class="row">
    <div class="col-12" style="text-align:center">
      <hr>
      <p :style="textStyle">Style me</p>
      <div class="form-group">
        Font: <input type="text" v-model="fontFamily">
      </div>
      <div class="form-group">
        Size: <input type="text" v-model="fontSize">
      </div>
      <div class="form-group">
        Color: <input type="text" v-model="fontColor">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DynamicStyling',
  data () {
    return {
      styleIndex: 0,
      buttonStyles: ['primary', 'secondary', 'success', 'info', 'warning',
        'danger', 'dark'
      ],
      outline: false,
      buttonSize: 'medium',
      fontSize: 50,
      fontColor: '#35495E',
      fontFamily: 'Futura'
    }
  },
  computed: {
    currentStyle: function () {
      return this.buttonStyles[this.styleIndex]
    },
    outlineClass: function () {
      return this.outline ? 'outline-' : ''
    },
    btnStyle: function () {
      return 'btn-' + this.outlineClass + this.currentStyle
    },
    btnSize: function () {
      if (this.buttonSize === 'medium') {
        return null
      } else if (this.buttonSize === 'small') {
        return 'btn-sm'
      } else if (this.buttonSize === 'large') {
        return 'btn-lg'
      };
    },
    textStyle: function () {
      return {
        'font-size': this.fontSize + 'px',
        'color': this.fontColor,
        'font-family': this.fontFamily
      }
    }
  },
  methods: {
    changeButtonStyle: function () {
      if (this.styleIndex + 1 >= this.buttonStyles.length) {
        this.styleIndex = 0
      } else {
        this.styleIndex++
      }
    }
  }
}
</script>
