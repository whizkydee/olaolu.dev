import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigator } from '@/components'

const PitchSlate = Vue.component('PitchSlate', {
  render() {
    return (
      <StyledPitchSlate class="pente">
        <div class="primary__content">
          <div class="cavalier">
            <h1>
              Front end Developer<span>.</span>
            </h1>

            <p>
              I like to craft solid and scalable FE products with great user
              experiences.
            </p>
          </div>

          <figure class="visage" aria-label="Photo of Olaolu">
            <div />
          </figure>
        </div>

        <div class="bottom__content">
          <ul class="deux__points">
            <li>
              Highly skilled in progressive enhancement, design systems &amp; UI
              Engineering.
            </li>
            <li>
              Over 8 years of experience working with clients from about 15
              countries.
            </li>
          </ul>

          <Navigator />
        </div>
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
