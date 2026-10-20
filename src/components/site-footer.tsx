import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { site } from "@/lib/content";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer>
      <div className="bg-blue-600">
        <Container className="grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Image src="/images/brand/icon-white.png" alt="ORGCAP" width={56} height={56} className="h-12 w-12" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white">Contáctanos</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">{site.description}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-blue-700"
                aria-label="Instagram de ORGCAP"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-blue-700"
                aria-label="Facebook de ORGCAP"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.2C15.9 4.1 15 4 13.9 4c-2.2 0-3.7 1.34-3.7 3.8v2.6H7.6v3h2.6V21z" />
                </svg>
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white hover:text-blue-700"
                aria-label="Canal de YouTube de ORGCAP"
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
                  <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-blue-700/40 p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Información de contacto
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] text-white">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-blue-100">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href={`mailto:${site.email}`} className="hover:text-blue-100">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>{site.address}</span>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="bg-blue-900">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 sm:flex-row">
          <p>
            © {currentYear} {site.fullName}. Todos los derechos reservados.
          </p>
          <p className="flex gap-4">
            <Link href="/nosotros" className="hover:text-white">
              Nosotros
            </Link>
            <Link href="/contacto" className="hover:text-white">
              Contacto
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-blue-200">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-blue-200">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 6 10-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="mt-0.5 shrink-0 text-blue-200">
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
