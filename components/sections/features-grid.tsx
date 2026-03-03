import { FeatureCard } from "@/components/cards/feature-card";
import { SectionWrapper } from "@/components/common/section-wrapper";

interface Feature {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
}

interface FeaturesGridProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeaturesGrid({
  title,
  subtitle,
  features,
  columns = 4,
}: FeaturesGridProps) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[columns];

  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase tracking-wider">Why</p>
        <h2 
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className={`grid grid-cols-1 ${gridClass} gap-6 md:gap-8`}>
        {features.map((feature, index) => (
          <div key={index} className="animate-in fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
