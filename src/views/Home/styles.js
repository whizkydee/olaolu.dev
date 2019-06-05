import styled from 'vue-styled-components'

const StyledHomepage = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  height: ${props => `calc(100vh - ${props.theme.headerHeight})`};

  .content__wrapper {
    width: 100%;
    display: flex;
    padding: 0 8em;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props => `-` + props.theme.headerHeight};
  }

  .cavalier {
    position: relative;

    h1 {
      margin: 0;
      width: 417px;
      font-size: 4em;
      font-weight: 900;
      letter-spacing: -2.25px;
      color: ${props => props.theme.colors.lime};
    }

    p {
      color: #fff;
      width: 438px;
      font-size: 1.3em;
      line-height: 1.5;
    }
  }

  .visage {
    width: 401px;
    height: 501px;
    margin-right: 8em;
    border: 2px solid #fff;

    img {
      height: 100%;
      margin-top: -35px;
      margin-left: -30px;
      background-color: #fff;
    }
  }
`
StyledHomepage.name = 'StyledHomepage'

export default StyledHomepage
