import Vue from 'vue'
import StyledExperience from './styles'
import { OlaoluWorkIllo } from '@/assets'

const Experience = Vue.component('Experience', {
  render() {
    return (
      <StyledExperience>
        <div class="experience__content">
          <Cavalier theme="lime" heading="Over the <br /> past 8 years,">
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions with focus on
              creating fast, elegant and accessible user experiences.
            </p>
            <p slot="text">
              I previously led the front end engineering team at Conectar LLC
              through building several React applications into a single powerful
              online learning platform. I deliver quality stuff freelancing and
              consulting for a couple of organizations internationally. I also
              created the Palenight theme for VS Code with hundreds of thousands
              of downloads.
            </p>

            <p slot="text">
              Currently, I'm a Senior Front End Engineering contractor with
              Pixel2HTML building JavaScript applications for orgs and
              individuals.
            </p>
          </Cavalier>

          <figure
            class="work__illo"
            aria-label="Illustration of Olaolu with some of his past work."
          >
            <OlaoluWorkIllo />
          </figure>
        </div>
      </StyledExperience>
    )
  },
})

export default Experience
