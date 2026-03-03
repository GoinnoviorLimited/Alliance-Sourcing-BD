import { WorkStep } from "@/lib/types";
import { SectionWrapper } from "@/components/common/section-wrapper";

interface ProcessFlowProps {
  title: string;
  subtitle?: string;
  steps: WorkStep[];
}

export function ProcessFlow({
  title,
  subtitle,
  steps,
}: ProcessFlowProps) {
  return (
    <SectionWrapper className="py-16 md:py-24 bg-white">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top">
        <p className="text-sm font-semibold text-cyan-600 mb-3 uppercase tracking-wider">Process</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.step} className="relative animate-in fade-in bounce-in" style={{ animationDelay: `${index * 150}ms` }}>
            {/* Step Number with Icon */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-full flex items-center justify-center text-4xl text-cyan-600 mb-6 relative z-10 shadow-md">
                {step.icon}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-20 w-full h-16 border-t-2 border-cyan-200 -translate-x-1/2 translate-y-2 -z-10">
                </div>
              )}
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 
                className="font-semibold text-slate-900 mb-3 text-xl"
                style={{ fontFamily: 'var(--font-syne)' }}
              >
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
