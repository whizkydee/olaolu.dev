<template>
  <StyledContactForm
    method="POST"
    target="_blank"
    class="contact__form"
    action="https://formspree.io/hello@olaolu.dev"
  >
    <input type="hidden" name="_subject" value="Message from olaolu.dev!" />

    <div class="form__row">
      <InputGroup
        required
        name="name"
        id="full__name"
        label="Your Name"
        placeholder="Enter your name"
      />

      <InputGroup
        required
        id="email"
        type="email"
        name="_replyto"
        label="Email Address"
        placeholder="Enter your email address"
      />
    </div>

    <div class="form__row">
      <InputGroup
        textarea
        required
        id="message"
        name="message"
        label="Your Message"
        :inputAttrs="{ minlength: 30 }"
        placeholder="Hi, I think we need a design system for our products at Company X. Are you available to work?"
      />
    </div>

    <Button type="submit" id="submit__button">
      Shoot
    </Button>
  </StyledContactForm>
</template>

<script>
import Button from '../Button'
import InputGroup from '../InputGroup'
import StyledContactForm from './styles'

export default {
  name: 'ContactForm',
  components: { StyledContactForm, InputGroup, Button },
}
</script>
