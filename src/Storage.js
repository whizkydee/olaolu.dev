import { SECTIONS, CURRENT_SECTION_KEY } from '@/constants'

const TYPES = {
  [CURRENT_SECTION_KEY]: { valid: SECTIONS, default: 'une' },
}

class StorageError extends TypeError {
  constructor(message) {
    super(message)
    this.name = 'StorageError'
  }
}

class Storage {
  static storage = sessionStorage

  static getValidTypes = key => TYPES[key].valid

  static validate(keyVal = {}, cb) {
    const { key, value } = keyVal

    let valid
    const validateKey = (k = key) => k in TYPES

    if (typeof key !== 'string')
      throw new StorageError(
        `Expected "key" to be a string, got ${key} instead.`
      )

    if (key && value === undefined) {
      valid = validateKey()
    } else if (validateKey() && value !== undefined) {
      valid = validateKey() && this.getValidTypes(key).includes(value)
    } else this.handleError(key)

    if (valid === false) return this.handleError(key, value)
    return typeof cb === 'function' ? cb.call(this, value) : valid
  }

  static handleError(key, value) {
    if (key && value === undefined) {
      throw new StorageError(`Could not find key "${key}" in storage.`).stack
    } else {
      throw new StorageError(
        `Expected one of ${this.getValidTypes(
          key
        )} as value for key "${key}", got "${value.constructor.name.toLowerCase()}" instead.`
      ).stack
    }
  }

  static set(key, value) {
    return this.validate({ key, value }, () => {
      this.storage.setItem(key, value)
      return value
    })
  }

  static get(key) {
    const value = this.storage.getItem(key)

    return (
      this.validate({ key }, () => value) ||
      // reset value if current value is invalid.
      this.reset(key)
    )
  }

  static reset(key) {
    const defaultValue = TYPES[key].default
    this.validate({ key }, () => this.set(key, defaultValue))

    return defaultValue
  }

  static resetAll() {
    for (let key in TYPES) this.reset(key, TYPES[key].default)
  }
}

export default Storage
