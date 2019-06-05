import styled from 'vue-styled-components'

const StyledHomepage = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  padding-bottom: 60px;
  flex-direction: column;
  min-height: ${props => `calc(50vh - ${props.theme.headerHeight})`};

  .primary__content,
  .bottom__content {
    width: 100%;
    display: flex;
    padding: 0 10em;
    max-width: 1500px;
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: 0px;
  }

  .cavalier {
    position: relative;

    h1 {
      margin: 0;
      width: 417px;
      font-size: 4em;
      font-weight: 900;
      color: ${props => props.theme.colors.lime};

      span {
        color: #fff;
      }
    }

    p {
      color: #fff;
      width: 438px;
      font-size: 1.3em;
      line-height: 1.5;
    }
  }

  .visage {
    width: 350px;
    height: 370px;
    margin-right: 8em;
    border: 1.5px solid #fff;

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

  .bottom__content {
    margin-top: auto;
    padding-right: 6em;

    > * {
      display: flex;
    }
  }

  .deux__points {
    width: 500px;
    font-size: 0.9em;
    line-height: 1.5;
    justify-content: space-between;
    color: ${props => props.theme.colors.lime};

    li {
      width: calc(50% - 20px);
    }
  }
`
StyledHomepage.name = 'StyledHomepage'

export default StyledHomepage
