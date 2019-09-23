import Vue from 'vue'
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
  margin: 0;
  z-index: 1;
  width: 23.334em;
  height: 24.67em;
  position: relative;
  border: 0.115rem solid #fff;

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
