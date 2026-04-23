import Link from "next/link";
import { site } from "@/lib/site";

const benefits = [
  {
    title: "Representación gremial",
    desc: "Defendemos los intereses de los trabajadores independientes ante entidades públicas y privadas.",
    icon: "🤝",
  },
  {
    title: "Seguridad social",
    desc: "Orientación en afiliación a EPS, ARL, pensión y beneficios para el trabajador independiente.",
    icon: "🛡️",
  },
  {
    title: "Asesoría jurídica y tributaria",
    desc: "Acompañamiento en temas laborales, fiscales y contables a precios solidarios.",
    icon: "⚖️",
  },
  {
    title: "Capacitación continua",
    desc: "Formación gratuita y con descuento en emprendimiento, ventas, finanzas y marketing.",
    icon: "🎓",
  },
  {
    title: "Red de contactos",
    desc: "Conéctate con cientos de independientes, empresas aliadas y oportunidades de negocio.",
    icon: "🌐",
  },
  {
    title: "Descuentos exclusivos",
    desc: "Acceso a convenios y tarifas preferenciales con empresas aliadas en toda la región.",
    icon: "🏷️",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        <div className="container-page grid gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider">
              Pereira · Risaralda · Colombia
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {site.fullName}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-50/90">
              En {site.name} unimos a quienes trabajan por cuenta propia para
              fortalecer su actividad, acceder a beneficios y crecer juntos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/afiliacion"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
              >
                Afíliate ahora
              </Link>
              <Link
                href="/beneficios"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver beneficios
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl bg-white/10 p-8 backdrop-blur">
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  { n: "+500", l: "Afiliados activos" },
                  { n: "12", l: "Años de trayectoria" },
                  { n: "30+", l: "Aliados comerciales" },
                  { n: "100%", l: "Compromiso social" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="flex flex-col items-center justify-center rounded-2xl bg-white/10 p-4 text-center"
                  >
                    <div className="text-3xl font-bold">{s.n}</div>
                    <div className="mt-1 text-xs text-brand-50/80">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <h2 className="section-title">¿Por qué afiliarte?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Más que una asociación: una comunidad que te respalda, capacita y conecta
            con nuevas oportunidades.
          </p>
        </div>
        <div className="container-page mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-3xl" aria-hidden>{b.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Nuestra misión</h2>
            <p className="section-subtitle">
              En {site.name} trabajamos para dignificar, proteger y fortalecer el
              trabajo independiente en Pereira y Colombia. Creemos en el poder de
              la unión: cuando los independientes se organizan, la economía local
              prospera.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/nosotros" className="btn-primary">Conoce más</Link>
              <Link href="/contacto" className="btn-secondary">Contáctanos</Link>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Unión", d: "Somos más fuertes cuando trabajamos juntos." },
              { t: "Transparencia", d: "Cuentas claras y gestión abierta." },
              { t: "Solidaridad", d: "Nos apoyamos los unos a los otros." },
              { t: "Crecimiento", d: "Capacitación y oportunidades reales." },
            ].map((v) => (
              <li
                key={v.t}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-brand-700">{v.t}</h3>
                <p className="mt-1 text-sm text-slate-600">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-page rounded-3xl bg-brand-700 px-8 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Listo para sumarte?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-50/90">
            Afíliate hoy y empieza a disfrutar de todos los beneficios que{" "}
            {site.name} tiene para ti.
          </p>
          <Link
            href="/afiliacion"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            Iniciar afiliación
          </Link>
        </div>
      </section>
    </>
  );
}
