import {BowArrow} from './BowArrow'

export function ContactForm({id}: {id?: string}) {
  return (
    <form
      id={id}
      method="POST"
      target="_blank"
      className="contact-form"
      action="https://formspree.io/hello@olaolu.dev"
    >
      <input type="hidden" name="_subject" value="Message from olaolu.dev!" />
      <div className="form-row">
        <label className="input-group" htmlFor={`${id ?? 'contact'}-name`}>
          <span>Your Name</span>
          <input
            id={`${id ?? 'contact'}-name`}
            required
            name="name"
            placeholder="Enter your name"
          />
        </label>
        <label className="input-group" htmlFor={`${id ?? 'contact'}-email`}>
          <span>Email Address</span>
          <input
            id={`${id ?? 'contact'}-email`}
            required
            type="email"
            name="_replyto"
            placeholder="Enter your email address"
          />
        </label>
      </div>
      <div className="form-row">
        <label className="input-group" htmlFor={`${id ?? 'contact'}-message`}>
          <span>Your Message</span>
          <textarea
            id={`${id ?? 'contact'}-message`}
            required
            minLength={30}
            rows={7}
            name="message"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
          />
        </label>
      </div>
      <button type="submit" className="sauce-button" id="submit-button">
        <span className="sauce-button__content">
          <span>Shoot</span>
          <BowArrow />
        </span>
      </button>
    </form>
  )
}
