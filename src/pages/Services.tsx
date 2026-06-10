import { PageTransition } from '../components/PageTransition';
import { Film, Sparkles, Compass, MessageSquare, Mic, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    num: "01",
    cat: "FILM & TV PRODUCTION",
    desc: "From concept to screen, we produce feature films, television projects, documentaries, branded films, and short-form content. Our services span development, production, post-production, sound design, color grading, soundtrack creation, voice recording, and final delivery.",
    icon: <Film className="w-6 h-6 text-[#EBC325]" />
  },
  {
    num: "02",
    cat: "STORY DEVELOPMENT & NARRATIVE STRATEGY",
    desc: "We help individuals, organizations, brands, and creators uncover, refine, and communicate their stories. From screenplays and pitch decks to founder narratives, creative branding, and campaign concepts, we transform ideas into compelling storytelling frameworks.",
    icon: <Sparkles className="w-6 h-6 text-[#EBC325]" />
  },
  {
    num: "03",
    cat: "CREATIVE DIRECTION",
    desc: "We develop creative visions that guide projects from concept to execution. Whether for films, television commercials, music videos, product campaigns, corporate photography, live experiences, or digital content, we shape the artistic language that drives audience connection.",
    icon: <Compass className="w-6 h-6 text-[#EBC325]" />
  },
  {
    num: "04",
    cat: "BRANDED CONTENT & COMMUNICATIONS",
    desc: "We create narrative-driven content that helps brands communicate purpose, build trust, and connect authentically with audiences. Through films, digital campaigns, documentaries, and branded storytelling, we turn messages into meaningful experiences.",
    icon: <MessageSquare className="w-6 h-6 text-[#EBC325]" />
  },
  {
    num: "05",
    cat: "AUDIO & VOICE PRODUCTION",
    desc: "From original film scores and soundtracks to jingles, podcasts, voice acting, and audio storytelling, we produce immersive sound experiences that strengthen narratives and elevate audience engagement.",
    icon: <Mic className="w-6 h-6 text-[#EBC325]" />
  },
  {
    num: "06",
    cat: "CULTURAL IMPACT CAMPAIGNS",
    desc: "We partner with organizations, institutions, and brands to design campaigns that foster awareness, representation, and community engagement. Through storytelling, media activations, community gatherings, screenings, and advocacy-driven content, we help meaningful conversations reach the people who matter most.",
    icon: <Globe2 className="w-6 h-6 text-[#EBC325]" />
  }
];

export const Services = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Cinematic ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-24 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">EXPERTISE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-white mb-8 leading-none">
              Services & <br />
              <span className="font-light text-[#EBC325]">Capabilities.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
              We offer a dedicated suite of storytelling and master-class production services built to convey authentic culture and emotionally resonate with audiences global and local.
            </p>
          </div>

          {/* Service Listing Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {servicesList.map((service, idx) => (
              <div 
                key={idx}
                className="group bg-[#0e0e0e] border border-white/5 p-8 rounded-2xl hover:border-[#EBC325]/30 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-xs font-mono font-bold text-[#EBC325]/60 group-hover:text-[#EBC325] transition-colors">
                      {service.num}
                    </span>
                    <span className="w-8 h-[1px] bg-white/10 group-hover:bg-[#EBC325]/30 transition-colors"></span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#EBC325] transition-colors leading-snug">
                    {service.cat}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-white/5">
                  <Link 
                    to="/contact" 
                    className="text-[10px] uppercase tracking-widest font-bold text-[#EBC325]/80 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    Enquire for details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Connect Area */}
          <div className="bg-[#0e0e0e] rounded-3xl p-12 text-center border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#EBC325]/10 to-transparent blur-xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-4">Have a story waiting to be told?</h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8">
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
