import * as z from 'zod';
import { ExternalUrlsSchema, ImageWithDimensionsSchema } from '@/lib/schemas';

/**
 * Current User Profile Schema
 * Response from GET /me endpoint
 */
export const CurrentUserProfile = z.object({
  country: z.string(),
  display_name: z.string(),
  email: z.string(),
  explicit_content: z.object({
    filter_enabled: z.boolean(),
    filter_locked: z.boolean(),
  }),
  external_urls: ExternalUrlsSchema,
  followers: z.object({
    href: z.string().nullable(),
    total: z.number(),
  }),
  href: z.string(),
  id: z.string(),
  images: z.array(ImageWithDimensionsSchema),
  product: z.string(),
  type: z.string(),
  uri: z.string(),
});
