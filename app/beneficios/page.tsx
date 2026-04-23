import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beneficios",
  description: `Descubre todos los beneficios que tienes al afiliarte a ${site.name}.`,
};

const benefits = [
  {
    title: "Afiliación a seguridad social",
    desc: "Acompañamiento para vincularte a EPS, pensión y ARL como trabajador independiente, con planilla PILA asistida.",
  },
  {
    title: "Asesoría jurídica",
    desc: "Consultas laborales, civiles y comerciales con nuestros abogados aliados a precios preferenciales.",
  },
  {
    title: "Asesoría contable y tributaria",
    desc: "Orientación en RUT, facturación electrónica, régimen simple y declaración de renta.",
  },
  {
    title: "Formación continua",
    desc: "Talleres y cursos en finanzas personales, marketing digital, ventas y emprendimiento.",
  },
  {
    title: "Descuentos con aliados",
    desc: "Precios preferenciales en clínicas, ópticas, gimnasios, tecnología y más.",
  },
  {
    title: "Red de oportunidades",
    desc: "Conecta con otros afiliados, participa en ferias, ruedas de negocio y licitaciones conjuntas.",
  },
  {
    title: "Representación gremial",
    desc: "Tu voz ante alcaldías, gobernaciones, Cámara de Comercio y entidades del Estado.",
  },
  {
    title: "Acompañamiento personalizado",
    desc: "Un equipo humano que te orienta paso a paso en cada etapa de tu actividad independiente.",
  },
];

export default function BeneficiosPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Beneficios de afiliarte</h1>
          <p className="section-subtitle max-w-3xl">
            Ser parte de {site.name} te abre las puertas a una red de apoyo,
            formación y ahorro que te ayuda a trabajar mejor y vivir mejor.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="container-page mt-12 text-center">
          <Link href="/afiliacion" className="btn-primary">
            Quiero afiliarme
          </Link>
        </div>
      </section>
    </>
  );
}
