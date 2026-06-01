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
      {
        title: "Declaración de Renta — Año Gravable 2025",
        desc: "Declaración del impuesto sobre la renta y complementarios correspondiente al año gravable 2025, presentada ante la DIAN el 11 de mayo de 2026.",
        href: "/legales/declaracion-renta-2025.pdf",
        meta: "PDF · 297 KB · 2025",
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

const objetoSocialParagrafos: string[] = [
  "La ASOCIACIÓN realizará las actividades de bienestar social a sus asociados relacionadas con: Desarrollar la actividad de afiliación de manera colectiva al sistema de seguridad social integral, o a cualquiera de sus sistemas de seguridad que lo componen, particularmente al régimen contributivo de salud; para todas las personas adherentes y/o copartícipes de los objetivos de la asociación, así mismo, las personas naturales que presten directamente o indirectamente, servicios, sin relación laboral con los entes territoriales de cualquier orden del estado o con empresas del sector privado, bajo la modalidad de contratos de prestación de servicios, o cualquier otra modalidad de servicios que adopten, los trabajadores independientes, sin discriminar el arte, la profesión, la ocupación u oficio de mano de obra calificada o no calificada ejecutando trabajos accidentales, ocasionales, provisionales, transitorios, por comisión o encargo, misión o tarea a término fijo o de manera autónoma por su cuenta y riesgo del sector informal de la economía subterránea legal; condiciones socioeconómicas de un ingreso no inferior a un (1) salario mínimo legal vigente en adelante, siendo nuestra asociación un actor activo en la ampliación de la cobertura en seguridad social integral.",
  "Apoyo a entidades sin ánimo de lucro debidamente habilitadas por el ministerio de salud que presten o desarrollen actividades o servicios, individuales o colectivos, de promoción de salud, prevención de las enfermedades, atención y curación de enfermedades en cualquiera de sus niveles de complejidad, rehabilitación de la salud y/o apoyo al mejoramiento del sistema de salud o salud pública, promoviendo la ampliación de cobertura en salud, hasta lograr que toda nuestra comunidad de trabajadores independientes, acceda al sistema de seguridad social, mediante mecanismos basados en el desarrollo del principio constitucional de solidaridad, con el otorgamiento de las prestaciones en forma integral.",
  "Promover el desarrollo social y la formación integral de la familia en el marco de los derechos sociales, culturales y económicos de la población colombiana, establecidos en la constitución nacional Colombiana, mediante la acción mancomunada con las instituciones del sector privado y los organismos de cooperación.",
  "Vincular a sus asociados al sistema de seguridad social de conformidad con la normatividad vigente para los trabajadores independientes. Igualmente podrá establecer programas alternativos para el cubrimiento de la seguridad social especialmente en el campo de la salud, informar a sus asociados sobre los derechos y deberes que adquieren al afiliarse de forma colectiva al sistema de seguridad social integral, así como colaborar y brindar la asesoría necesaria para adelantar los trámites administrativos de afiliación y reporte de novedades de los agremiados o asociados y sus beneficiarios.",
  "Fomentar la ayuda recíproca entre sus miembros, satisfaciendo sus necesidades mediante la prestación de servicios como: Asesoría jurídica para el reconocimiento de prestaciones asistenciales y económicas, desconocidas por algún ente de los que conforman el sistema de seguridad social integral. Formación permanente de temas relacionados con el cuidado de la salud en el trabajo y la prevención de accidentes de origen laboral, basados en el estudio previo de las condiciones generales para los trabajadores independientes de acuerdo con su profesión u oficio. Educación continua frente a temas relacionados con la generación de conciencia desde el coaching, para que nuestros trabajadores independientes entreguen sus servicios con un valor diferenciador o valor agregado, lo que contribuye al mejoramiento de su calidad de vida.",
  "Afiliar, recaudar y compensar los aportes de los trabajadores independientes al sistema de seguridad social, como entidades promotoras de salud, entidades prestadoras de servicios de salud, administradoras de riesgos profesionales, entidades de salud prepagada, administradora de fondo de pensiones y cesantías, caja de compensación familiar. La asociación podrá cobrar una contribución económica a cada afiliado para efectos de sufragar los gastos administrativos en que incurran por la afiliación colectiva, dinero que no será reembolsable.",
  "La asociación podrá establecer alianzas con entidades públicas y privadas para la vinculación a planes voluntarios de salud, que cubran las prestaciones asistenciales no contempladas en el plan básico de salud, estos planes serán contratados voluntariamente y financiados en su totalidad por el asociado. Dichos planes podrán ser de medicina prepagada, de atención pre-Hospitalaria, servicio de ambulancia prepagada, pólizas de seguros emitidas por compañías de seguros y otros planes autorizados por la superintendencia financiera y la superintendencia nacional de salud. Establecer alianzas con asociaciones de usuarios, las cuales serán promovidas y reglamentadas por el gobierno nacional con el fin de fortalecer la capacidad negociadora, la protección de los derechos y la participación comunitaria de los afiliados al sistema general de seguridad social en salud.",
  "Fomentar proyectos de capacitación de sus asociados mediante convenios con entidades públicas o privadas legalmente constituidas. Colaborar y asesorar para la solución de las necesidades del asociado. Promover el desarrollo y la tecnificación con el apoyo de la empresa privada y de las entidades gubernamentales. Colaborar en la satisfacción de las necesidades del asociado. Crear conciencia y generar cultura en el pago de la seguridad social integral de sus asociados y en general de los contratistas independientes y sus agremiaciones. Mejorar permanentemente sus condiciones socioeconómicas. Constituirse en mecanismo de defensa y garantía del ingreso del asociado trabajador y empeñarse en su mejoramiento y complementación. Procurar el acercamiento de los asociados sobre la base de justicia, de mutuo respeto y de subordinado a la Ley, y colaborar en el perfeccionamiento de los métodos peculiares de la respectiva actividad y al incremento de la economía general de los asociados.",
  "Asociar, representar judicial y extrajudicialmente a nombre de sus asociados, en la defensa de los derechos emanados de la actividad profesional correspondiente y representarlos ante las autoridades competentes y ante terceros, por las omisiones en la prestación de los servicios y en general cualquier perjuicio emanado del sistema de seguridad social integral. Celebrar convenios de afiliación de asociados y de beneficiarios al sistema de previsión exequial, con entidades exequiales a nivel local o nacional. Patrocinar actividades deportivas y culturales. Prestación accesoria jurídica y contable con consulta gratuita a sus asociados y realizar convenios con entidades autorizadas para ofrecerles a sus asociados mecanismos alternativos de la solución de conflictos como la conciliación, amigables componedores y árbitros para la resolución de conflictos que llegaren a presentarse entre sus asociados o terceros. Adquirir a cualquier título, los bienes muebles que se requieren para el ejercicio de sus funciones.",
  "Que en mérito de lo anterior y en concordancia con el artículo 359 del estatuto tributario nacional las actividades de la asociación se encaminan según lo siguiente.",
];

const actividadesMeritorias: { num: string; titulo: string; descripcion: string }[] = [
  {
    num: "1",
    titulo: "Educación",
    descripcion:
      "Conforme se define por las Leyes 30 de 1992 y 115 de 1994, 1064 de 2006, y 1804 de 2016. Literal D) Educación para el trabajo y desarrollo humano.",
  },
  {
    num: "2",
    titulo: "Salud",
    descripcion:
      "La prestación o desarrollo de actividades o servicios, individuales o colectivos, de promoción de salud, prevención de las enfermedades, atención y curación de enfermedades en cualquiera de sus niveles de complejidad, rehabilitación de la salud y/o apoyo al mejoramiento del sistema de salud o salud pública, por parte de entidades debidamente habilitadas por el Ministerio de Salud y Protección Social o por las autoridades competentes, exceptuando las exclusiones de la Ley Estatutaria 1751 de 2015.",
  },
  {
    num: "3",
    titulo: "Cultura",
    descripcion:
      "Actividades culturales definidas por la Ley 397 de 1997 y aquellas actividades de promoción y desarrollo de la actividad cultural.",
  },
  {
    num: "4",
    titulo: "Actividades de desarrollo social",
    descripcion: "",
  },
  {
    num: "5",
    titulo: "Promoción y apoyo a las actividades deportivas",
    descripcion:
      "Definidas por la Ley 181 de 1995, mediante las políticas públicas y las entidades competentes.",
  },
  {
    num: "6",
    titulo: "Actividades de promoción y mejoramiento de la Administración de Justicia",
    descripcion: "",
  },
  {
    num: "7",
    titulo: "Promoción y apoyo a entidades sin ánimo de lucro",
    descripcion:
      "Que ejecuten acciones directas en el territorio nacional en alguna de las actividades meritorias descritas en este artículo.",
  },
];

const cargosDirectivos: { nombre: string; cargo: string; identificacion: string }[] = [
  { nombre: "GILDARDO ANTONIO TORO VARGAS", cargo: "Presidente", identificacion: "CC 4.344.003" },
  { nombre: "MARIA NELLY OROZCO GARCIA", cargo: "Vicepresidente", identificacion: "CC 24.385.965" },
  { nombre: "JULIAN ANDRES ACERO RAMIREZ", cargo: "Tesorero", identificacion: "CC 14.398.972" },
  { nombre: "DIANA MARCELA TORO OROZCO", cargo: "Secretaria", identificacion: "CC 1.054.918.329" },
];

const fundadores: { nombre: string; identificacion: string }[] = [
  { nombre: "ERNESTO DE JESUS ESPINOSA", identificacion: "CC 14.196.405" },
  { nombre: "ALVARO RESTREPO VALENCIA", identificacion: "CC 75.039.383" },
  { nombre: "BEATRIZ EUGENIA TORO OROZCO", identificacion: "CC 66.955.215" },
  { nombre: "CARLOS EDWARD OSORIO AGUIAR", identificacion: "CC 75.074.978" },
  { nombre: "ERNESTO JESUS ESPINOSA JIMENEZ", identificacion: "CC 93.395.989" },
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

      <section className="bg-slate-50 section">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            Información de transparencia
          </p>
          <h2 className="mt-2 section-title">
            Objeto social, dirección y patrimonio
          </h2>
          <p className="section-subtitle max-w-3xl">
            Información requerida a las entidades sin ánimo de lucro
            pertenecientes al Régimen Tributario Especial, en cumplimiento del
            artículo 364-5 del Estatuto Tributario y el Decreto 2150 de 2017.
          </p>

          <div className="mt-12 space-y-10">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  1
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Numeral 1
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Descripción de la actividad meritoria — Objeto social
                  </h3>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-justify text-[0.95rem] leading-relaxed text-slate-700">
                {objetoSocialParagrafos.map((parrafo, idx) => (
                  <p key={idx}>{parrafo}</p>
                ))}
              </div>

              <ol className="mt-8 space-y-4 border-t border-slate-100 pt-6">
                {actividadesMeritorias.map((act) => (
                  <li
                    key={act.num}
                    className="flex gap-4 rounded-xl bg-slate-50 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
                      {act.num}
                    </span>
                    <div className="text-[0.95rem] leading-relaxed text-slate-700">
                      <span className="font-semibold text-slate-900">
                        {act.titulo}
                        {act.descripcion ? "." : ""}
                      </span>
                      {act.descripcion ? ` ${act.descripcion}` : ""}
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  2
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Numeral 2
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Nombres e identificación de cargos directivos y de control
                  </h3>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <tr>
                      <th className="px-5 py-3">Nombres y apellidos</th>
                      <th className="px-5 py-3">Cargo</th>
                      <th className="px-5 py-3">Número de identificación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {cargosDirectivos.map((p) => (
                      <tr key={p.identificacion}>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          {p.nombre}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {p.cargo}
                        </td>
                        <td className="px-5 py-4 font-mono text-slate-700">
                          {p.identificacion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  3
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Numeral 3
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Montos pagos salariales — Cuerpos directivos
                  </h3>
                </div>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
                <p className="text-[0.95rem] leading-relaxed text-slate-700">
                  Durante el año gravable 2025 y lo que va corrido del año 2026
                  no se han generado pagos a los miembros de cuerpos directivos
                  o de control, es decir el valor de los pagos durante los
                  periodos en mención es:
                </p>
                <div className="rounded-2xl bg-brand-50 p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Total pagado 2025 – 2026
                  </p>
                  <p className="mt-2 text-3xl font-bold text-brand-700 sm:text-4xl">
                    $ 0 COP
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  4
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Numeral 4
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Nombres e identificación de los fundadores
                  </h3>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
                    <tr>
                      <th className="px-5 py-3">Nombres y apellidos</th>
                      <th className="px-5 py-3">Número de identificación</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {fundadores.map((p) => (
                      <tr key={p.identificacion}>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          {p.nombre}
                        </td>
                        <td className="px-5 py-4 font-mono text-slate-700">
                          {p.identificacion}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
                  5
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Numeral 5
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                    Patrimonio de la asociación
                  </h3>
                </div>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-[1.4fr_1fr] sm:items-center">
                <p className="text-[0.95rem] leading-relaxed text-slate-700">
                  El patrimonio de la asociación con base a los estados
                  financieros presentados y aprobados por la asamblea general
                  de asociados asciende a:
                </p>
                <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-center text-white shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-50/80">
                    Patrimonio aprobado
                  </p>
                  <p className="mt-2 text-3xl font-bold sm:text-4xl">
                    $ 400.000.000
                  </p>
                  <p className="mt-1 text-xs text-brand-50/80">
                    pesos moneda corriente colombiana
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="documentos" className="section scroll-mt-20">
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
                Verifica nuestra información registral
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Puedes confirmar la existencia y los datos de la asociación
                consultando nuestro NIT 809.012.069-4 en el Registro Único
                Empresarial y Social (RUES), administrado por las Cámaras de
                Comercio del país. La consulta es pública y gratuita.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.rues.org.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar en el RUES
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
