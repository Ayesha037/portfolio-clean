'use client'

import { useEffect, useRef } from 'react'

const FLAKES = ['❄', '❅', '❆', '*', '·']

export default function Snowflakes() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const spawn = () => {
      const el = document.createElement('div')
      const size = Math.random() * 10 + 8
      const dur  = Math.random() * 3  + 3
      el.className = 'snowflake'
      el.textContent = FLAKES[Math.floor(Math.random() * FLAKES.length)]
      el.style.cssText = `
        position: absolute;
        top: -20px;
        left: ${Math.random() * 100}%;
        font-size: ${size}px;
        color: #fff;
        opacity: 0;
        animation-duration: ${dur}s;
        pointer-events: none;
      `
      container.appendChild(el)
      setTimeout(() => el.remove(), dur * 1000 + 200)
    }

    const id = setInterval(spawn, 400)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  )
}
