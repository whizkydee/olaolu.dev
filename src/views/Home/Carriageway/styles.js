import theme from '@/base/theme'
import { toPx } from '@mrolaolu/helpers'
import styled from 'vue-styled-components'

const MARGIN_TOP = 60
const LANES_HEIGHT = 575

const DERIVED_HEIGHT = theme.header.height + MARGIN_TOP + LANES_HEIGHT

const StyledCarriageway = styled.section`
  .carriageway__content {
    position: relative;
    justify-content: center;
    margin-top: ${toPx(MARGIN_TOP)};

    @media (max-width: 1500px) {
      max-width: unset;
      padding: 0 ${props => `calc(${props.theme.header.padding} - 2em)`};
    }
  }

  .lanes {
    width: 100%;
    display: flex;
    background-color: #fff;

    @media (min-height: ${toPx(DERIVED_HEIGHT)}) {
      height: 70vh;
      min-height: ${toPx(LANES_HEIGHT)};
    }

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

StyledCarriageway.name = 'StyledCarriageway'
export default StyledCarriageway
