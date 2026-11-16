# Notes for Claude Code

This is Manfred Olbrich's personal site. He is not a software engineer: explain changes in plain words, keep them small, and show a preview before publishing.

## Content rules (important)

Manfred is bound by confidentiality and non-disparagement terms with his former company. When writing or editing content:

- Never name investors, former colleagues, vendors or agencies.
- Never describe disputes, funding problems, debts, redundancies or why anyone left.
- Never publish internal documents, prices, pay rates, margins or plan names. Describe how he worked, not the documents.
- The company's ending is one neutral sentence: he handed over in September 2026 and it continues as Alucea.
- Do not invent figures or results. If a number is missing, ask him.

## Writing style

Plain, short sentences in British English. First person. No jargon a parent or recruiter would not know. Each case study follows the same shape: problem, how it works, decisions, result.

## Structure

- Home page text: `src/data/site.json`
- Case studies: `src/content/case-studies/*.md` (all content is in the frontmatter; the schema is in `src/content.config.ts`)
- Styles: `src/styles/global.css` (design tokens are CSS variables at the top)
- `"live": false` in `site.json` keeps the site out of search engines. Do not change it unless he asks.

## Commands

- `npm run dev` to preview
- `npm run build` to check the site builds before any push
