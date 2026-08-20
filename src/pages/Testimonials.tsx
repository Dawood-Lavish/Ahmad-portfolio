import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../components/UI'
import { testimonials } from '../data/content'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const next = () => { setDirection(1); setCurrent((prev) => (prev + 1) % testimonials.length) }
  const prev = () => { setDirection(-1); setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length) }
  useEffect(() => { timerRef.current = setInterval(next, 5000); return () => clearInterval(timerRef.current) }, [])
  const resetTimer = () => { clearInterval(timerRef.current); timerRef.current = setInterval(next, 5000) }
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  }
  return (
    <SectionWrapper id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Testimonials" title="What Clients" highlight="Say" description="Feedback from clients who have experienced the impact of strategic SEO and quality link building." />
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 md:p-12 min-h-[320px]">
            <div className="absolute top-6 right-8"><Quote size={60} className="text-white/5" /></div>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (<Star key={i} size={16} className="text-[#fbbf24] fill-[#fbbf24]" />))}
                </div>
                <p className="text-neutral-300 text-lg md:text-xl leading-relaxed mb-8 italic">"{testimonials[current].text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{testimonials[current].name}</div>
                    <div className="text-neutral-500 text-sm">{testimonials[current].company}</div>
                    <div className="text-[#00e5ff] text-xs mt-1">{testimonials[current].project}</div>
                  </div>
                  {testimonials[current].isSample && <span className="px-3 py-1 text-[10px] text-[#fbbf24] bg-[#fbbf24]/10 rounded border border-[#fbbf24]/20">Demo Content</span>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => { prev(); resetTimer() }} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all"><ChevronLeft size={18} /></button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); resetTimer() }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-[#00e5ff]' : 'w-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
            <button onClick={() => { next(); resetTimer() }} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all"><ChevronRight size={18} /></button>
          </div>
          <p className="text-center text-neutral-700 text-xs mt-6">* Testimonials shown are demo content for illustration purposes.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
