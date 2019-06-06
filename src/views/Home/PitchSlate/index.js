import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'

const PitchSlate = Vue.component('PitchSlate', {
  render() {
    return (
      <StyledPitchSlate class="pente">
        <div class="primary__content">
          <Cavalier
            theme="lime"
            text="I like to craft solid and scalable FE products with great user experiences."
          >
            <h1 slot="heading">
              Front end Developer<span>.</span>
            </h1>
          </Cavalier>

          <figure class="visage" aria-label="Photo of Olaolu">
            <div />
          </figure>
        </div>

        <div class="bottom__content">
          <ul class="deux__points">
            <li>
              Highly skilled at progressive enhancement, design systems &amp; UI
              Engineering.
            </li>
            <li>
              Over 8 years of experience working with clients from about 15
              countries.
            </li>
          </ul>

          <Navigation id="section__nav" />
        </div>
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
