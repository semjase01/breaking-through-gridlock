# Breaking Through Gridlock

The website for [Breaking Through Gridlock: The Power of Conversation in a Polarized World](https://breakingthroughgridlock.com) by Jason Jay and Gabriel Grant.

Built with Next.js (App Router), deployed on Vercel. Rebuilt from the original WordPress/Divi site in September 2026.

## Local development

```bash
npm install
npm run dev
```

## Contact form email

The contact and free-chapter forms post to `/api/contact`, which sends email through [Resend](https://resend.com). Set these environment variables in Vercel (Project Settings → Environment Variables):

| Variable | Required | Default |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, for forms to work | none (forms show a friendly error without it) |
| `CONTACT_TO_EMAIL` | No | `gabriel.grant@gmail.com` |
| `CONTACT_FROM_EMAIL` | No | `Breaking Through Gridlock <onboarding@resend.dev>` |

For production, verify the domain in Resend and set `CONTACT_FROM_EMAIL` to something like `Breaking Through Gridlock <hello@breakingthroughgridlock.com>`.

## Pages

- `/` — home: pillars, about the book, team, news and media, contact
- `/organizations` — consulting for impact investors, purpose-driven businesses, NGOs
- `/highered` — curriculum resources and institutional programs
- `/speaking-consulting` — workshops and speaking
- `/resources` — the book (`#book`) and videos (`#video`)
- `/chapter-one` — free chapter preview signup

URL paths match the old WordPress site, so existing links keep working.
