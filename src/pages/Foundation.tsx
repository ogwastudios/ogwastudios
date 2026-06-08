import { PageTransition } from '../components/PageTransition';
import { Globe, Heart, Gift, BookOpen, ArrowRight } from 'lucide-react';

export const Foundation = () => {
  return (
    <PageTransition>
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl text-left">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">PHILANTHROPY & SYSTEM IMPACT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
              The OGWA <br />
              <span className="font-bold font-serif italic text-primary">Foundation.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate font-light leading-relaxed">
              Established on the belief that cinematic storytelling is a powerful tool to drive inclusive representation, empower communities, and combat myths and prejudice.
            </p>
          </div>

          {/* Core Vision Quote Indicator */}
          <div className="border-l-4 border-primary pl-8 py-4 mb-20 max-w-4xl bg-surface/40 pr-6 rounded-r-xl">
            <p className="text-xl text-navy font-semibold font-serif italic leading-relaxed">
              "We provide physical/digital platforms, technical equipment, and professional access to empower individuals at the margins of society to lead their own stories."
            </p>
          </div>

          {/* Pillars of Action Grid */}
          <div className="mb-24">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-navy mb-12 flex items-center gap-2">
              <span>Our Frameworks of Support</span>
              <span className="h-[1px] flex-1 bg-gray-200"></span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Advocacy & Awareness",
                  desc: "Partnering with global organizations to design films, campaigns, and media that dismantle negative stigmas surrounding albinism and bodily differences.",
                  icon: <Heart className="w-6 h-6 text-primary" />
                },
                {
                  title: "Equipment & Media Grants",
                  desc: "Providing camera rigs, sound gear, and active studio spaces to grassroots documentary and podcast makers across the African continent.",
                  icon: <Gift className="w-6 h-6 text-primary" />
                },
                {
                  title: "Hands-on Mentorship",
                  desc: "Connecting local, emerging and underrepresented screenwriters and TV content creators with industry mentors to bring their projects to life.",
                  icon: <BookOpen className="w-6 h-6 text-primary" />
                }
              ].map((p, idx) => (
                <div key={idx} className="bg-surface p-8 rounded-2xl border border-gray-100 hover:border-primary/44 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-xs flex items-center justify-center mb-6">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy uppercase tracking-tight mb-3">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest font-mono">Pillar 0{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Card */}
          <div className="bg-surface p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-navy mb-2">Want to partner with the Foundation?</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We work directly with Non-Governmental Organizations (NGOs), inclusive development frameworks, and private contributors to expand media resources. Contact us directly at <span className="font-semibold text-primary">ogwatvmedia@gmail.com</span> to get involved.
              </p>
            </div>
            <a href="mailto:ogwatvmedia@gmail.com" className="btn-primary shrink-0 inline-flex items-center gap-2">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
