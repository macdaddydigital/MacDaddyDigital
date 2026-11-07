"use client"

import { useState, type FormEvent } from "react"
import { sendContactForm } from "@/app/actions/send-contact"
import { projectTypes } from "@/lib/site"

export function ContactForm() {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setPending(true)
    setError(null)

    const result = await sendContactForm({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      project: String(data.get("project") ?? ""),
      message: String(data.get("message") ?? ""),
      company: String(data.get("company") ?? ""),
    })

    setPending(false)

    if (result.ok) {
      form.reset()
      setSent(true)
      return
    }

    setError(result.error)
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/30 bg-panel px-6 py-12 text-center sm:px-10" role="status">
        <p className="font-display text-4xl text-gold">Got it.</p>
        <p className="mx-auto mt-4 max-w-sm text-muted">
          I’ll read this and write back. If it’s a fit, the reply includes a quote.
        </p>
        <button type="button" className="btn btn-secondary mt-8" onClick={() => setSent(false)}>
          Send another note
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-gold/25 bg-panel/80 p-5 sm:p-8">
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" maxLength={80} className="field" />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" maxLength={120} className="field" />
        </div>

        <fieldset>
          <legend className="mb-3 text-sm text-muted">What do you need?</legend>
          <div className="flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <label key={type.value} className="chip relative">
                <input type="radio" name="project" value={type.value} required />
                <span>{type.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-muted">
            Tell me about the project
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={20}
            maxLength={4000}
            rows={6}
            className="field min-h-40 resize-y"
            placeholder="What you’re hoping to build, who it’s for, and when you’d like it live."
          />
        </div>

        {error ? (
          <p role="alert" className="text-sm text-gold-bright">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? "Sending…" : "Get a quote"}
          </button>
          <p className="text-xs text-faint">I read every note myself.</p>
        </div>
      </div>
    </form>
  )
}
