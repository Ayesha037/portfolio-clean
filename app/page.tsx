'use client'

import { useState } from 'react'
import Scene from '@/components/Scene'
import Overlay from '@/components/Overlay'

export type PanelId = 'projects' | 'resume' | 'contact' | 'about' | null

export default function Home() {
  const [activePanel, setActivePanel] = useState<PanelId>(null)

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Scene onBuildingClick={setActivePanel} />
      <Overlay activePanel={activePanel} onClose={() => setActivePanel(null)} />
    </main>
  )
}
