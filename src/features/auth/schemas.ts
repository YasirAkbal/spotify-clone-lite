import * as z from 'zod';

/**
 * Spotify OAuth Token Response Schema
 * Response from https://accounts.spotify.com/api/token
 */
export const SpotifyTokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  scope: z.string(),
  expires_in: z.number(),
  refresh_token: z.string(),
});

/**
 * Fake Auth User Schema (for mock authentication)
 */
export const FakeAuthUserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().optional(),
  avatar: z.string().url().optional(),
});

/**
 * Fake Auth Login Response Schema
 */
export const FakeAuthLoginResponseSchema = z.object({
  user: FakeAuthUserSchema,
  token: z.string(),
});
