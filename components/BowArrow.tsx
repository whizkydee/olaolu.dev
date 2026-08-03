export function BowArrow({
  direction = 'right',
}: {
  direction?: 'left' | 'right'
}) {
  return (
    <svg width="72" height="22" viewBox="0 0 72 22" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="0"
        d={
          direction === 'right'
            ? 'M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8'
            : 'M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8'
        }
      />
    </svg>
  )
}
