import { PageTransition } from '../components/PageTransition';
import { Eye, Sparkles, HeartHandshake, Award, Flame, Calendar, BookOpen, Volume2 } from 'lucide-react';

const stats = [
  {
    num: "150k+",
    title: "Audience Reach",
    desc: "Across podcasts, screenings, broadcasts, and digital platforms."
  },
  {
    num: "33+",
    title: "Emerging Creatives Supported",
    desc: "Writers, filmmakers, and storytellers empowered through mentorship and development initiatives."
  },
  {
    num: "5",
    title: "Original Productions",
    desc: "Films, podcasts, and campaigns created to inspire conversation and representation."
  }
];

const timelineEvents = [
  {
    year: "2025",
    title: "THE SUN'S GLORY",
    subtitle: "International Albinism Awareness Day Campaign",
    desc: "Community screenings, media conversations, and advocacy engagements designed to promote visibility, representation, and public understanding of albinism.",
    color: "from-amber-500/20 to-amber-500/0"
  },
  {
    year: "2026",
    title: "ZOE",
    subtitle: "World Sickle Cell Day Activation",
    desc: "Private screenings and guided conversations bringing together film audiences, advocates, and individuals living with sickle cell to foster awareness and dialogue.",
    color: "from-red-500/20 to-red-500/0"
  },
  {
    year: "2024",
    title: "SYV PODCAST",
    subtitle: "Nigeria's Pioneering Albinism Podcast",
    desc: "A storytelling platform amplifying lived experiences, challenging misconceptions, and creating space for authentic conversations around albinism.",
    color: "from-blue-500/20 to-blue-500/0"
  },
  {
    year: "2025",
    title: "THE AUDACITY TO BE SEEN MASTERCLASS",
    subtitle: "Supporting Creative Development",
    desc: "Supporting emerging storytellers through mentorship, creative development, and opportunities to transform ideas into compelling narratives.",
    color: "from-emerald-500/20 to-emerald-500/0"
  }
];

export const Impact = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-24 right-0 w-[500px] h-[500px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* Header Area - Completely Plain & Balanced Typography */}
          <div className="max-w-4xl mb-20 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">STORIES INTO IMPACT</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light uppercase tracking-tighter text-white mb-8 leading-none">
              OUR CULTURAL & <span className="font-sans font-light text-[#EBC325]">SOCIAL IMPACT.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
              Every project we create is designed to go beyond viewership. Through advocacy campaigns, community engagement, educational initiatives, and cultural conversations, we transform storytelling into measurable impact.
            </p>
          </div>

          {/* Statistics Grid - Accurate Data */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-left">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-[#0e0e0e] border border-white/5 p-8 rounded-2xl flex flex-col justify-between hover:border-[#EBC325]/20 transition-all duration-300"
              >
                <div>
                  <span className="text-[#EBC325] font-mono text-[10px] font-bold tracking-[0.2em] mb-4 block">IMPACT INDEX 0{idx + 1}</span>
                  <div className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-3">
                    {stat.num}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-semibold text-white uppercase mb-2">{stat.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Real Timeline Activations & Productions */}
          <div className="border-t border-white/10 pt-20 mb-12">
            <div className="mb-14 text-left">
              <span className="text-[#EBC325] font-mono text-xs font-bold tracking-[0.2em] mb-3 block animate-pulse">RECORDED TIMELINE</span>
              <h2 className="text-3xl md:text-4xl font-sans uppercase font-light tracking-tighter text-white">
                IMPACT <span className="font-sans font-light text-[#EBC325]">ACTIVATIONS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {timelineEvents.map((event, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0e0e0e] border border-white/5 p-8 rounded-2xl hover:border-[#EBC325]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-mono font-bold text-[#EBC325] bg-[#EBC325]/10 px-3 py-1 rounded">
                        {event.year}
                      </span>
                      <span className="h-[1px] w-12 bg-white/10"></span>
                    </div>

                    <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
                      {event.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      {event.subtitle}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
