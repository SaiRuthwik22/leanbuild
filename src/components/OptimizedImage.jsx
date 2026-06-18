import { useState, useRef, useEffect } from 'react'

/**
 * OptimizedImage — lazy-loaded image with blur-up shimmer placeholder.
 *
 * Props:
 *   src       – image source (required)
 *   alt       – alt text (required)
 *   className – passed to the <img> element
 *   eager     – if true, loads immediately (use for above-the-fold images)
 *   wrapperClassName – className for the outer wrapper div
 *   ...rest   – any other props forwarded to <img>
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  eager = false,
  wrapperClassName = '',
  ...rest
}) {
  const [isVisible, setIsVisible] = useState(eager)
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)
  const wrapperRef = useRef(null)

  // IntersectionObserver for lazy loading
  useEffect(() => {
    if (eager) return
    const el = wrapperRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '200px 0px' } // Start loading 200px before entering viewport
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  const handleLoad = () => setIsLoaded(true)

  return (
    <div ref={wrapperRef} className={`optimized-img-wrapper ${wrapperClassName}`}>
      {/* Shimmer placeholder — shown until image loads */}
      <div
        className={`optimized-img-placeholder ${isLoaded ? 'optimized-img-placeholder--hidden' : ''}`}
      />

      {/* Actual image — only rendered when visible in viewport */}
      {isVisible && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          className={`optimized-img will-change-transform ${isLoaded ? 'optimized-img--loaded' : ''} ${className}`}
          {...rest}
        />
      )}
    </div>
  )
}
