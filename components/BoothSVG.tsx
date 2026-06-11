export default function BoothSVG() {
  return (
    <svg width="175" height="195" viewBox="0 0 175 195" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="87" cy="190" rx="72" ry="7" fill="rgba(100,160,200,.18)" />
      {/* Body */}
      <rect x="14" y="95" width="147" height="90" rx="6" fill="#5aa8e8" stroke="#3a88c8" strokeWidth="3" />
      <rect x="151" y="99" width="6" height="82" rx="3" fill="#3a88c8" opacity=".4" />
      {/* Roof */}
      <polygon points="87,12 158,98 16,98" fill="#e83a5a" stroke="#c01a3a" strokeWidth="3" />
      <polygon points="87,12 98,42 76,42" fill="#c01a3a" />
      {/* Snow on roof */}
      <path d="M16,98 Q87,82 158,98 Q155,90 87,74 Q19,90 16,98Z" fill="#fff" opacity=".75" />
      {/* Flag */}
      <line x1="87" y1="12" x2="87" y2="0" stroke="#c01a3a" strokeWidth="2" />
      <polygon points="87,0 108,8 87,16" fill="#e83a5a" stroke="#c01a3a" strokeWidth="1.5" />
      {/* Front window */}
      <rect x="30" y="105" width="115" height="48" rx="5" fill="#d8f0fa" stroke="#7ab8d8" strokeWidth="2.5" />
      <rect x="34" y="109" width="52" height="40" rx="3" fill="#e8f8ff" />
      <rect x="90" y="109" width="51" height="40" rx="3" fill="#e8f8ff" />
      <line x1="86" y1="105" x2="86" y2="153" stroke="#7ab8d8" strokeWidth="2" />
      <rect x="28" y="125" width="119" height="5" rx="2" fill="#90c0e8" />
      {/* Window reflections */}
      <line x1="36" y1="111" x2="36" y2="148" stroke="#c8e8f8" strokeWidth="1.5" opacity=".6" />
      <line x1="92" y1="111" x2="92" y2="148" stroke="#c8e8f8" strokeWidth="1.5" opacity=".6" />
      {/* Snowflake accents */}
      <text x="58"  y="128" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#a8d0f0" opacity=".8">✦</text>
      <text x="117" y="128" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#a8d0f0" opacity=".8">✦</text>
      {/* Counter shelf */}
      <rect x="28" y="151" width="119" height="8" rx="4" fill="#3a88c8" stroke="#2a70b0" strokeWidth="1.5" />
      {/* Door */}
      <rect x="58" y="155" width="59" height="30" rx="5" fill="#2a78c0" stroke="#1a5890" strokeWidth="2" />
      <rect x="62" y="159" width="22" height="22" rx="3" fill="#3a90d8" stroke="#2a78c0" strokeWidth="1.5" />
      <rect x="88" y="159" width="22" height="22" rx="3" fill="#3a90d8" stroke="#2a78c0" strokeWidth="1.5" />
      <circle cx="85" cy="171" r="3" fill="#90c8f0" stroke="#70a8d8" strokeWidth="1" />
      <circle cx="90" cy="171" r="3" fill="#90c8f0" stroke="#70a8d8" strokeWidth="1" />
      {/* Bell */}
      <rect x="72" y="86" width="31" height="14" rx="5" fill="#e83a5a" stroke="#c01a3a" strokeWidth="2" />
      <circle cx="87" cy="93" r="5" fill="#f0a0b0" stroke="#c01a3a" strokeWidth="1.5" />
      {/* Sign */}
      <rect x="24" y="14" width="127" height="32" rx="10" fill="#fff" stroke="#3a88c8" strokeWidth="2.5" />
      <rect x="80" y="12" width="14"  height="5"  rx="2"  fill="#3a88c8" />
      <text x="87" y="35" textAnchor="middle" fontFamily="Nunito,sans-serif" fontSize="13" fontWeight="900" fill="#1a4a8a" letterSpacing="1">CONTACT</text>
      <line x1="80" y1="15" x2="65"  y2="50" stroke="#3a88c8" strokeWidth="1.5" strokeDasharray="3,3" />
      <line x1="95" y1="15" x2="110" y2="50" stroke="#3a88c8" strokeWidth="1.5" strokeDasharray="3,3" />
    </svg>
  )
}
