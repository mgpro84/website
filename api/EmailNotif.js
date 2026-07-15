import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API)
const TO = process.env.RECIPIENT_EMAIL

// Escape user-provided values before interpolating into the HTML body
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST({ request }) {
  let data
  try {
    data = await request.json()
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    })
  }

  const { name, phone, email, message } = data ?? {}

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ error: "Champs requis manquants." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }

  const safeName = escapeHtml(name)
  const safePhone = escapeHtml(phone || "—")
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

  try {
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [TO],
      replyTo: email,
      subject: `Nouveau message du site web — ${safeName}`,
      html: `
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 502,
        headers: { "Content-Type": "application/json" }
      })
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    })
  }
}
