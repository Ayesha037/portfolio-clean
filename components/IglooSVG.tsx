export default function IglooSVG() {
  return (
    <svg width="190" height="200" viewBox="0 0 190 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="95" cy="195" rx="80" ry="8" fill="rgba(100,160,200,.18)" />
      {/* Snow base */}
      <ellipse cx="95" cy="155" rx="82" ry="22" fill="#e8f4fa" stroke="#b8d8f0" strokeWidth="2" />
      {/* Igloo dome */}
      <path d="M18,148 Q18,60 95,60 Q172,60 172,148Z" fill="#eaf6fd" stroke="#90c8e8" strokeWidth="3" />
      {/* Brick rows */}
      <path d="M30,128 Q95,112 160,128" stroke="#b8ddf0" strokeWidth="1.5" fill="none" />
      <path d="M22,108 Q95,88 168,108" stroke="#b8ddf0" strokeWidth="1.5" fill="none" />
      <path d="M24,88 Q95,66 166,88"  stroke="#c8e8f8" strokeWidth="1"   fill="none" />
      {/* Brick verticals */}
      <line x1="63"  y1="128" x2="57"  y2="108" stroke="#b8ddf0" strokeWidth="1" />
      <line x1="95"  y1="130" x2="95"  y2="108" stroke="#b8ddf0" strokeWidth="1" />
      <line x1="127" y1="128" x2="133" y2="108" stroke="#b8ddf0" strokeWidth="1" />
      <line x1="50"  y1="108" x2="48"  y2="88"  stroke="#c8e8f8" strokeWidth="0.8" />
      <line x1="75"  y1="104" x2="74"  y2="86"  stroke="#c8e8f8" strokeWidth="0.8" />
      <line x1="115" y1="104" x2="116" y2="86"  stroke="#c8e8f8" strokeWidth="0.8" />
      <line x1="140" y1="108" x2="142" y2="88"  stroke="#c8e8f8" strokeWidth="0.8" />
      {/* Door */}
      <ellipse cx="95" cy="152" rx="28" ry="18" fill="#7ab8d8" stroke="#5a98c0" strokeWidth="2.5" />
      <ellipse cx="95" cy="156" rx="20" ry="12" fill="#3a7a9a" stroke="#2a6a8a" strokeWidth="1.5" />
      <ellipse cx="95" cy="156" rx="16" ry="10" fill="#2a5a7a" />
      {/* Windows */}
      <ellipse cx="48"  cy="115" rx="14" ry="11" fill="#b8e0f8" stroke="#7ab8d8" strokeWidth="2" />
      <ellipse cx="48"  cy="115" rx="10" ry="8"  fill="#d8f0fa" />
      <line x1="48" y1="107" x2="48" y2="123" stroke="#90c8e8" strokeWidth="1" />
      <line x1="40" y1="115" x2="56" y2="115" stroke="#90c8e8" strokeWidth="1" />
      <ellipse cx="142" cy="115" rx="14" ry="11" fill="#b8e0f8" stroke="#7ab8d8" strokeWidth="2" />
      <ellipse cx="142" cy="115" rx="10" ry="8"  fill="#d8f0fa" />
      <line x1="142" y1="107" x2="142" y2="123" stroke="#90c8e8" strokeWidth="1" />
      <line x1="134" y1="115" x2="150" y2="115" stroke="#90c8e8" strokeWidth="1" />
      {/* Snow cap */}
      <ellipse cx="95" cy="63" rx="22" ry="10" fill="#fff" opacity=".9" />
      {/* Icicles */}
      <polygon points="36,148 40,163 44,148" fill="#c8e8f8" stroke="#a8d0ec" strokeWidth="1" />
      <polygon points="50,150 54,166 58,150" fill="#d8f0fa" stroke="#a8d0ec" strokeWidth="1" />
      <polygon points="132,150 136,166 140,150" fill="#c8e8f8" stroke="#a8d0ec" strokeWidth="1" />
      <polygon points="146,148 150,163 154,148" fill="#d8f0fa" stroke="#a8d0ec" strokeWidth="1" />
      {/* Sign */}
      <rect x="42" y="12" width="106" height="32" rx="10" fill="#fff" stroke="#7ab8d8" strokeWidth="2.5" />
      <rect x="88" y="10" width="14"  height="5"  rx="2"  fill="#7ab8d8" />
      <text x="95" y="33" textAnchor="middle" fontFamily="Nunito,sans-serif" fontSize="13" fontWeight="900" fill="#1a6a9a" letterSpacing="1.5">PROJECTS</text>
      <line x1="88"  y1="14" x2="68"  y2="44" stroke="#7ab8d8" strokeWidth="1.5" strokeDasharray="3,3" />
      <line x1="102" y1="14" x2="122" y2="44" stroke="#7ab8d8" strokeWidth="1.5" strokeDasharray="3,3" />
    </svg>
  )
}
