import Vue from 'vue'
import StyledContact from './styles'

const Contact = Vue.component('Contact', {
  props: ['name'],
  render() {
    return (
      <StyledContact name={this.name}>
        <div class="inner-content">
          <Cavalier
            heading="Send me a message!"
            text="Got a question or proposal, or just want <br /> to say hello? Go ahead."
          />

          <ContactForm id="home-contact" />
        </div>
      </StyledContact>
    )
  },
})

export default Contact
