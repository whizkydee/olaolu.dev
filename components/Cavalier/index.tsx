import clsx from 'clsx'
import type {ReactNode} from 'react'

import styles from './Cavalier.module.css'

export function Cavalier({
  heading,
  children,
  variant,
  headingLevel = 1,
}: Props) {
  const className = clsx(styles.cavalier, variant && styles[variant])
  const Heading = headingLevel === 1 ? 'h1' : 'h2'

  return (
    <article className={className}>
      <Heading>{heading}</Heading>
      <p>{children}</p>
    </article>
  )
}

type Props = {
  heading: string
  children: ReactNode
  variant?: 'contact' | 'work'
  headingLevel?: 1 | 2
}
