import { Service } from "@/lib/types";

interface ServiceCardProps extends Service {}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="p-8">
        <div className="text-6xl mb-6 text-cyan-500">{icon}</div>
        <h3 
          className="text-2xl font-semibold text-slate-900 mb-3"
          style={{ fontFamily: 'var(--font-syne)' }}
        >
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
}
