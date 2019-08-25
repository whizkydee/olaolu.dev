import store from '@/store'
import { goToSection as GoToSection } from '@saucedrip/helpers'
export * from '@saucedrip/helpers'

export function goToSection(...args) {
  return GoToSection(store, ...args)
}
