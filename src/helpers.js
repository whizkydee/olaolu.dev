const SECTIONS = ['une', 'deux', 'trois', 'quatre']

const scrollToElem = targetElem => {
  if (!targetElem || !(targetElem instanceof HTMLElement)) return

  window.setTimeout(
    window.scrollTo(0, targetElem.offsetTop, { behaviour: 'smooth' }),
    100
  )
}

export { SECTIONS, scrollToElem }
