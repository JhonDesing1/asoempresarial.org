import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description: `Conoce la historia, misión, visión y valores de ${site.name}.`,
};

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Nosotros</h1>
          <p className="section-subtitle max-w-3xl">
            {site.name} es la {site.fullName}, una organización sin ánimo de
            lucro con sede en {site.city}, comprometida con el fortalecimiento
            del trabajador independiente en Colombia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-brand-700">Misión</h2>
            <p className="mt-3 text-slate-600">
              Representar, acompañar y fortalecer a los trabajadores
              independientes, ofreciendo servicios, formación y beneficios que
              mejoren su calidad de vida y la competitividad de su actividad.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-brand-700">Visión</h2>
            <p className="mt-3 text-slate-600">
              Ser la asociación referente de trabajadores independientes en el
              Eje Cafetero para el año 2030, reconocida por su impacto social,
              su gestión transparente y la calidad de sus servicios.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section">
        <div className="container-page">
          <h2 className="section-title text-center">Nuestros valores</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Unión", d: "Trabajo en comunidad." },
              { t: "Transparencia", d: "Gestión abierta y honesta." },
              { t: "Solidaridad", d: "Apoyo mutuo entre afiliados." },
              { t: "Compromiso", d: "Con el país y el trabajo digno." },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-700">{v.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title">Nuestra historia</h2>
          <p className="section-subtitle max-w-3xl">
            {site.name} nació con un propósito claro: darle voz y respaldo a
            miles de trabajadores independientes de Pereira y Risaralda que,
            por su naturaleza, enfrentan retos únicos en materia de seguridad
            social, tributación y acceso a servicios. Hoy, somos una red viva
            de personas que creen en el trabajo independiente como motor de
            desarrollo local.
          </p>
        </div>
      </section>
    </>
  );
}
