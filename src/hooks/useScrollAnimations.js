import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook for GSAP ScrollTrigger reveal animations
 * @param {object} options - Animation options
 * @param {number} options.y - Initial Y offset (default: 40)
 * @param {number} options.duration - Animation duration (default: 0.7)
 * @param {number} options.delay - Animation delay (default: 0)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 95%')
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const { y = 40, duration = 0.7, delay = 0, start = 'top 95%' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [y, duration, delay, start])

  return ref
}

/**
 * Hook for staggered children animations on scroll
 * @param {string} childSelector - CSS selector for children to animate
 * @param {object} options - Animation options
 */
export function useStaggerReveal(childSelector = '.stagger-item', options = {}) {
  const ref = useRef(null)
  const { y = 40, duration = 0.6, stagger = 0.1, start = 'top 95%' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.querySelectorAll(childSelector)
    if (!children.length) return

    gsap.fromTo(
      children,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [childSelector, y, duration, stagger, start])

  return ref
}

/**
 * Hook for parallax scroll effect on images
 * @param {number} speed - Parallax speed multiplier (default: 0.3)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el.parentElement) t.kill()
      })
    }
  }, [speed])

  return ref
}

/**
 * Hook for counter animation on scroll
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration (default: 2)
 */
export function useCountUp(target, duration = 2) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obj = { value: 0 }

    gsap.to(obj, {
      value: target,
      duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onUpdate: () => {
        el.textContent = Math.round(obj.value)
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [target, duration])

  return ref
}
