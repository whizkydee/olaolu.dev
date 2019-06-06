import Vue from 'vue'
import StyledWorkExperience from './styles'

const WorkExperience = Vue.component('WorkExperience', {
  render() {
    return (
      <StyledWorkExperience>
        <div class="experience__content">
          <Cavalier
            theme="lime"
            heading="What am I?"
            text="I like to call myself a UX Strategist and front end developer. I'm currently based in the city optimistic about things and smiling a lot."
          />
        </div>
      </StyledWorkExperience>
    )
  },
})

export default WorkExperience
