import { PageTransition } from '../components/PageTransition';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Partnership / Collaboration',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="py-32 bg-surface min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Direct Information Desk */}
            <div className="text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">COMMUNICATION UNIT</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
                  Let's <br /> <span className="font-serif italic font-light text-primary">Collaborate.</span>
                </h2>
                
                <p className="text-lg text-slate mb-12 max-w-md">
                  Have a socially conscious story to explore? Get in touch with our creative management or advocacy division today.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Direct Outreach</div>
                      <a href="mailto:ogwatvmedia@gmail.com" className="text-navy font-bold hover:text-primary transition-colors font-mono">
                        ogwatvmedia@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Response Window</div>
                      <div className="text-navy font-bold">Mon - Fri, 9am - 6pm (GMT+1)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xs">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Creative Hubs</div>
                      <div className="text-navy font-bold">Lagos / London / Remote HQ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slogan */}
              <div className="mt-16 border-t border-gray-200/60 pt-6 hidden lg:block">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  OGWA STUDIOS — ARTISTIC INTEGRITY FIRST.
                </span>
              </div>
            </div>
            
            {/* Interactive Form Panel */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xs border border-gray-100 text-left">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-surface border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" 
                      placeholder="e.g. Samuel Ade" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-surface border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" 
                      placeholder="e.g. samuel@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject Space</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-surface border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
                    >
                      <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                      <option value="Foundation Grants">Foundation Grants</option>
                      <option value="Production Pitching">Production Pitching</option>
                      <option value="General Query">General Query</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Brief / Narrative Proposal</label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-surface border border-gray-100 rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none" 
                      placeholder="Describe the nature of the project & narrative objective..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Proposal</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto text-primary">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold uppercase text-navy">Proposal Logged</h3>
                    <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed mt-2Grid">
                      Thank you for reaching out, <span className="font-semibold text-navy">{formData.name}</span>. A representative from OGWA Studios' collaborative desk will correspond via <span className="font-mono text-primary font-semibold">{formData.email}</span> within 24–48 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Partnership / Collaboration', message: '' });
                    }}
                    className="btn-outline font-mono text-[10px] uppercase font-bold tracking-widest py-2 px-6"
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
