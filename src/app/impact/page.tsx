import MetricCard from "@/components/MetricCard";

export const metadata = {
  title: "Impact | PABT Foundation",
  description: "Verified impact metrics across PABT Foundation's five pathways: Nature, Circularity, Clean Energy, ESG, and Community.",
};

export default function ImpactPage() {
  const groups = [
    {
      name: "Nature",
      theme: "nature",
      metrics: [
        { value: "1.2M+", label: "Trees Planted", sublabel: "Native forests across Rajasthan & Sundarbans." },
        { value: "128", label: "Water Bodies Restored", sublabel: "Lakes, ponds, and local community wetlands." },
        { value: "87%", label: "Sapling Survival", sublabel: "Verified through regular field audits." },
      ],
    },
    {
      name: "Circularity",
      theme: "circular",
      metrics: [
        { value: "18K+", label: "Tonnes Waste Diverted", sublabel: "Diverted from municipal landfills and waterways." },
        { value: "210K+", label: "Carbon Avoided (Tonnes)", sublabel: "Calculated through composting and reuse loops." },
        { value: "1.2K", label: "Farms Transitioned", sublabel: "Transitioned to chemical-free sustainable farming." },
      ],
    },
    {
      name: "Clean Energy",
      theme: "future",
      metrics: [
        { value: "42", label: "Off-Grid Villages Powered", sublabel: "Solar micro-grids in high-altitude Ladakh villages." },
        { value: "3.4M+", label: "EV Km Enabled", sublabel: "EV charging infrastructure powered by solar." },
        { value: "46", label: "Climate Tech Pilots", sublabel: "Innovations backed to resolve local climate adaptation." },
      ],
    },
    {
      name: "ESG & CSR",
      theme: "esg",
      metrics: [
        { value: "74", label: "Enterprise Partners", sublabel: "Corporates transitioning to verified sustainable operations." },
        { value: "210+", label: "Sustainability Audits", sublabel: "Water, waste, and energy audits conducted." },
        { value: "96", label: "Disclosure Reports Filed", sublabel: "Aligned to BRSR, GRI, and global standards." },
      ],
    },
    {
      name: "Community",
      theme: "community",
      metrics: [
        { value: "310", label: "Green Schools Engaged", sublabel: "With active student climate councils and compost units." },
        { value: "1.9K+", label: "Communities Reached", sublabel: "Villages and neighborhoods receiving sustainability training." },
        { value: "34K+", label: "Volunteers Mobilized", sublabel: "Taking part in plantations, cleanups, and green audits." },
      ],
    },
  ];

  return (
    <div className="relative pb-24">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <span className="text-green-700 dark:text-green-400 font-mono text-xs uppercase tracking-widest font-bold mb-3 block animate-float">
          Impact
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          Numbers We Stand Behind
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Every metric below is tracked in the field and reviewed by independent auditors before it&apos;s published. We&apos;d rather report a smaller number we can prove than a bigger one we can&apos;t.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.name} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-100 dark:border-gray-900">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6">{group.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {group.metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} sublabel={m.sublabel} themeColor={group.theme} />
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100 dark:border-gray-900 text-center">
        <div className="glass-panel rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Our Verification Process</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Field data is collected by local project teams, cross-checked by an independent third-party auditor twice a year, and reconciled against satellite and drone survey data for our forest and water restoration work.
          </p>
        </div>
      </section>
    </div>
  );
}
