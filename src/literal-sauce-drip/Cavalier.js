import Vue from 'vue'
import theme from './theme'
import { media } from './media-helpers'
import styled from 'vue-styled-components'

const Cavalier = Vue.component('Cavalier', {
  render() {
    return (
      <StyledCavalier data-theme={this.theme} class="cavalier">
        <div class="cavalier-content">
          {this.$slots.heading ||
            (this.heading && <h1 domPropsInnerHTML={this.heading} />)}
          {this.$slots.text ||
            (this.text && <p domPropsInnerHTML={this.text} />)}
          {this.$slots.inContent}
        </div>

        {this.$slots.default}
      </StyledCavalier>
    )
  },

  props: {
    theme: {
      default: 'electric',
      validator: v => ['lime', 'electric'].indexOf(v) !== -1,
    },
    text: { type: [String, Object] },
    heading: { type: [String, Object] },
  },
})

const StyledCavalier = styled.article`
  text-align: left;
  position: relative;

  &[data-theme='lime'] {
    h1 {
      color: ${theme.colors.lime};
    }

    p {
      color: #fff;
    }
  }

  .cavalier-content {
    position: relative;
  }

  p,
  h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  h1 {
    margin: 0;
    font-size: 4em;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: ${theme.colors.electricBlue};

    ${media.minWidth('>medium')`
      max-width: 30vw;
      transition-delay: 200ms;
    `}
  }

  p {
    line-height: 1.6;
    color: ${theme.colors.default};

    ${media.minWidth('>medium')`
      max-width: 701px;
      font-size: 1.07em;
      transition-delay: 310ms;

      &:nth-of-type(2) {
        transition-delay: 370ms;
      }

      &:nth-of-type(3),
      &:nth-of-type(4) {
        transition-delay: 420ms;
      }

      &:nth-of-type(5) {
        transition-delay: 500ms;
      }
    `}

    ${media.maxWidth('medium')`
      font-size: 1.3em;
    `}
  }
`

StyledCavalier.name = 'StyledCavalier'
export default Cavalier
