import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '../components/UI'
import { faqData } from '../data/content'

function FAQItem({ item, index, isOpen, toggle }: {
  item: typeof faqData[0]; index: number; isOpen: boolean; toggle: () => void
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: index * 0.05 }} className="border-b border-white/5 last:border-0">
      <button onClick={toggle} className="w-full flex items-center justify-between py-5 md:py-6 text-left group">
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 pr-4 ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
          {item.question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          {isOpen ? <Minus size={18} className="text-[#00e5ff]" /> : <Plus size={18} className="text-neutral-600 group-hover:text-[#00e5ff] transition-colors" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }} className="overflow-hidden">
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed pb-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <SectionWrapper id="faq" className="bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="FAQ" title="Frequently Asked" highlight="Questions" description="Answers to common questions about link insertion, guest posting, and SEO services." />
        <div className="rounded-2xl bg-[#0a0a0a] border border-white/5 p-6 md:p-8">
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} toggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
