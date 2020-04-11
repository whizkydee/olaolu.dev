import Vue from 'vue'

export default Vue.component('Announcer', {
  props: ['message'],
  render() {
    return (
      <div
        id="Announcer"
        role="status"
        class="visuallyhidden"
        aria-hidden="true"
        aria-live="assertive"
        aria-atomic="true"
      >
        {this.message}
      </div>
    )
  },
})
