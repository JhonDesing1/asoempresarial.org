import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-brand-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
              A
            </span>
            <span className="text-lg">{site.name}</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-600">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Enlaces</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><Link href="/nosotros" className="hover:text-brand-700">Nosotros</Link></li>
            <li><Link href="/beneficios" className="hover:text-brand-700">Beneficios</Link></li>
            <li><Link href="/servicios" className="hover:text-brand-700">Servicios</Link></li>
            <li><Link href="/planillas" className="hover:text-brand-700">Planillas</Link></li>
            <li><Link href="/afiliacion" className="hover:text-brand-700">Afiliación</Link></li>
            <li><Link href="/contacto" className="hover:text-brand-700">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-700">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-brand-700">
                {site.phoneLabel}: {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. Todos los derechos reservados.</p>
          <p>Pereira, Risaralda — Colombia</p>
        </div>
      </div>
    </footer>
  );
}
