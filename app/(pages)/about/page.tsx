import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { CTASection } from "@/components/sections/cta-section";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { HOW_WE_WORK, VALUES, CONTACT_INFO } from "@/lib/constants";
import HowWeWork from "@/components/sections/HowWeWork";

export const metadata: Metadata = {
  title: "About Alliance Sourcing BD | Our Story & Values",
  description:
    "Learn about Alliance Sourcing BD, our mission to revolutionize the apparel industry through ethical practices and manufacturing excellence.",
  openGraph: {
    title: "About Alliance Sourcing BD",
    description:
      "Professional buying & sourcing services with decades of collective expertise.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="About Alliance Sourcing BD"
        subtitle="Your premier partner in seamless garment sourcing and social manufacturing excellence"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* Story Section */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fb86a83f78a644e88971076764479de1529ddfe7-BpIo4doqYFZdJAmpXCj0z6jL0SZHhF.png"
              alt="Our garment facility"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Established Excellence
            </h2>

            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              Professional buying house services
            </h3>

            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded with a vision to revolutionize the apparel industry, Alliance Sourcing BD
              has grown into a global leader in garment sourcing. With decades of collective
              expertise, we bridge the gap between world-class brands and high-quality
              manufacturing units in Bangladesh and beyond.
            </p>

            <p className="text-slate-600 mb-4 leading-relaxed">
              Our journey is defined by a relentless pursuit of excellence, ethical practices,
              and a deep understanding of the fast-evolving fashion landscape. We started as a
              small team with a big ambition: to make international sourcing transparent,
              efficient, and sustainable.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Today, we work with hundreds of brands and manufacturers, ensuring every partnership
              reflects our commitment to quality, ethical standards, and mutual growth.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <div className="bg-slate-50">
        <FeaturesGrid title="What sets us apart" features={VALUES} columns={4} />
      </div>

      {/* Process Section */}
      <HowWeWork/>

      {/* CTA */}
      <CTASection
        title="Ready to partner with us?"
        subtitle="Let's discuss how we can help bring your vision to life"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
      />
    </>
  );
}
