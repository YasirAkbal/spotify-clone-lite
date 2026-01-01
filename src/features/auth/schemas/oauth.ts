import { z } from 'zod';

/**
 * Spotify OAuth API Response Schemas
 * Used for real Spotify API authentication
 */

export const SpotifyTokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  scope: z.string(),
  expires_in: z.number(),
  refresh_token: z.string(),
});
