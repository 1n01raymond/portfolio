'use client'

/**
 * Drift Field 히어로 캔버스 (HANDOFF §4)
 * WebGPU → WebGL2 transform feedback → 정적 CSS 그라디언트 3단 폴백.
 * prefers-reduced-motion: 필드를 워밍업한 뒤 한 프레임만 남기고 정지.
 * 순수 장식 — aria-hidden, 포인터 이벤트 없음.
 */

import { useEffect, useRef, useState } from 'react'
import type { FieldBackend, FieldState } from '@/gpu/types'

const DPR_CAP = 2

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [cssFallback, setCssFallback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let disposed = false
    let backend: FieldBackend | null = null
    let raf = 0
    let running = false
    let lastTs = 0
    let warmupFrames = 0
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const state: FieldState = {
      time: 0,
      pointerX: 10,
      pointerY: 10,
      pointerStrength: 0,
      scroll: 0,
    }
    let pointerTarget = 0

    // 저사양 적응: 최근 프레임 시간이 계속 느리면 입자 수를 줄임
    let slowFrames = 0
    let activeCount = 0

    const frame = (ts: number) => {
      if (disposed || !backend) return
      const dt = lastTs === 0 ? 1 / 60 : Math.min((ts - lastTs) / 1000, 1 / 20)
      lastTs = ts
      state.time += dt

      // 포인터 반발력은 부드럽게 등장/소멸
      state.pointerStrength += (pointerTarget - state.pointerStrength) * Math.min(1, dt * 6)
      pointerTarget *= Math.pow(0.6, dt)

      backend.frame(dt, state)

      if (dt > 1 / 45) {
        slowFrames++
        if (slowFrames > 40 && activeCount > 20000) {
          activeCount = Math.floor(activeCount * 0.6)
          backend.setCount(activeCount)
          slowFrames = 0
        }
      } else if (slowFrames > 0) {
        slowFrames--
      }

      if (reduced) {
        // 필드가 형태를 갖출 때까지만 워밍업 후 마지막 프레임에서 정지
        warmupFrames++
        if (warmupFrames >= 90) {
          running = false
          return
        }
      }
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || disposed || !backend) return
      if (reduced && warmupFrames >= 90) return
      running = true
      lastTs = 0
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const resize = () => {
      if (!backend) return
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP)
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
      backend.resize(w, h)
    }

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (rect.bottom < 0) return
      state.pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      state.pointerY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      pointerTarget = 1
    }

    const onScroll = () => {
      state.scroll = window.scrollY / Math.max(1, window.innerHeight)
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    // 히어로가 화면 밖이면 렌더 정지
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 },
    )

    const ro = new ResizeObserver(resize)

    const init = async () => {
      // 밀도를 화면 크기와 무관하게 유지: CSS 픽셀 면적 비례로 입자 수 산정
      const area = window.innerWidth * window.innerHeight
      const gpuCount = Math.min(60_000, Math.max(6_000, Math.floor(area * 0.05)))
      const glCount = Math.min(12_000, Math.max(3_000, Math.floor(area * 0.011)))
      if ('gpu' in navigator) {
        try {
          const { createWebGPUField } = await import('@/gpu/field')
          backend = await createWebGPUField(canvas, gpuCount)
        } catch {
          backend = null
        }
      }
      if (!backend) {
        try {
          const { createWebGL2Field } = await import('@/gpu/fallback-webgl2')
          backend = createWebGL2Field(canvas, glCount)
        } catch {
          backend = null
        }
      }
      if (disposed) {
        backend?.destroy()
        return
      }
      if (!backend) {
        setCssFallback(true)
        return
      }

      activeCount = backend.maxCount
      resize()
      ro.observe(canvas)
      io.observe(canvas)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      window.addEventListener('scroll', onScroll, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
      onScroll()
      start()
    }

    void init()

    return () => {
      disposed = true
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
      backend?.destroy()
      backend = null
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {cssFallback ? (
        <div className="hero-static-fallback absolute inset-0" />
      ) : (
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  )
}
