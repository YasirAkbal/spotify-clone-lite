import { z } from 'zod';

/**
 * Common Zod Schemas
 * Reusable schema building blocks used across features
 */

export const ExternalUrlsSchema = z.object({
  spotify: z.url(),
});

export type ExternalUrls = z.infer<typeof ExternalUrlsSchema>;

export const ImageSchema = z.object({
  url: z.url(),
  height: z.number().int().optional(),
  width: z.number().int().optional(),
});

export type SpotifyImage = z.infer<typeof ImageSchema>;

export const ImageWithDimensionsSchema = ImageSchema.required();

export type SpotifyImageWithDimensions = z.infer<typeof ImageWithDimensionsSchema>;

export const createPagingSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    href: z.url(),
    limit: z.number().int(),
    next: z.url().nullable(),
    offset: z.number().int(),
    previous: z.url().nullable(),
    total: z.number().int(),
    items: z.array(itemSchema),
  });

export type PagingObject<T> = {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
};

export const UserRefSchema = z.object({
  external_urls: ExternalUrlsSchema,
  href: z.url(),
  id: z.string(),
  type: z.literal('user'),
  uri: z.string(),
});

export type UserRef = z.infer<typeof UserRefSchema>;

export const UserWithDisplayNameSchema = UserRefSchema.extend({
  display_name: z.string(),
});

export type UserWithDisplayName = z.infer<typeof UserWithDisplayNameSchema>;

export const RestrictionsSchema = z.object({
  reason: z.string(),
});

export type Restrictions = z.infer<typeof RestrictionsSchema>;
