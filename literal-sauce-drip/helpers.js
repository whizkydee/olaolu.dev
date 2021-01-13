import { inBrowser } from '@mrolaolu/helpers'
import { SHELF_PORT, LANDING_PORT } from '../config'

export * from './media-helpers'

export function registerEnv(Vue, value) {
  Vue.prototype.__currentEnv = value
}

export function createMenuShadow(color = 'rgba(72, 49, 212, .05)') {
  return `0 10px 53px 0 ${color}`
}

export const [getMainElem, getAnnouncer] = [
  () => document.getElementById('main'),
  () => document.getElementById('Announcer'),
]

export function isDev() {
  return process.env.NODE_ENV === 'development'
}

const host = inBrowser() ? 'https://' + location.host : ''

export function getShelfURL() {
  return isDev() ? 'http://localhost:' + SHELF_PORT : host + '/shelf'
}

export function getLandingURL() {
  return isDev() ? 'http://localhost:' + LANDING_PORT : host
}

export function isMotionReduced() {
  return matchMedia('(prefers-reduced-motion: reduce)').matches
}