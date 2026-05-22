import Link from "next/link";
import Image from "next/image";
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

const stats = [
  { n: "+500", l: "Afiliados activos" },
  { n: "12", l: "Años de trayectoria" },
  { n: "30+", l: "Aliados comerciales" },
  { n: "100%", l: "Compromiso social" },
];

const values = [
  { t: "Unión", d: "Somos más fuertes cuando trabajamos juntos." },
  { t: "Transparencia", d: "Cuentas claras y gestión abierta." },
  { t: "Solidaridad", d: "Nos apoyamos los unos a los otros." },
  { t: "Crecimiento", d: "Capacitación y oportunidades reales." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 text-white">
        {/* decorative blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl"
        />

        <div className="container-page relative grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider ring-1 ring-white/20">
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

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
              <Image
                src="/images/trabajadores.jpg"
                alt="Trabajadores independientes afiliados a ASOEMPRESARIAL reunidos"
                width={1168}
                height={784}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-brand-900/40 via-transparent to-transparent"
              />
            </div>
            {/* floating stat badge */}
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-3 text-brand-700 shadow-xl ring-1 ring-black/5 sm:left-8">
              <div className="text-2xl font-bold leading-none">+500</div>
              <div className="mt-1 text-xs font-medium text-slate-500">
                independientes nos respaldan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* stats strip */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-bold text-brand-700 sm:text-4xl">
                {s.n}
              </div>
              <div className="mt-1 text-sm text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Beneficios
          </span>
          <h2 className="mt-2 section-title">¿Por qué afiliarte?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Más que una asociación: una comunidad que te respalda, capacita y conecta
            con nuevas oportunidades.
          </p>
        </div>
        <div className="container-page mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl transition group-hover:bg-brand-100" aria-hidden>
                {b.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last lg:order-first">
            <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-900/5">
              <Image
                src="/images/personas2.jpg"
                alt="Capacitación y formación para trabajadores independientes"
                width={1168}
                height={784}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-6 -right-4 -z-10 h-40 w-40 rounded-3xl bg-brand-100 sm:-right-6"
            />
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Nuestra misión
            </span>
            <h2 className="mt-2 section-title">Unidos crecemos más</h2>
            <p className="section-subtitle">
              En {site.name} trabajamos para dignificar, proteger y fortalecer el
              trabajo independiente en Pereira y Colombia. Creemos en el poder de
              la unión: cuando los independientes se organizan, la economía local
              prospera.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <li
                  key={v.t}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-brand-200 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-brand-700">{v.t}</h3>
                  <p className="mt-1 text-sm text-slate-600">{v.d}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/nosotros" className="btn-primary">Conoce más</Link>
              <Link href="/contacto" className="btn-secondary">Contáctanos</Link>
            </div>
          </div>
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
