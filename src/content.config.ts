import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const item = z.object({ title: z.string(), text: z.string() });

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/case-studies' }),
  schema: z.object({
    order: z.number(),
    code: z.string(),
    category: z.string(),
    status: z.string(),
    title: z.string(),
    summary: z.string(),
    card: z.object({ problem: z.string(), action: z.string(), result: z.string() }),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    problem: z.object({ heading: z.string(), lead: z.string(), points: z.array(item) }),
    steps: z.object({ label: z.string(), heading: z.string(), items: z.array(item) }),
    decisions: z.object({ heading: z.string(), items: z.array(item) }),
    extra: z
      .object({ label: z.string(), heading: z.string(), intro: z.string(), items: z.array(item) })
      .optional(),
    result: z.object({ heading: z.string(), items: z.array(item) }),
    spec: z
      .object({
        label: z.string(),
        heading: z.string(),
        intro: z.string(),
        numbers: z.array(z.object({ value: z.string(), label: z.string() })),
      })
      .optional(),
    lessons: z.object({ label: z.string(), heading: z.string(), items: z.array(item) }).optional(),
  }),
});

export const collections = { 'case-studies': caseStudies };
