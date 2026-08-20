import { motion } from 'framer-motion'
import { useScrollProgress } from '../hooks/useAnimations'

export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00d4aa] via-[#7c3aed] to-[#3b82f6] z-[100] origin-left"
      style={{ scaleX: progress }}
    />
  )
}
