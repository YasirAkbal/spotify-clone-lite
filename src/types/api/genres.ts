/**
 * Genre/Category API Types
 */

import type { GenreSchema, GenresResponseSchema } from '@/features/search/schemas';
import type z from 'zod';

export type Genre = z.infer<typeof GenreSchema>;
export type GenresResponse = z.infer<typeof GenresResponseSchema>;
