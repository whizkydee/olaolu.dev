import Vue from 'vue'
import StyledContactForm from './styles'

const ContactForm = Vue.component('ContactForm', {
  render() {
    return (
      <StyledContactForm
        method="POST"
        class="contact__form"
        action="https://formspree.io/mrolaolu@gmail.com"
      >
        <input type="hidden" name="_subject" value="Message from olaolu.me!" />

        <div class="form__row">
          <InputGroup
            name="name"
            id="full__name"
            label="Your Name"
            placeholder="Enter your name"
            inputAttrs={{ required: true }}
          />

          <InputGroup
            id="email"
            type="email"
            name="_replyto"
            label="Email Address"
            inputAttrs={{ required: true }}
            placeholder="Enter your email address"
          />
        </div>

        <div class="form__row">
          <InputGroup
            textarea
            id="message"
            name="message"
            label="Your Message"
            inputAttrs={{ required: true, minlength: 30 }}
            placeholder="Hi, I think we need a design system for our products at Company X. Are you available to work?"
          />
        </div>

        <Button type="submit" id="submit__button">
          Shoot
        </Button>
      </StyledContactForm>
    )
  },
})

export default ContactForm
