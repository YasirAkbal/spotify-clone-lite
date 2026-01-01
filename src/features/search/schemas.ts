import { z } from 'zod';

export const GenreSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  image: z.object({
    url: z.string().url(),
    alt: z.string(),
  }),
});

export const GenresResponseSchema = z.object({
  genres: z.array(GenreSchema),
  total: z.number(),
});

export type Genre = z.infer<typeof GenreSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;
