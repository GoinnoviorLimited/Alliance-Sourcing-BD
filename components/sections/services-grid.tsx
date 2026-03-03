import { Service } from "@/lib/types";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionWrapper } from "@/components/common/section-wrapper";

interface ServicesGridProps {
  title: string;
  subtitle?: string;
  services: Service[];
}

export function ServicesGrid({
  title,
  subtitle,
  services,
}: ServicesGridProps) {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="animate-in fade-in" style={{ animationDelay: `${index * 150}ms` }}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
