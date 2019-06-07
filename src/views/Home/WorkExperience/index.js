import Vue from 'vue'
import StyledWorkExperience from './styles'

const WorkExperience = Vue.component('WorkExperience', {
  render() {
    return (
      <StyledWorkExperience>
        <div class="experience__content">
          <Cavalier theme="lime" heading="Over the past 8 years,">
            <p slot="text">
              I've built products for companies and businesses around the globe
              ranging from basic websites to complex solutions with focus on
              creating blazing fast, elegant and accessible user experiences.
              <br />
              <br />
              Previously, I led the front end engineering team at Conectar LLC
              through building several React applications into a single powerful
              online learning platform. I deliver quality stuff freelancing and
              consulting for a bunch of organizations internationally. I also
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
      </StyledWorkExperience>
    )
  },
})

export default WorkExperience
