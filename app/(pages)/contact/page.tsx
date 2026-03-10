import { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";
import { CTASection } from "@/components/sections/cta-section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import ContactForm from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Alliance Sourcing BD",
  description:
    "Get in touch with Alliance Sourcing BD. We're here to answer your questions and discuss your sourcing needs.",
  openGraph: {
    title: "Contact Us",
    description: "Reach out to discuss your garment sourcing requirements.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <PageHeader
        title="Get in Touch"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3105a5e1e47bd6c51724d9ef89fd867243462197-jU21omSUdf2kP7KEQVK23sTylm4Hqd.jpg"
        subtitle="We're here to answer your questions and discuss your sourcing needs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Contact Section */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 text-sm mb-4">Send us a message</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-cyan-600 hover:text-cyan-700 font-medium text-sm"
            >
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
            <p className="text-slate-600 text-sm mb-4">Call us directly</p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-cyan-600 hover:text-cyan-700 font-medium text-sm"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          {/* Office */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-cyan-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Office</h3>
            <p className="text-slate-600 text-sm mb-4">Dhaka, Bangladesh</p>
            <a
              href={CONTACT_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium text-sm"
            >
              Get directions
            </a>
          </div>
        </div>
      </SectionWrapper>


      <div className="container mx-auto px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 pb-10 lg:pb-20">
        <ContactForm />

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3838424678644!2d90.15753242346826!3d23.819089917635826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2e32f3c4a2b%3A0x1234567890abcdef!2sAsha%20Plaza%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      {/* CTA Section */}
      <CTASection
        title="Ready to get started?"
        subtitle="Connect with us today to discuss your apparel sourcing requirements"
        primaryButton={{
          label: "Contact Us",
          href: `mailto:${CONTACT_INFO.email}`,
        }}
      />
    </>
  );
}
