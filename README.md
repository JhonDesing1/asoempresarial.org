# ASOEMPRESARIAL — Sitio web

Sitio oficial de la **Asociación de Trabajadores Independientes** (Pereira, Colombia).
Construido con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Desplegado en **Vercel**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Variables de entorno

Copia `.env.example` a `.env.local` y completa:

- `CONTACT_EMAIL` — correo que recibe formularios (por defecto `info@solucionempresarial.com.co`).
- `RESEND_API_KEY` — (opcional) para enviar correos reales vía [Resend](https://resend.com). Si no se define, los mensajes se registran en los logs de Vercel.

## Despliegue

Cada `git push` a `main` despliega automáticamente en Vercel.

## Estructura

```
app/           Rutas App Router (Next.js 15)
  api/         Endpoints serverless (contacto/afiliación)
components/    Componentes reutilizables
lib/           Configuración compartida (site.ts)
public/        Archivos estáticos
```
