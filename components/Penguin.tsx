'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import PenguinSVG from './PenguinSVG'

export type BuildingTarget = 'projects' | 'resume' | 'contact' | null

interface PenguinProps {
  target: BuildingTarget
  onArrived: () => void
  onClick: () => void
}

// Building centres as percentages of viewport width
const TARGET_PCT: Record<NonNullable<BuildingTarget>, number> = {
  projects: 17,
  resume:   50,
  contact:  83,
}

export default function Penguin({ target, onArrived, onClick }: PenguinProps) {
  const controls = useAnimation()
  const [flipped, setFlipped] = useState(false)
  const [walking, setWalking] = useState(false)
  const [leftPct, setLeftPct] = useState(50)          // current position %
  const walkRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [footPhase, setFootPhase] = useState(0)

  useEffect(() => {
    if (!target) return

    const dest = TARGET_PCT[target]
    setFlipped(dest < leftPct)
    setWalking(true)

    const dist = Math.abs(dest - leftPct)
    const duration = Math.max(0.6, dist * 0.025)      // 25 ms per %

    // Foot oscillation
    let t = 0
    walkRef.current = setInterval(() => {
      t += 60
      setFootPhase(Math.sin(t * 0.02) * 14)
    }, 60)

    controls.start({
      left: `${dest}%`,
      transition: { duration, ease: 'linear' },
    }).then(() => {
      if (walkRef.current) clearInterval(walkRef.current)
      setWalking(false)
      setFootPhase(0)
      setLeftPct(dest)
      setFlipped(false)
      // Bounce on arrival
      controls.start({
        y: [0, -12, 0],
        transition: { duration: 0.35, ease: 'easeOut' },
      })
      onArrived()
    })

    return () => { if (walkRef.current) clearInterval(walkRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return (
    <motion.div
      animate={controls}
      className="absolute z-20 cursor-pointer select-none"
      style={{
        bottom: 'calc(28% + 2px)',
        left: `${leftPct}%`,
        x: '-50%',
      }}
      onClick={() => { if (!walking) onClick() }}
    >
      <div className="relative flex flex-col items-center">
        {/* Body wrapper: idle bob when not walking */}
        <motion.div
          animate={walking ? {} : { y: [0, -4, -2, 0] }}
          transition={walking ? {} : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Foot/wing walk overlay via SVG wrapper */}
          <div style={{ position: 'relative' }}>
            <PenguinSVG flipped={flipped} />
            {/* Foot oscillation overlays */}
            {walking && (
              <>
                <div style={{
                  position: 'absolute', bottom: 2, left: '22%',
                  width: 16, height: 8,
                  background: '#f5c050', borderRadius: '50%',
                  border: '1.5px solid #e8a830',
                  transform: `rotate(${footPhase}deg)`,
                  transformOrigin: 'center top',
                }} />
                <div style={{
                  position: 'absolute', bottom: 2, right: '22%',
                  width: 16, height: 8,
                  background: '#f5c050', borderRadius: '50%',
                  border: '1.5px solid #e8a830',
                  transform: `rotate(${-footPhase}deg)`,
                  transformOrigin: 'center top',
                }} />
              </>
            )}
          </div>
        </motion.div>

        {/* Shadow */}
        <div
          className="rounded-full"
          style={{
            width: 38, height: 8,
            background: 'rgba(0,0,0,.12)',
            marginTop: -4,
            transform: `scaleX(${walking ? 0.85 : 1})`,
          }}
        />

        {/* Name label */}
        <span
          className="absolute whitespace-nowrap font-black text-[11px] tracking-wide"
          style={{ bottom: -22, color: '#2a6a9a', textShadow: '0 1px 0 #fff' }}
        >
          Ayesha
        </span>
      </div>
    </motion.div>
  )
}
