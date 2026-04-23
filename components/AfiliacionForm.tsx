"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function AfiliacionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type: "afiliacion" }),
      });
      if (!res.ok) throw new Error("No se pudo enviar la solicitud.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Error desconocido");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombres" name="firstName" required />
        <Field label="Apellidos" name="lastName" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Cédula" name="idNumber" required />
        <Field label="Ciudad" name="city" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Correo" name="email" type="email" required />
        <Field label="Teléfono" name="phone" type="tel" required />
      </div>
      <Field label="Actividad / ocupación" name="activity" required />

      <div>
        <label htmlFor="comments" className="mb-1 block text-sm font-medium text-slate-700">
          Comentarios
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" name="accept" required className="mt-1 h-4 w-4" />
        <span>
          Acepto el tratamiento de datos personales conforme a la política de
          privacidad de ASOEMPRESARIAL.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      {status === "sent" && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
          ¡Solicitud recibida! Te contactaremos en menos de 24 horas.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
          {error ?? "Hubo un problema enviando la solicitud."}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </div>
  );
}
