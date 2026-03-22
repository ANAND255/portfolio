import { useEffect, useRef } from 'react'

export function useScrollReveal(options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = options
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          obs.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold, rootMargin])

  return ref
}

export function useScrollRevealAll(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
  useEffect(() => {
    const els = document.querySelectorAll(selector)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [selector])
}
