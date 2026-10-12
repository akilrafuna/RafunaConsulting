# Rafuna Consulting: website

Static site for [rafunaconsulting.com](https://rafunaconsulting.com), built with Astro, React islands, Tailwind v4, shadcn/ui, React Bits, GSAP and Lenis. Three languages, each with native URLs:

| | Albanian (default) | English | German |
| --- | --- | --- | --- |
| Home | `/` | `/en/` | `/de/` |
| Services | `/sherbimet/…` | `/en/services/…` | `/de/leistungen/…` |
| Tax guide | `/afatet-tatimore/` | `/en/kosovo-tax-guide/` | `/de/steuern-kosovo/` |
| About | `/rreth-nesh/` | `/en/about/` | `/de/ueber-uns/` |
| Contact | `/kontakt/` | `/en/contact/` | `/de/kontakt/` |

## Everyday edits

| To change | Edit |
| --- | --- |
| Phone, email, address, hours, map position, form endpoint | `src/data/firm.ts` |
| Tax rates, thresholds, deadlines (check every January) | `src/data/tax.ts`, plus the matching tables in `src/i18n/content/*.ts` under `guide` |
| Any text | `src/i18n/content/sq.ts`, `en.ts`, `de.ts` (same structure in all three) |
| "Last updated" date (footer, sitemap, guide) | `updated` in `src/data/firm.ts` |

The sitemap, `robots.txt`, `llms.txt`, `llms-full.txt` and all structured data (schema.org) are generated from those files, so they never drift from the page content.

## Commands

```bash
pnpm install        # once
pnpm dev            # local preview at http://localhost:4321
pnpm build          # production build into dist/
pnpm check          # type check
pnpm brand          # rebuild logo variants and icons from scripts/source/logo-source.jpg
pnpm og             # rebuild public/og.png (the link-preview image)
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository (branch `main`).
2. In the repository, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Every push to `main` deploys automatically (`.github/workflows/deploy.yml`). The site also rebuilds every Monday, so the pre-rendered tax-deadline coupons stay current for search engines.
4. Custom domain: `public/CNAME` contains `rafunaconsulting.com`. Point the domain's DNS at GitHub Pages and tick **Enforce HTTPS**.

## After launch (SEO)

- Submit `https://rafunaconsulting.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools. Bing also feeds ChatGPT and Copilot.
- Make sure the Google Business Profile shows exactly the same name, address, phone and hours (Mon–Fri 08:00–16:00) as `src/data/firm.ts`.
- Claim Bing Places and Apple Business Connect with the same details.

## Design

`DESIGN.md` documents the visual system ("The Engraved Note"); `PRODUCT.md` holds the product facts. Read both before adding pages.
