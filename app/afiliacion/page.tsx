import type { Metadata } from "next";
import { AfiliacionForm } from "@/components/AfiliacionForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Afiliación",
  description: `Afíliate a ${site.name} y accede a todos los beneficios para trabajadores independientes.`,
};

const steps = [
  { n: "1", t: "Completa el formulario", d: "Compártenos tus datos básicos." },
  { n: "2", t: "Te contactamos", d: "Resolvemos dudas y validamos información." },
  { n: "3", t: "Pago de cuota", d: "Realiza el pago de tu aporte mensual o anual." },
  { n: "4", t: "¡Bienvenido!", d: "Recibes tu carnet digital y acceso a beneficios." },
];

export default function AfiliacionPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Afíliate a {site.name}</h1>
          <p className="section-subtitle max-w-3xl">
            Un proceso simple, transparente y en línea. Déjanos tus datos y en
            menos de 24 horas te contactamos para finalizar tu afiliación.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="section-title text-center">Cómo funciona</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {s.n}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="section-title">Formulario de afiliación</h2>
            <p className="mt-3 text-slate-600">
              Completa tus datos. Nuestro equipo te contactará pronto al correo
              y teléfono que nos indiques.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>✓ Sin costo inicial de inscripción</li>
              <li>✓ Asesoría gratuita durante el proceso</li>
              <li>✓ Puedes cancelar cuando quieras</li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <AfiliacionForm />
          </div>
        </div>
      </section>
    </>
  );
}
