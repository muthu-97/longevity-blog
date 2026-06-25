import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Muthu'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    evidence: z.enum(['solid', 'promising', 'hype']).optional(),
    readingTime: z.string().optional(),
    // series + brain-map wiring
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    seriesTotal: z.number().optional(),
    prev: z.string().optional(),      // slug of previous post in series
    prevTitle: z.string().optional(),
    next: z.string().optional(),      // slug of next post in series
    nextTitle: z.string().optional(),
    hallmark: z.string().optional(),  // e.g. "#8 Mitochondrial dysfunction · Tier 2"
  }),
});

export const collections = { posts };
