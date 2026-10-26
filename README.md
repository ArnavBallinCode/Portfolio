# Arnav Angarkar – Portfolio

Personal site: portfolio, blog, and my GSoC 2026 journey with FOSSASIA.

**Live:** [angarkar.tech](https://angarkar.tech) (Netlify) and [arnavballincode.github.io](https://arnavballincode.github.io) (GitHub Pages)

## Stack

- Next.js (static export) + Tailwind CSS
- `Portfolio` deploys to Netlify from `main` using `netlify.toml`.
- `ArnavBallinCode.github.io` deploys to GitHub Pages from `main` using `.github/workflows/deploy.yml`.
- Keep `angarkar.tech` DNS pointing to Netlify during the transition. No Pages CNAME: both addresses stay independently accessible.
- Push the same tested commit to both repositories; do not force-push or overwrite the separate GitHub profile repository.

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

## Publish to both hosts

The `origin` remote is `ArnavBallinCode/Portfolio`; the `pages` remote is
`ArnavBallinCode/ArnavBallinCode.github.io`. After integrating remote changes and
running `pnpm build`:

```bash
git push origin HEAD:main
git push pages HEAD:main
```

The canonical URL remains `https://angarkar.tech` so existing résumé links
and search metadata stay consistent. GitHub Pages refreshes contribution data
weekly; Netlify uses the committed snapshot.

## License

MIT – see [LICENSE](./LICENSE) for details.

## GSoC final-report draft

- Narrative: `content/reports/gsoc-2026.md`.
- Page: `app/gsoc/final-report/page.tsx` at the stable `/gsoc/final-report/` URL.
- Frozen statistics: `app/data/gsoc-report.json`; public CSV/JSON evidence: `public/reports/gsoc-2026/`.
- Research, inspected patches, official-project snapshot and editorial checklist: `research/gsoc-2026/`.

The report stays a dated working draft until scope, outstanding work, upstream
revisions, and validation are finalized with mentors. The weekly portfolio
stats refresh does not change this report's evidence snapshot.

To intentionally refresh its GitHub evidence using an authenticated `gh` CLI:

```bash
python3 scripts/audit-gsoc.py
python3 scripts/audit-gsoc.py --start 2025-10-27T00:00:00Z --output research/gsoc-2026/year-audit
python3 scripts/compile-gsoc-evidence.py
pnpm build
```

The contribution API requires windows of at most one year; choose an appropriate
broader window when refreshing later. Review narrative dates, current PR states,
selected-PR evidence, and remaining work before publishing a new snapshot. The
audit fails on incomplete searches or unhandled review pagination.
