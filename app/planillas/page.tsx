import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulta de planillas",
  description: `Consulta tus planillas de seguridad social (PILA) a través de los operadores autorizados. ${site.name} te orienta en el proceso.`,
};

const operators = [
  {
    name: "Aportes en Línea",
    desc: "Operador para personas naturales y jurídicas. Permite liquidar, pagar y consultar planillas PILA en línea.",
    url: "https://www.aportesenlinea.com",
  },
  {
    name: "SOI – Suaporte",
    desc: "Operador de información de la seguridad social. Consulta y descarga el soporte de tus planillas pagadas.",
    url: "https://www.soi.com.co",
  },
  {
    name: "Mi Planilla",
    desc: "Plataforma para liquidación y pago de PILA para independientes y empleadores.",
    url: "https://www.miplanilla.com",
  },
  {
    name: "Pague Fácil PSE",
    desc: "Liquida y paga tu planilla integrada de aportes desde cualquier banco habilitado en PSE.",
    url: "https://www.paguefacil.com.co",
  },
  {
    name: "ARUS – Asopagos",
    desc: "Pagos asistidos, planilla asistida y consulta de aportes para trabajadores independientes y empresas.",
    url: "https://www.arus.com.co",
  },
  {
    name: "Simple",
    desc: "Operador PILA con autoliquidación en línea para independientes, hogares y empresas.",
    url: "https://www.simplesa.co",
  },
];

const steps = [
  {
    n: "1",
    title: "Identifica tu operador",
    desc: "Si ya pagas PILA, selecciona el operador con el que realizaste tu última planilla.",
  },
  {
    n: "2",
    title: "Ingresa con tus datos",
    desc: "Accede con el documento del aportante y la contraseña que registraste con el operador.",
  },
  {
    n: "3",
    title: "Consulta o descarga",
    desc: "Visualiza el detalle de la planilla, descarga el soporte y verifica novedades reportadas.",
  },
];

export default function PlanillasPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Consulta de planillas</h1>
          <p className="section-subtitle max-w-3xl">
            Accede a tu Planilla Integrada de Liquidación de Aportes (PILA) y
            verifica tus pagos de seguridad social a través de los operadores
            autorizados en Colombia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${site.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
                "Hola, necesito ayuda con la consulta de mi planilla de seguridad social."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar acompañamiento
            </a>
            <Link href="/contacto" className="btn-secondary">
              Contactar al área de servicio al cliente
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Operadores autorizados</h2>
          <p className="section-subtitle max-w-3xl">
            Selecciona el operador con el que liquidas y paga tu seguridad
            social para consultar el soporte y los detalles de tus planillas.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {operators.map((o) => (
              <a
                key={o.name}
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-brand-700 group-hover:underline">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {o.desc}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-700">
                  Ir al operador
                  <svg
                    aria-hidden
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7v7M21 3l-9 9M5 5h6v2H7v10h10v-4h2v6H5z"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section">
        <div className="container-page">
          <h2 className="section-title">¿Cómo consultar tu planilla?</h2>
          <p className="section-subtitle max-w-3xl">
            Sigue estos pasos para verificar el pago de tus aportes en salud,
            pensión y riesgos laborales.
          </p>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page rounded-3xl bg-brand-700 px-8 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿No sabes con qué operador estás registrado?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-50/90">
            En {site.name} te ayudamos a identificar tu operador, verificar el
            estado de tus aportes y mantener al día tu seguridad social.
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
