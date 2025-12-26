/**
 * Spotify API Types
 * Types for Spotify API responses, derived from Zod schemas
 */

import type { z } from 'zod';
import { CurrentUserProfile } from '../../features/user/schemas';
import { SpotifyTokenResponseSchema } from '../../features/auth/schemas';

export type CurrentUserProfileType = z.infer<typeof CurrentUserProfile>;
export type SpotifyTokenResponse = z.infer<typeof SpotifyTokenResponseSchema>;
