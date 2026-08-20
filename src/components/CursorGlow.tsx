import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

function ClickBurst({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{ left: x, top: y }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00e5ff]"
          style={{ rotate: 45 }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: Math.cos((i * Math.PI * 2) / 12) * 50,
            y: Math.sin((i * Math.PI * 2) / 12) * 50,
            scale: 0,
            opacity: [1, 0.6, 0],
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />
      ))}
      <motion.div
        className="absolute w-6 h-6 border border-[#00e5ff]/60 -translate-x-1/2 -translate-y-1/2"
        style={{ rotate: 45 }}
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute w-4 h-4 border border-[#8b5cf6]/40 -translate-x-1/2 -translate-y-1/2"
        style={{ rotate: 0 }}
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      />
    </motion.div>
  )
}

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const [clicks, setClicks] = useState<{ x: number; y: number; id: number }[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const idRef = useRef(0)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { damping: 20, stiffness: 500, mass: 0.3 })
  const springY = useSpring(cursorY, { damping: 20, stiffness: 500, mass: 0.3 })

  const trailX = useMotionValue(0)
  const trailY = useMotionValue(0)
  const trailSpringX = useSpring(trailX, { damping: 18, stiffness: 250, mass: 0.5 })
  const trailSpringY = useSpring(trailY, { damping: 18, stiffness: 250, mass: 0.5 })

  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowSpringX = useSpring(glowX, { damping: 15, stiffness: 120, mass: 0.8 })
  const glowSpringY = useSpring(glowY, { damping: 15, stiffness: 120, mass: 0.8 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    trailX.set(e.clientX)
    trailY.set(e.clientY)
    glowX.set(e.clientX)
    glowY.set(e.clientY)
    if (!visible) setVisible(true)
  }, [visible, cursorX, cursorY, trailX, trailY, glowX, glowY])

  const handleMouseDown = useCallback((e: MouseEvent) => {
    setIsClicking(true)
    idRef.current += 1
    setClicks(prev => [...prev, { x: e.clientX, y: e.clientY, id: idRef.current }])
    setTimeout(() => setClicks(prev => prev.slice(1)), 600)
  }, [])

  const handleMouseUp = useCallback(() => setIsClicking(false), [])
  const handleMouseLeave = useCallback(() => setVisible(false), [])
  const handleMouseEnter = useCallback(() => setVisible(true), [])

  useEffect(() => {
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsHovering(!!target.closest('a, button, [role="button"], input, textarea, select, label, .magnetic-btn'))
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', checkHover, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Outer glow */}
      <motion.div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: glowSpringX, y: glowSpringY,
          width: 400, height: 400,
          translateX: '-50%', translateY: '-50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, rgba(139,92,246,0.02) 40%, transparent 70%)',
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Trailing diamond ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] border"
        style={{
          x: trailSpringX, y: trailSpringY,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          translateX: '-50%', translateY: '-50%',
          rotate: 45,
          borderColor: isHovering ? 'rgba(0,229,255,0.5)' : 'rgba(255,255,255,0.2)',
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, border-color 0.15s',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: springX, y: springY,
          width: isClicking ? 10 : isHovering ? 6 : 4,
          height: isClicking ? 10 : isHovering ? 6 : 4,
          translateX: '-50%', translateY: '-50%',
          rotate: 45,
          backgroundColor: isHovering ? '#00e5ff' : '#ffffff',
          boxShadow: isHovering
            ? '0 0 20px rgba(0,229,255,0.6), 0 0 40px rgba(0,229,255,0.2)'
            : '0 0 10px rgba(255,255,255,0.4)',
          opacity: visible ? 1 : 0,
          transition: 'width 0.15s, height 0.15s, background-color 0.15s, box-shadow 0.15s',
        }}
      />

      {/* Crosshair lines */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: trailSpringX, y: trailSpringY,
          translateX: '-50%', translateY: '-50%',
          opacity: visible && isHovering ? 0.3 : 0,
          transition: 'opacity 0.2s',
        }}
      >
        <div className="absolute w-px h-5 bg-[#00e5ff] -translate-x-1/2 -translate-y-[14px]" />
        <div className="absolute w-px h-5 bg-[#00e5ff] -translate-x-1/2 translate-y-[9px]" />
        <div className="absolute h-px w-5 bg-[#00e5ff] -translate-y-1/2 -translate-x-[14px]" />
        <div className="absolute h-px w-5 bg-[#00e5ff] -translate-y-1/2 translate-x-[9px]" />
      </motion.div>

      {/* Click bursts */}
      <AnimatePresence>
        {clicks.map((click) => (
          <ClickBurst key={click.id} x={click.x} y={click.y} />
        ))}
      </AnimatePresence>

      <style>{`
        *, *::before, *::after { cursor: none !important; }
        @media (pointer: coarse) { *, *::before, *::after { cursor: auto !important; } }
      `}</style>
    </>
  )
}
