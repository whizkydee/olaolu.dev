import { media } from '@/helpers'
import { Section } from '@/components'
import styled from 'vue-styled-components'

const StyledCornerstone = styled(Section)`
  .inner-content {
    flex-direction: column;

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

  .square-of-dots {
    top: -4em;
    right: 17em;
  }

  #cs-pattern-left,
  #cs-pattern-right {
    top: 0;
    right: 0;
    position: absolute;
  }

  #cs-pattern-right {
    width: 20em;
    height: 14.87em;
    margin-right: 10em;
  }

  #cs-pattern-left {
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
