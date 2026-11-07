import { projectTypes, type ProjectType } from "./site"

export type ContactInput = {
  name: string
  email: string
  project: string
  message: string
  company?: string
}

export type ContactPayload = {
  name: string
  email: string
  project: ProjectType
  projectLabel: string
  message: string
}

export type ParseResult =
  | { ok: true; ignored: true }
  | { ok: true; ignored: false; data: ContactPayload }
  | { ok: false; error: string }

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function parseContact(input: ContactInput): ParseResult {
  const company = (input.company ?? "").trim()
  if (company.length > 0) {
    return { ok: true, ignored: true }
  }

  const name = input.name.replace(/\s+/g, " ").trim()
  const email = input.email.trim().toLowerCase()
  const message = input.message.replace(/\r\n/g, "\n").trim()
  const project = input.project.trim()

  if (name.length < 2 || name.length > 80) {
    return { ok: false, error: "Please add your name." }
  }

  if (!EMAIL.test(email) || email.length > 120) {
    return { ok: false, error: "That email doesn’t look right." }
  }

  const match = projectTypes.find((item) => item.value === project)
  if (!match) {
    return { ok: false, error: "Choose what you need help with." }
  }

  if (message.length < 20 || message.length > 4000) {
    return {
      ok: false,
      error: "Add a little more detail so I can quote the work properly.",
    }
  }

  return {
    ok: true,
    ignored: false,
    data: {
      name,
      email,
      project: match.value,
      projectLabel: match.label,
      message,
    },
  }
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

export function oneLine(value: string) {
  return value.replace(/[\r\n\t]+/g, " ").replace(/[<>]/g, "").slice(0, 80)
}
