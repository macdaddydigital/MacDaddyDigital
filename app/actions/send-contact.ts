'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(formData: {
  name: string
  email: string
  message: string
  vibe: string
}) {
  const { name, email, message, vibe } = formData

  try {
    const { data, error } = await resend.emails.send({
      from: 'MacDaddy Digital <onboarding@resend.dev>', // You should change this to your verified domain later
      to: ['projects@macdaddydigital.ca'],
      subject: `New ${vibe.toUpperCase()} Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Vibe:</strong> ${vibe}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return { success: false, error: 'Failed to send email. Please try again.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Unexpected error:', err)
    return { success: false, error: 'Something went wrong. Please try again later.' }
  }
}
