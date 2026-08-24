interface PathwayHeroBannerProps {
  pathwayLabel: string;
  labelClass: string;
  title: string;
  description: string;
}

export default function PathwayHeroBanner({
  pathwayLabel,
  labelClass,
  title,
  description,
}: PathwayHeroBannerProps) {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      <span className={`font-mono text-xs uppercase tracking-widest font-bold mb-3 block ${labelClass}`}>
        {pathwayLabel}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 max-w-2xl">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
        {description}
      </p>
    </section>
  );
}
