"use client";

/**
 * SponsorMarquee – individual logo cards scrolling right → left.
 * Color logos (user-provided) are used where available.
 * Teal-extracted logos fill the rest.
 * The list is duplicated to create a seamless infinite loop.
 */
const sponsors = [
  { name: "Krishko",                logo: "/sponsors/krishko.png" },
  { name: "Rajmatha",               logo: "/sponsors/rajmatha.png" },
  { name: "Birth Marque",           logo: "/sponsors/birth_marque.png" },
  { name: "Madras Event Company",   logo: "/sponsors/madras_event.png" },
  { name: "Klin Space",             logo: "/sponsors/klin_space.png" },
  { name: "Punyao Life",            logo: "/sponsors/punyao_life_new.png" },
  { name: "KME",                    logo: "/sponsors/kme.jpg" },
  { name: "Confident Aesthetics",   logo: "/sponsors/confident_aesthetics.jpg" },
  { name: "Hamly",                  logo: "/sponsors/hamly.jpg" },
  { name: "Subham",                 logo: "/sponsors/subham.png" },
  { name: "JH Rehabilitation",      logo: "/sponsors/jh_rehab.jpg" },
  { name: "Sanjay Forwarders",      logo: "/sponsors/sanjay_forwarders.jpg" },
  { name: "Zaika",                  logo: "/sponsors/zaika.jpg" },
  { name: "ARS Steel",              logo: "/sponsors/ars_steel.jpg" },
  { name: "Dawn Town",              logo: "/sponsors/dawn_town.jpg" },
  { name: "Dumbell",                logo: "/sponsors/dumbell_new.png" },
  { name: "Neotech",                logo: "/sponsors/neotech_new.png" },
  { name: "JVP",                    logo: "/sponsors/jvp.png" },
  { name: "Royal Chicken",          logo: "/sponsors/royal_chicken.jpg" },
  { name: "GH Chennai",             logo: "/sponsors/chennai_national_hospital_new.png" },
  { name: "Horical",                logo: "/sponsors/horical.jpg" },
  { name: "Cocotech",               logo: "/sponsors/cocotech_new.png" },
  { name: "Dr. Mehta's Hospitals",  logo: "/sponsors/dr_mehtas_hospitals.jpg" },
  { name: "Naturals",               logo: "/sponsors/naturals_new.png" },
  { name: "British Clean",          logo: "/sponsors/british_clean_new.png" },
  { name: "Shanmuga Bhavan",        logo: "/sponsors/shanmuga_bhavan.jpg" },
  { name: "Atlasware",              logo: "/sponsors/atlasware_new.png" },
];

// Duplicate for seamless infinite loop
const track = [...sponsors, ...sponsors];

export default function SponsorMarquee() {
  return (
    <section className="py-14 border-t border-gray-200 dark:border-gray-800/80 overflow-hidden">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block mb-2">
          TRUSTED BY LOCAL BUSINESSES
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a4225] dark:text-emerald-400 tracking-tight uppercase">
          Our Sponsors
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          27 proud supporters making Chennai greener
        </p>
      </div>

      {/* Scrolling strip */}
      <div className="sponsor-marquee-wrap">
        <div className="sponsor-marquee-track">
          {track.map((s, i) => (
            <div
              key={`${s.name}-${i}`}
              title={s.name}
              className="
                flex-shrink-0 mx-3
                flex items-center justify-center
                bg-white
                border border-gray-100
                rounded-2xl
                shadow-sm hover:shadow-lg
                transition-all duration-300
                overflow-hidden
              "
              style={{ width: 180, height: 96 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.logo}
                alt={s.name}
                className="w-full h-full object-contain p-3"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
