export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-navy-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-navy-900/70">{description}</p>
      )}
    </div>
  );
}
