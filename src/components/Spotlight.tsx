'use client'

import { useEffect, useRef } from 'react'

/**
 * 커서를 따라오는 은은한 광원. 포인터가 있는 환경에서만 켜지고,
 * prefers-reduced-motion 이면 아예 붙지 않습니다. 클릭을 가로채지 않습니다.
 */
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = 0
    let y = 0
    let raf = 0

    const apply = () => {
      raf = 0
      el.style.setProperty('--sx', `${x}px`)
      el.style.setProperty('--sy', `${y}px`)
      el.style.opacity = '1'
    }

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} aria-hidden className="spotlight print-hidden" />
}
