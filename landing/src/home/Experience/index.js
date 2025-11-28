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
              Currently, I work at Shopify as a Staff Engineer, primarily focused on
              web foundations &ndash; tooling, performance, and scalable systems, but also
              driving initiatives that improve conversion and deliver millions in 
              incremental gross profit, and influencing teams and stakeholders across 
              engineering on high-leverage technical investments that drive business impact.
            </p>

            <p slot="text">
              Before now, I was a Lead Frontend Engineer at hellotax, where I worked 
              on VAT compliance automation software tailored towards multi-channel 
              merchants in Europe.
            </p>

            <p slot="text">
              Before hellotax, I worked independently as a software consultant, building
              custom software solutions for companies and organizations across multiple 
              industries.
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
