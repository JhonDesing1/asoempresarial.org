import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Escríbenos a ${site.email} o llámanos. Estamos en ${site.city}, ${site.country}.`,
};

export default function ContactoPage() {
  return (
    <>
      <section className="bg-slate-50 section">
        <div className="container-page">
          <h1 className="section-title">Contacto</h1>
          <p className="section-subtitle max-w-3xl">
            Estamos para resolver tus dudas. Escríbenos y te respondemos en el
            menor tiempo posible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Correo</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-brand-700 hover:underline"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">{site.phoneLabel}</h3>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="mt-1 block text-brand-700 hover:underline"
              >
                Celular: {site.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Dirección</h3>
              <p className="mt-1 text-slate-600">{site.address}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900">Horario de atención</h3>
              <p className="mt-1 text-slate-600">Lun – Vie: 8:00 a.m. – 5:00 p.m.</p>
              <p className="text-slate-600">Sáb: 9:00 a.m. – 12:00 p.m.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
