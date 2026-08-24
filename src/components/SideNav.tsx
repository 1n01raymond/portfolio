'use client'

import { useEffect, useState } from 'react'

export type SideNavItem = { id: string; label: string }

/**
 * 좌측 고정 패널의 섹션 내비. 현재 보고 있는 섹션을 IntersectionObserver 로
 * 표시합니다. 데스크톱 전용 — 모바일에서는 상단 Nav 를 씁니다.
 */
export default function SideNav({ items }: { items: SideNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? '')
  const ids = items.map((i) => i.id).join(',')

  useEffect(() => {
    const els = ids
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      // 화면 중앙 밴드에 들어온 섹션을 '현재'로 본다
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])

  return (
    <nav aria-label="Sections" className="mt-16 hidden lg:block">
      <ul className="space-y-4">
        {items.map((item) => {
          const on = active === item.id
          return (
            <li key={item.id}>
              <a href={`#${item.id}`} className="group flex items-center gap-4 py-1">
                <span
                  aria-hidden
                  className={`h-px transition-all duration-200 ${
                    on ? 'w-14 bg-ink' : 'w-8 bg-muted/50 group-hover:w-14 group-hover:bg-ink'
                  }`}
                />
                <span
                  className={`mono-label tracking-[0.14em] uppercase transition-colors duration-200 ${
                    on ? 'text-ink' : 'text-muted group-hover:text-ink'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
