import styled from 'vue-styled-components'

const StyledCarriageway = styled.section`
  .carriageway__content {
    margin-top: 60px;
    position: relative;
    justify-content: center;

    @media (max-width: 1500px) {
      max-width: unset;
      padding: 0 ${props => `calc(${props.theme.header.padding} - 2em)`};
    }
  }

  .lanes {
    width: 100%;
    height: 70vh;
    display: flex;
    min-height: 575px;
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

StyledCarriageway.name = 'StyledCarriageway'
export default StyledCarriageway
