# Arnav Angarkar – Portfolio

Personal site: portfolio, blog, and my GSoC 2026 journey with FOSSASIA.

**Live:** [angarkar.is-a.dev](https://angarkar.is-a.dev)

## Stack

- Next.js (static export) + Tailwind CSS
- Hosted on GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`

## Editing content

| What | Where |
|------|-------|
| Experience, talks, awards, research, skills | `app/data/profile.ts` |
| Projects | `app/data/projects.ts` |
| Blog posts | `content/blog/*.md` (front matter: `title`, `date`, `summary`, optional `series: GSoC 2026`) |
| GSoC pages | `app/data/gsoc.ts`, `app/gsoc/**` |
| GSoC final report | `app/gsoc/final-report/page.tsx` |
| Gallery photos | `public/gallery/{thumbs,full}/<place>/` + `app/data/gallery.json` |
| FOSSASIA PR stats | refreshed by `pnpm generate:github` (and weekly in CI) |

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # static site in ./out
```

## License

MIT – see [LICENSE](./LICENSE) for details.
