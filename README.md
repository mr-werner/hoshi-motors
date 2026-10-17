# Hoshi Motors — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://www.hoshimotors.net (Boulder, CO).
Preview: https://hm.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

This is a custom build for Hoshi Motors, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `hoshi-motors` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `hm.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-24) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- The current site is about 80 words on one page with no page title, navigation, images or services. The concept turns that into a full one-page site with services, hours, directions and booking.
- Adds an appointment request form; today the only options are calling or emailing.
- Hours now show AM/PM ("7:30 am – 5:00 pm" instead of "7:30 to 5:00").
- Adds a page title and meta description so the shop shows up properly in search and link previews.
- Custom design drawn from the name (hoshi means "star"): a star crest and 星 seal in place of the missing logo, indigo, vermilion and washi paper, Shippori Mincho headings, a hero constellation of the four makes (with a nod to Subaru, the Japanese name for the Pleiades), noren-curtain make cards, seigaiha waves, and kanji-numbered services.
- Turns the "honest estimates so you can plan for repairs" promise into an example Now / Soon / Later estimate card.
- No reviews or ratings are invented. A Google rating appears only when the live Google feed is connected; otherwise there is just a Google link.

## Before client presentation

- Confirm the service list. The current site only names Honda, Acura, Toyota and Subaru, so the services shown are typical for a Japanese-car repair shop.
- The rating shows only when `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set; there is no fallback number.
- "15+ years" was removed because it couldn't be confirmed. Ask about years in business and whether there is an owner name or story to add.
- The estimate card uses sample items for illustration and says so on the card.
- Confirm star@hoshimotors.net is the right inbox for appointment requests.
- No logo or photos exist on the current site, so the crest is a concept mark. Swap in a real logo if one exists, and add shop photos with permission.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
