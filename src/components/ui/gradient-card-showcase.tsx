import Link from "next/link";

export type GradientCard = {
  title: string;
  desc: string;
  gradientFrom: string;
  gradientTo: string;
  href?: string;
  cta?: string;
};

const defaultCards: GradientCard[] = [
  {
    title: "Card one",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#ffbc00",
    gradientTo: "#ff0058",
  },
  {
    title: "Card two",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#03a9f4",
    gradientTo: "#ff0058",
  },
  {
    title: "Card three",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    gradientFrom: "#4dff03",
    gradientTo: "#00d0ff",
  },
];

export default function SkewCards({ cards = defaultCards }: { cards?: GradientCard[] }) {
  return (
    <div className="flex justify-center items-center flex-wrap py-10">
      {cards.map(({ title, desc, gradientFrom, gradientTo, href, cta }, idx) => (
        <div
          key={idx}
          className="group relative w-[85vw] max-w-[320px] h-[360px] sm:h-[400px] m-[20px_12px] sm:m-[40px_30px] transition-all duration-500"
        >
          {/* Skewed gradient panels */}
          <span
            className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
            style={{
              background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
            }}
          />
          <span
            className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[30px] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[20px] group-hover:w-[calc(100%-90px)]"
            style={{
              background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
            }}
          />

          {/* Animated blurs */}
          <span className="pointer-events-none absolute inset-0 z-10">
            <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
            <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
          </span>

          {/* Content */}
          <div className="relative z-20 left-0 p-[20px_40px] bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] shadow-lg rounded-lg text-white transition-all duration-500 group-hover:left-[-25px] group-hover:p-[60px_40px]">
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className="text-lg leading-relaxed mb-2">{desc}</p>
            {href && (
              <Link
                href={href}
                className="inline-block text-lg font-bold text-black bg-white px-3 py-2 rounded hover:bg-[#ffcf4d] hover:border hover:border-[rgba(255,0,88,0.4)] hover:shadow-md transition-colors"
              >
                {cta ?? "Read More"}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
