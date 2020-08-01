import {
  SquareofDots,
  CornerstonePatternsLeft,
  CornerstonePatternsRight,
} from '@/assets'
import Vue from 'vue'
import StyledCornerstone from './styles'

const Cornerstone = Vue.component('Cornerstone', {
  props: ['name'],
  render() {
    return (
      <StyledCornerstone name={this.name}>
        <div class="inner-content">
          <Cavalier heading="Design">
            <p slot="text">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </p>

            <SquareofDots
              data-shape
              slot="inContent"
              aria-hidden="true"
              class="square-of-dots"
            />

            <CornerstonePatternsRight
              data-shape
              aria-hidden="true"
              id="cs-pattern-right"
            />
          </Cavalier>

          <Cavalier heading="Engineering">
            <p slot="text">
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale &mdash;
              performance and scalabilty are priorities on my radar.
            </p>

            <CornerstonePatternsLeft
              data-shape
              aria-hidden="true"
              id="cs-pattern-left"
            />
          </Cavalier>
        </div>
      </StyledCornerstone>
    )
  },
})

export default Cornerstone
