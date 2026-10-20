export function SectionHeading({
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2
        className={`text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-blue-950"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${tone === "light" ? "text-white/75" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
