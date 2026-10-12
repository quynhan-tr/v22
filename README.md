# An Tran — a personal notebook

A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. The design pairs warm ivory paper, blue ink, Cormorant Garamond typography, and a custom portrait sketch.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize

- `src/content/portfolio.ts`: contact details, introduction, interests, and sample projects.
- `src/app/page.tsx`: page sections and copy.
- `src/app/globals.css`: colors, spacing, and responsive layouts.
- `public/images/portrait-proportions-v14.png`: final portrait drawing. Its ink is #285694; the page uses an SVG alpha mask colored by the same `--ink` variable as the headings, with a stroke-thinning filter to match the other illustrations.
- `docs/image-generation.md`: final portrait prompt and provenance.

The three project entries are illustrative placeholders. Their previews are clearly labeled as sample projects. Replace them with real work when ready. Navigation, email, project dialogs, and back-to-top links are connected.

## Verify

```bash
npx tsc --noEmit
npm run build
```
