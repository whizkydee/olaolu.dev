import Vue from 'vue'
import StyledExperience from './styles'

const Experience = Vue.component('Experience', {
  render() {
    return (
      <StyledExperience>
        <div class="experience__content">
          <Cavalier theme="lime" heading="Over the <br /> past 8 years,">
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions with focus on
              creating blazing fast, elegant and accessible user experiences.
              <br />
              <br />
              I previously led the front end engineering team at Conectar LLC
              through building several React applications into a single powerful
              online learning platform. I deliver quality stuff freelancing and
              consulting for a couple of organizations internationally. I also
              created the Palenight theme for VS Code with hundreds of thousands
              of downloads.
              <br />
              <br />
              Right now, I'm a Senior Front End Engineering contractor with
              Pixel2HTML building JavaScript applications for our clients across
              the globe.
            </p>
          </Cavalier>
        </div>
      </StyledExperience>
    )
  },
})

export default Experience
