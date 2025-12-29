/**
 * Spotify API Types
 * Types for Spotify API responses, derived from Zod schemas
 */

import type { z } from 'zod';
import { SpotifyTokenResponseSchema } from '../../features/auth/schemas';

export type SpotifyTokenResponse = z.infer<typeof SpotifyTokenResponseSchema>;
