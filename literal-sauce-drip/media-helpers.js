import { toPx } from '@mrolaolu/helpers'
import { css } from 'vue-styled-components'

export const BREAKPOINTS = {
  small: 420,
  medium: 700,
  large1: 1024,
  large2: 1440,
  xLarge: 1500,
  portrait: 580,
}

export const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, cur) => {
  let breakpointValue = BREAKPOINTS[cur]

  return Object.assign(acc, {
    [cur]: breakpointValue,
    ['>' + cur]: breakpointValue + 1,
    ['<' + cur]: breakpointValue - 1,
  })
}, {})

export function computeValue(value) {
  return typeof value === 'number'
    ? toPx(value)
    : value in breakpoints
    ? toPx(breakpoints[value])
    : value
}

export const minWidth = value => (...body) => css`
  @media (min-width: ${computeValue(value)}) {
    ${css(...(body || ''))}
  }
`

export const maxWidth = value => (...body) => css`
  @media (max-width: ${computeValue(value)}) {
    ${css(...(body || ''))}
  }
`

export const between = (min, max) => (...body) => css`
  @media (min-width: ${computeValue(min)}) and (max-width: ${computeValue(
      max
    )}) {
    ${css(...(body || ''))}
  }
`

export const media = { between, maxWidth, minWidth, breakpoints }
