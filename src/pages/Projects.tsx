import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Play, Film, ExternalLink, Calendar, Layers, MapPin } from 'lucide-react';
import { useState } from 'react';

// Real project definitions provided by the user
const ogwaProjects = [
  {
    title: "The Sun’s Glory",
    category: "Feature Film / Social Impact",
    tag: "Social Impact Film",
    desc: "A bold film spotlighting albinism awareness, celebrating resilience, true identity, and authentic representation in our modern society.",
    image: "https://images.unsplash.com/photo-1492691523567-6170c3295db5?auto=format&fit=crop&q=80&w=1200",
    year: "2025",
    roles: ["Story Development", "Full TV Production", "Creative Direction"],
    impact: "Official Selection - Albinism Advocacy Film Fest"
  },
  {
    title: "A Rainbow for Christmas",
    category: "Short Narrative / Drama",
    tag: "Narrative Short",
    desc: "A gripping and beautiful story of identity, courage, and unconditional love, exploring systemic family frames and identity struggles.",
    image: "https://images.unsplash.com/photo-1542204172-5a3d76e7774e?auto=format&fit=crop&q=80&w=1200",
    year: "2024",
    roles: ["Directing", "Sound Design", "Casting"],
    impact: "Nollywood Visionary Short Award"
  },
  {
    title: "SYV Podcast",
    category: "Digital Series / Audio Experience",
    tag: "Pioneering Podcast",
    desc: "Nigeria’s pioneering podcast series focused entirely on albinism, history, narrative, and real human voices calling to redefine visual standards.",
    image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=1200",
    year: "2023 - Present",
    roles: ["Raw Sound Capture", "Branded Storytelling", "Cultural Campaigns"],
    impact: "Top 10 Cultural Society Podcasts in West Africa"
  },
];

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <PageTransition>
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-20 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">PORTFOLIO</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
              Featured <span className="font-bold font-serif italic text-primary">Works.</span>
            </h1>
            <p className="text-xl text-slate font-light leading-relaxed">
              We focus on emotionally powerful narratives that shift perspective, challenge norms, and represent authentic human existence.
            </p>
          </div>

          {/* Cinematic responsive video player showcase (Featured Project Showcase Trailer) */}
          <div className="mb-28">
            <div className="text-left mb-6">
              <h3 className="font-mono text-xs text-primary font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                ACTIVE CINEMA REEL
              </h3>
            </div>
            
            <div className="relative aspect-video w-full bg-navy rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {!activeVideo ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" 
                    alt="Active Showcase" 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent flex flex-col justify-between p-8 md:p-12 text-left">
                    <span className="bg-primary hover:bg-primary-hover self-start text-navy px-3 py-1 text-[9px] font-bold uppercase tracking-widest rounded transition-all">
                      Featured Spot
                    </span>
                    <div className="max-w-2xl">
                      <button 
                        onClick={() => setActiveVideo('the-suns-glory')}
                        className="w-16 h-16 bg-primary text-navy hover:scale-105 transition-all duration-300 rounded-full flex items-center justify-center mb-6 shadow-lg cursor-pointer"
                      >
                        <Play className="w-6 h-6 fill-navy ml-1" />
                      </button>
                      <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
                        Official Campaign Showcase: The Sun's Glory
                      </h2>
                      <p className="text-white/60 text-xs md:text-sm">
                        Behind the scenes and cinematic teaser for our advocacy production. (Click to play responsive showcase trailer).
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 w-full h-full bg-black">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/coYw-JDVujI?autoplay=1" 
                    title="Teaser Reel" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-4 py-2 rounded-full uppercase tracking-wider backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  >
                    Close Showcase
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Master Responsive Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left mb-20">
            {ogwaProjects.map((project, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between bg-surface rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/40 hover:shadow-xl transition-all p-6"
              >
                <div>
                  {/* Aspect Video Image Frame */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 rounded text-[8px] font-mono tracking-widest uppercase">
                      {project.tag}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">0{idx + 1} / {project.category}</span>
                    <span className="text-slate font-mono text-xs">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-navy mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  {/* Impact Capsule */}
                  {project.impact && (
                    <div className="bg-primary/10 text-navy font-mono text-[9px] font-bold tracking-wider rounded-md py-1.5 px-3 mb-6 inline-block">
                      ★ {project.impact}
                    </div>
                  )}
                </div>

                {/* Sub features list */}
                <div className="border-t border-gray-200/60 pt-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.roles.map((pill, pIdx) => (
                      <span 
                        key={pIdx}
                        className="bg-navy/5 text-navy font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wider"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Call to Action or Asset placeholder notes */}
          <div className="rounded-2xl bg-surface p-12 text-center border border-dashed border-gray-300 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-navy uppercase mb-3">Asset Library Folder Active</h4>
            <p className="text-xs text-slate max-w-xl mx-auto leading-relaxed">
              * The video links and photos pointing to Unsplash are high-definition preview constructs. Original video showreels and campaign images can be seamlessly substituted into the <code className="bg-navy/5 px-1 rounded font-mono text-primary font-semibold">assets/</code> folder to hot-swap background assets dynamically.
            </p>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
