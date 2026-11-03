"use server"

import { escapeHtml, oneLine, parseContact } from "@/lib/contact"

export type ContactFormState =
  | { ok: true }
  | { ok: false; error: string }

const DEFAULT_FROM = "Mac Daddy Digital <onboarding@resend.dev>"

function notReady(): ContactFormState {
  console.error(
    "Contact form is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
  )
  return {
    ok: false,
    error: "This form can’t deliver messages yet. Please try again later.",
  }
}

export async function sendContactForm(input: {
  name: string
  email: string
  project: string
  message: string
  company?: string
}): Promise<ContactFormState> {
  const parsed = parseContact(input)

  if (!parsed.ok) {
    return parsed
  }

  if (parsed.ignored) {
    return { ok: true }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL?.trim()
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM

  if (!apiKey || !to) {
    return notReady()
  }

  const { name, email, projectLabel, message } = parsed.data
  const safeName = oneLine(name)
  const htmlMessage = escapeHtml(message).replace(/\n/g, "<br>")

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Quote request: ${projectLabel} — ${safeName}`,
        text: `Name: ${name}\nEmail: ${email}\nProject: ${projectLabel}\n\n${message}`,
        html: `<h2>New quote request</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Project:</strong> ${escapeHtml(projectLabel)}</p><p><strong>Message:</strong></p><p>${htmlMessage}</p>`,
      }),
      signal: AbortSignal.timeout(12000),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error("Resend rejected the contact email", response.status, detail)
      return {
        ok: false,
        error:
          response.status === 401 || response.status === 403 || response.status === 422
            ? "The message couldn’t be delivered. The studio’s mail setup needs a quick fix — please try again later."
            : "That didn’t send. Please try again in a moment.",
      }
    }

    return { ok: true }
  } catch (error) {
    console.error("Contact form send failed", error)
    return {
      ok: false,
      error: "That didn’t send. Please try again in a moment.",
    }
  }
}
