import type {ReactNode} from 'react'

export function Cavalier({
  heading,
  children,
}: {
  heading: string
  children: ReactNode
}) {
  return (
    <article className="cavalier">
      <h1>{heading}</h1>
      <p>{children}</p>
    </article>
  )
}
