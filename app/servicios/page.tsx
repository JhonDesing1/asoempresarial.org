import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios",
  description: `Conoce los servicios que ${site.name} ofrece a sus afiliados y al público en general.`,
};

const services = [
  {
    title: "Seguridad social del independiente",
    items: [
      "Afiliación y pago de PILA",
      "Asesoría en EPS, ARL y pensión",
      "Cálculo correcto del IBC",
    ],
  },
  {
    title: "Servicios jurídicos",
    items: [
      "Contratos civiles y de prestación de servicios",
      "Derecho laboral y seguridad social",
      "Defensa en procesos disciplinarios",
    ],
  },
  {
    title: "Servicios contables",
    items: [
      "Facturación electrónica",
      "Régimen Simple de Tributación",
      "Declaración de renta personas naturales",
    ],
  },
  {
    title: "Formación y capacitación",
    items: [
      "Marketing digital para independientes",
      "Finanzas personales y ahorro",
      "Ventas consultivas y atención al cliente",
    ],
  },
  {
    title: "Eventos y networking",
    items: [
      "Ruedas de negocio mensuales",
      "Ferias de servicios",
      "Encuentros gremiales",
    ],
  },
  {
    title: "Convenios y beneficios",
    items: [
      "Descuentos en salud y bienestar",
      "Tarifas preferenciales en tecnología",
      "Acceso a crédito solidario",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Nuestros servicios</h1>
          <p className="section-subtitle max-w-3xl">
            Diseñados para el trabajador independiente: prácticos, accesibles y
            con acompañamiento real de nuestro equipo.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold text-brand-700">{s.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-0.5 text-brand-600" aria-hidden>✓</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="container-page mt-14 rounded-3xl bg-brand-700 px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-bold sm:text-3xl">
            ¿Necesitas un servicio específico?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-50/90">
            Escríbenos y te contactamos para explicarte cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </>
  );
}
