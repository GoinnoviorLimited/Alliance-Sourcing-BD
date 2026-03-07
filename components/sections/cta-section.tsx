import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/common/section-wrapper";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  backgroundImage,
}: CTASectionProps) {
  return (
    <section
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : { backgroundColor: "rgb(6, 182, 212)" }
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <SectionWrapper className="py-5 lg:py-10 xl:py-12 relative text-center md:border border-white rounded-lg">
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {subtitle}
          </p>
        )}

        <div className="flex gap-4 justify-center">
          <a href={primaryButton.href} className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <Button className="bg-white hover:bg-slate-50 text-cyan-600 px-10 py-3 text-lg h-auto font-semibold rounded-lg transition-all duration-300 hover:shadow-lg">
              {primaryButton.label}
            </Button>
          </a>
          {secondaryButton && (
            <a href={secondaryButton.href} className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-10 py-3 text-lg h-auto font-semibold rounded-lg transition-all duration-300"
              >
                {secondaryButton.label}
              </Button>
            </a>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}
