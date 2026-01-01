/**
 * Auth Schemas - Central export point
 *
 * Structure:
 * - validation.ts: Reusable field validators (email, password, username, etc.)
 * - oauth.ts: Spotify OAuth schemas
 * - mockAuth.ts: Mock auth schemas for development/testing
 *
 * Types are exported from @/types/api/auth
 */

// Validation schemas (reusable across features)
export {
  emailSchema,
  passwordSchema,
  usernameSchema,
  nameSchema,
  birthDateSchema,
} from './validation';

// OAuth schemas (real Spotify API)
export { SpotifyTokenResponseSchema } from './oauth';

// Mock auth schemas (development/testing with MSW)
export {
  MockUserBaseSchema,
  MockCurrentUserSchema,
  MockRegisterFormSchema,
  MockLoginFormSchema,
  MockAuthResponseSchema,
} from './mockAuth';
