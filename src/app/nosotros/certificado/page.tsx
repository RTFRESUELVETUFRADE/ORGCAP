import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { certificate, site } from "@/lib/content";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Certificado OTEC",
  description: `${site.legalName} está certificada bajo la norma NCh 2728:2015. Revisa el alcance y los datos del certificado.`,
};

export default function CertificadoPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-5xl">
        <Link href="/nosotros" className="text-sm font-semibold text-slate-500 hover:text-blue-600">
          ← Volver a Sobre nosotros
        </Link>

        <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-blue-950 sm:text-4xl">
          {certificate.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          {site.legalName} (RUT {site.rut}) mantiene su sistema de gestión de calidad certificado bajo la norma
          chilena NCh 2728:2015, la norma de acreditación para Organismos Técnicos de Capacitación (OTEC) en Chile.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div className="overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
            <object
              data={`${certificate.pdfPath}#view=FitH`}
              type="application/pdf"
              className="hidden h-[70vh] w-full sm:block"
              aria-label="Certificado NCh 2728:2015 de ORGCAP"
            >
              <p className="p-8 text-sm text-slate-600">
                Tu navegador no puede mostrar el PDF directamente.{" "}
                <a href={certificate.pdfPath} className="font-semibold text-blue-600 underline">
                  Descárgalo aquí
                </a>
                .
              </p>
            </object>
            <div className="flex flex-col items-center gap-4 p-8 text-center sm:hidden">
              <p className="text-sm text-slate-600">
                Abre el certificado en una pestaña nueva para verlo completo en tu teléfono.
              </p>
              <a
                href={certificate.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white"
              >
                Abrir certificado (PDF)
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-blue-950 p-7 text-white sm:p-8">
            <h2 className="text-lg font-semibold">Datos del certificado</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-white/50">Otorgado a</dt>
                <dd className="font-medium">{site.legalName}</dd>
                <dd className="text-white/70">RUT {site.rut}</dd>
              </div>
              <div>
                <dt className="text-white/50">Norma</dt>
                <dd className="font-medium">NCh 2728:2015</dd>
              </div>
              <div>
                <dt className="text-white/50">Alcance de la certificación</dt>
                <dd className="text-white/80">{certificate.scope}</dd>
              </div>
              <div>
                <dt className="text-white/50">Certificadora</dt>
                <dd className="font-medium">{certificate.issuer}</dd>
                <dd className="text-white/70">{certificate.accreditation}</dd>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div>
                  <dt className="text-white/50">N° certificado</dt>
                  <dd className="font-medium">{certificate.certificateNumber}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Registro INN</dt>
                  <dd className="font-medium">{certificate.registryNumber}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Otorgamiento</dt>
                  <dd className="font-medium">{formatDate(certificate.issuedAt)}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Vigente hasta</dt>
                  <dd className="font-medium">{formatDate(certificate.expiresAt)}</dd>
                </div>
              </div>
            </dl>

            <a
              href={certificate.pdfPath}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 hover:bg-blue-50"
            >
              Descargar PDF original
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
