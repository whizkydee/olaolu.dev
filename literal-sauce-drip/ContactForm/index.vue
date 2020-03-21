<template>
  <StyledContactForm
    method="POST"
    target="_blank"
    class="contact-form"
    action="https://formspree.io/hello@olaolu.dev"
  >
    <input type="hidden" name="_subject" value="Message from olaolu.dev!" />

    <div class="form-row">
      <InputGroup
        required
        name="name"
        id="full-name"
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

    <div class="form-row">
      <InputGroup
        textarea
        required
        id="message"
        name="message"
        label="Your Message"
        :inputAttrs="{ minlength: 30 }"
        placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
      />
    </div>

    <Button type="submit" id="submit-button">
      Shoot
    </Button>
  </StyledContactForm>
</template>

<script>
import Button from '../Button'
import InputGroup from '../InputGroup'
import StyledContactForm from './styles'

export default {
  components: { StyledContactForm, InputGroup, Button },
}
</script>
