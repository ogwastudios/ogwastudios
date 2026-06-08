import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Users, Globe, Film, Heart, Sparkles, Mail, ShieldCheck } from 'lucide-react';

export const Partners = () => {
  return (
    <PageTransition>
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl text-left">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">PARTNERS & COLLABORATIONS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
              Let’s build something <br />
              <span className="font-bold font-serif italic text-primary font-light">meaningful together.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate font-light leading-relaxed">
              We partner with brands, organizations, and creatives to develop impactful storytelling campaigns and productions that resonate with audiences and drive cultural relevance.
            </p>
          </div>

          {/* Value Bento Cards */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-navy mb-12 flex items-center gap-2">
              <span>What Partners Gain</span>
              <span className="h-[1px] flex-1 bg-gray-200"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Access to a Vibrant Creative Community",
                  desc: "Connect directly with our collective of visionaries, writers, and artists shaping modern cinematic culture.",
                  icon: <Users className="w-6 h-6 text-primary" />
                },
                {
                  title: "Authentic Storytelling Aligned with Impact",
                  desc: "We ensure brand alignments feel unforced and deeply authentic, bridging commercial interest with critical human representation.",
                  icon: <Heart className="w-6 h-6 text-primary" />
                },
                {
                  title: "Multi-Platform Visibility",
                  desc: "Expand your presence organically across multiple media modes including high-fidelity films, digital episodes, events, and pioneering podcasts.",
                  icon: <Globe className="w-6 h-6 text-primary" />
                },
                {
                  title: "Deep Brand Integration",
                  desc: "We craft integrated sponsorships that sit beautifully within meaningful narratives, enhancing customer affinity and trust.",
                  icon: <Sparkles className="w-6 h-6 text-primary" />
                }
              ].map((value, idx) => (
                <div 
                  key={idx}
                  className="bg-surface p-8 rounded-2xl border border-gray-100 flex gap-6 items-start hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy uppercase tracking-tight mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Collaborate CTA and Mail Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-surface p-12 md:p-16 rounded-3xl border border-gray-100">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter text-navy mb-4">
                Ready to Start?
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-8">
                Whether you represent an advocacy group, a production agency, or a global brand - we would love to design an experiential cinematic release or premium digital content that meets your vision.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-navy font-semibold">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Transparent collaborative agreements</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-navy font-semibold">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Impact-first metrics & reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate mb-1">Direct Outreach</h4>
              <p className="text-xs text-gray-400 mb-6 font-mono">ogwatvmedia@gmail.com</p>
              
              <a 
                href="mailto:ogwatvmedia@gmail.com"
                className="btn-primary inline-block w-full py-3.5 rounded-lg font-bold uppercase tracking-widest text-xs"
              >
                Let's Collaborate
              </a>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
