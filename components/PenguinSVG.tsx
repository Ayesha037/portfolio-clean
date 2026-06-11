'use client'

import { forwardRef } from 'react'

interface PenguinSVGProps {
  flipped?: boolean
}

const PenguinSVG = forwardRef<SVGSVGElement, PenguinSVGProps>(
  function PenguinSVG({ flipped = false }, ref) {
    return (
      <svg
        ref={ref}
        width="52"
        height="72"
        viewBox="0 0 52 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: flipped ? 'scaleX(-1)' : 'scaleX(1)', transition: 'transform 0.15s' }}
      >
        {/* Body */}
        <ellipse cx="26" cy="46" rx="18" ry="22" fill="#1a2a3a" stroke="#0a1a2a" strokeWidth="2" />
        {/* Belly */}
        <ellipse cx="26" cy="50" rx="11" ry="15" fill="#f0f4f8" stroke="#d8e4f0" strokeWidth="1.5" />
        {/* Head */}
        <circle cx="26" cy="22" r="16" fill="#1a2a3a" stroke="#0a1a2a" strokeWidth="2" />
        {/* Face patch */}
        <ellipse cx="26" cy="24" rx="10" ry="9" fill="#f0f4f8" />
        {/* Eyes */}
        <circle cx="21" cy="20" r="4" fill="#fff" stroke="#0a1a2a" strokeWidth="1.5" />
        <circle cx="31" cy="20" r="4" fill="#fff" stroke="#0a1a2a" strokeWidth="1.5" />
        <circle cx="22" cy="20" r="2" fill="#0a1a2a" />
        <circle cx="32" cy="20" r="2" fill="#0a1a2a" />
        {/* Eye shine */}
        <circle cx="23" cy="19" r="0.8" fill="#fff" />
        <circle cx="33" cy="19" r="0.8" fill="#fff" />
        {/* Beak */}
        <polygon points="26,26 22,31 30,31" fill="#f5c050" stroke="#e8a830" strokeWidth="1.5" />
        {/* Cheeks */}
        <ellipse cx="17" cy="26" rx="4" ry="3" fill="#f09090" opacity=".5" />
        <ellipse cx="35" cy="26" rx="4" ry="3" fill="#f09090" opacity=".5" />
        {/* Wings */}
        <ellipse cx="8"  cy="46" rx="6" ry="14" fill="#1a2a3a" stroke="#0a1a2a" strokeWidth="1.5" />
        <ellipse cx="44" cy="46" rx="6" ry="14" fill="#1a2a3a" stroke="#0a1a2a" strokeWidth="1.5" />
        {/* Feet */}
        <ellipse cx="19" cy="67" rx="8" ry="4" fill="#f5c050" stroke="#e8a830" strokeWidth="1.5" />
        <ellipse cx="33" cy="67" rx="8" ry="4" fill="#f5c050" stroke="#e8a830" strokeWidth="1.5" />
        {/* Scarf */}
        <path d="M11,35 Q26,42 41,35" stroke="#e83a5a" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M11,35 Q26,43 41,35" stroke="#e83a5a" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
        <line x1="38" y1="36" x2="44" y2="44" stroke="#e83a5a" strokeWidth="4" strokeLinecap="round" />
        <line x1="42" y1="44" x2="40" y2="50" stroke="#e83a5a" strokeWidth="4" strokeLinecap="round" />
        {/* Hat */}
        <ellipse cx="26" cy="8" rx="14" ry="5" fill="#3a2a6a" stroke="#1a1040" strokeWidth="1.5" />
        <rect x="20" y="2" width="12" height="7" rx="2" fill="#3a2a6a" stroke="#1a1040" strokeWidth="1.5" />
        <rect x="18" y="7" width="16" height="3" rx="1.5" fill="#e83a5a" stroke="#c01a3a" strokeWidth="1" />
      </svg>
    )
  }
)

export default PenguinSVG
