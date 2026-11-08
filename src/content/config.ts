import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Subhan Fadz Kamil Singandaru"),
    category: z.enum([
      'Software Engineering',
      'Frontend Engineering',
      'Backend Architecture',
      'DevOps & Infrastructure',
      'AI Engineering',
      'Machine Learning',
      'Engineering Notes'
    ]),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().default("5 min read"),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
