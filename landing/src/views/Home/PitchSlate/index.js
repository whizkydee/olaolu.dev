import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'
import { LogomarkOutline } from '@/assets'
import { NAVIGATION_ID } from '@/constants'

const PitchSlate = Vue.component('PitchSlate', {
  props: ['name'],
  render() {
    return (
      <StyledPitchSlate name={this.name}>
        <div class="primary__content">
          {!this.isMediumScreen && (
            <LogomarkOutline id="sauce__drip__outline" data-shape />
          )}

          <Cavalier
            theme="lime"
            text="I like to craft solid and scalable FE products with great user experiences."
          >
            <h1 slot="heading">
              Front end
              <br /> Developer<span>.</span>
            </h1>
          </Cavalier>

          {!this.isPortrait && <Visage />}
        </div>

        <div class="bottom__content">
          <ul class="deux__points">
            <li>
              Highly skilled at progressive enhancement, design systems &amp; UI
              Engineering.
            </li>
            <li>
              Nearly a decade of experience working with clients from different
              countries of the world.
            </li>
          </ul>

          {!this.isMediumScreen && <Navigation id={NAVIGATION_ID} />}
        </div>

        {this.isPortrait && (
          <div class="mobile__avatar">
            <Visage />
          </div>
        )}
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
