interface FeatureCardProps {
  title: string;
  description: string;
  icons?: string | React.ReactNode;
}

export function FeatureCard({ title, description, icons }: FeatureCardProps) {
  return (
    <div className="flex flex-col p-5 rounded-lg bg-white hover:bg-gray-100 transition-shadow duration-300 border border-gray-200">
      {icons && (
        <div className="mb-10">
          <div className="text-3xl text-cyan-500">{icons}</div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-slate-900 mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}