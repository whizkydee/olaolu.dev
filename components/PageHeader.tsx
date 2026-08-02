export function PageHeader({
  title,
  description,
  hideDecor = false,
  noDot = false,
  preTitleSymbol = '/',
}: {
  title: string
  description?: string
  hideDecor?: boolean
  noDot?: boolean
  preTitleSymbol?: string
}) {
  return (
    <header className={`page-header${hideDecor ? ' page-header--plain' : ''}`}>
      <h1 aria-label={`${title}.`}>
        {!hideDecor && <span className="decor">{preTitleSymbol}</span>}
        {title}
        {!hideDecor && !noDot && '.'}
      </h1>
      {description && <p>{description}</p>}
    </header>
  )
}
