<template>
  <Layout id="contact" title="Contact me" description="Send me a message">
    <StyledContact name="contact">
      <div class="inner-content">
        <Cavalier
          heading="Send me a message!"
          text="Got a question or proposal, or just want <br /> to say hello? Go ahead."
        />

        <ContactForm id="contact-form" />
      </div>
    </StyledContact>
  </Layout>
</template>

<script>
import ContactForm from '~/literal-sauce-drip/ContactForm'
import Cavalier from '~/literal-sauce-drip/Cavalier'
import styled from 'vue-styled-components'
import { media } from '~/literal-sauce-drip/media-helpers'

const StyledContact = styled.div`
  position: relative;
  font-size: 0.8rem;

  .inner-content {
    margin-top: 2.78em;
    align-items: center;
    flex-direction: column;
  }

  .cavalier {
    margin-bottom: 2.5em;

    ${media.minWidth('>portrait')`
      text-align: left;
    `}

    h1 {
      font-size: 3.2em;
      font-weight: bold;
      line-height: 1.3;
      max-width: unset;
    }

    p {
      font-size: 1.6em;
      line-height: 1.2;
      margin-top: 15px;
      letter-spacing: 0.02em;

      ${media.maxWidth('portrait')`
        br { display: none; }
      `}
    }
  }

  #contact-form {
    align-items: center;
    justify-content: center;

    ${media.minWidth('>medium')`
      min-width: 500px;
    `}

    ${media.between('>portrait', 'medium')`
      width: 90%;
    `}

    ${media.maxWidth('portrait')`
      width: 100%;
    `}

    label,
    textarea,
    [type='text'],
    [type='email'] {
      font-weight: 200;
    }

    button {
      align-self: flex-start;
    }
  }
`

export default {
  metaInfo: {
    title: 'Contact',
  },
  components: {
    Cavalier,
    ContactForm,
    StyledContact,
  },
}
</script>
