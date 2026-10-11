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
- `public/images/portrait-line-sketch.png`: the generated portrait, based on the supplied photograph.
- `docs/image-generation.md`: final portrait prompt and provenance.

The three project entries are illustrative placeholders. Their previews are clearly labeled as sample projects. Replace them with real work when ready. Navigation, email, project dialogs, and back-to-top links are connected.

## Verify

```bash
npx tsc --noEmit
npm run build
```
