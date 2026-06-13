import { PageTransition } from '../components/PageTransition';
import { BookOpen, Users, Award, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import foundationImg from '../assets/images/foundation.JPG';
const impactFramework = [
  {
    title: "ADVOCACY & AWARENESS",
    desc: "We develop films, campaigns, and educational media that challenge harmful stereotypes, amplify underrepresented voices, and promote greater understanding around issues affecting marginalized communities.",
    icon: <ShieldAlert className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "COMMUNITY ENGAGEMENT",
    desc: "We bring stories directly to the people through screenings, conversations, workshops, community gatherings, and grassroots activations designed to foster dialogue and collective action.",
    icon: <Users className="w-6 h-6 text-[#EBC325]" />
  },
  {
    title: "IMPACT STORYTELLING",
    desc: "We collaborate with filmmakers, advocates, organizations, and cultural leaders to create storytelling initiatives that inspire awareness, strengthen representation, and drive measurable social impact.",
    icon: <BookOpen className="w-6 h-6 text-[#EBC325]" />
  }
];

export const Foundation = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          {/* Header Area using custom plain display sans-serif typography */}
          <div className="max-w-4xl mb-16 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">NON-PROFIT INITIATIVE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light uppercase tracking-tighter text-white mb-8 leading-none">
              THE <span className="font-sans font-light text-[#EBC325]">OGWA FOUNDATION.</span>
            </h1>
          </div>

          {/* Central Philosophy Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center text-left">
            <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
              <p className="border-l-2 border-[#EBC325] pl-6 py-1 text-base text-white font-normal">
                Founded on the belief that storytelling can move culture, challenge prejudice, and inspire meaningful action, the OGWA Foundation uses film, media, and community engagement to advance representation, awareness, and social impact.
              </p>
              <p>
                We do not simply create stories. We build impact-driven campaigns that connect audiences to real conversations, real communities, and real change.
              </p>
            </div>
            
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0e0e0e] border border-white/5 group">
              <img 
                src={foundationImg}
                alt="OGWA Foundation Community screening" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-100 opacity-100 transition-all duration-700 group-hover:scale-102"              
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Our Impact Framework */}
          <div className="border-t border-white/10 pt-20 mb-24">
            <div className="mb-14 text-left">
              <span className="text-[#EBC325] font-mono text-xs font-bold tracking-[0.2em] mb-3 block">OPERATING STANDARD</span>
              <h2 className="text-3xl md:text-4xl font-sans uppercase font-light tracking-tighter text-white">
                OUR IMPACT <span className="font-sans font-light text-[#EBC325]">FRAMEWORK</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {impactFramework.map((framework, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0e0e0e] border border-white/5 p-8 rounded-2xl hover:border-[#EBC325]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#EBC325]/10 rounded-xl flex items-center justify-center mb-6">
                    {framework.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4 group-hover:text-[#EBC325] transition-colors leading-tight">
                    {framework.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                    {framework.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Option to Call to Action Partner with the Foundation */}
          <div className="bg-[#0e0e0e] rounded-3xl p-10 md:p-14 text-left border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#EBC325]/10 to-transparent blur-xl pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl">
              <span className="text-xs font-mono font-bold text-[#EBC325] uppercase tracking-widest mb-3 block">BUILD ALLIANCE</span>
              <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-6">
                PARTNER WITH THE FOUNDATION
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8 text-gray-400 text-xs md:text-sm leading-relaxed">
                <p>
                  We work alongside NGOs, community organizations, institutions, brands, and philanthropic partners who believe in the power of storytelling as a catalyst for change.
                </p>
                <p>
                  Together, we create campaigns, experiences, and conversations that extend beyond the screen and into communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="btn-primary text-center px-8 py-4">
                  Partner with the Foundation
                </Link>
                <Link to="/contact" className="btn-outline text-center px-8 py-4">
                  E-mail Representative
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
