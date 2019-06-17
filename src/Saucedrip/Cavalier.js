import Vue from 'vue'
import styled from 'vue-styled-components'

const Cavalier = Vue.component('Cavalier', {
  render() {
    return (
      <StyledCavalier data-theme={this.theme} class="cavalier">
        <div class="content">
          {this.$slots.heading || <h1 domPropsInnerHTML={this.heading} />}
          {this.$slots.text || <p domPropsInnerHTML={this.text} />}
          {this.$slots.inContent}
        </div>

        {this.$slots.default}
      </StyledCavalier>
    )
  },

  props: {
    theme: {
      default: 'blue',
      validator: v => ['lime', 'blue'].indexOf(v) !== -1,
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
      color: ${props => props.theme.colors.lime};
    }

    p {
      color: #fff;
    }
  }

  .content {
    position: relative;
  }

  p,
  h1 {
    transition: transform 0.5s, opacity 0.2s;
  }

  h1 {
    margin: 0;
    font-size: 4em;
    max-width: 30vw;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    transition-delay: 200ms;
    color: ${props => props.theme.colors['electric-blue']};
  }

  p {
    width: 32vw;
    line-height: 1.6;
    font-size: 1.07em;
    transition-delay: 310ms;
    color: ${props => props.theme.colors.default};

    &:nth-of-type(2) {
      transition-delay: 370ms;
    }

    &:nth-of-type(3) {
      transition-delay: 420ms;
    }
  }
`

StyledCavalier.name = 'StyledCavalier'
export default Cavalier
