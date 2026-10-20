import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { nav, site } from "@/lib/content";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-cream-50">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/images/brand/logo-white.png" alt="ORGCAP" width={36} height={36} className="h-8 w-8" />
            <span className="font-serif text-lg font-semibold">ORGCAP</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-50/70">
            {site.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-500 hover:text-navy-950"
              aria-label="Instagram de ORGCAP"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={site.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-amber-500 hover:text-navy-950"
              aria-label="Canal de YouTube de ORGCAP"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50/50">Navegación</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream-50/80 hover:text-amber-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-50/50">Contacto</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-cream-50/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-amber-400">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-amber-400">
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-50/50 sm:flex-row">
          <p>© {currentYear} {site.fullName}. Todos los derechos reservados.</p>
          <p>OTEC chilena · Santiago, Chile</p>
        </Container>
      </div>
    </footer>
  );
}
