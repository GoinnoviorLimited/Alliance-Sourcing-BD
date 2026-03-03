import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ProcessFlow } from "@/components/sections/process-flow";
import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { ProductCard } from "@/components/cards/product-card";
import { SERVICES, HOW_WE_WORK, EXPERTISE_CATEGORIES, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Buying House Services | Alliance Sourcing BD",
  description:
    "Professional buying house services including product sampling, supplier selection, price negotiation, and quality inspection.",
  openGraph: {
    title: "Professional Buying & Sourcing Services",
    description:
      "We manage every step of your sourcing journey with precision and excellence.",
  },
};

export default function BuyingHousePage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Professional Buying & Sourcing Services"
        subtitle="State-of-the-art facilities meeting the highest global ethical and quality standards through innovation and precision"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HomePage.png-fDfquMd0QVp5xfeF5epKSZTVCIcu4o.jpeg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Service", href: "/" },
          { label: "Buying House Services" },
        ]}
      />

      {/* Services Section */}
      <ServicesGrid
        title="Buying house services"
        subtitle="We manage every step of your sourcing journey with precision"
        services={SERVICES}
      />

      {/* Product Expertise Section */}
      <SectionWrapper className="py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 text-center">
          Product Expertise
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">
          We specialize in a wide array of textile categories, ensuring the right technical
          expertise for every product type
        </p>

        {/* Knitwear */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">👕</span>
            {EXPERTISE_CATEGORIES.knit.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERTISE_CATEGORIES.knit.items.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Woven */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">👔</span>
            {EXPERTISE_CATEGORIES.woven.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERTISE_CATEGORIES.woven.items.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* Denim */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">👖</span>
            {EXPERTISE_CATEGORIES.denim.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXPERTISE_CATEGORIES.denim.items.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <div className="bg-slate-50">
        <ProcessFlow
          title="How we work"
          subtitle="Process"
          steps={HOW_WE_WORK}
        />
      </div>

      {/* CTA Section */}
      <CTASection
        title="Ready to start sourcing?"
        subtitle="Let us help you find the perfect manufacturing partners for your apparel needs"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
      />
    </>
  );
}
