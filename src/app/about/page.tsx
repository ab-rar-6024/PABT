import Link from "next/link";
import YearScrollStory from "@/components/YearScrollStory";
import TextType from "@/components/TextType";

export const metadata = {
  title: "About PABT | PABT Foundation",
  description: "Learn about PABT Foundation's origin, mission, and the five connected pathways driving India's sustainability movement.",
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
      title: "Plant A Billion Trees begins",
      description: "PABT started as a single-purpose afforestation drive, focused on native species restoration in degraded rural land.",
      image: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "Year 2",
      title: "Circularity joins the mission",
      description: "We saw that thriving forests need clean watersheds and waste-free communities around them, so PABT Circular was born.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "Year 3",
      title: "Clean energy & ESG pathways launch",
      description: "PABT Future brought solar micro-grids to off-grid communities, while PABT ESG began helping companies fund verified impact.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      year: "Today",
      title: "Five pathways, one movement",
      description: "PABT Community now mobilizes schools and volunteers, completing a system where nature, industry, and citizens move together.",
      image: "https://images.unsplash.com/photo-1634151389979-2dea7604b36f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="relative pb-24">
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow -z-10" />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          About PABT
        </span>
        <TextType
          as="h1"
          text="One Foundation, Five Connected Pathways"
          typingSpeed={45}
          initialDelay={200}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6"
        />
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          PABT Foundation is an India-based nonprofit working across nature restoration, circular resource management, clean energy, corporate ESG advisory, and grassroots community action. We believe environmental repair only lasts when it&apos;s tied to livelihoods, transparency, and local ownership.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-14 text-center">
          <TextType
            as="span"
            text="How We Got Here"
            typingSpeed={45}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
            startOnVisible={true}
          />
        </h2>
        <YearScrollStory steps={timeline} />
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">What Guides Our Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Four principles shape every project we take on, across all five pathways.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="glass-panel rounded-2xl border border-gray-200/80 dark:border-gray-800/80 p-6">
              <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Registration */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900">
        <div className="glass-panel rounded-2xl border border-gray-200 dark:border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">Registered & Audited</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            PABT Foundation operates out of Chennai and Bengaluru, India, and is fully registered for corporate and individual giving.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="px-4 py-2 rounded-full bg-green-50/60 dark:bg-green-950/60 border border-green-500/30 text-green-700 dark:text-green-400">12A Tax-Exempt</span>
            <span className="px-4 py-2 rounded-full bg-green-50/60 dark:bg-green-950/60 border border-green-500/30 text-green-700 dark:text-green-400">80G Deductible</span>
            <span className="px-4 py-2 rounded-full bg-green-50/60 dark:bg-green-950/60 border border-green-500/30 text-green-700 dark:text-green-400">CSR-1 Registered</span>
            <span className="px-4 py-2 rounded-full bg-green-50/60 dark:bg-green-950/60 border border-green-500/30 text-green-700 dark:text-green-400">Third-Party Audited</span>
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
