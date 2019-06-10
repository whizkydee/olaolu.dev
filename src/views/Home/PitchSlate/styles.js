import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'

const StyledPitchSlate = styled.section`
  padding-bottom: 60px;
  flex-direction: column;

  .primary__content,
  .bottom__content {
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: ${props => `calc(${toPx(props.theme.header.height)} + 30px)`};
  }

  .cavalier {
    margin-top: -10px;

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
    width: 23.334em;
    height: 24.67em;
    border: 1.5px solid #fff;
    margin-right: ${props => `calc(${props.theme.header.padding} + 4em)`};

    div {
      width: inherit;
      height: inherit;
      margin-top: -35px;
      margin-left: -30px;
      background-color: #fff;
      background-size: cover;
      /* background-image: url(/img/olaolu.jpg); */
    }
  }

  #sauce__drip__outline {
    left: 0;
    height: 90vh;
    position: absolute;
    margin-left: -90px;
    top: ${props => toPx(props.theme.header.height)};
  }

  .bottom__content {
    margin-top: auto;
    padding-right: ${props => props.theme.header.padding};

    > * {
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
StyledPitchSlate.name = 'StyledPitchSlate'

export default StyledPitchSlate
