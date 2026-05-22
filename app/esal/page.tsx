import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "ESAL — Transparencia y documentos legales",
  description: `Como Entidad Sin Ánimo de Lucro, ${site.name} pone a disposición del público sus documentos legales, financieros y de gestión: certificado de cámara de comercio, estados financieros, informe de gestión y reglamento interno.`,
};

type DocItem = {
  title: string;
  desc: string;
  href: string;
  meta: string;
};

type DocGroup = {
  category: string;
  intro: string;
  docs: DocItem[];
};

const documentGroups: DocGroup[] = [
  {
    category: "Constitución y registro",
    intro:
      "Documentos que acreditan la existencia legal de la asociación y su representación ante terceros.",
    docs: [
      {
        title: "Certificado de Existencia y Representación Legal 2026",
        desc: "Expedido por la Cámara de Comercio de Pereira. Acredita la inscripción, el domicilio, la representación legal y la vigencia de la entidad.",
        href: "/legales/certificado-existencia-representacion-legal-2026.pdf",
        meta: "PDF · 235 KB · 2026",
      },
    ],
  },
  {
    category: "Información financiera y de gestión",
    intro:
      "Rendición de cuentas del último período: resultados, ejecución y estado patrimonial de la asociación.",
    docs: [
      {
        title: "Estados Financieros y Notas 2025",
        desc: "Estado de situación financiera comparativo 2025–2024, con sus notas explicativas, expresado en pesos colombianos.",
        href: "/legales/estados-financieros-2025.pdf",
        meta: "PDF · 203 KB · 2025",
      },
      {
        title: "Informe de Gestión 2025",
        desc: "Informe de la administración correspondiente al período del 1 de enero al 31 de diciembre de 2025, presentado a la Asamblea General.",
        href: "/legales/informe-gestion-2025.pdf",
        meta: "PDF · 156 KB · 2025",
      },
    ],
  },
  {
    category: "Normatividad interna",
    intro:
      "Reglas que rigen la afiliación de los asociados y el funcionamiento interno de la entidad.",
    docs: [
      {
        title: "Reglamento Interno de Afiliación Colectiva",
        desc: "Deberes y derechos de los asociados frente a la afiliación colectiva al Sistema de Seguridad Social Integral, conforme al Decreto 780 de 2016.",
        href: "/legales/reglamento-interno.pdf",
        meta: "PDF · 199 KB",
      },
    ],
  },
];

const orgData: { label: string; value: string }[] = [
  { label: "Razón social", value: "Asociación & Soluciones Empresariales en Desarrollo" },
  { label: "NIT", value: "809.012.069-4" },
  { label: "Naturaleza jurídica", value: "Asociación mutual — entidad sin ánimo de lucro" },
  { label: "Domicilio", value: "Pereira, Risaralda — Colombia" },
  { label: "Inscripción", value: "Cámara de Comercio de Pereira — No. S0506496 (30 ago. 2023)" },
  { label: "Constitución", value: "Escritura Pública No. 121 del 30 ene. 2004 — Notaría 5ª de Ibagué" },
  { label: "Grupo NIIF", value: "Grupo III — Microempresas" },
  { label: "Representante legal", value: "Gildardo Antonio Toro Vargas — Presidente" },
  { label: "Vigilancia y control", value: "Secretaría de Gobierno Departamental de Risaralda" },
];

function DownloadIcon() {
  return (
    <svg
      aria-hidden
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      aria-hidden
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 3v4a1 1 0 001 1h4M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z"
      />
    </svg>
  );
}

export default function EsalPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Transparencia
          </p>
          <h1 className="mt-2 section-title">Entidad Sin Ánimo de Lucro (ESAL)</h1>
          <p className="section-subtitle max-w-3xl">
            {site.name} es una asociación mutual sin ánimo de lucro. En coherencia
            con ese carácter, ponemos a disposición de nuestros asociados y del
            público en general los documentos legales, financieros y de gestión
            que respaldan nuestra operación y nuestro compromiso con la
            transparencia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#documentos" className="btn-primary">
              Ver documentos
            </a>
            <Link href="/contacto" className="btn-secondary">
              Solicitar información adicional
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Datos de la organización</h2>
          <p className="section-subtitle max-w-3xl">
            Información oficial de identificación de la entidad, según el registro
            de la Cámara de Comercio de Pereira.
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {orgData.map((item) => (
              <div key={item.label} className="bg-white p-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm font-medium text-slate-900">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="documentos" className="bg-slate-50 section scroll-mt-20">
        <div className="container-page">
          <h2 className="section-title">Documentos para consulta</h2>
          <p className="section-subtitle max-w-3xl">
            Descarga los documentos en formato PDF. Cada archivo corresponde al
            registro vigente y se actualiza periódicamente conforme a la
            normatividad aplicable.
          </p>

          <div className="mt-12 space-y-12">
            {documentGroups.map((group) => (
              <div key={group.category}>
                <div className="flex flex-col gap-1 border-l-4 border-brand-600 pl-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    {group.category}
                  </h3>
                  <p className="text-sm text-slate-600">{group.intro}</p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {group.docs.map((doc) => (
                    <div
                      key={doc.href}
                      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                          <FileIcon />
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-slate-900">
                            {doc.title}
                          </h4>
                          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                            {doc.meta}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                        {doc.desc}
                      </p>
                      <div className="mt-6">
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                          className="btn-primary !py-2 text-sm"
                        >
                          <DownloadIcon />
                          <span className="ml-2">Descargar PDF</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Verifica la autenticidad de nuestro certificado
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                El Certificado de Existencia y Representación Legal incluye un
                código de verificación expedido por Confecámaras. Puedes
                confirmar su validez en línea directamente con la entidad
                emisora, de forma gratuita e ilimitada durante los 60 días
                siguientes a su expedición.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://sii.confecamaras.co/vista/plantilla/cv.php"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Verificar en Confecámaras
              </a>
              <Link href="/contacto" className="btn-secondary">
                Contactar a la asociación
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page rounded-3xl bg-brand-700 px-8 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Necesitas otro documento o información?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-50/90">
            Si requieres documentación adicional sobre {site.name} o tienes
            inquietudes sobre nuestra gestión como entidad sin ánimo de lucro,
            con gusto te atendemos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${site.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              {site.phoneLabel}: {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
