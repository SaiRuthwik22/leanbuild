import { useState, useEffect, useCallback } from 'react'

/**
 * Preloads an array of image URLs and tracks loading progress.
 * @param {string[]} imageSources - Array of image URLs or imported image paths
 * @returns {{ isLoaded: boolean, progress: number }}
 */
export function useImagePreloader(imageSources) {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!imageSources || imageSources.length === 0) {
      setIsLoaded(true)
      setProgress(100)
      return
    }

    let loadedCount = 0
    const total = imageSources.length

    const onLoad = () => {
      loadedCount++
      const pct = Math.round((loadedCount / total) * 100)
      setProgress(pct)
      if (loadedCount >= total) {
        // Small delay for the progress bar to visually reach 100%
        setTimeout(() => setIsLoaded(true), 300)
      }
    }

    imageSources.forEach((src) => {
      const img = new Image()
      img.src = src
      if (img.complete) {
        onLoad()
      } else {
        img.onload = onLoad
        img.onerror = onLoad // Count errors as loaded to avoid blocking forever
      }
    })

    // Safety timeout — never block more than 8 seconds
    const timeout = setTimeout(() => {
      setIsLoaded(true)
      setProgress(100)
    }, 8000)

    return () => clearTimeout(timeout)
  }, [imageSources])

  return { isLoaded, progress }
}
