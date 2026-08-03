'use client'

import {useCallback, useEffect, useRef, useState} from 'react'

export function WorkCarousel({name, images}: {name: string; images: string[]}) {
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef<HTMLElement>(null)
  const goPrevious = useCallback(
    () => setCurrent(value => (value - 1 + images.length) % images.length),
    [images.length]
  )
  const goNext = useCallback(
    () => setCurrent(value => (value + 1) % images.length),
    [images.length]
  )

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(goNext, 3000)
    return () => window.clearInterval(timer)
  }, [goNext])

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
      if (event.key === 'ArrowLeft') goPrevious()
      if (event.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrevious])

  if (!images.length) {
    return (
      <section
        ref={carouselRef}
        className="work-carousel work-carousel--empty"
        aria-roledescription="carousel"
        aria-label={`${name} screenshots`}
      >
        <div className="carousel-empty" aria-hidden="true" />
      </section>
    )
  }

  return (
    <section
      ref={carouselRef}
      className="work-carousel"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
    >
      <button
        type="button"
        className="carousel-arrow carousel-arrow--previous"
        onClick={goPrevious}
        aria-label="Previous screenshot"
      >
        ◀
      </button>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{transform: `translateX(-${current * 100}%)`}}
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              role="tabpanel"
              aria-hidden={index !== current}
              tabIndex={index === current ? 0 : -1}
              className={`carousel-slide${index === current ? ' carousel-slide--active' : ''}`}
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
        className="carousel-arrow carousel-arrow--next"
        onClick={goNext}
        aria-label="Next screenshot"
      >
        ▶
      </button>
      <div className="carousel-dots" aria-label="Choose screenshot">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Go to screen ${index + 1}`}
            aria-current={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  )
}
