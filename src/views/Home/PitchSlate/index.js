import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'
import { LogomarkOutline } from '@/assets'
import { NAVIGATION_ID } from '@/constants'
import { AvatarShapes } from '@/assets/index'

const PitchSlate = Vue.component('PitchSlate', {
  render() {
    return (
      <StyledPitchSlate class="pente">
        <div class="primary__content">
          <LogomarkOutline id="sauce__drip__outline" data-shape />

          <Cavalier
            theme="lime"
            text="I like to craft solid and scalable FE products with great user experiences."
          >
            <h1 slot="heading">
              Front end
              <br /> Developer<span>.</span>
            </h1>
          </Cavalier>

          <figure class="visage">
            <AvatarShapes id="avatar__shapes" data-shape />
            <div class="face" aria-label="Photo of Olaolu." role="img" />
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

          <Navigation id={NAVIGATION_ID} />
        </div>
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
