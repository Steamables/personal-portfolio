type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-12">
      <p className="mb-3 font-display text-xs uppercase tracking-[0.24em] text-brand-300">
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  )
}
