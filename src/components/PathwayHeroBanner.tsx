interface PathwayHeroBannerProps {
  pathwayLabel: string;
  labelClass: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export default function PathwayHeroBanner({
  pathwayLabel,
  labelClass,
  title,
  description,
  imageUrl,
  imageAlt,
}: PathwayHeroBannerProps) {
  const text = (
    <div>
      <span className={`font-mono text-xs uppercase tracking-widest font-bold mb-3 block ${labelClass}`}>
        {pathwayLabel}
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 max-w-2xl">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  );

  if (!imageUrl) {
    return <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">{text}</section>;
  }

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {text}
        <div className="relative h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={imageAlt ?? title} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
