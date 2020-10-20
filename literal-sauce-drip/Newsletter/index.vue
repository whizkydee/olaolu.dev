<template>
  <StyledNewsletter id="newsletter">
    <form
      method="post"
      rel="noopener"
      target="_blank"
      action="https://gmail.us20.list-manage.com/subscribe/post?u=04ac543f98469334c684d8753&id=df629ce71c"
    >
      <Cavalier>
        <h2 slot="heading">Join the newsletter</h2>
      </Cavalier>

      <div class="form-inner">
        <InputGroup
          required
          type="email"
          name="EMAIL"
          id="mce-EMAIL"
          label="Email Address"
          placeholder="email@domain.com"
          :inputAttrs="{ inputmode: 'email' }"
        />

        <Button type="submit" noArrow>Subscribe</Button>
      </div>
    </form>
  </StyledNewsletter>
</template>

<script>
import { media } from '../media-helpers'
import styled from 'vue-styled-components'

const StyledNewsletter = styled.aside`
  margin-top: 4rem;
  padding: var(--space);
  background-color: #fff;

  ${media.maxWidth('440px')`
    width: 110%;
    margin-left: -5%;
  `}

  .cavalier {
    max-width: 19rem;
    margin-bottom: 1rem;

    p {
      margin: 0;
    }

    h2 {
      margin: 0;
      margin-bottom: 0.2em;
      color: ${({ theme }) => theme.colors.electricBlue};

      ${media.minWidth('medium')`
        line-height: 1;
        font-size: 2.3em;
        margin-bottom: 0.5em;
      `}
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px #fff inset !important;
  }

  .form-inner {
    display: flex;

    ${media.maxWidth('440px')`
      flex-direction: column;

      .sauce-button {
        margin-top: 1.5em;
      }
    `}

    ${media.minWidth('441px')`
      align-items: flex-end;
    `}
  }

  .sauce-button {
    font-size: 0.7em;
  }
`
StyledNewsletter.name = 'StyledNewsletter'

export default {
  components: { StyledNewsletter },
}
</script>
