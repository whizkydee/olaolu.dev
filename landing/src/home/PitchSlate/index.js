import Vue from 'vue'
import StyledPitchSlate from './styles'
import { Navigation } from '@/components'
import { LogomarkOutline } from '@/assets'
import { NAVIGATION_ID } from '@/constants'

const PitchSlate = Vue.component('PitchSlate', {
  props: ['name'],
  methods: {
    renderHighlights({ vocalize = false }) {
      return (
        <ul
          aria-hidden={!vocalize}
          aria-label={!vocalize ? null : 'Highlights.'}
          class={'highlights' + (vocalize ? ' visuallyhidden' : '')}
        >
          <li>
            Highly skilled at progressive enhancement, design systems &amp; UI
            Engineering.
          </li>
          <li>
            Over a decade of experience building products for clients across
            several countries.
          </li>
        </ul>
      )
    },
  },

  render() {
    return (
      <StyledPitchSlate name={this.name}>
        <div class="inner-content primary">
          {!this.isMediumScreen && (
            <LogomarkOutline id="sauce-drip-outline" data-shape />
          )}

          <Cavalier
            theme="lime"
            text="I like to craft solid and scalable frontend products with great user experiences."
          >
            <h1 slot="heading" aria-label="Frontend Developer">
              <span aria-hidden="true">
                Frontend
                <br /> Developer
                <span>.</span>
              </span>
            </h1>

            {this.renderHighlights({ vocalize: true })}
          </Cavalier>

          {!this.isPortrait && <Visage />}
        </div>

        <div class="inner-content bottom">
          {this.renderHighlights({ vocalize: false })}

          {!this.isMediumScreen && <Navigation id={NAVIGATION_ID} />}
        </div>

        {this.isPortrait && (
          <div class="mobile-avatar">
            <Visage />
          </div>
        )}
      </StyledPitchSlate>
    )
  },
})

export default PitchSlate
