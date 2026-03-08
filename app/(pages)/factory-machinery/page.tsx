import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CTASection } from "@/components/sections/cta-section";
import { MachineryCard } from "@/components/cards/machinery-card";
import { MACHINERY, CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Factory & Machinery | Alliance Sourcing BD",
  description:
    "State-of-the-art manufacturing facilities with advanced machinery including CAD/CAM cutting, automatic sewing, embroidery, and finishing systems.",
  openGraph: {
    title: "Our Manufacturing Excellence",
    description:
      "Advanced machinery and technology for high-quality garment production.",
  },
};

export default function FactoryMachineryPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Our Manufacturing Excellence"
        subtitle="State-of-the-art facilities meeting the highest global ethical and quality standards through innovation and precision"
        backgroundImage="https://i.postimg.cc/ZR5YYj7X/Header.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Factory & Machinery" },
        ]}
      />

      {/* Open Factory Section */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Open Factory
            </h2>
            <h3 className="text-xl font-semibold text-slate-700 mb-4">
              The Ways to Keep Business Growing
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Are you interested to know details about our factory, production system and company
              policy at a glance? Please have a look at the provided pdf file.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span className="mr-2">📄</span>
                Download PDF
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                View PDF
              </a>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://i.postimg.cc/904WZ0jr/THREAD-SUCKING-MACHINE.png"
              alt="Our factory"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Machinery Section */}
      <SectionWrapper className="py-12 md:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 text-center">
          Advanced Machinery
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">
          We invest in the latest industry 4.0 technology to reduce waste and maximize efficiency
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MACHINERY.map((machine) => (
            <MachineryCard key={machine.id} {...machine} />
          ))}
        </div>
      </SectionWrapper>

      {/* Production Systems Section */}
      <div className="bg-slate-50">
        <SectionWrapper className="py-12 md:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 text-center">
            Production Systems
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">
            Our integrated systems ensure efficiency and quality at every stage
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">🖥️</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">CAD/CAM Cutting</h3>
                <p className="text-slate-600 text-sm">
                  Precision digital pattern cutting with minimal waste through automated systems
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">⚙️</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Automatic Sewing</h3>
                <p className="text-slate-600 text-sm">
                  High-speed, consistent stitching with multiple specialized machines for different
                  seams
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🎨</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Embroidery</h3>
                <p className="text-slate-600 text-sm">
                  Multi-head embroidery systems for detailed branding and custom designs
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">💨</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Vapor Finishing</h3>
                <p className="text-slate-600 text-sm">
                  Environment-friendly finishing systems that provide superior results
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* CTA Section */}
      <CTASection
        title="Interested in our capabilities?"
        subtitle="Let's discuss your manufacturing needs and how we can help"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
      />
    </>
  );
}
