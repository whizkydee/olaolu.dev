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
      margin-bottom: 3rem;
    }
  }

  .input__group {
    color: rgba(61, 21, 95, 0.5);

    &:not(.focused) {
      textarea,
      input:not([type='submit']):not([type='button']) {
        border-color: currentColor;
      }
    }

    &.focused {
      input,
      textarea {
        &::placeholder {
          color: transparent;
        }
      }
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #f9f9f9 inset !important;
  }

  textarea,
  input:not([type='submit']):not([type='button']) {
    line-height: 1.5;
    font-size: 1.15em;

    &::placeholder {
      transition: color 0.1s ease-out;
    }
  }

  textarea {
    height: 4.2em;
  }

  #submit__button {
    margin-top: 5.2em;
  }
`

export default {
  ...StyledContactForm,
  name: 'StyledContactForm',
}
