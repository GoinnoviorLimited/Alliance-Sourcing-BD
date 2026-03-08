import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { SERVICES, CONTACT_INFO, PRODUCT_CATEGORIES } from "@/lib/constants";
import { ProductShowcase } from "@/components/sections/product-showcase";
import HowWeWork from "@/components/sections/HowWeWork";

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
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
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
      <ProductShowcase categories={PRODUCT_CATEGORIES} />

      <HowWeWork />

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
