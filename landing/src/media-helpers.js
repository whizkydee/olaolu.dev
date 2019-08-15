import { toPx } from '@mrolaolu/helpers'
import { css } from 'vue-styled-components'

export const breakpoints = {
  small: 420,
  medium: 700,
  large1: 1024,
  large2: 1440,
  xLarge: 1500,
}

export const deriveWidth = (width, bump = 0) => {
  width = typeof width === 'number' ? width + bump : width

  return typeof width === 'number'
    ? toPx(width)
    : width in breakpoints
    ? toPx(breakpoints[width] + bump)
    : width
}

export const minWidth = (width, p) => (...body) => css`
  @media (min-width: ${deriveWidth(width, p)}) {
    ${css(...(body || ''))}
  }
`

export const maxWidth = (width, p) => (...body) => css`
  @media (max-width: ${deriveWidth(width, p)}) {
    ${css(...(body || ''))}
  }
`

export const between = ([min, p1], [max, p2]) => (...body) => css`
  @media (min-width: ${deriveWidth(min, p1)}) and (max-width: ${deriveWidth(
      max,
      p2
    )}) {
    ${css(...(body || ''))}
  }
`

export const media = { between, maxWidth, minWidth, breakpoints }
