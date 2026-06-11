export default function ShopSVG() {
  return (
    <svg width="230" height="230" viewBox="0 0 230 230" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="115" cy="225" rx="95" ry="8" fill="rgba(100,160,200,.18)" />
      {/* Body */}
      <rect x="18" y="80" width="194" height="143" rx="8" fill="#fde8a0" stroke="#e8a830" strokeWidth="3" />
      <rect x="192" y="84" width="16" height="135" rx="4" fill="#f5c050" opacity=".4" />
      {/* Roof band */}
      <rect x="8"  y="62" width="214" height="28" rx="6" fill="#e85a2a" stroke="#c03a10" strokeWidth="3" />
      {/* Roof turrets */}
      <rect x="28"  y="56" width="20" height="18" rx="4" fill="#e85a2a" stroke="#c03a10" strokeWidth="2" />
      <rect x="60"  y="52" width="20" height="22" rx="4" fill="#e85a2a" stroke="#c03a10" strokeWidth="2" />
      <rect x="96"  y="48" width="38" height="26" rx="5" fill="#e85a2a" stroke="#c03a10" strokeWidth="2.5" />
      <rect x="150" y="52" width="20" height="22" rx="4" fill="#e85a2a" stroke="#c03a10" strokeWidth="2" />
      <rect x="182" y="56" width="20" height="18" rx="4" fill="#e85a2a" stroke="#c03a10" strokeWidth="2" />
      {/* Ball ornaments */}
      <circle cx="38"  cy="53" r="6" fill="#f5c050" stroke="#e8a830" strokeWidth="2" />
      <circle cx="70"  cy="49" r="6" fill="#f5c050" stroke="#e8a830" strokeWidth="2" />
      <circle cx="115" cy="44" r="9" fill="#f5c050" stroke="#e8a830" strokeWidth="2.5" />
      <circle cx="160" cy="49" r="6" fill="#f5c050" stroke="#e8a830" strokeWidth="2" />
      <circle cx="192" cy="53" r="6" fill="#f5c050" stroke="#e8a830" strokeWidth="2" />
      {/* Awning */}
      <path d="M14,90 Q115,110 216,90 L216,97 Q115,117 14,97Z" fill="#e85a2a" stroke="#c03a10" strokeWidth="1.5" />
      {/* Awning stripe marks */}
      {[38,65,92,115,138,165,192].map((x,i) => (
        <path key={i} d={`M${x},${91+i%2*2} L${x-1},${107+i%2*2}`} stroke="#c03a10" strokeWidth="1.5" strokeDasharray="2,3" />
      ))}
      {/* Left display window */}
      <rect x="24"  y="118" width="52" height="44" rx="5" fill="#b8e0f8" stroke="#7ab8d8" strokeWidth="2.5" />
      <rect x="28"  y="122" width="20" height="36" fill="#d8f0fa" rx="2" />
      <rect x="52"  y="122" width="20" height="36" fill="#d8f0fa" rx="2" />
      <line x1="24" y1="130" x2="76" y2="130" stroke="#90c8e8" strokeWidth="1" />
      <rect x="30"  y="137" width="16" height="4" rx="1" fill="#e8a830" />
      <rect x="54"  y="137" width="16" height="4" rx="1" fill="#e8a830" />
      {/* Right display window */}
      <rect x="154" y="118" width="52" height="44" rx="5" fill="#b8e0f8" stroke="#7ab8d8" strokeWidth="2.5" />
      <rect x="158" y="122" width="20" height="36" fill="#d8f0fa" rx="2" />
      <rect x="182" y="122" width="20" height="36" fill="#d8f0fa" rx="2" />
      <line x1="154" y1="130" x2="206" y2="130" stroke="#90c8e8" strokeWidth="1" />
      <rect x="160" y="137" width="16" height="4" rx="1" fill="#e8a830" />
      <rect x="184" y="137" width="16" height="4" rx="1" fill="#e8a830" />
      {/* Center door */}
      <rect x="86" y="130" width="58" height="93" rx="6" fill="#c07830" stroke="#8a5820" strokeWidth="2.5" />
      <rect x="90" y="134" width="23" height="42" rx="4" fill="#d09040" stroke="#8a5820" strokeWidth="1.5" />
      <rect x="117" y="134" width="23" height="42" rx="4" fill="#d09040" stroke="#8a5820" strokeWidth="1.5" />
      <circle cx="112" cy="158" r="4" fill="#f5c050" stroke="#e8a830" strokeWidth="1.5" />
      <circle cx="118" cy="158" r="4" fill="#f5c050" stroke="#e8a830" strokeWidth="1.5" />
      <rect x="90" y="180" width="50" height="24" rx="4" fill="#b8e0f8" stroke="#7ab8d8" strokeWidth="1.5" />
      {/* Flower boxes */}
      <rect x="24" y="160" width="52" height="8" rx="3" fill="#8a5820" stroke="#6a3810" strokeWidth="1.5" />
      {[34,46,58,70].map((x,i) => (
        <circle key={i} cx={x} cy={157} r={5} fill={i%2===0?'#e84a6a':'#f5d050'} stroke={i%2===0?'#c02a4a':'#d0a820'} strokeWidth="1.5" />
      ))}
      <rect x="154" y="160" width="52" height="8" rx="3" fill="#8a5820" stroke="#6a3810" strokeWidth="1.5" />
      {[164,176,188,200].map((x,i) => (
        <circle key={i} cx={x} cy={157} r={5} fill={i%2===0?'#f5d050':'#e84a6a'} stroke={i%2===0?'#d0a820':'#c02a4a'} strokeWidth="1.5" />
      ))}
      {/* Snow on roof */}
      <path d="M8,63 Q115,55 222,63 Q220,57 115,48 Q10,57 8,63Z" fill="#fff" opacity=".7" />
      {/* Sign */}
      <rect x="62" y="14" width="106" height="32" rx="10" fill="#fff" stroke="#e8a830" strokeWidth="2.5" />
      <rect x="108" y="12" width="14"  height="5"  rx="2"  fill="#e8a830" />
      <text x="115" y="35" textAnchor="middle" fontFamily="Nunito,sans-serif" fontSize="14" fontWeight="900" fill="#8a4010" letterSpacing="1">RESUME</text>
      <line x1="105" y1="15" x2="90"  y2="50" stroke="#e8a830" strokeWidth="1.5" strokeDasharray="3,3" />
      <line x1="125" y1="15" x2="140" y2="50" stroke="#e8a830" strokeWidth="1.5" strokeDasharray="3,3" />
    </svg>
  )
}
