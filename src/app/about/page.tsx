import Link from "next/link";
import YearScrollStory from "@/components/YearScrollStory";
import TextType from "@/components/TextType";
import SponsorMarquee from "@/components/SponsorMarquee";

export const metadata = {
  title: "About PABT | PABT Foundation",
  description: "Learn about PABT Foundation's origin, mission, sponsors, and the five connected pathways driving India's sustainability movement.",
};



export default function AboutPage() {
  const values = [
    {
      title: "Native-First Restoration",
      description: "We plant and protect species that belong to a landscape, not ones that are easiest to source, so ecosystems recover on their own terms.",
    },
    {
      title: "Radical Transparency",
      description: "Every project we run is independently audited and reported against, from sapling survival rates to carbon offset ledgers.",
    },
    {
      title: "Community Ownership",
      description: "Long-term impact only sticks when the people living on the land lead it. We train, employ, and hand over stewardship locally.",
    },
    {
      title: "Systems Thinking",
      description: "Nature, waste, energy, enterprise, and community aren't separate problems — we design every project to move all five at once.",
    },
  ];

  const timeline = [
    {
      year: "Year 1",
      title: "Plant A Billion Trees Begins",
      description: "PABT started as a single-purpose afforestation drive, focused on native species restoration in degraded rural land and Miyawaki forests.",
      image: "/nature_hero.png",
    },
    {
      year: "Year 2",
      title: "Circularity Joins the Mission",
      description: "We saw that thriving forests need clean watersheds and waste-free communities around them, so PABT Circular waste diversion was born.",
      image: "/circular_hero.png",
    },
    {
      year: "Year 3",
      title: "Clean Energy & Green Innovation",
      description: "PABT Future brought solar micro-grids, EV charging hubs, and climate-tech pilots to off-grid rural communities.",
      image: "/future_hero.png",
    },
    {
      year: "Year 4",
      title: "ESG & CSR Advisory Launch",
      description: "PABT ESG & CSR was launched to empower corporate partners with materiality audits, BRSR alignment, and transparent CSR project funding.",
      image: "/esg_hero.png",
    },
    {
      year: "Today",
      title: "Five Pathways, One Movement",
      description: "PABT Community mobilizes school eco-clubs, volunteers, and local stewards, completing an ecosystem where nature, industry, and citizens move together.",
      image: "/community_hero.png",
    },
  ];

  return (
    <div className="relative pb-24 pt-16 overflow-x-hidden">
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] animate-pulse -z-10" />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center space-y-4">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold block">
          ABOUT PABT FOUNDATION
        </span>
        <TextType
          as="h1"
          text="One Foundation, Five Connected Pathways"
          typingSpeed={45}
          initialDelay={200}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        />
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
          PABT Foundation is an India-based nonprofit working across nature restoration, circular resource management, clean energy, corporate ESG advisory, and grassroots community action. We believe environmental repair only lasts when it&apos;s tied to livelihoods, transparency, and local ownership.
        </p>
      </section>

      {/* Timeline Section: How We Got Here */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800/80">
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
            OUR TIMELINE & HISTORY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            How We Got Here
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Scroll down to walk through our journey year by year.
          </p>
        </div>

        <YearScrollStory steps={timeline} />
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800/80">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">What Guides Our Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Four core principles shape every project we take on, across all five pathways.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 space-y-2 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Programmes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800/80">
        <div className="text-center mb-14 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Our Programmes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Environment */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-green-50 dark:bg-green-950/40 group-hover:scale-110 transition-transform duration-300 text-5xl">
              🌱
            </div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3">Environment</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Sow a seed for a better future and work with people in a community to nurture and nourish the plants to create a society that is sustainable for all to live in.
            </p>
          </div>

          {/* Education */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/40 group-hover:scale-110 transition-transform duration-300 text-5xl">
              🎓
            </div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3">Education</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Take the knowledge sharing for kids beyond pages of books and walls of a school and provide a holistic understanding of society.
            </p>
          </div>

          {/* Humanity */}
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-2xl bg-orange-50 dark:bg-orange-950/40 group-hover:scale-110 transition-transform duration-300 text-5xl">
              🤝
            </div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-3">Humanity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Bring together people as equals and support every person in a time of need to bring out the best in a person so all may live in a better society.
            </p>
          </div>
        </div>
      </section>

      {/* OUR SPONSORS – animated marquee */}
      <SponsorMarquee />

      {/* Trust & Registration */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200 dark:border-gray-800/80">
        <div className="p-10 rounded-3xl bg-gray-50 dark:bg-[#10150F] border border-gray-200 dark:border-gray-800 text-center space-y-4 shadow-lg">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Registered & Audited NGO</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
            PABT Foundation operates out of Chennai and Bengaluru, India, and is fully registered for corporate CSR and individual giving.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wider pt-2">
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-950 border border-green-500/30 text-green-700 dark:text-green-400">12A Tax-Exempt</span>
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-950 border border-green-500/30 text-green-700 dark:text-green-400">80G Deductible</span>
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-950 border border-green-500/30 text-green-700 dark:text-green-400">CSR-1 Registered</span>
            <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-950 border border-green-500/30 text-green-700 dark:text-green-400">Third-Party Audited</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <Link
          href="/missions"
          className="inline-block px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20"
        >
          Explore Our 5 Missions
        </Link>
      </section>
    </div>
  );
}


