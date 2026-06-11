'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PANEL_META } from './data'
import { AboutPanel, ProjectsPanel, ResumePanel, ContactPanel } from './PanelContent'
import type { PanelId } from '@/app/page'

interface OverlayProps {
  activePanel: PanelId
  onClose: () => void
}

const CONTENT_MAP = {
  about:    AboutPanel,
  projects: ProjectsPanel,
  resume:   ResumePanel,
  contact:  ContactPanel,
}

export default function Overlay({ activePanel, onClose }: OverlayProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const meta = activePanel ? PANEL_META[activePanel] : null
  const ContentComp = activePanel ? CONTENT_MAP[activePanel] : null

  return (
    <AnimatePresence>
      {activePanel && meta && ContentComp && (
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 cursor-pointer"
            style={{ background: 'rgba(100,160,200,.45)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 flex flex-col overflow-hidden"
            style={{
              width: '90%',
              maxWidth: 680,
              maxHeight: '88vh',
              background: '#fffef8',
              borderRadius: 20,
              border: '3px solid #a8d8f0',
              boxShadow: '0 12px 48px rgba(60,120,180,.2)',
            }}
            initial={{ scale: 0.88, y: 28 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.88, y: 28 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            {/* Header */}
            <div
              className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b-2 border-[#e8f4fa]"
              style={{ background: meta.headBg }}
            >
              <h2
                className="text-lg font-black tracking-wide"
                style={{ color: meta.color }}
              >
                {meta.title}
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border-2 border-[#a8d8f0] bg-[#e8f4fa] flex items-center justify-center text-[#2a6a9a] font-bold text-lg hover:bg-[#c8e8f8] transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div
              className="flex-1 overflow-y-auto px-6 py-5"
              style={{ scrollbarWidth: 'thin', scrollbarColor: '#a8d8f0 transparent' }}
            >
              <ContentComp />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
