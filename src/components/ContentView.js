import Vue from 'vue'
import styled from 'vue-styled-components'

const ContentView = Vue.component('ContentView', {
  created() {
    document.documentElement.id = typeof this.id === 'string' && this.id
  },

  render() {
    return (
      <StyledContentView role="main" id="main" tabindex="-1">
        {this.$slots.default}
      </StyledContentView>
    )
  },

  props: {
    id: { type: String, required: true },
  },
})

const StyledContentView = styled.main`
  outline: none;

  [class$='__content'] {
    padding: 0 10em;
    max-width: 1500px;
  }
`

export default ContentView
