/**
 * Common Schemas
 * Reusable Zod schema building blocks
 */

export {
  // External URLs
  ExternalUrlsSchema,
  type ExternalUrls,
  // Images
  ImageSchema,
  ImageWithDimensionsSchema,
  type SpotifyImage,
  type SpotifyImageWithDimensions,
  // Pagination factory
  createPagingSchema,
  type PagingObject,
  // User references
  UserRefSchema,
  UserWithDisplayNameSchema,
  type UserRef,
  type UserWithDisplayName,
  // Restrictions
  RestrictionsSchema,
  type Restrictions,
} from './common';
