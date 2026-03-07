import { Service } from "@/lib/types";

interface ServiceCardProps extends Service {}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden hover:bg-[#0C97D5] border border-gray-200 transition-all duration-300">
      <div className="p-8">
        <div className="text-3xl xl:text-4xl mb-6 md:mb-8 xl:mb-10 text-cyan-500">{icon}</div>
        <h3 
          className="text-2xl font-semibold text-slate-900 group-hover:text-white mb-3"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h3>
        <p className="text-slate-600 group-hover:text-white leading-relaxed">{description}</p>
      </div>
      {/* <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" /> */}
    </div>
  );
}
