import type { CSSProperties, ReactNode } from 'react'
import { projects, skillGroups } from './data'

/* ── Shared atoms ── */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-dashed border-[#c8e4f5] last:border-0">
      <span className="text-xs font-semibold text-[#5a8aaa]">{label}</span>
      <span className="text-xs font-bold text-[#1a4a7a] text-right max-w-[60%]">{value}</span>
    </div>
  )
}

function SecTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[11px] font-extrabold tracking-[2px] uppercase text-[#5a9abf] mt-5 mb-3 first:mt-0">
      {children}
    </h3>
  )
}

function Card({ title, sub, desc, link }: { title: string; sub?: string; desc: string; link?: string }) {
  return (
    <div className="bg-[#f0f8ff] border-2 border-[#c8e4f5] rounded-2xl p-3.5 mb-3 hover:border-[#7abcdf] transition-colors">
      <p className="text-[13px] font-extrabold text-[#1a4a7a] mb-1">{title}</p>
      {sub && <p className="text-[11px] font-semibold text-[#5a8aaa] mb-1.5">{sub}</p>}
      <p className="text-[12px] text-[#3a6080] leading-relaxed">{desc}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer"
          className="text-[11px] font-bold text-[#2a7abf] hover:text-[#1a5aaf] mt-1.5 inline-block">
          → {link.replace('https://github.com/', 'github.com/')}
        </a>
      )}
    </div>
  )
}

function Tag({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <span
      className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border mr-1 mb-1"
      style={style ?? { background: '#d0eefa', borderColor: '#a8d8f5', color: '#1a5a8a' }}
    >
      {children}
    </span>
  )
}

/* ── Panel bodies ── */
export function AboutPanel() {
  return (
    <>
      <Row label="Name"       value="Mohammad Ayesha Summaiyya" />
      <Row label="Role"       value="AI Engineer & Full-Stack Developer" />
      <Row label="Email"      value="msumaiya03579@gmail.com" />

      <SecTitle>What I Do</SecTitle>
      <Card
        title="AI System Engineer"
        desc="I build end-to-end AI systems — from data processing and machine learning models to APIs and user-facing applications. My focus is on creating scalable, production-ready solutions that turn complex AI into practical, real-world products."
      />
      <SecTitle>Core Focus</SecTitle> 
      <Card 
        title="Full-Stack + AI Integration" 
        desc="I work across the stack, integrating LLMs, backend systems, and frontend interfaces to build complete applications such as RAG pipelines, fraud detection systems, and data-driven platforms." />

      <SecTitle>Leadership</SecTitle>
      <Card
        title="President, Abdul Kalam Innovation Club"
        desc="Led 50+ members. Organised week-long innovation events, business competitions, and hackathons from 1st year."
      />
    </>
  )
}

export function ProjectsPanel() {
  return (
    <>
      <SecTitle>AI & Machine Learning</SecTitle>
      {projects.map((p) => (
        <Card key={p.title} title={p.title} sub={p.tags.join(' · ')} desc={p.desc} link={p.link} />
      ))}

      <SecTitle>Research Publication</SecTitle>
      <div className="bg-[#fff8e8] border-2 border-[#f5d87a] rounded-2xl p-3.5 mb-3">
        <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 bg-[#fef0a0] border border-[#f5d878] rounded-full text-[#8a6a10] mb-2">
          ISJEM · APRIL 2026 · IMPACT FACTOR 8.07
        </span>
        <p className="text-[13px] font-extrabold text-[#1a4a7a] mb-1">
          ML-Based Prediction of Recurrence in Non-Small Cell Lung Cancer
        </p>
        <p className="text-[12px] text-[#3a6080] leading-relaxed">
          Multi-model approach integrating clinical and radiomic features. DOI: 10.55041/ISJEM06362
        </p>
      </div>
    </>
  )
}

export function ResumePanel() {
  return (
    <>
      <Row label="Name"       value="Mohammad Ayesha Summaiyya" />
      <Row label="Degree"     value="B.Tech CSE · CGPA 8.0" />
      <Row label="University" value="Dr. M.G.R. Educational & Research Institute" />
      <Row label="Period"     value="2022 – 2026 · Chennai" />

      <SecTitle>Technical Skills</SecTitle>
      <div className="grid grid-cols-2 gap-3 mb-2">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <p className="text-[10px] font-extrabold tracking-[1.5px] uppercase text-[#5a9abf] mb-1.5">{g.label}</p>
            <div>
              {g.tags.map((t) => <Tag key={t} style={g.style as CSSProperties}>{t}</Tag>)}
            </div>
          </div>
        ))}
      </div>

      <SecTitle>Experience</SecTitle>
      <Card
        title="UI/UX Design & App Development Intern"
        sub="GeoSensing & Imaging Consultancy · Remote · Feb–May 2025"
        desc="Agile sprints with engineering and product teams. Delivered accessible UI components, participated in code reviews, improved interface usability."
      />

      <SecTitle>Leadership</SecTitle>
      <Card
        title="President, Abdul Kalam Innovation Club"
        desc="Led 50+ members. Organised week-long innovation events, business competitions, and hackathons."
      />

      <SecTitle>Certifications</SecTitle>
      <div className="mb-4">
        {['Python + Data Science & ML — FITA Academy', 'Python — Kaggle', 'Java Fundamentals — Oracle Academy'].map((c) => (
          <Tag key={c} style={{ background: '#fff8e0', borderColor: '#f5d878', color: '#8a6a10', fontSize: 11 }}>{c}</Tag>
        ))}
      </div>

      <a
        href="mailto:msumaiya03579@gmail.com?subject=Resume Request"
        className="inline-flex items-center gap-2 bg-[#4ab0e8] text-white font-extrabold text-[12px] tracking-wide px-5 py-2.5 rounded-xl hover:bg-[#2a9ad8] transition-colors no-underline"
      >
        ↓ Request Resume
      </a>
    </>
  )
}

