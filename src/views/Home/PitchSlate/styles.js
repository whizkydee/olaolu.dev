import styled from 'vue-styled-components'

const StyledPitchSlate = styled.section`
  padding-bottom: 60px;
  flex-direction: column;

  .primary__content,
  .bottom__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .primary__content {
    margin-top: ${props => props.theme.headerHeight};
  }

  .cavalier {
    h1 span {
      color: #fff;
    }

    p {
      font-size: 1.3em;
    }
  }

  .visage {
    width: 350px;
    height: 370px;
    margin-right: 6em;
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
StyledPitchSlate.name = 'StyledPitchSlate'

export default StyledPitchSlate
