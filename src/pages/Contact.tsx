import { PageTransition } from '../components/PageTransition';
import { Mail, MapPin, Phone, Send, Sparkles, Clock, Globe } from 'lucide-react';
import React, { useState } from 'react';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'Partnership / Collaboration',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 animate-fade-in-down">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Direct Information Desk */}
            <div className="lg:col-span-5 text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-[1px] bg-[#EBC325]"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">COMMUNICATION HUB</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter text-white mb-8 leading-none">
                  LET'S CREATE <span className="text-[#EBC325]">SOMETHING MEANINGFUL.</span>
                </h2>
                
                <p className="text-sm md:text-base text-gray-400 mb-12 leading-relaxed">
                  Whether you're developing a film, launching a campaign, seeking creative direction, exploring a partnership, or building a story that deserves to be told, we'd love to hear from you.
                </p>
                
                <div className="space-y-8">
                  {/* DIRECT OUTREACH */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                      <Mail className="w-5 h-5 text-[#EBC325]" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325] mb-0.5">DIRECT OUTREACH</div>
                      <a href="mailto:ogwatvmedia@gmail.com" className="text-white font-bold hover:text-[#EBC325] transition-colors font-mono text-sm md:text-base">
                        ogwatvmedia@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* RESPONSE WINDOW */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                      <Clock className="w-5 h-5 text-[#EBC325]" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325] mb-0.5">RESPONSE WINDOW</div>
                      <div className="text-white font-semibold text-sm md:text-base">Monday – Friday, 9:00 AM – 6:00 PM (GMT+1)</div>
                    </div>
                  </div>

                  {/* BASED IN */}
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                      <MapPin className="w-5 h-5 text-[#EBC325]" />
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325] mb-0.5">BASED IN</div>
                      <div className="text-white font-semibold text-sm md:text-base">Lagos, Nigeria (Collaborating Globally)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slogan */}
              <div className="mt-16 border-t border-white/10 pt-6 hidden lg:block">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#EBC325]" />
                  OGWA STUDIOS — ARTISTIC INTEGRITY FIRST.
                </span>
              </div>
            </div>
            
            {/* Interactive Form Panel */}
            <div className="lg:col-span-7 bg-[#0e0e0e] p-8 md:p-12 rounded-3xl border border-white/5 text-left">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-[#EBC325] focus:ring-1 focus:ring-[#EBC325] outline-none text-white transition-colors placeholder:text-gray-600 text-sm" 
                      placeholder="e.g. Samuel Ade" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325]">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-[#EBC325] focus:ring-1 focus:ring-[#EBC325] outline-none text-white transition-colors placeholder:text-gray-600 text-sm" 
                      placeholder="e.g. samuel@example.com" 
                    />
                  </div>

                  {/* ORGANIZATION (OPTIONAL) */}
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325]">Organization (Optional)</label>
                    <input 
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-[#EBC325] focus:ring-1 focus:ring-[#EBC325] outline-none text-white transition-colors placeholder:text-gray-600 text-sm" 
                      placeholder="e.g. Non-profit / Venture Corp" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325]">Project / Subject</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-[#EBC325] focus:ring-1 focus:ring-[#EBC325] outline-none text-white transition-colors text-sm"
                    >
                      <option value="Partnership / Collaboration" className="bg-neutral-900 text-white">Partnership / Collaboration</option>
                      <option value="Foundation Initiatives" className="bg-neutral-900 text-white">Foundation Initiatives</option>
                      <option value="Production / Creative Direction" className="bg-neutral-900 text-white">Production / Creative Direction</option>
                      <option value="General Query" className="bg-neutral-900 text-white">General Query</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[9px] font-bold uppercase tracking-widest text-[#EBC325]">Tell us about your idea</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-black/40 border border-white/10 rounded-xl p-4 focus:border-[#EBC325] focus:ring-1 focus:ring-[#EBC325] outline-none text-white transition-colors placeholder:text-gray-600 text-sm" 
                      placeholder="Describe the nature of your project or brief description here..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#EBC325]/15 rounded-full flex items-center justify-center mx-auto text-[#EBC325]">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-white tracking-tight">Inquiry Logged</h3>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed mt-3">
                      Thank you for reaching out, <span className="font-semibold text-white">{formData.name}</span>. A representative from OGWA Studios' collaborative desk will correspond via <span className="font-mono text-[#EBC325] font-semibold">{formData.email}</span> as soon as possible.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', subject: 'Partnership / Collaboration', message: '' });
                    }}
                    className="btn-outline font-mono text-[9px] uppercase font-bold tracking-widest py-2 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
