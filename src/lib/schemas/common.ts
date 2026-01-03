import { z } from 'zod';
import type {
  ExternalUrls,
  SpotifyImage,
  SpotifyImageWithDimensions,
  PagingObject,
  UserRef,
  UserWithDisplayName,
  Restrictions,
} from '@/types/api/common';

/**
 * Common Zod Schemas
 * Reusable schema building blocks used across features
 */

export const ExternalUrlsSchema = z.object({
  spotify: z.url(),
}) satisfies z.ZodSchema<ExternalUrls>;

export const ImageSchema = z.object({
  url: z.url(),
  height: z.number().int().optional(),
  width: z.number().int().optional(),
}) satisfies z.ZodSchema<SpotifyImage>;

export const ImageWithDimensionsSchema =
  ImageSchema.required() satisfies z.ZodSchema<SpotifyImageWithDimensions>;

export const createPagingSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    href: z.url(),
    limit: z.number().int(),
    next: z.url().nullable(),
    offset: z.number().int(),
    previous: z.url().nullable(),
    total: z.number().int(),
    items: z.array(itemSchema),
  }) satisfies z.ZodSchema<PagingObject<z.infer<T>>>;

export const UserRefSchema = z.object({
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  type: z.literal('user'),
  uri: z.string(),
}) satisfies z.ZodSchema<UserRef>;

export const UserWithDisplayNameSchema = UserRefSchema.extend({
  display_name: z.string(),
}) satisfies z.ZodSchema<UserWithDisplayName>;

export const RestrictionsSchema = z.object({
  reason: z.string(),
}) satisfies z.ZodSchema<Restrictions>;
