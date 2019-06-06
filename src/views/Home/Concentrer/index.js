import Vue from 'vue'
import StyledConcentrer from './styles'

const Concentrer = Vue.component('Concentrer', {
  render() {
    return (
      <StyledConcentrer>
        <div class="concentrer__content">
          <Cavalier
            heading="What am I?"
            text="I like to call myself a UX Strategist and front end developer. I'm currently based in the city optimistic about things and smiling a lot."
          />

          <Cavalier
            heading="Wanna know more?"
            text="I like to call myself a UX Strategist and front end developer. I'm currently based in the city optimistic about things and smiling a lot."
          />
        </div>
      </StyledConcentrer>
    )
  },
})

export default Concentrer
