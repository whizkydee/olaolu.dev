import Vue from 'vue'

export default Vue.component('Announcer', {
  props: ['message', 'readOut'],
  render() {
    return (
      <div
        id="Announcer"
        role="status"
        class="visuallyhidden"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden={String(!this.readOut)}
      >
        {this.message}
      </div>
    )
  },
})
