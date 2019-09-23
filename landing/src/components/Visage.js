import Vue from 'vue'
import { media } from '@/helpers'
import { AvatarShapes } from '@/assets'
import styled from 'vue-styled-components'

export default Vue.component('Visage', {
  render() {
    return (
      <StyledFigure class="visage">
        <AvatarShapes id="avatar__shapes" data-shape />
        <div class="face" aria-label="Photo of Olaolu." role="img" />
      </StyledFigure>
    )
  },
})

const StyledFigure = styled.figure`
  z-index: 1;
  margin-top: 0;
  margin-left: 0;
  width: 23.334em;
  height: 24.67em;
  margin-bottom: 0;
  position: relative;
  border: 0.115rem solid #fff;

  ${media.minWidth('>medium')`
    margin-right: ${props => `calc(${props.theme.header.padding} + 4em)`};
  `}

  ${media.maxWidth('medium')`
    margin-right: ${props => `calc(${props.theme.header.padding} - 3em)`};
  `}

  .face {
    width: inherit;
    height: inherit;
    margin-left: -2.2em;
    margin-top: -2.435em;
    background-color: #fff;
    background-size: cover;
    /* background-image: url(/img/olaolu.jpg); */
  }

  #avatar__shapes {
    top: -25%;
    width: 40em;
    z-index: -1;
    height: 126%;
    right: -5.4em;
    position: absolute;
  }
`
StyledFigure.name = 'StyledFigure'
