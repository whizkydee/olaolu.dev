import clsx from 'clsx'

import {SOCIAL_PROFILES} from '@/lib/site'

import styles from './ContactLinks.module.css'

export function BasicContact({className}: {className?: string}) {
  return (
    <div className={clsx(styles.basic, className)}>
      <span className={styles.sayHello}>Say Hello</span>
      <ul>
        <li>
          <a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a>
        </li>
        <li>
          <a
            href="https://t.me/mrolaolu"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="t dot me forward slash mrolaolu"
          >
            t.me/mrolaolu
          </a>
        </li>
      </ul>
    </div>
  )
}

export function SocialContact({className}: {className?: string}) {
  return (
    <ul className={clsx(styles.social, className)}>
      <li>
        <a
          href={SOCIAL_PROFILES.twitter}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Olaolu on Twitter"
        >
          TW
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_PROFILES.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Olaolu on GitHub"
        >
          GH
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_PROFILES.linkedIn}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Olaolu on LinkedIn"
        >
          LN
        </a>
      </li>
      <li>
        <a
          href={SOCIAL_PROFILES.youtube}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Olaolu's YouTube channel"
        >
          YT
        </a>
      </li>
    </ul>
  )
}
