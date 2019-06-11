import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'

const MARGIN_TOP = 60

const StyledCarriageway = styled.section`
  .carriageway__content {
    position: relative;
    justify-content: center;

    @media (min-width: 1024px) and (min-height: 700px) {
      margin-top: ${toPx(MARGIN_TOP)};

      @media (max-height: 1500px) {
        .lanes {
          min-height: 575px;
        }
      }
    }

    @media (max-width: 1500px) {
      max-width: unset;
      padding: 0 ${props => `calc(${props.theme.header.padding} - 2em)`};
    }
  }

  .lanes {
    width: 100%;
    display: flex;
    background-color: #fff;

    li {
      width: 50%;
      padding: 100px;
      padding-left: ${props => props.theme.header.padding};

      &:not(:last-of-type) {
        border-right: 2px solid rgba(72, 49, 212, 0.3);
      }
    }
  }

  .cavalier {
    margin-bottom: 50px;

    h1 {
      font-size: 3.2em;
    }

    p {
      width: unset;
      line-height: 1.2;
      font-size: 1.6em;
      letter-spacing: 0.02em;
    }
  }
`

export default {
  ...StyledCarriageway,
  name: 'StyledCarriageway',
}
