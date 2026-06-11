'use client'

import { motion } from 'framer-motion'
import IglooSVG from './IglooSVG'
import ShopSVG  from './ShopSVG'
import BoothSVG from './BoothSVG'
import type { PanelId } from '@/app/page'

interface BuildingProps {
  id: 'projects' | 'resume' | 'contact'
  style?: React.CSSProperties
  onClick: () => void
}

const SVG_MAP = { projects: IglooSVG, resume: ShopSVG, contact: BoothSVG }

export default function Building({ id, style, onClick }: BuildingProps) {
  const SVGComp = SVG_MAP[id]
  return (
    <motion.div
      className="building-wrap absolute flex flex-col items-center cursor-pointer"
      style={{ bottom: '28%', ...style, transformOrigin: 'bottom center' }}
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
      onClick={onClick}
    >
      <SVGComp />
    </motion.div>
  )
}
