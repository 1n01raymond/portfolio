'use client'

import { useEffect } from 'react'

/** /resume 진입 시 문서 전체를 라이트 서피스로 고정합니다 (다크 모드 무시). */
export default function SurfaceLight() {
  useEffect(() => {
    document.documentElement.dataset.surface = 'light'
    return () => {
      delete document.documentElement.dataset.surface
    }
  }, [])
  return null
}
