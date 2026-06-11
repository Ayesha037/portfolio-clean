'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Building   from './Building'
import Penguin, { type BuildingTarget } from './Penguin'
import Snowflakes from './Snowflakes'
import type { PanelId } from '@/app/page'

interface SceneProps {
  onBuildingClick: (id: PanelId) => void
}

export default function Scene({ onBuildingClick }: SceneProps) {
  const [penTarget, setPenTarget] = useState<BuildingTarget>(null)
  const [pendingPanel, setPendingPanel] = useState<PanelId>(null)
  const walking = useRef(false)

  function clickBuilding(id: 'projects' | 'resume' | 'contact') {
    if (walking.current) return
    walking.current = true
    setPendingPanel(id)
    setPenTarget(id)
  }

  function handleArrived() {
    walking.current = false
    setPenTarget(null)
    if (pendingPanel) {
      setTimeout(() => {
        onBuildingClick(pendingPanel)
        setPendingPanel(null)
      }, 120)
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ── SKY ── */}
      <div
        className="absolute inset-0"
        style={{
          height: '72%',
          background: 'linear-gradient(180deg,#7ec8e3 0%,#b8e0f5 55%,#d8f0fa 100%)',
        }}
      />

      {/* ── SUN ── */}
      <div className="absolute" style={{ top: 28, left: 72 }}>
        <motion.div
          className="w-14 h-14 rounded-full"
          style={{ background: '#ffe566', boxShadow: '0 0 0 10px rgba(255,229,102,.3),0 0 0 22px rgba(255,229,102,.12)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        {/* Rays drawn on parent */}
        <div className="absolute inset-0 pointer-events-none sun-rays">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-sm opacity-60"
              style={{
                width: 4, height: 18, background: '#ffe566',
                left: '50%', top: '50%',
                transform: `rotate(${i * 45}deg) translateY(-38px)`,
                transformOrigin: '2px 0',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── MOUNTAINS ── */}
      <svg
        className="absolute w-full"
        style={{ bottom: '28%' }}
        viewBox="0 0 800 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,200 L80,60 L160,200Z"   fill="#b8d8f0" stroke="#9ac8e8" strokeWidth="2" />
        <path d="M100,200 L200,30 L300,200Z" fill="#a8ccec" stroke="#90bce4" strokeWidth="2" />
        <path d="M240,200 L360,20 L480,200Z" fill="#b0d4f0" stroke="#98c4e8" strokeWidth="2" />
        <path d="M420,200 L530,45 L640,200Z" fill="#a8ccec" stroke="#90bce4" strokeWidth="2" />
        <path d="M600,200 L690,55 L780,200Z" fill="#b8d8f0" stroke="#9ac8e8" strokeWidth="2" />
        {/* Snow caps */}
        <path d="M80,60 L65,95 L95,95Z"   fill="#fff" opacity=".9" />
        <path d="M200,30 L178,75 L222,75Z" fill="#fff" opacity=".9" />
        <path d="M360,20 L332,72 L388,72Z" fill="#fff" opacity=".9" />
        <path d="M530,45 L510,85 L550,85Z" fill="#fff" opacity=".9" />
        <path d="M690,55 L672,90 L708,90Z" fill="#fff" opacity=".9" />
        {/* Trees */}
        <ellipse cx="140" cy="165" rx="12" ry="20" fill="#5a9a6a" stroke="#3a7a4a" strokeWidth="1.5" />
        <rect x="138" y="182" width="4" height="10" fill="#7a5a3a" />
        <ellipse cx="165" cy="170" rx="10" ry="16" fill="#4a8a5a" stroke="#3a7a4a" strokeWidth="1.5" />
        <rect x="163" y="184" width="4" height="8"  fill="#7a5a3a" />
        <ellipse cx="600" cy="162" rx="12" ry="20" fill="#5a9a6a" stroke="#3a7a4a" strokeWidth="1.5" />
        <rect x="598" y="179" width="4" height="10" fill="#7a5a3a" />
        <ellipse cx="630" cy="168" rx="10" ry="17" fill="#4a8a5a" stroke="#3a7a4a" strokeWidth="1.5" />
        <rect x="628" y="182" width="4" height="9"  fill="#7a5a3a" />
        {/* Distant houses */}
        <rect x="310" y="150" width="40" height="30" rx="3" fill="#f5d0a0" stroke="#d4a060" strokeWidth="2" />
        <polygon points="306,152 330,132 354,152" fill="#e85a3a" stroke="#c04020" strokeWidth="1.5" />
        <rect x="320" y="162" width="14" height="18" rx="2" fill="#8a5a30" />
        <rect x="455" y="158" width="34" height="26" rx="3" fill="#f0c8d8" stroke="#d09aaa" strokeWidth="2" />
        <polygon points="451,160 472,143 493,160" fill="#a060c0" stroke="#8040a0" strokeWidth="1.5" />
        <rect x="462" y="168" width="12" height="16" rx="2" fill="#8a5a30" />
      </svg>

      {/* ── GROUND ── */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '30%', background: '#fff' }}
      >
        {/* Curved top edge */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: 18, background: '#e8f4fa', borderRadius: '50% 50% 0 0 / 8px 8px 0 0' }}
        />
        <div
          className="absolute left-0 right-0"
          style={{ top: 14, height: 4, background: 'rgba(160,200,220,.2)' }}
        />

        {/* Cobble path */}
        <div
          className="absolute bottom-0"
          style={{
            left: '50%', transform: 'translateX(-50%)',
            width: 100, top: 0,
            background: '#d4e8c0',
          }}
        >
          <div style={{ height: 14, background: '#c4dab0', borderRadius: '50% 50% 0 0 / 6px 6px 0 0' }} />
          {/* Scrolling road marks */}
          <div className="road-marks flex flex-col items-center gap-[14px] pt-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="rounded-sm" style={{ width: 8, height: 14, background: '#b8cda0' }} />
            ))}
          </div>
        </div>

        {/* Snow dots decoration */}
        {[
          { left: '15%', top: '30%', size: 8 },
          { left: '22%', top: '60%', size: 5 },
          { left: '70%', top: '40%', size: 6 },
          { left: '80%', top: '65%', size: 4 },
          { left: '35%', top: '75%', size: 7 },
          { left: '65%', top: '80%', size: 5 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size, background: '#e8f4fa', opacity: .55 }}
          />
        ))}
      </div>

      {/* ── FENCE LEFT ── */}
      <div className="absolute flex gap-[5px] items-end" style={{ left: 'calc(8% + 188px)', bottom: '28%' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-t-sm" style={{ width: 6, height: i % 2 === 0 ? 24 : 20, background: '#c8e8f0', border: '1.5px solid #a8cce0' }} />
        ))}
      </div>

      {/* ── FENCE RIGHT ── */}
      <div className="absolute flex gap-[5px] items-end" style={{ right: 'calc(8% + 173px)', bottom: '28%' }}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-t-sm" style={{ width: 6, height: i % 2 === 0 ? 24 : 20, background: '#c8e8f0', border: '1.5px solid #a8cce0' }} />
        ))}
      </div>

      {/* ── SNOWMAN LEFT ── */}
      <SnowmanSVG style={{ position: 'absolute', bottom: 'calc(28% + 2px)', left: 'calc(8% + 200px)' }} hat="red" />

      {/* ── SNOWMAN RIGHT ── */}
      <SnowmanSVG style={{ position: 'absolute', bottom: 'calc(28% + 2px)', right: 'calc(8% + 183px)' }} hat="yellow" />

      {/* ── BUILDINGS ── */}
      <Building id="projects" onClick={() => clickBuilding('projects')} style={{ left: '8%' }} />
      <Building id="resume"   onClick={() => clickBuilding('resume')}   style={{ left: '50%', transform: 'translateX(-50%)' }} />
      <Building id="contact"  onClick={() => clickBuilding('contact')}  style={{ right: '8%' }} />

      {/* ── PENGUIN ── */}
      <Penguin
        target={penTarget}
        onArrived={handleArrived}
        onClick={() => onBuildingClick('about')}
      />

      {/* ── SNOWFLAKES ── */}
      <Snowflakes />

      {/* ── HINT ── */}
      <motion.p
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest whitespace-nowrap pointer-events-none"
        style={{ color: '#6aaa80', zIndex: 10 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        ▼ click a building — or the penguin — to explore ▼
      </motion.p>
    </div>
  )
}

