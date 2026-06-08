import { PageTransition } from '../components/PageTransition';
import { Film, Sparkles, Compass, Video, Mic, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Film className="w-8 h-8" />,
    title: "Film & TV Production",
    desc: "End-to-end cinematic production for feature films, episodic television, and artistic shorts. From screenwriting to directing and final color correction, we deliver high-caliber cinema."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Story Development",
    desc: "Fleshing out raw human insights, cultural histories, and social values into powerful narrative frameworks. We collaborate with writers to develop pitch-ready screenplays."
  },
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Creative Direction",
    desc: "Establishing distinct artistic tones, frames, visual motifs, and aesthetic boundaries. We work closely with stakeholders to ensure raw visual assets align with project vision."
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Branded Storytelling",
    desc: "Designing compelling, narrative-driven promotional films and content. We help forward-thinking commercial brands communicate their social mission organically and beautifully."
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Cultural Campaigns",
    desc: "Mobilizing public awareness, promoting diversity initiatives, and advocating for representation through custom media campaigns, live event screenings, and digital series."
  }
];

export const Services = () => {
  return (
    <PageTransition>
      <section className="py-32 bg-surface min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-24 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">CAPABILITIES</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
              Services & <br />
              <span className="font-bold font-serif italic text-primary">Capabilities.</span>
            </h1>
            <p className="text-xl text-slate font-light leading-relaxed">
              We offer a dedicated suite of storytelling and production tools built to convey authentic culture and emotionally resonate with audiences global and local.
            </p>
          </div>

          {/* Core Services Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 border-t border-gray-200/60 pt-16 mb-24">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="space-y-6 group bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary/40 transition-colors text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-primary font-mono text-xs font-bold">0{idx + 1} / {service.title.split(' ')[0].toUpperCase()}</span>
                    <div className="h-[1px] flex-1 bg-gray-200 group-hover:bg-primary transition-colors"></div>
                  </div>
                  
                  <div className="w-12 h-12 bg-primary/10 rounded-xl text-primary flex items-center justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary group-hover:text-navy transition-colors flex items-center gap-1">
                    Enquire Component <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Link CTA */}
          <div className="bg-navy rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Have a story waiting to be told?</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Let's sit down, outline your objective narratives, map your target community audiences, and construct a classic, gripping work of art.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
