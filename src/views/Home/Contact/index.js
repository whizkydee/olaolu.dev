import Vue from 'vue'
import StyledContact from './styles'

const Contact = Vue.component('Contact', {
  render() {
    return (
      <StyledContact>
        <div class="contact__content">
          <Cavalier
            heading="Send me a message!"
            text="Got a question or proposal, or just want to say hello? Go ahead."
          />

          <ContactForm id="home__contact" />
        </div>
      </StyledContact>
    )
  },
})

export default Contact