export function ContactPanel() {
  function handleSend() {
    const name = (document.getElementById('cn') as HTMLInputElement)?.value
    const email = (document.getElementById('ce') as HTMLInputElement)?.value
    const msg = (document.getElementById('cm') as HTMLTextAreaElement)?.value
    if (name && email && msg) {
      window.location.href = `mailto:msumaiya03579@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}%0A%0AFrom: ${encodeURIComponent(email)}`
    }
  }

  return (
    <>
      <Row label="Email" value="msumaiya03579@gmail.com" />
      <Row label="Phone" value="+91 9963638014" />

      <SecTitle>Send a Message</SecTitle>
      <input
        id="cn" type="text" placeholder="Your name 😊"
        className="w-full bg-[#f0f8ff] border-2 border-[#c8e4f5] text-[#1a4a7a] px-3 py-2 rounded-xl text-[13px] font-semibold mb-2.5 outline-none focus:border-[#7abcdf] placeholder:text-[#9cc8e0] placeholder:font-normal"
      />
      <input
        id="ce" type="email" placeholder="your@email.com"
        className="w-full bg-[#f0f8ff] border-2 border-[#c8e4f5] text-[#1a4a7a] px-3 py-2 rounded-xl text-[13px] font-semibold mb-2.5 outline-none focus:border-[#7abcdf] placeholder:text-[#9cc8e0] placeholder:font-normal"
      />
      <textarea
        id="cm" rows={4} placeholder="Your message..."
        className="w-full bg-[#f0f8ff] border-2 border-[#c8e4f5] text-[#1a4a7a] px-3 py-2 rounded-xl text-[13px] font-semibold mb-2.5 outline-none focus:border-[#7abcdf] placeholder:text-[#9cc8e0] placeholder:font-normal resize-none"
      />
      <button
        onClick={handleSend}
        className="w-full py-3 bg-[#4ab0e8] text-white font-extrabold text-[13px] tracking-wide rounded-xl hover:bg-[#2a9ad8] transition-colors cursor-pointer border-none"
      >
        ❄️ Send Message!
      </button>

      <SecTitle>Find Ayesha Online</SecTitle>
      <div className="flex gap-2">
        <a
          href="https://github.com/Ayesha037"
          target="_blank" rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#e8f4fa] border-2 border-[#c8e4f5] rounded-xl text-[#2a6a9a] text-[12px] font-bold hover:bg-[#c8e8f8] hover:border-[#7abcdf] transition-colors no-underline"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-ayesha-summaiyya-b94351333"
          target="_blank" rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#e8f4fa] border-2 border-[#c8e4f5] rounded-xl text-[#2a6a9a] text-[12px] font-bold hover:bg-[#c8e8f8] hover:border-[#7abcdf] transition-colors no-underline"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </div>
    </>
  )
}
