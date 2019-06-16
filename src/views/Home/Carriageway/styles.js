import styled from 'vue-styled-components'

const StyledCarriageway = styled.section`
  .carriageway__content {
    position: relative;
    justify-content: center;

    @media (min-aspect-ratio: 1440/900) {
      margin-top: 4.2rem;
    }

    @media (min-width: 1024px) and (min-height: 665px) and (max-height: 1500px) {
      .lanes {
        min-height: 40em;
      }
    }

    @media (max-width: 1500px) {
      max-width: unset;
      padding: 0 ${props => `calc(${props.theme.header.padding} - 2em)`};
    }

    @media (min-width: 1501px) {
      padding-left: 5em;
      padding-right: 5em;
    }
  }

  .lanes {
    width: 100%;
    display: flex;
    background-color: #fff;

    li {
      width: 50%;
      padding: 6.95em;
      padding-left: ${props => props.theme.header.padding};

      &:not(:last-of-type) {
        border-right: 0.15rem solid rgba(72, 49, 212, 0.3);
      }
    }
  }

  .cavalier {
    margin-bottom: 4.5em;

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
