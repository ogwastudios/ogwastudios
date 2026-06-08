import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Users, Shield, Sparkles, Tv, Library, Trophy, Award, BarChart } from 'lucide-react';

// Highly detailed mock experience & educational milestone data
const experiencesData = [
  {
    year: "2025",
    title: "Albinism Advocacy Community Screenings",
    role: "Impact Distribution & Live Workshops",
    desc: "Brought 'The Sun’s Glory' directly to 12 rural and urban schools in Southern Nigeria. Handled post-screening Q&A sessions designed to reduce societal myths surrounding albinism and empower youth.",
    scope: "15 Schools / 2,500+ Students Impacted"
  },
  {
    year: "2024",
    title: "Nollywood Visionary Short Category",
    role: "A Rainbow for Christmas Release",
    desc: "Competed globally and took home honors for Creative Direction and Screenwriting. The film was praised by human rights observers for presenting safe and positive gender narrative representation.",
    scope: "Nominee & Winner - Best Inclusive Short"
  },
  {
    year: "2023",
    title: "SYV Podcast Syndication & Amplification",
    role: "Pioneering Audio Campaign",
    desc: "Syndicated Nigeria’s pioneering podcast on albinism across 4 local AM/FM stations. Supported recording platforms of over 30 unique raw stories of resilient advocates speaking out against bias.",
    scope: "30+ Raw Interviews / 100k Reach"
  },
  {
    year: "2022",
    title: "Inaugural Gripping Art Workshop",
    role: "Community Story Development Lab",
    desc: "Conducted fully sponsored creative modules for 15 aspiring screenwriters from underrepresented demographic groups, helping them refine concepts into film scripts ready for commercial production.",
    scope: "15 Writers Incubated / 4 Licensed Teas"
  }
];

export const Experiences = () => {
  return (
    <PageTransition>
      <section className="py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header Area */}
          <div className="max-w-3xl mb-24 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">STUDIO TRAJECTORY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tighter text-navy mb-8 leading-none">
              Movements Ignited <br />
              <span className="font-bold font-serif italic text-primary">Through Story.</span>
            </h1>
            <p className="text-xl text-slate font-light leading-relaxed">
              We look back at the milestone advocacy workshops, community gatherings, and award nominations that define our dedication to inclusive design.
            </p>
          </div>

          {/* Large Performance Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-28 text-left">
            {[
              { val: "22k+", label: "Active Listeners", desc: "Across Spotify, Apple, and local radio stations.", icon: <Library className="w-5 h-5 text-primary" /> },
              { val: "15+", label: "Incubated Writers", desc: "Empowered through our local development labs.", icon: <Users className="w-5 h-5 text-primary" /> },
              { val: "3", label: "Produced Works", desc: "High emotional impact films & podcast channels.", icon: <Tv className="w-5 h-5 text-primary" /> },
              { val: "2", label: "Industry Awards", desc: "Recognized internationally for representative arts.", icon: <Award className="w-5 h-5 text-primary" /> }
            ].map((stat, i) => (
              <div key={i} className="bg-surface p-8 rounded-2xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-white rounded-lg shadow-xs flex items-center justify-center mb-6">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-display font-black text-navy mb-2 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">{stat.label}</div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Flow Timeline of Experiences */}
          <div className="max-w-4xl mx-auto text-left">
            <h3 className="text-2xl font-bold uppercase text-navy mb-12 border-b border-gray-200 pb-4">
              Milestone & Impact Timeline
            </h3>

            <div className="relative border-l border-gray-200 pl-8 space-y-12">
              {experiencesData.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[45px] top-1.5 w-8 h-8 rounded-full bg-surface border-2 border-primary flex items-center justify-center font-mono text-xs font-bold text-navy shadow-sm">
                    {item.year.slice(-2)}
                  </div>

                  <div className="bg-surface rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-primary/45 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-primary tracking-widest block font-mono">
                          {item.role}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight text-navy">
                          {item.title}
                        </h4>
                      </div>
                      <span className="bg-navy text-white font-mono text-[9px] px-2.5 py-1 rounded-sm uppercase tracking-wider shrink-0 mt-2 md:mt-0">
                        {item.scope}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                      {item.desc}
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
