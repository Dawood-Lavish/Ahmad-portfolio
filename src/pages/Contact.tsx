import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, Send, ArrowRight, Globe, CheckCircle2 } from 'lucide-react'
import { SectionWrapper, SectionHeading, AnimatedCard } from '../components/UI'

const contactMethods = [
  { icon: MessageCircle, label: 'WhatsApp', value: '03053655571', href: 'https://wa.me/923053655571' },
  { icon: Mail, label: 'Email', value: 'ahsanabid717171@gmail.com', href: 'mailto:ahsanabid717171@gmail.com' },
  { icon: Mail, label: 'Work Email', value: 'ahmad@outranksaas.com', href: 'mailto:ahmad@outranksaas.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/muhammad-ahsan-abid', href: 'https://www.linkedin.com/in/muhammad-ahsan-abid-110107327' },
  { icon: Send, label: 'Telegram', value: '@muhammadahmad', href: '#' },
]
const serviceOptions = ['Link Insertion', 'Guest Posting', 'Link Building', 'Off-Page SEO', 'SEO Outreach', 'Backlink Audit', 'Competitor Analysis', 'SEO Strategy']
const budgetOptions = ['$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', '$5,000 - $10,000', '$10,000+']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Muhammad Ahmad!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0AService: ${formData.service}%0ABudget: ${formData.budget}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/923053655571?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-neutral-700 focus:border-[#00e5ff]/50 focus:bg-white/[0.07] outline-none transition-all"
  const selectClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:border-[#00e5ff]/50 focus:bg-white/[0.07] outline-none transition-all appearance-none"

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Contact" title="Let's Build Your Search" highlight="Authority" description="Have an SEO project, link-building campaign, or guest posting requirement? Let's discuss how we can grow your online presence." />
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, i) => (
                <AnimatedCard key={method.label} delay={i * 0.1} className="p-5" hover={true}>
                  <a href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00e5ff]/10"><method.icon size={20} className="text-[#00e5ff]" /></div>
                    <div><div className="text-xs text-neutral-600 uppercase tracking-wider">{method.label}</div><div className="text-white text-sm font-medium">{method.value}</div></div>
                  </a>
                </AnimatedCard>
              ))}
            </div>
            <AnimatedCard delay={0.4} className="p-6">
              <div className="flex items-center gap-3 mb-4"><Globe size={20} className="text-[#00e5ff]" /><span className="text-white font-semibold text-sm">International SEO Services</span></div>
              <p className="text-neutral-400 text-sm leading-relaxed">Working with clients worldwide across different time zones, industries, and markets. Available for both short-term projects and long-term partnerships.</p>
            </AnimatedCard>
          </div>
          <div className="lg:col-span-3">
            <AnimatedCard delay={0.2} className="p-6 md:p-8">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#00e5ff]/10 flex items-center justify-center mx-auto mb-4"><CheckCircle2 size={32} className="text-[#00e5ff]" /></div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400">Thank you for reaching out. Redirecting to WhatsApp...</p>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' }) }} className="mt-6 text-[#00e5ff] text-sm font-medium hover:underline">Send another message</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Full Name *</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" /></div>
                    <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="your@email.com" /></div>
                  </div>
                  <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Company / Website</label><input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder="yourcompany.com" /></div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Service Required *</label>
                      <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={selectClass}>
                        <option value="" className="bg-[#0a0a0a]">Select a service</option>
                        {serviceOptions.map((s) => (<option key={s} value={s} className="bg-[#0a0a0a]">{s}</option>))}
                      </select>
                    </div>
                    <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Monthly Budget</label>
                      <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={selectClass}>
                        <option value="" className="bg-[#0a0a0a]">Select budget range</option>
                        {budgetOptions.map((b) => (<option key={b} value={b} className="bg-[#0a0a0a]">{b}</option>))}
                      </select>
                    </div>
                  </div>
                  <div><label className="block text-xs text-neutral-500 uppercase tracking-wider mb-2">Message *</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass + " resize-none"} placeholder="Tell me about your project, goals, and any specific requirements..." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00e5ff] to-[#00bcd4] text-black font-semibold rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.2)] hover:shadow-[0_0_50px_rgba(0,229,255,0.4)] transition-all duration-300 magnetic-btn text-sm">
                    Start My SEO Campaign <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </AnimatedCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
