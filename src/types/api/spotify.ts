/**
 * Spotify API Types
 * Types for Spotify API responses, derived from Zod schemas
 */

import type { z } from 'zod';
import { CurrentUserProfile } from '../../features/user/schemas';
import { SpotifyTokenResponseSchema } from '../../features/auth/schemas';

export type CurrentUserProfileType = z.infer<typeof CurrentUserProfile>;
export type SpotifyTokenResponse = z.infer<typeof SpotifyTokenResponseSchema>;

export type SpotifyImage = {
  url: string;
  height: number;
  width: number;
};

export type ExplicitContent = {
  filter_enabled: boolean;
  filter_locked: boolean;
};

export type ExternalUrls = {
  spotify: string;
};

export type Followers = {
  href: string | null;
  total: number;
};
