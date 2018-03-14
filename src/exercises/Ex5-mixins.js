export const computedText = {
  computed: {
    reversedText: function () {
      return this.textToReverse.slice().split('').reverse().join('')
    },
    countedText: function () {
      return `${this.textToCount} -> character count -> (${this.textToCount.length})`
    }
  }
}
