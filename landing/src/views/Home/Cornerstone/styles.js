import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledCornerstone = styled(Section)`
  .cornerstone__content {
    flex-direction: column;

    ${media.maxWidth('portrait')`
      margin-top: 10rem;
    `}

    .cavalier {
      display: flex;

      ${media.maxWidth('medium')`
        &:not(:last-of-type) {
          margin-bottom: 6vh;
        }
      `}

      &:nth-of-type(2) {
        justify-content: flex-end;
      }
    }
  }

  .square__of__dots {
    top: -4em;
    width: 8em;
    height: 9em;
    right: 17em;
    position: absolute;
  }

  #cs__pattern__left,
  #cs__pattern__right {
    top: 0;
    right: 0;
    position: absolute;
  }

  #cs__pattern__right {
    width: 20em;
    height: 14.87em;
    margin-right: 10em;
  }

  #cs__pattern__left {
    left: 0;
    top: 5em;
    width: 13em;
    height: 13.41em;
    margin-left: 15em;
  }

  ${media.maxWidth('medium')`
    [data-shape] {
      display: none;
    }
  `}
`

export default {
  ...StyledCornerstone,
  name: 'StyledCornerstone',
}
