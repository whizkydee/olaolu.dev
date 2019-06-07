import Vue from 'vue'
import StyledConcentrer from './styles'

const Concentrer = Vue.component('Concentrer', {
  render() {
    return (
      <StyledConcentrer>
        <div class="concentrer__content">
          <Cavalier
            heading="Design"
            text="I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design. Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me xo. I try my best to create the best experiences for users while staying fashionable."
          />

          <Cavalier
            heading="Engineering"
            text="In JavaScript applications today, solving problems the most efficient way can be tricky as there's a thousand and one ways to go about them, which is why I'm equipped with the right tools and techniques to deliver fast, definitive solutions optimized for scalability &mdash; Web performance and extensibility are priorities on my radar."
          />
        </div>
      </StyledConcentrer>
    )
  },
})

export default Concentrer
