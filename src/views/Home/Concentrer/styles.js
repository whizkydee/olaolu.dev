import styled from 'vue-styled-components'

const StyledConcentrer = styled.section`
  height: 100vh;

  .concentrer__content {
    flex-direction: column;

    .cavalier {
      &:nth-of-type(2) {
        align-self: flex-end;
      }
    }
  }
`

StyledConcentrer.name = 'StyledConcentrer'
export default StyledConcentrer
