import { Metadata } from "next";
import { BannerCarousel } from "@/components/sections/banner-carousel";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ImageTextSection } from "@/components/sections/image-text-section";
import { CTASection } from "@/components/sections/cta-section";
import { CheckCircle2 } from "lucide-react";
import {
  VALUES,
  CONTACT_INFO,
} from "@/lib/constants";
import ProductsAndServices from "@/components/sections/ProductsAndServices";
import FactoryAndMachinery from "@/components/sections/FactoryAndMachinery";
import { getBannerSlides } from "@/lib/banner";
import { getWeWorks } from "@/lib/weWork";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";

export const metadata: Metadata = {
  title: "Alliance Sourcing BD | Professional Buying & Sourcing Services",
  description:
    "Your premier partner in seamless garment sourcing and social manufacturing excellence. We specialize in apparel, knitwear, woven, and denim products.",
  openGraph: {
    title: "Alliance Sourcing BD | Professional Buying & Sourcing Services",
    description:
      "Professional buying & sourcing services for apparel and garment manufacturing.",
    type: "website",
  },
};

export default async function Home() {
  const slides = await getBannerSlides()
  const steps = await getWeWorks()
  return (
    <>
      {/* Banner Carousel */}
      <BannerCarousel slides={slides}/>

      {/* What Sets Us Apart Section */}
      <FeaturesGrid
        title="What sets us apart"
        features={VALUES}
        columns={4}
      />

      <HowWeWorkSection />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Professional Buying House Services */}
        <ImageTextSection
          title="Professional buying house services"
          description="Founded with a vision to revolutionize the apparel industry, Alliance Sourcing BD has grown into the leading global leader in garment sourcing. With decades of collective expertise, we bridge the gap between world-class brands and high-quality manufacturing units in Bangladesh and beyond. Our journey is defined by a relentless pursuit of excellence, ethical practices, and a deep understanding of the fast-evolving fashion landscape."
          image="/garment-rack.jpg"
          imageAlt="Professional buying services"
          imagePosition="left"
          features={[
            {
              icon: <CheckCircle2 className="w-6 h-6" />,
              title: "Expert evaluation",
              description: "Thorough assessment of manufacturer capabilities"
            },
            {
              icon: <CheckCircle2 className="w-6 h-6" />,
              title: "Quality compliance",
              description: "Rigorous inspection and certification"
            },
            {
              icon: <CheckCircle2 className="w-6 h-6" />,
              title: "Cost optimization",
              description: "Best pricing without compromising quality"
            }
          ]}
        />
      </div>


      {/* Buying House Services Section */}
      <ServicesGrid
        title="Buying house services"
        subtitle="We manage every step of your sourcing journey with precision"
      />
      
      <FactoryAndMachinery />

      <ProductsAndServices />

      {/* CTA Section */}
      <CTASection
        title="Ready to start sourcing?"
        subtitle="Let us help you find the perfect manufacturing partners for your apparel needs"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
      />
    </>
  );
}
