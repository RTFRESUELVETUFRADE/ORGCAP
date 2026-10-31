const dateFormatter = new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric" });

/**
 * Formats a "YYYY-MM-DD" string as a local calendar date, without going through
 * `new Date(string)` — that parses date-only ISO strings as UTC midnight, which
 * rolls back to the previous day once formatted in any timezone behind UTC.
 */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  return dateFormatter.format(new Date(year, month - 1, day));
}
