import styled from 'vue-styled-components'

const StyledContact = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.lime};

  .contact__content {
    margin-top: 40px;
    align-items: center;
    flex-direction: column;
  }

  .cavalier {
    text-align: center;
    margin-bottom: 70px;

    h1 {
      font-size: 3.2em;
      font-weight: 500;
      line-height: 1.3;
      max-width: unset;
    }

    p {
      margin: 0;
      font-size: 1.6em;
      line-height: 1.2;
      margin-top: 15px;
      letter-spacing: 0.02em;
    }
  }

  #home__contact {
    width: 60%;
    align-items: center;
    justify-content: center;
  }
`

export default {
  ...StyledContact,
  name: 'StyledContact',
}
