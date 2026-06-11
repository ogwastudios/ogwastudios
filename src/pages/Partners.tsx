import { PageTransition } from '../components/PageTransition';
import { ShieldCheck, Mail, ArrowRight, Sparkles, Compass, Target, Smile, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const partnersGains = [
  {
    title: "CULTURAL RELEVANCE",
    desc: "Connect with audiences through authentic stories rooted in lived experiences, community realities, and contemporary culture.",
    icon: <Globe className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "AUTHENTIC BRAND ALIGNMENT",
    desc: "We integrate partners into stories and campaigns in ways that feel natural, credible, and purpose-driven—never forced or performative.",
    icon: <Target className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "MULTI-CHANNEL ENGAGEMENT",
    desc: "Reach audiences across film, digital content, podcasts, community activations, screenings, conversations, and advocacy-led campaigns.",
    icon: <Compass className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "IMPACT BEYOND THE SCREEN",
    desc: "Our projects are designed not only to be watched, but to inspire dialogue, awareness, representation, and measurable community engagement.",
    icon: <Sparkles className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "STRATEGIC BRAND INTEGRATION",
    desc: "We craft thoughtful sponsorship and partnership opportunities that strengthen audience trust while advancing shared objectives.",
    icon: <Smile className="w-6 h-6 text-[#EBC325]" />
  }
];


import theNollyWoodReporter from '../assets/images/thwr-logo.jpeg';
import bc from '../assets/images/bc-logo.png';
import cc from '../assets/images/cc-logo.png';
import cep from '../assets/images/cep-logo.png';
const currentPartners = [
  {
    name: "CREATIVE ALLIANCE",
    logo: theNollyWoodReporter, 
    url: "#" 
  },
  {
    name: "ULANZI",
    logo: bc, 
    url: "#"
  },
  {
    name: "cc",
    logo: cc, 
    url: "#"
  },
  {
    name: "Mu Oga Doctor",
    logo: cep, 
    url: "#"
  },
  {
    name: "Aforevo",
    logo: "", 
    url: "#"
  }
];

export const Partners = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Cinematic glow background */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 text-left">
          
          {/* Header Area using complete plane sans-serif display headings */}
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">CO-CREATION & ALLIANCES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light uppercase tracking-tighter text-white mb-8 leading-none">
              LET'S BUILD <span className="font-sans font-light text-[#EBC325]">STORIES THAT MATTER.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
              We collaborate with brands, organizations, institutions, and cultural leaders to create films, campaigns, and experiences that spark conversations, strengthen communities, and drive meaningful impact.
            </p>
          </div>

          {/* WHAT PARTNERS GAIN section */}
          <div className="border-t border-white/10 pt-16 mb-24">
            <h2 className="text-2xl md:text-3xl font-sans font-light uppercase tracking-tight text-white mb-12 flex items-center gap-2">
              <span>WHAT PARTNERS</span>
              <span className="font-sans font-light text-[#EBC325]">GAIN</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersGains.map((value, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0e0e0e] p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#EBC325]/30 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">
                      {value.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CURRENT PARTNERS LOGO SECTION */}
          <div className="border-t border-white/10 pt-16 mb-24">
            <div className="mb-12">
              <span className="text-[#EBC325] font-mono text-xs font-bold tracking-[0.2em] mb-3 block">ESTABLISHED ALLIANCES</span>
              <h2 className="text-2xl md:text-3xl font-sans font-light uppercase tracking-tight text-white flex items-center gap-2">
                <span>OUR CURRENT</span>
                <span className="font-sans font-light text-[#EBC325]">PARTNERS</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
              {currentPartners.map((partner, idx) => (
                <a
                  key={idx}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border rounded-xl overflow-hidden flex flex-col items-center justify-center aspect-[4/3] w-full transition-all duration-300 group relative ${
                    partner.logo
                      ? "bg-white border-neutral-200 p-6 md:p-8"
                      : "bg-[#0e0e0e] border-white/5 hover:border-[#EBC325]/30"
                  }`}
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      {/* Straight, high contrast, full color indicators with yellow-amber gradient badge */}
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-[#EBC325]/30 flex items-center justify-center mb-3.5 border border-[#EBC325]/20 shadow-[0_2px_10px_rgba(235,195,37,0.1)]">
                        <span className="text-[#EBC325] font-mono text-xs font-extrabold">
                          0{idx + 1}
                        </span>
                      </div>
                      <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-normal">
                        {partner.name}
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* READY TO PARTNER? bento box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#0e0e0e] p-10 md:p-14 rounded-3xl border border-white/5 items-center mb-16">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold text-[#EBC325] uppercase tracking-widest mb-3 block">COLLABORATIVE INTENT</span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-6">
                READY TO PARTNER?
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 max-w-xl">
                Whether you're a global brand, nonprofit organization, government institution, media platform, or advocacy group, we can help design storytelling initiatives that connect purpose with people.
              </p>
              
              <div className="space-y-4">
                {[
                  "Transparent partnership agreements",
                  "Customized collaboration frameworks",
                  "Impact-focused reporting and evaluation"
                ].map((item, keyIdx) => (
                  <div key={keyIdx} className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#EBC325]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct contact info card */}
            <div className="lg:col-span-5 bg-black/40 p-8 rounded-2xl border border-white/10 text-center">
              <Mail className="w-12 h-12 text-[#EBC325] mx-auto mb-4" />
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#EBC325] mb-2">DIRECT OUTREACH</h4>
              <p className="text-xs text-gray-400 mb-6 font-mono font-bold selection:bg-[#EBC325] selection:text-black">
                ogwatvmedia@gmail.com
              </p>
              
              <Link 
                to="/contact"
                className="btn-primary block w-full py-4 text-center text-xs font-bold uppercase tracking-wider"
              >
                LET'S COLLABORATE
              </Link>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
