import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'
import { NAVIGATION_ID } from '@/constants'

const StyledPitchSlate = styled.section`
  padding-bottom: 60px;
  flex-direction: column;

  .primary__content,
  .bottom__content {
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: ${props => `calc(${toPx(props.theme.header.height)} + 2em)`};

    @media (min-width: 1024px) and (min-height: 1000px) {
      margin-top: ${props =>
        `calc(${toPx(props.theme.header.height)} + 100px)`};
    }
  }

  .cavalier {
    margin-top: -30px;

    h1 {
      font-size: 4.4em;

      span {
        color: #eeffff;
      }
    }

    p {
      font-size: 1.3em;
    }
  }

  .visage {
    margin: 0;
    z-index: 1;
    width: 23.334em;
    height: 24.67em;
    position: relative;
    border: 1.5px solid #fff;
    margin-right: ${props => `calc(${props.theme.header.padding} + 4em)`};

    .face {
      width: inherit;
      height: inherit;
      margin-top: -35px;
      margin-left: -30px;
      background-color: #fff;
      background-size: cover;
      /* background-image: url(/img/olaolu.jpg); */
    }
  }

  #avatar__shapes {
    top: -25%;
    width: 53em;
    z-index: -1;
    height: 126%;
    right: -12.1em;
    position: absolute;
  }

  #sauce__drip__outline {
    left: 0;
    height: 738px;
    position: absolute;
    margin-left: -6.2em;
    top: ${props => toPx(props.theme.header.height)};

    @media (min-width: 1024px) and (min-height: 800px) {
      height: 90vh;
    }
  }

  .bottom__content {
    margin-top: auto;
    padding-right: ${props => props.theme.header.padding};

    .deux__points,
    ${`#${NAVIGATION_ID}`} {
      display: flex;
    }
  }

  .deux__points {
    width: 41%;
    line-height: 1.5;
    font-size: 0.965em;
    justify-content: space-between;
    color: ${props => props.theme.colors.lime};

    li {
      width: calc(50% - 20px);
    }
  }
`

export default {
  ...StyledPitchSlate,
  name: 'StyledPitchSlate',
}
