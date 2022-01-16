import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change () {
      this.$emit('input', !this.value)
    }
  }
})
