import Vue from 'vue'
import { mapState } from 'vuex'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'
import { CURRENT_SECTION } from '@/constants'

const Experience = Vue.component('Experience', {
  computed: mapState([CURRENT_SECTION]),

  render() {
    const isVisible = this.currentSection === 'trois'

    return (
      <StyledExperience name={this.name}>
        <div class="inner-content">
          <Cavalier
            theme="lime"
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2011} years,`}
          >
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from marketing websites to complex solutions and
              enterprise apps with focus on fast, elegant and accessible user
              experiences.
            </p>

            <p slot="text">
              Currently, I work at Shopify as a Senior UX Developer and
              Accessibility advocate crafting thoughtful and inclusive
              experiences that adhere to web standards for over a million
              merchants across the world.
            </p>

            <p slot="text">
              Before now, I was Principal Frontend Engineer at hellotax, where I
              worked on a suite of tools and services tailored at providing
              fast, automated VAT Registration / filings &amp; Returns solutions
              for multi-channel sellers across Europe.
            </p>

            <p slot="text">
              Prior to hellotax, I was Senior frontend engineering contractor
              with Pixel2HTML, building JavaScript applications and interfaces
              for orgs and individuals.
            </p>

            <p slot="text">
              I once also led the frontend team at a Russian startup, Conectar
              through building multiple React applications into a single robust
              learning platform.
            </p>

            {this.hireable && (
              <p slot="text">
                I'm now available for contracts and remote full-time roles. Want
                us to work together? You should{' '}
                <a
                  href={`mailto:hello@olaolu.dev?subject=${encodeURIComponent(
                    "💡Let's Work Together on Project X"
                  )}`}
                >
                  contact me
                </a>
                .
              </p>
            )}
          </Cavalier>

          <figure class="work-illo" aria-hidden={!isVisible}>
            <OlaoluWorkIllo />
            <figcaption class="visuallyhidden">
              Illustration of Olaolu and cardboards of some of his work.
            </figcaption>
          </figure>
        </div>
      </StyledExperience>
    )
  },
  props: ['name'],
})

export default Experience
