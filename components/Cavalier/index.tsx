import clsx from 'clsx'
import type {ReactNode} from 'react'

import styles from './Cavalier.module.css'

export function Cavalier({
  heading,
  children,
  variant,
}: {
  heading: string
  children: ReactNode
  variant?: 'contact' | 'work'
}) {
  const className = clsx(styles.cavalier, variant && styles[variant])

  return (
    <article className={className}>
      <h1>{heading}</h1>
      <p>{children}</p>
    </article>
  )
}
