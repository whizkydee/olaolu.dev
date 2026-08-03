import type {Metadata} from 'next'

import {Cavalier} from '@/components/Cavalier'
import {ContactForm} from '@/components/ContactForm'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Send Olaolu a message',
  alternates: {canonical: '/contact'},
}

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <Cavalier heading="Send me a message!" variant="contact">
          Got a question or proposal, or just want to say hello? Go ahead.
        </Cavalier>
        <ContactForm id="contact-form" variant="contact" />
      </div>
    </section>
  )
}
