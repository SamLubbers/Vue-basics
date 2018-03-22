// helper methods to give feedback to the users
export const feedbackMixin = {
  methods: {
    flash (conditional, time) {
      setTimeout(function () {
        conditional = true
      }, time)
      conditional = false
    }
  }
}
