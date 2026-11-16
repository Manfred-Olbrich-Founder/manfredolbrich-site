# manfredolbrich.com

Manfred Olbrich's founder site: a home page and four case studies. Built with [Astro](https://astro.build).

## Where things are

| To change | Edit this file |
|---|---|
| Home page text (headline, facts, journey, breadth, lessons, contact) | `src/data/site.json` |
| A case study | `src/content/case-studies/<name>.md` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Portrait photo | `public/portrait.jpg` |
| Home page layout | `src/pages/index.astro` |
| Case study layout | `src/pages/case-studies/[slug].astro` |

To add a case study, copy one of the files in `src/content/case-studies/`, rename it and change the text. It appears on the home page automatically, in the order set by `order`.

## Run it on your computer

```
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:4321).

## Publish

Every push to the `main` branch is published automatically by the host.

- Build command: `npm run build`
- Output folder: `dist`

## Going live

While `"live": false` in `src/data/site.json`, every page asks search engines not to list it. Set it to `true` when you are ready for the site to be found.

## Adding the CV

Put the PDF in `public/` (for example `public/manfred-olbrich-cv.pdf`) and set `"cv": "/manfred-olbrich-cv.pdf"` in `src/data/site.json`. Until then the CV buttons open an email asking for it.
