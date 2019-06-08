import Vue from 'vue'
import StyledConcentrer from './styles'

const Concentrer = Vue.component('Concentrer', {
  render() {
    return (
      <StyledConcentrer>
        <div class="concentrer__content">
          <Cavalier
            heading="Design"
            text="I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me xo. I do my best to create fluent user experiences while staying fashionable."
          />

          <Cavalier
            heading="Engineering"
            text="In JavaScript applications these days where there's a thousand and one ways to go about solving a problem, I'm equipped with just the right tools and techniques to deliver fast, definitive solutions optimized for scalability &mdash; Web performance and extensibility are priorities on my radar."
          />
        </div>
      </StyledConcentrer>
    )
  },
})

export default Concentrer
