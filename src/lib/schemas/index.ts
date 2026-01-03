/**
 * Common Schemas
 * Reusable Zod schema building blocks
 */

export {
  // External URLs
  ExternalUrlsSchema,
  // Images
  ImageSchema,
  ImageWithDimensionsSchema,
  // Pagination factory
  createPagingSchema,
  // User references
  UserRefSchema,
  UserWithDisplayNameSchema,
  // Restrictions
  RestrictionsSchema,
} from './common';
