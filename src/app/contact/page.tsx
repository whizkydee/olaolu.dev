import {createPageMetadata} from '@/lib/seo'
import {Cavalier} from '@/components/Cavalier'
import {ContactForm} from '@/components/ContactForm'

import styles from './page.module.css'

export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Olaolu Olawuyi about staff-level software engineering, web platforms, performance, reliability, or consulting opportunities.',
  path: '/contact',
})

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
