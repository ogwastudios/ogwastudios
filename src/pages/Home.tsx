import { motion } from 'motion/react';
import { Play, ArrowRight, Video, Sparkles, Film, Compass, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import React, { useState } from 'react';

export const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 bg-surface">
        {/* Hero Section */}
        <div className="container mx-auto px-6 max-w-6xl z-10 text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-[1px] w-8 bg-primary"></span>
            <span className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.4em] italic">
              OGWA Studios
            </span>
            <span className="h-[1px] w-8 bg-primary"></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-[7.5rem] font-light leading-[1] text-navy mb-10 tracking-tight"
          >
            Authentic stories, <br />
            <span className="font-serif italic font-light text-primary">boldly told.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We create emotionally powerful films, series, and media that challenge narratives, amplify underrepresented voices, and leave lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/projects" className="btn-primary flex items-center gap-3">
              Watch Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Partner With Us
            </Link>
          </motion.div>
        </div>

        {/* Video Placeholder Component */}
        <div className="container mx-auto px-6 max-w-5xl mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative aspect-video w-full bg-navy rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            {!isPlaying ? (
              <div className="absolute inset-0 w-full h-full">
                {/* Visual Placeholder image */}
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
                  alt="Showreel Thumbnail" 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Premium Dark Overlay & Play Buttons */}
                <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/30 to-transparent flex flex-col justify-between p-8 md:p-12">
                  <div className="flex justify-between items-start">
                    <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest rounded">
                      Featured Showreel
                    </span>
                    <span className="text-white/60 font-mono text-xs">2:15</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-primary hover:bg-primary-hover text-navy rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl shadow-primary/30 cursor-pointer"
                    >
                      <Play className="w-8 h-8 fill-navy ml-1 text-navy" />
                    </button>
                    <p className="text-white font-display uppercase tracking-widest text-xs mt-4 font-bold">
                      Play Launch Film
                    </p>
                  </div>

                  <div className="text-left">
                    <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-tight">
                      OGWA Studios — Re-defining African Cinema
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm mt-1">
                      A visual journey highlighting stories designed to shift culture and drive impact.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
                {/* Embedded Responsive Map/Media representation - we use a highly stylized cinematic loop or custom responsive video iframe simulation */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" 
                  title="OGWA Studios Showcase" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md transition-all active:scale-95"
                >
                  Exit Preview
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Structured "What We Do" Grid */}
        <div className="container mx-auto px-6 max-w-6xl mb-28">
          <div className="border-t border-gray-200 pt-16 mb-16 text-center md:text-left">
            <span className="text-primary font-mono text-xs font-bold tracking-[0.2em] mb-4 block">SERVICES</span>
            <h2 className="text-4xl md:text-6xl uppercase font-light tracking-tighter">
              What <span className="font-bold">We Do</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { title: "Film & TV Production", icon: <Film className="w-6 h-6" />, desc: "High-caliber cinema from screenwriting to direct final master cut." },
              { title: "Story Development", icon: <Sparkles className="w-6 h-6" />, desc: "Fleshing out raw insights and oral histories into narrative frameworks." },
              { title: "Creative Direction", icon: <Compass className="w-6 h-6" />, desc: "Establishing deep artistic tones, frames, and styling boundaries for screen." },
              { title: "Branded Storytelling", icon: <Video className="w-6 h-6" />, desc: "Designing compelling stories for forward thinking socially-aware brands." },
              { title: "Cultural Campaigns", icon: <Mic className="w-6 h-6" />, desc: "Mobilizing public awareness and social impacts through tailored media releases." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary/40 transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-navy transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-bold tracking-tight text-navy uppercase text-sm mb-3">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-primary font-mono text-[10px] font-bold mt-6">0{idx + 1}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Home page preview for Featured Projects */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="border-t border-gray-200 pt-16 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="text-left">
              <span className="text-primary font-mono text-xs font-bold tracking-[0.2em] mb-4 block">SELECTIONS</span>
              <h2 className="text-4xl md:text-6xl uppercase font-light tracking-tighter text-navy">
                Featured <span className="font-bold">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
              Browse Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Sun’s Glory",
                desc: "A bold film spotlighting albinism awareness, celebrating resilience and representation.",
                image: "https://images.unsplash.com/photo-1492691523567-6170c3295db5?auto=format&fit=crop&q=80&w=800",
                tag: "Feature Film"
              },
              {
                title: "A Rainbow for Christmas",
                desc: "A gripping and beautiful story of identity, courage, and unconditional love.",
                image: "https://images.unsplash.com/photo-1542204172-5a3d76e7774e?auto=format&fit=crop&q=80&w=800",
                tag: "Short Narrative"
              },
              {
                title: "SYV Podcast",
                desc: "Nigeria’s pioneering podcast series focused entirely on albinism, history, and raw narrative.",
                image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800",
                tag: "Digital Podcast"
              }
            ].map((p, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs p-4 flex flex-col gap-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{p.tag}</span>
                  <h3 className="text-lg font-bold text-navy uppercase tracking-tight mt-1 mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </PageTransition>
  );
};
