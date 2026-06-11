import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Eye, Target, Sparkles, Heart, Users, Compass } from 'lucide-react';

export const About = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-20 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">ABOUT OUR STUDIO</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-light uppercase tracking-tighter text-white mb-8 leading-none"
            >
              We don’t just tell stories.<br />
              <span className="font-light text-[#EBC325]">We tell the ones that matter.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-6"
            >
              OGWA Studios (<span className="font-bold text-white">Original Gripping Works of Art</span>) is a storytelling studio committed to creating authentic, emotionally charged, and socially impactful content across Africa and the world.
            </motion.p>
          </div>

          {/* Central Body split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
            <div className="space-y-6 text-left text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Founded on the belief that stories can shift culture, OGWA exists to amplify voices that are often unheard and explore narratives that challenge norms, spark conversations, and inspire change.
              </p>
              <p>
                From classic cinema to digital formats, our projects represent lived contemporary cultures with truth, nuance, and objective perspectives. We provide physical/digital platforms, equipment, and access for individuals ready to lead their own stories.
              </p>
            </div>
            
            {/* <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="OGWA Studio Work" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-105 contrast-105" />
              <div className="absolute inset-0 "></div>
            </div>
          </div> */}

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
              alt="OGWA Studio Work" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover brightness-95 contrast-105 transition-all duration-500 group-hover:brightness-110 group-hover:scale-105"
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

          {/* Core Pillars: Guided by Artistic Integrity */}
          <div className="border-t border-white/10 pt-20 mb-20">
            <div className="mb-14 text-left">
              <span className="text-[#EBC325] font-mono text-xs font-bold tracking-[0.2em] mb-3 block">VALUES & PHILOSOPHY</span>
              <h2 className="text-3xl md:text-5xl uppercase font-light tracking-tighter text-white">
                GUIDED BY <span className="font-bold text-[#EBC325]">ARTISTIC INTEGRITY</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { 
                  title: "EMPOWERMENT", 
                  desc: "We create physical and digital platforms that provide access, resources, and opportunities for emerging and underrepresented voices to share their stories and reach wider audiences.", 
                  icon: <Users className="w-6 h-6 text-[#EBC325]" /> 
                },
                { 
                  title: "AUTHENTIC REPRESENTATION", 
                  desc: "We champion honesty in casting, language, tone, and cultural expression, ensuring every story is told with respect, nuance, and authenticity.", 
                  icon: <Heart className="w-6 h-6 text-[#EBC325]" /> 
                },
                { 
                  title: "ARTISTIC INNOVATION", 
                  desc: "We embrace bold creative exploration, challenging conventional production approaches and pushing the boundaries of storytelling across diverse artistic mediums.", 
                  icon: <Sparkles className="w-6 h-6 text-[#EBC325]" /> 
                }
              ].map((val, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0e0e0e] border border-white/5 p-8 rounded-2xl hover:border-[#EBC325]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBC325]/10 flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vision & Mission bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-[#0e0e0e] border border-white/5 p-10 rounded-2xl">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-5 h-5 text-[#EBC325]" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Our Vision</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                To redefine African storytelling through socially impactful and inclusive cinema that connects generations globally.
              </p>
            </div>

            <div className="bg-[#0e0e0e] border border-white/5 p-10 rounded-2xl">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-5 h-5 text-[#EBC325]" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white mb-2">Our Mission</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                To create powerful stories that reflect truth, drive representation, and inspire meaningful cultural change.
              </p>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
