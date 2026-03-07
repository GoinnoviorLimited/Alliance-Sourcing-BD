'use client'
import { JSX, useEffect, useRef, useState } from "react";

// ── JSON DATA ──────────────────────────────────────────────
const howWeWorkData = {
  label: "Process",
  heading: "How we work",
  cta: {
    text: "Discuss",
    href: "#",
  },
  steps: [
    {
      id: 1,
      title: "Consultation",
      description: "We listen to your needs and understand your specifications",
      icon: "consultation",
    },
    {
      id: 2,
      title: "Supplier match",
      description: "We match you with manufacturers who meet your standards",
      icon: "supplier",
    },
    {
      id: 3,
      title: "Order management",
      description: "We negotiate terms and oversee production from start to finish",
      icon: "order",
    },
    {
      id: 4,
      title: "Quality check",
      description: "Every batch is tested against your specifications and standards",
      icon: "quality",
    },
  ],
};

// ── ICONS ──────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  consultation: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <rect x="7" y="4" width="26" height="32" rx="3" stroke="#f07d00" strokeWidth="2" />
      <line x1="13" y1="13" x2="27" y2="13" stroke="#f07d00" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="19" x2="27" y2="19" stroke="#f07d00" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="25" x2="21" y2="25" stroke="#f07d00" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="34" cy="36" r="7" stroke="#f07d00" strokeWidth="2" />
      <line x1="39" y1="41" x2="44" y2="46" stroke="#f07d00" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  supplier: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <path d="M4 22 C8 16 14 15 19 17 L24 19" stroke="#f07d00" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 19 C26 17 30 16 33 18 L38 22" stroke="#f07d00" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 22 L44 16" stroke="#f07d00" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 30 L10 36 C13 39 17 39 20 37 L29 29 C32 26 36 26 38 28 L44 33" stroke="#f07d00" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M19 17 C21 20 22 26 19 30 C17 33 13 33 11 31" stroke="#f07d00" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  ),
  order: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <path d="M5 8 L9 10 L13 28 H35 L40 14 H11" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="34" r="3" stroke="#9ca3af" strokeWidth="2" />
      <circle cx="31" cy="34" r="3" stroke="#9ca3af" strokeWidth="2" />
      <polyline points="24,15 27,20 34,12" stroke="#f07d00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  quality: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
      <circle cx="24" cy="19" r="11" stroke="#f07d00" strokeWidth="2" />
      <polyline points="16,29 13,44 24,37 35,44 32,29" stroke="#f07d00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="19,19 22,23 29,15" stroke="#f07d00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ── TYPES ──────────────────────────────────────────────────
interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ── STEP ITEM COMPONENT ────────────────────────────────────
const StepItem = ({ step, isLast }: { step: Step; isLast: boolean }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex gap-5 sm:gap-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${step.id * 0.1}s, transform 0.5s ease ${step.id * 0.1}s`,
      }}
    >
      {/* Icon + vertical line */}
      <div className="flex flex-col items-center shrink-0" style={{ minWidth: "52px" }}>
        <div
          className="flex items-center justify-center rounded-full bg-orange-50 shrink-0"
          style={{ width: 52, height: 52 }}
        >
          {icons[step.icon]}
        </div>
        {!isLast && (
          <div className="flex-1 mt-2 w-px bg-gray-200" style={{ minHeight: "40px" }} />
        )}
      </div>

      {/* Text content */}
      <div className={`pt-1.5 ${isLast ? "pb-0" : "pb-10 sm:pb-12"}`}>
        <h3 className="text-xl sm:text-2xl font-normal text-gray-900 mb-2 leading-tight tracking-tight">
          {step.title}
        </h3>
        <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed max-w-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
};

// ── MAIN COMPONENT ─────────────────────────────────────────
export default function HowWeWork() {
  const { label, heading, cta, steps } = howWeWorkData;

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 xl:px-0 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-start">

        {/* LEFT */}
        <div className="md:sticky md:top-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-800 mb-4">
            {label}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-none mb-8 tracking-tight" style={{ fontFamily: 'var(--font-syne)' }}>
            {heading}
          </h2>

          <a
            href={cta.href}
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-800 bg-transparent transition-all duration-200 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50"
          >
            {cta.text}
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <StepItem key={step.id} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>

      </div>
    </section>
  );
}