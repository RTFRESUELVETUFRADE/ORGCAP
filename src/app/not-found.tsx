import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center text-center">
        <Image src="/images/brand/logo-navy.png" alt="ORGCAP" width={64} height={64} className="h-14 w-14" />
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">
          Error 404: no encontramos esta página
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600">
          Puede que el enlace esté desactualizado o que la página se haya movido. Vuelve al
          inicio o cuéntanos qué buscabas.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border-2 border-blue-200 px-7 py-3.5 text-base font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            Contactar a ORGCAP
          </Link>
        </div>
      </Container>
    </section>
  );
}
