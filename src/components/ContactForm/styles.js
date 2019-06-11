import styled from 'vue-styled-components'

const StyledContactForm = styled.form`
  display: flex;
  min-width: 500px;
  position: relative;
  flex-direction: column;

  .form__row {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: space-between;

    &:first-of-type .input__group {
      width: 45%;
    }

    &:not(:last-of-type) {
      margin-bottom: 50px;
    }
  }

  textarea,
  input:not([type='submit']):not([type='button']) {
    line-height: 1.5;
    font-size: 1.15em;
  }

  textarea {
    height: 8vh;
    min-height: 70px;
  }

  #submit__button {
    margin-top: 70px;
  }
`

export default {
  ...StyledContactForm,
  name: 'StyledContactForm',
}
