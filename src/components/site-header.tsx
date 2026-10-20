"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./container";
import { nav } from "@/lib/content";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/5 bg-cream-50/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/logo-navy.png"
            alt="ORGCAP"
            width={40}
            height={40}
            className="h-9 w-9"
            priority
          />
          <span className="font-serif text-lg font-semibold tracking-tight text-navy-950">
            ORGCAP
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy-900 text-cream-50"
                    : "text-navy-900/80 hover:bg-navy-900/5 hover:text-navy-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contacto"
          className="hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-amber-400 md:inline-block"
        >
          Conversemos
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-navy-950 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-navy-900/5 bg-cream-50 md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-navy-900 hover:bg-navy-900/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber-500 px-4 py-2.5 text-center text-base font-semibold text-navy-950"
            >
              Conversemos
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
