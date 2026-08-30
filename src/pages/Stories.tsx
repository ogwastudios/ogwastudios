import { PageTransition } from '../components/PageTransition';
import { ExternalLink, Clock, BookOpen } from 'lucide-react';

const storiesList = [
  {
    title: 'Ebube Nwani, Stephanie Ugbeye on Interpreting the Emotional Weight of "ZOE"',
    url: "https://thenollywoodreporter.com/news/zoe-cast-reflect-on-embodying-roles-and-challenges/",
    image: "https://thenollywoodreporter.com/wp-content/uploads/2026/06/2-1-4.webp",
    desc: "In an exclusive interview with The Nollywood Reporter, lead actors Ebube Nwani and Stephanie Ugbeye reflect on portraying emotionally demanding characters and bringing the realities of grief, love, and sickle cell disease to life in OGWA Studios' short film, ZOE.",
    readTime: "4 Min Read",
    tag: "THE NOLLYWOOD REPORTER"
  },
  {
    title: "Durotimi Okutagidi, Adeola Awodein to Star in HIV Awareness Film BI30",
    url: "https://tribuneonlineng.com/durotimi-okutagidi-adeola-awodein-to-star-in-hiv-awareness-film-bi30/",
    image: "https://tribuneonlineng.com/wp-content/uploads/2026/07/Durotimi-Okutagidi-Adeola-Awodein-to-star-in-HIV-awareness-film-BI30-860x502.jpg",
    desc: "Nigerian Tribune spotlights BI30, an upcoming OGWA Studios short film that explores HIV awareness through the story of a young man confronting the courage to know his status, starring Durotimi Okutagidi and Adeola Awodein.",
    readTime: "3 Min Read",
    tag: "NIGERIAN TRIBUNE"
  },
  {
    title: "ZOE : A Story of Faith, Loss, and the Questions We Don't Always Answer (Inside OGWA Studios' ZOE) – Rededit Magazine",
    url: "https://rededitmagazine.com/zoe-a-story-of-faith-loss-and-the-questions-we-dont-always-answer-inside-ogwa-studios-zoe/",
    image: "https://rededitmagazine.com/wp-content/uploads/2026/04/ZOE-Poster-.jpg",
    desc: "ZOE follows a 15-year-old girl with Sickle Cell Disease, exploring faith, grief, and family during Easter in a story by OGWA Studios.",
    readTime: "5 Min Read",
    tag: "REDEDIT MAGAZINE"
  },
  {
    title: "Beyond the Frame: How Prosper Light and OGWA Studios Are Redefining Beauty, Belonging, and Bold Storytelling in Nollywood - Ranks Magazine",
    url: "https://ranksafrica.com/beyond-the-frame-how-prosper-light-and-ogwa-studios-are-redefining-beauty-belonging-and-bold-storytelling-in-nollywood/",
    image: "https://ranksafrica.com/wp-content/uploads/2025/06/IMG_9668-scaled.jpg",
    desc: "At the Heart of Storytelling, There's Prosper Light. Prosper Light is more than a scriptwriter and director—they're one of the most intentional voices reshaping Nollywood today.",
    readTime: "7 Min Read",
    tag: "RANKS AFRICA"
  },
  {
    title: "How actor, Prosper Light, built his own table and invited others in - Businessday NG",
    url: "https://businessday.ng/bd-weekender/article/how-actor-prosper-light-built-his-own-table-and-invited-others-in/",
    image: "https://cdn.businessday.ng/wp-content/uploads/2025/06/hYlgOJxX-IMG_6117.jpeg",
    desc: "That was Prosper Light. Back then, he was showing up for the thrill of the moment, not knowing those simple performances would shape the...",
    readTime: "6 Min Read",
    tag: "BUSINESSDAY"
  }
];

export const Stories = () => {
  return (
    <PageTransition>
      <section className="py-28 bg-[#050505] min-h-screen relative overflow-hidden">
        {/* Cinematic glow background */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-radial from-[#EBC325]/5 to-transparent pointer-events-none rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* Header Area using custom plain sans-serif headings */}
          <div className="max-w-4xl mb-20 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#EBC325]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EBC325]">PRESS RELEASES & FEATURES</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-tighter text-white mb-8 leading-none">
              EXTERNAL <span className="text-[#EBC325]">STORIES.</span>
            </h1>
            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
              Read editorial reviews, actor spotlights, and analytical journals outlining the creative core and social vision of OGWA Studios.
            </p>
          </div>

          {/* Stories Editorial Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {storiesList.map((story, idx) => (
                  <article
                    key={idx}
                    className="group bg-[#0e0e0e] border border-white/5 rounded-2xl overflow-hidden hover:border-[#EBC325]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
                  >
                    {/* Featured Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#EBC325]/90 text-black px-3 py-1 text-[8px] font-bold tracking-widest uppercase rounded-full">
                      {story.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-gray-500 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {story.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#EBC325] transition-colors leading-snug mb-4">
                    {story.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-4 flex-grow">
                    {story.desc}
                  </p>

                  <div className="border-t border-white/5 pt-6 mt-8">
                    <a
                      href={story.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-bold uppercase tracking-widest text-[#EBC325] group-hover:text-white transition-colors flex items-center gap-2"
                    >
                      Read Full Article
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </article>

          ))}

        </div>


          {/* Bottom Callout */}
          <div className="rounded-2xl bg-[#0e0e0e]/55 border border-white/5 p-8 text-center max-w-2xl mx-auto">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2">PARTNERSHIP ARCHIVE</h4>
            <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              We continue to document authentic milestones. To request press kits, interviews, or custom publications, use our collaborative outreach channel.
            </p>
          </div>

        </div>
      </section>
    </PageTransition>
  );
};
