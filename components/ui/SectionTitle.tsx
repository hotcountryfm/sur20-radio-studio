interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-sky-300">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}