/* ── inline snowman ── */
function SnowmanSVG({ style, hat }: { style: React.CSSProperties; hat: 'red' | 'yellow' }) {
  const hc = hat === 'red' ? '#e83a5a' : '#f5c050'
  const hs = hat === 'red' ? '#c01a3a' : '#e8a830'
  return (
    <svg style={style} width="38" height="52" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="19" cy="50" rx="14" ry="4"  fill="rgba(0,0,0,.08)" />
      <ellipse cx="19" cy="37" rx="14" ry="13" fill="#fff" stroke="#b8ddf0" strokeWidth="2" />
      <ellipse cx="19" cy="19" rx="10" ry="9"  fill="#fff" stroke="#b8ddf0" strokeWidth="2" />
      <circle  cx="15" cy="17" r="2"  fill="#3a6880" />
      <circle  cx="23" cy="17" r="2"  fill="#3a6880" />
      <path d="M13,22 Q19,26 25,22" stroke="#3a6880" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="11" y="10" width="16" height="5" rx="2" fill={hc} stroke={hs} strokeWidth="1.2" />
      <rect x="13" y="8"  width="12" height="3" rx="1.5" fill={hc} stroke={hs} strokeWidth="1" />
      <line x1="5"  y1="36" x2="12" y2="30" stroke="#8a5820" strokeWidth="2" strokeLinecap="round" />
      <line x1="33" y1="36" x2="26" y2="30" stroke="#8a5820" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="34" r="2" fill="#3a6880" />
      <circle cx="22" cy="36" r="2" fill="#3a6880" />
      <circle cx="19" cy="40" r="2" fill="#3a6880" />
    </svg>
  )
}
