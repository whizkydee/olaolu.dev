import Vue from 'vue'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'

const Experience = Vue.component('Experience', {
  props: ['name'],
  render() {
    return (
      <StyledExperience name={this.name}>
        <div class="experience__content">
          <Cavalier
            theme="lime"
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2011} years,`}
          >
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions and enterprise
              apps with focus on creating fast, elegant and accessible user
              experiences.
            </p>

            <p slot="text">
              Most recently, I was a Senior front end engineering contractor
              with Pixel2HTML building JavaScript applications and interfaces
              for orgs and individuals.
            </p>

            <p slot="text">
              Before then, I led the front end engineering team at Conectar LLC
              through building several React applications into a single powerful
              online learning platform. I deliver quality stuff contracting with
              these organizations internationally. I also created the Palenight
              theme for VS Code with hundreds of thousands of downloads.
            </p>

            <p slot="text">
              I'm now available for remote full-time or contract roles. Want us
              to work together? Please{' '}
              <a
                href={`mailto:hello@olaolu.dev?subject=${encodeURI(
                  "💡We'd love to have you on our team"
                )}`}
              >
                contact me
              </a>
              .
            </p>
          </Cavalier>

          <figure
            class="work__illo"
            aria-label="Illustration of Olaolu with cardboards of some of his past work."
          >
            <OlaoluWorkIllo />
          </figure>
        </div>
      </StyledExperience>
    )
  },
})

export default Experience
