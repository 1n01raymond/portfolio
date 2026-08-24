'use client'

/**
 * 좌측 패널의 와이어 오브젝트. WebGPU(typegpu) → WebGL2 → 비표시 순 폴백.
 * 아주 느리게 자전하고, 커서 위치에 따라 조금 기웁니다.
 * prefers-reduced-motion 이면 한 프레임만 그리고 멈춥니다.
 * 순수 장식 — aria-hidden, 포인터 이벤트 없음.
 */

import { useEffect, useRef } from 'react'
import type { WireBackend, WireState } from '@/gpu/types'

const DPR_CAP = 2
const SPIN = 0.13 // rad/s — 한 바퀴 약 48초
const TILT_BASE = 0.22 // 살짝 위에서 내려다보는 기본 각
const TILT_RANGE = 0.3
const YAW_RANGE = 0.45

export default function WireObject({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let disposed = false
    let backend: WireBackend | null = null
    let raf = 0
    let running = false
    let lastTs = 0
    let spin = 0.6
    let fade = 0

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // 커서가 만드는 목표 각도와, 실제로 따라가는 현재 각도
    let targetTilt = TILT_BASE
    let targetYaw = 0
    const state: WireState = { angleX: TILT_BASE, angleY: spin, fade: 0 }

    const frame = (ts: number) => {
      if (disposed || !backend) return
      const dt = lastTs === 0 ? 1 / 60 : Math.min((ts - lastTs) / 1000, 1 / 20)
      lastTs = ts

      if (!reduced) spin += SPIN * dt
      fade = Math.min(1, fade + dt * 1.4)

      const ease = Math.min(1, dt * 3)
      state.angleX += (targetTilt - state.angleX) * ease
      state.angleY += (spin + targetYaw - state.angleY) * ease
      state.fade = fade

      backend.frame(state)

      if (reduced && fade >= 1) {
        running = false
        return
      }
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running || disposed || !backend) return
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
      if (reduced) return
      // 캔버스가 아니라 화면 전체를 기준으로 — 커서가 멀리 있어도 반응합니다
      const px = (e.clientX / window.innerWidth) * 2 - 1
      const py = (e.clientY / window.innerHeight) * 2 - 1
      targetYaw = px * YAW_RANGE
      targetTilt = TILT_BASE - py * TILT_RANGE
    }

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 },
    )
    const ro = new ResizeObserver(resize)

    const init = async () => {
      if ('gpu' in navigator) {
        try {
          const { createWebGPUWire } = await import('@/gpu/wire')
          backend = await createWebGPUWire(canvas)
        } catch {
          backend = null
        }
      }
      if (!backend && !disposed) {
        try {
          const { createWebGL2Wire } = await import('@/gpu/wire-fallback-webgl2')
          backend = createWebGL2Wire(canvas)
        } catch {
          backend = null
        }
      }
      if (disposed || !backend) {
        backend?.destroy()
        backend = null
        return
      }

      resize()
      ro.observe(canvas)
      io.observe(canvas)
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.addEventListener('visibilitychange', onVisibility)
      start()
    }

    void init()

    return () => {
      disposed = true
      stop()
      io.disconnect()
      ro.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('visibilitychange', onVisibility)
      backend?.destroy()
      backend = null
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`print-hidden pointer-events-none block ${className ?? ''}`}
    />
  )
}
