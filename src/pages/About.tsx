import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Leaf, Eye, Target, Sparkles, Film, Heart } from 'lucide-react';

export const About = () => {
  return (
    <PageTransition>
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-24 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">WHO WE ARE</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none"
            >
              We don’t just tell stories. <br />
              <span className="font-bold font-serif italic text-primary">We tell the ones that matter.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate font-light leading-relaxed mb-6"
            >
              OGWA Studios (<span className="font-bold text-navy">Original Gripping Works of Art</span>) is a storytelling studio committed to creating authentic, emotionally charged, and socially impactful content.
            </motion.p>
          </div>

          {/* Central Body Grid with split illustration or statistics layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-28">
            <div className="space-y-6 text-left">
              <p className="text-slate text-lg leading-relaxed">
                Founded on the belief that stories can shift culture, OGWA exists to amplify voices that are often unheard and explore narratives that challenge norms, spark conversations, and inspire change.
              </p>
              <p className="text-slate text-lg leading-relaxed">
                From film and television to digital media and live experiences, our work sits at the intersection of art, identity, and purpose. We focus intensely on ensuring our visual assets reflect authentic cultures and diverse life frames.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 group border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="OGWA Studio Work" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
          </div>

          {/* Vision & Mission Bento Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface p-12 rounded-3xl border border-gray-100 flex flex-col justify-between text-left"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight text-navy mb-4">Our Vision</h3>
                <p className="text-slate leading-relaxed text-lg">
                  To redefine African storytelling through socially impactful and inclusive cinema.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-surface p-12 rounded-3xl border border-gray-100 flex flex-col justify-between text-left"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-8">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tight text-navy mb-4">Our Mission</h3>
                <p className="text-slate leading-relaxed text-lg">
                  To create powerful stories that reflect truth, drive representation, and connect deeply with audiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Values / Pillars */}
          <div className="border-t border-gray-200 pt-20">
            <div className="mb-16 text-center md:text-left">
              <span className="text-primary font-mono text-xs font-bold tracking-[0.2em] mb-4 block">VALUES</span>
              <h2 className="text-4xl md:text-6xl uppercase font-light tracking-tighter">
                Guided by <span className="font-bold">Artistic Integrity</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              {[
                { title: "Empowerment", desc: "We provide physical/digital platforms, equipment, and access to stories of individuals pushing margins.", icon: <Leaf className="w-5 h-5 text-primary" /> },
                { title: "Authentic Representation", desc: "Honesty in casting, language, tone, and cultural nuances. We keep our perspectives objective and authentic.", icon: <Heart className="w-5 h-5 text-primary" /> },
                { title: "Artistic Innovation", desc: "Daring to step outside classical production patterns. Embracing experimental visual arts across multiple medias.", icon: <Sparkles className="w-5 h-5 text-primary" /> }
              ].map((val, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      {val.icon}
                    </div>
                    <h3 className="text-lg font-bold text-navy uppercase tracking-tight">{val.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
