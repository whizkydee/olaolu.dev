import Vue from 'vue'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'

const Experience = Vue.component('Experience', {
  props: ['name'],
  render() {
    return (
      <StyledExperience name={this.name}>
        <div class="inner__content">
          <Cavalier
            theme="lime"
            heading={`Over the <br /> past ${new Date().getFullYear() -
              2011} years,`}
          >
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions and enterprise
              apps with focus on fast, elegant and accessible user experiences.
            </p>

            <p slot="text">
              Most recently, I was a Senior front end engineering contractor
              with Pixel2HTML building JavaScript applications and interfaces
              for orgs and individuals.
            </p>

            <p slot="text">
              Before then, I led the front end engineering team at Conectar LLC
              through building multiple React applications into a single
              powerful online learning platform. I deliver quality stuff
              contracting with these organizations internationally. I also
              created the Palenight theme for VS Code which has seen hundreds of
              thousands of downloads.
            </p>

            <p slot="text">
              I'm now available for contracts and remote full-time roles. Want
              us to work together? You should{' '}
              <a
                href={`mailto:hello@olaolu.dev?subject=${encodeURI(
                  "💡Let's Work Together on Project X"
                )}`}
              >
                contact me
              </a>
              .
            </p>
          </Cavalier>

          <figure
            class="work__illo"
            aria-label="Illustration of Olaolu and cardboards of some of his work."
          >
            <OlaoluWorkIllo />
          </figure>
        </div>
      </StyledExperience>
    )
  },
})

export default Experience
