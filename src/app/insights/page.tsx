import InsightsCarousel from "@/components/InsightsCarousel";

export const metadata = {
  title: "Insights | PABT Foundation",
  description: "Field notes, research, and updates from PABT Foundation's work across nature, circularity, clean energy, ESG, and community.",
};

export default function InsightsPage() {
  return (
    <div className="relative pt-12 pb-24">
      <InsightsCarousel />
    </div>
  );
}
