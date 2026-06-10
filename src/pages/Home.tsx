import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import React from 'react';
import ogwaHomeImage from '../assets/images/ogwa_home_mage.jpg';
import rainbowChristmasPoster from '../assets/images/rfc.jpg';
import sunsglory from '../assets/images/sgs.jpg';

export const Home = () => {
  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-20 overflow-hidden bg-black">
        {/* Cinematic Backdrop Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial from-[#EBC325]/5 via-transparent to-transparent pointer-events-none"></div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 max-w-6xl z-10 text-center mb-16 pt-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-[1px] w-8 bg-[#EBC325]/40"></span>
            <span className="text-[10px] md:text-xs font-bold text-[#EBC325] uppercase tracking-[0.4em]">
              The future of African storytelling
            </span>
            <span className="h-[1px] w-8 bg-[#EBC325]/40"></span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-[7.5rem] font-light leading-[1.05] text-white mb-8 tracking-tighter"
          >
            Authentic stories,<br />
            <span className="font-light text-[#EBC325]">boldly told.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Crafting powerful stories that challenge perspectives, celebrate diversity, and leave lasting impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/projects" className="btn-primary flex items-center gap-3">
              Watch Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="btn-outline">
              More on About
            </Link>
          </motion.div>
        </div>

        {/* Featured Film Frame Placeholder using home image */}
        <div className="container mx-auto px-6 max-w-5xl mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative aspect-video w-full bg-neutral-950 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 group"
          >
            <div className="absolute inset-0 w-full h-full">
              {/* Visual Placeholder for high quality film imagery */}
              <img 
                src={ogwaHomeImage} 
                alt="OGWA Studios Team Meeting" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-70 transition-transform duration-750 group-hover:scale-[1.01]"
              />
              
              {/* Vintage dark film screening layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30 flex flex-col justify-between p-6 md:p-10">
                <div className="flex justify-between items-start">
                  <span className="bg-[#EBC325]/10 text-[#EBC325] border border-[#EBC325]/30 px-3 py-1 font-mono text-[9px] uppercase tracking-widest rounded-xs">
                    STUDIO SHOWCASE
                  </span>
                  <span className="text-[#EBC325] font-mono text-xs tracking-widest bg-black/60 px-2 py-1 rounded-sm">OGWA STUDIOS</span>
                </div>

                <div className="text-left max-w-xl mt-auto">
                  <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-tight">
                    OGWA Studios — Storytelling Redefined  
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mt-1 leading-relaxed">
                    Inside the creative domain of Original Gripping Works of Art. Empowering voices that shift cultures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selected Featured Works grid teaser */}
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="border-t border-white/10 pt-16 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-left">
            <div>
              <span className="text-[#EBC325] font-mono text-xs font-bold tracking-[0.2em] mb-3 block">CINEMATIC PREVIEWS</span>
              <h2 className="text-3xl md:text-5xl uppercase font-light tracking-tighter text-white">
                Stories <span className="font-bold text-[#EBC325]">In Focus</span>
              </h2>
            </div>
            <Link to="/projects" className="btn-outline inline-flex items-center gap-2 py-3 px-6 text-xs">
              View All Works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Sun's Glory",
                tag: "Social Impact Film",
                desc: "A bold film exploring identity, visibility, and the lived realities of people with albinism.",
                image: sunsglory
              },
              {
                title: "A Rainbow for Christmas",
                tag: "Narrative Short",
                desc: "A story of identity, courage, family, and acceptance set against the backdrop of Christmas Eve.",
                image: rainbowChristmasPoster
              },
              {
                title: "SYV Podcast",
                tag: "Ongoing Audio Series",
                desc: "Nigeria's pioneering podcast dedicated to conversations around representation, identity, and lived experiences.",
                image: "https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&q=80&w=800"
              }
            ].map((work, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a]/80 p-4 hover:border-[#EBC325]/30 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-950 mb-4 border border-white/5">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-[#EBC325] uppercase tracking-widest">{work.tag}</span>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#EBC325] transition-colors">{work.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed pt-1">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </PageTransition>
  );
};
