import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = Record<string, string> & { type?: "contacto" | "afiliacion" };

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL ?? site.email;
  const apiKey = process.env.RESEND_API_KEY;

  const subject =
    data.type === "afiliacion"
      ? `Nueva solicitud de afiliación — ${data.firstName ?? ""} ${data.lastName ?? ""}`
      : `Nuevo mensaje de contacto — ${data.subject ?? "sin asunto"}`;

  const lines = Object.entries(data)
    .filter(([k]) => k !== "type")
    .map(([k, v]) => `<strong>${escapeHtml(k)}:</strong> ${escapeHtml(String(v))}`)
    .join("<br/>");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#1e293b">
      <h2 style="color:#1d4ed8">${escapeHtml(subject)}</h2>
      <p>Recibido desde <strong>${site.name}</strong> (${site.domain})</p>
      <div style="background:#f1f5f9;padding:16px;border-radius:8px;margin-top:12px">
        ${lines}
      </div>
    </div>
  `;

  if (!apiKey) {
    console.log("[contact] No RESEND_API_KEY set. Logging payload instead.");
    console.log({ to, subject, data });
    return NextResponse.json({ ok: true, note: "logged" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `ASOEMPRESARIAL <noreply@${site.domain}>`,
        to: [to],
        reply_to: data.email,
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json({ error: errText }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "send failed" },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
