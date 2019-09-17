import store from '@/store'
import { goToSection as GoToSection } from '@saucedrip/core/helpers'
export * from '@saucedrip/core/helpers'

export function goToSection(...args) {
  return GoToSection(store, ...args)
}
