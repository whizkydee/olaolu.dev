import { media } from '../helpers'
import styled from 'vue-styled-components'

export default Object.assign(
  styled.form`
    display: flex;
    position: relative;
    flex-direction: column;

    .form-row {
      width: 100%;
      display: flex;
      position: relative;
      justify-content: space-between;

      ${media.maxWidth('portrait')`
        font-size: 1.2rem;
        flex-direction: column;

        .input-group:first-of-type {
          margin-bottom: 3rem;
        }
      `}

      ${media.minWidth('>portrait')`
        &:first-of-type .input-group {
          width: 45%;
        }
      `}

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    }

    .input-group {
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

      ${media.maxWidth('portrait')`
        height: 6em;
      `}
    }

    #submit-button {
      margin-top: 5.2em;

      ${media.maxWidth('portrait')`
        margin-top: 0;
        align-self: flex-start;
      `}
    }
  `,
  { name: 'StyledContactForm' }
)
