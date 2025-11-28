import Vue from 'vue'

export default Vue.component('SkipLink', {
  props: ['to'],
  computed: {
    computedTo() {
      return this.to.startsWith('#') ? this.to : '#' + this.to
    },
  },
  render() {
    return (
      <a href={this.computedTo} id="skip-link">
        {this.$slots.default || 'Skip to navigation'}
      </a>
    )
  },
})
