interface FeatureCardProps {
  title: string;
  description: string;
  icon?: string | React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
      {icon && (
        <div className="mb-6 flex justify-center">
          <div className="text-5xl text-cyan-500">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
