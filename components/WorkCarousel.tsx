'use client'

import {useCallback, useEffect, useRef, useState} from 'react'

import styles from './WorkCarousel.module.css'

export function WorkCarousel({name, images}: {name: string; images: string[]}) {
  const [current, setCurrent] = useState(0)
  const [autoPlayCycle, setAutoPlayCycle] = useState(0)
  const [hasFocus, setHasFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const carouselRef = useRef<HTMLElement>(null)

  const advance = useCallback(
    () => setCurrent(value => (value + 1) % images.length),
    [images.length]
  )

  const restartAutoPlay = useCallback(
    () => setAutoPlayCycle(cycle => cycle + 1),
    []
  )

  const showPrevious = useCallback(() => {
    setCurrent(value => (value - 1 + images.length) % images.length)
    restartAutoPlay()
  }, [images.length, restartAutoPlay])

  const showNext = useCallback(() => {
    advance()
    restartAutoPlay()
  }, [advance, restartAutoPlay])

  const showSlide = useCallback(
    (index: number) => {
      setCurrent(index)
      restartAutoPlay()
    },
    [restartAutoPlay]
  )

  useEffect(() => {
    if (!images.length || hasFocus || isHovered) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(advance, 3000)
    return () => window.clearInterval(timer)
  }, [advance, autoPlayCycle, hasFocus, images.length, isHovered])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const activeElement = document.activeElement
      if (
        activeElement !== document.body &&
        activeElement !== carouselRef.current &&
        !carouselRef.current?.contains(activeElement)
      ) {
        return
      }
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showNext, showPrevious])

  if (!images.length) {
    return (
      <section
        ref={carouselRef}
        className={styles.carousel}
        aria-roledescription="carousel"
        aria-label={`${name} screenshots`}
      >
        <div aria-hidden="true" />
      </section>
    )
  }

  return (
    <section
      ref={carouselRef}
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={event =>
        setHasFocus(event.currentTarget.contains(event.relatedTarget))
      }
    >
      <button
        type="button"
        className={`${styles.arrow} ${styles.previous}`}
        onClick={showPrevious}
        aria-label="Previous screenshot"
      >
        ◀
      </button>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{transform: `translateX(-${current * 100}%)`}}
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tabpanel"
              aria-hidden={index !== current}
              tabIndex={index === current ? 0 : -1}
              className={styles.slide}
              onClick={() =>
                window.open(image, '_blank', 'noopener,noreferrer')
              }
              aria-label={`Open ${name} screen ${index + 1} in a new tab`}
            >
              {/* The legacy carousel deliberately sizes from each image's
                  intrinsic ratio, then clips it to the fixed-height slide. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={`${name}: Screen ${index + 1}.`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        onClick={showNext}
        aria-label="Next screenshot"
      >
        ▶
      </button>
      <div className={styles.dots} aria-label="Choose screenshot">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Go to screen ${index + 1}`}
            aria-current={index === current}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
