import { PageTransition } from '../components/PageTransition';
import { Play, Film, Calendar, Compass, Sparkles, Tv, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import zoeMoviePoster from '../assets/images/ZOE.JPG';
import rainbowChristmasPoster from '../assets/images/rfc.jpg';
import sunsglory from '../assets/images/sgs.jpg';
import svy from '../assets/images/svy.PNG';

// Live project parameters based directly on user's spec
const ogwaProjects = [
  {
    title: "THE SUN'S GLORY",
    category: "Social Impact Film",
    year: "2025",
    desc: "A film exploring identity, visibility, and the lived realities of people with albinism. Combines high-fidelity cinematography with advocacy to drive inclusion.",
    image: sunsglory,
    roles: ["Story Development", "Film Production", "Creative Direction"],
    videoId: "the-suns-glory"
  },
  {
    title: "A RAINBOW FOR CHRISTMAS",
    category: "Narrative Short",
    year: "2026",
    desc: "A story of identity, courage, family, and acceptance set against the backdrop of Christmas Eve.",
    image: rainbowChristmasPoster,
    roles: ["Story Development", "Directing", "Production"],
    videoId: "rainbow-christmas"
  },
  {
    title: "ZOE",
    category: "Social Impact Film",
    year: "2026",
    desc: "A film exploring the realities of living with sickle cell and the power of community, designed to catalyze dialogue and systemic support.",
    image: zoeMoviePoster,
    roles: ["Story Development", "Production", "Impact Campaign Design"],
    videoId: "zoe"
  },
  {
    title: "SYV PODCAST",
    category: "Podcast Series",
    year: "Ongoing",
    desc: "Nigeria's pioneering podcast dedicated to conversations around albinism, representation, identity, and lived experiences.",
    image: svy,
    roles: ["Audio Production", "Narrative Strategy", "Community Engagement"],
    videoId: "syv-podcast"
  }
];

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-24 left-0 w-96 h-96 bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-20 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">PORTFOLIO</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-white mb-8 leading-none">
              FEATURED <span className="font-light text-[#EBC325]">WORKS.</span>
            </h1>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-4">
              Stories that challenge perspectives, spark conversations, and leave a lasting impact.
            </p>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-2xl">
              From social impact films and narrative shorts to podcasts and cultural campaigns, our work is rooted in authentic storytelling and meaningful representation.
            </p>
          </div>

          {/* Interactive Player Frame */}
          <div className="mb-24">
            <div className="text-left mb-6">
              <h3 className="font-mono text-xs text-[#EBC325] font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EBC325] animate-ping"></span>
                ACTIVE CINEMATIC PREVIEW PORTAL
              </h3>
            </div>
            
            <div className="relative aspect-video w-full bg-neutral-950 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              {!activeVideo ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={zoeMoviePoster} 
                    alt="Zoe Campaign Teaser" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-between p-6 md:p-12 text-left">
                    <span className="bg-[#EBC325]/15 border border-[#EBC325]/40 self-start text-[#EBC325] px-3.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded">
                      Featured Teaser
                    </span>
                    <div className="max-w-2xl">
                      <button 
                        onClick={() => setActiveVideo('campaign-trailer')}
                        className="w-16 h-16 bg-[#EBC325] hover:bg-white text-black hover:scale-105 transition-all duration-300 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#EBC325]/10 cursor-pointer"
                        aria-label="Play showreel video"
                      >
                        <Play className="w-6 h-6 fill-black ml-1" />
                      </button>
                      <h2 className="text-xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                        Official Campaign Teaser — Zoe / Sickle Cell Day
                      </h2>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        Explore behind-the-scenes content or dynamic visual cuts. Press Play to review responsive movie mock wrapper.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/bkJ-jIy6bBk?si=m_cu-jtOwyWoXReP" 
                    title="Teaser Reel" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-6 right-6 bg-black/90 hover:bg-[#EBC325] hover:text-black hover:scale-95 text-[#EBC325] border border-[#EBC325]/30 font-mono text-[9px] px-4 py-2 rounded-full uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Core Responsive Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
            {ogwaProjects.map((project, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between bg-[#0e0e0e] rounded-2xl overflow-hidden border border-white/5 hover:border-[#EBC325]/30 hover:shadow-xl transition-all duration-300 p-6 md:p-8"
              >
                <div>
                  {/* Aspect Video Image Frame */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-neutral-950 mb-6 border border-white/5">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover brightness-100 opacity-100 transition-all duration-700 group-hover:scale-102"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-[#EBC325] border border-[#EBC325]/30 px-3 py-1 rounded text-[8px] font-mono tracking-widest uppercase">
                      {project.category}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-[#EBC325] uppercase tracking-[0.2em]">0{idx + 1} / {project.category}</span>
                    <span className="text-gray-500 font-mono text-xs">{project.year}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-[#EBC325] transition-colors leading-none">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                {/* Role tags list */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((tag, pIdx) => (
                      <span 
                        key={pIdx}
                        className="bg-white/5 text-gray-300 font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Quick instructions on Asset replacement 
          <div className="rounded-2xl bg-[#0e0e0e] p-8 text-center border border-dashed border-white/10 max-w-3xl mx-auto">
            <h4 className="text-sm font-bold text-white uppercase mb-3">Asset Library Folder Structure</h4>
            <p className="text-xs text-gray-500 max-w-xl mx-auto leading-relaxed">
              * Note to Prosper & OGWA Team: All video representations and Unsplash placeholder pictures are high-definition responsive blocks. You can override these structures later with files inside the local <code className="bg-white/5 px-1 rounded font-mono text-[#EBC325] font-semibold">assets/</code> folder to hot-swap assets dynamically.
            </p>
          </div>*/}

        </div>
      </section>
    </PageTransition>
  );
};
