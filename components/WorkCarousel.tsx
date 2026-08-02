'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

export function WorkCarousel({ name, images }: { name: string; images: string[] }) {
  const [current, setCurrent] = useState(0)
  const goPrevious = useCallback(() => setCurrent((value) => (value - 1 + images.length) % images.length), [images.length])
  const goNext = useCallback(() => setCurrent((value) => (value + 1) % images.length), [images.length])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(goNext, 3000)
    return () => window.clearInterval(timer)
  }, [goNext])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') goPrevious()
      if (event.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [goNext, goPrevious])

  if (!images.length) return null

  return (
    <section className="work-carousel" aria-roledescription="carousel" aria-label={`${name} screenshots`}>
      <button type="button" className="carousel-arrow carousel-arrow--previous" onClick={goPrevious} aria-label="Previous screenshot">‹</button>
      <button
        type="button"
        className="carousel-slide"
        onClick={() => window.open(images[current], '_blank', 'noopener,noreferrer')}
        aria-label={`Open ${name} screen ${current + 1} in a new tab`}
      >
        <Image src={images[current]} alt={`${name}: Screen ${current + 1}.`} fill sizes="100vw" loading="eager" />
      </button>
      <button type="button" className="carousel-arrow carousel-arrow--next" onClick={goNext} aria-label="Next screenshot">›</button>
      <div className="carousel-dots" aria-label="Choose screenshot">
        {images.map((image, index) => (
          <button key={image} type="button" aria-label={`Go to screen ${index + 1}`} aria-current={index === current} onClick={() => setCurrent(index)} />
        ))}
      </div>
    </section>
  )
}
