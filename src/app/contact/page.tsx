import type {Metadata} from 'next'

import {Cavalier} from '@/components/Cavalier'
import {ContactForm} from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send Olaolu a message',
  alternates: {canonical: '/contact'},
}

export default function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-inner">
        <Cavalier heading="Send me a message!">
          Got a question or proposal, or just want to say hello? Go ahead.
        </Cavalier>
        <ContactForm id="contact-form" />
      </div>
    </section>
  )
}
