import styles from './PageHeader.module.css'

export function PageHeader({
  title,
  description,
  hideDecor = false,
  noDot = false,
  preTitleSymbol = '/',
  alwaysVisible = false,
  compactHeading = false,
}: {
  title: string
  description?: string
  hideDecor?: boolean
  noDot?: boolean
  preTitleSymbol?: string
  alwaysVisible?: boolean
  compactHeading?: boolean
}) {
  return (
    <header
      className={`${styles.header}${alwaysVisible ? ` ${styles.alwaysVisible}` : ''}${compactHeading ? ` ${styles.compactHeading}` : ''}`}
    >
      <h1 aria-label={`${title}.`}>
        {!hideDecor && <span className={styles.decor}>{preTitleSymbol}</span>}
        {title}
        {!hideDecor && !noDot && '.'}
      </h1>
      {description && <p>{description}</p>}
    </header>
  )
}
