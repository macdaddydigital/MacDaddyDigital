# Mac Daddy Digital

Website for Mac Daddy Digital, Cody Mac’s studio in Charlottetown, Prince Edward Island.

```bash
pnpm install
pnpm dev
```

## Contact form

Quote requests are emailed with [Resend](https://resend.com). `RESEND_API_KEY` is already set on the Vercel project. One more value is required before the form can deliver mail:

| Variable | Required | What to put |
| --- | --- | --- |
| `CONTACT_TO_EMAIL` | Yes | The inbox that should receive quote requests |
| `RESEND_API_KEY` | Yes | Already in Vercel. For local sends, copy it into `.env.local` |
| `CONTACT_FROM_EMAIL` | No | Sender address. Defaults to `Mac Daddy Digital <onboarding@resend.dev>` |

Resend’s `onboarding@resend.dev` sender only delivers to the email address on the Resend account. To deliver to any other inbox, verify a domain in Resend and set `CONTACT_FROM_EMAIL` to an address on that domain.

Add `CONTACT_TO_EMAIL` in Vercel for **Production** and **Preview**. If either `RESEND_API_KEY` or `CONTACT_TO_EMAIL` is missing, the form shows an error. It does not pretend the message was sent.

See `.env.example`.

## Easy to fill in later

- **Portfolio:** add real projects to the `projects` array in `lib/work.ts`. An empty list hides the section.
- **Photo:** set `portrait.src` in `lib/site.ts` to a file in `public/`, for example `"/cody.jpg"`. Leave it empty and no photo is shown.
